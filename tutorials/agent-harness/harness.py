"""Bounded teaching harness: live model proposes, application validates and executes.

This is not a hardened sandbox. Never run untrusted generated code on a
production host. Use an isolated VM/container for real code execution.
"""
from __future__ import annotations

import json
import os
import subprocess
import sys
import time
from pathlib import Path
from typing import Any

from openai import OpenAI

ROOT = Path(__file__).resolve().parent
ALLOWED_SOURCE = (ROOT / "src" / "discounts.py").resolve()
TEST_RUNNER = (ROOT / "tests" / "run_tests.py").resolve()
MAX_TURNS = 8
MAX_TEST_SECONDS = 8
MAX_SOURCE_BYTES = 20_000

TOOLS = [
    {
        "type": "function",
        "name": "read_source",
        "description": "Read the one allowed source file.",
        "parameters": {
            "type": "object",
            "properties": {"path": {"type": "string", "enum": ["src/discounts.py"]}},
            "required": ["path"],
            "additionalProperties": False,
        },
        "strict": True,
    },
    {
        "type": "function",
        "name": "write_source",
        "description": "Replace src/discounts.py only. Tests are not writable.",
        "parameters": {
            "type": "object",
            "properties": {
                "path": {"type": "string", "enum": ["src/discounts.py"]},
                "content": {"type": "string"},
            },
            "required": ["path", "content"],
            "additionalProperties": False,
        },
        "strict": True,
    },
    {
        "type": "function",
        "name": "run_acceptance_tests",
        "description": "Run the fixed acceptance tests; cannot edit them.",
        "parameters": {"type": "object", "properties": {}, "required": [],
                       "additionalProperties": False},
        "strict": True,
    },
]


def resolve_allowed_path(relative_path: str) -> Path:
    candidate = (ROOT / relative_path).resolve()
    if candidate != ALLOWED_SOURCE:
        raise ValueError("Path is outside the allowed write/read surface.")
    return candidate


def run_acceptance_tests() -> dict[str, Any]:
    start = time.monotonic()
    try:
        proc = subprocess.run(
            [sys.executable, "-I", str(TEST_RUNNER)],
            cwd=ROOT,
            capture_output=True,
            text=True,
            timeout=MAX_TEST_SECONDS,
            check=False,
            env={"PYTHONIOENCODING": "utf-8"},
        )
        return {
            "passed": proc.returncode == 0,
            "exit_code": proc.returncode,
            "stdout": proc.stdout[-8000:],
            "stderr": proc.stderr[-4000:],
            "duration_seconds": round(time.monotonic() - start, 2),
        }
    except subprocess.TimeoutExpired:
        return {"passed": False, "exit_code": None, "stdout": "",
                "stderr": f"Tests exceeded {MAX_TEST_SECONDS} seconds.",
                "duration_seconds": round(time.monotonic() - start, 2)}


def dispatch_tool(name: str, raw_arguments: str) -> dict[str, Any]:
    """Validate the tool name and JSON arguments before any function runs."""
    try:
        if name not in {"read_source", "write_source", "run_acceptance_tests"}:
            return {"ok": False, "error": f"Tool not allow-listed: {name}"}
        args = json.loads(raw_arguments)
        if not isinstance(args, dict):
            raise ValueError("Tool arguments must be a JSON object.")

        if name == "run_acceptance_tests":
            if args:
                raise ValueError("run_acceptance_tests takes no arguments.")
            return {"ok": True, **run_acceptance_tests()}

        if set(args) - ({"path"} if name == "read_source" else {"path", "content"}):
            raise ValueError("Unexpected tool argument.")
        if args.get("path") != "src/discounts.py":
            raise ValueError("Path is not in the allowed file list.")

        target = resolve_allowed_path(args["path"])
        if name == "read_source":
            if set(args) != {"path"}:
                raise ValueError("read_source requires exactly the path argument.")
            return {"ok": True, "content": target.read_text(encoding="utf-8")}

        content = args.get("content")
        if not isinstance(content, str) or len(content.encode("utf-8")) > MAX_SOURCE_BYTES:
            raise ValueError("Source must be text no larger than 20 KB.")
        if set(args) != {"path", "content"}:
            raise ValueError("write_source requires path and content.")
        target.write_text(content, encoding="utf-8")
        return {"ok": True, "message": f"Updated {args['path']}."}
    except (KeyError, TypeError, ValueError, json.JSONDecodeError, OSError) as exc:
        return {"ok": False, "error": f"{type(exc).__name__}: {exc}"}


def main() -> int:
    if not os.getenv("OPENAI_API_KEY") or not os.getenv("OPENAI_MODEL"):
        print("Set OPENAI_API_KEY and OPENAI_MODEL. See .env.example.", file=sys.stderr)
        return 2

    task = " ".join(sys.argv[1:]).strip() or (
        "Fix total_after_discount. Reject negative subtotals and discount percentages "
        "outside 0..100. Do not modify the fixed tests or any other file."
    )
    client = OpenAI()
    conversation: list[Any] = [
        {"role": "system", "content": (
            "Inspect the source, make the smallest correct change, and run the fixed tests. "
            "Only use the three exposed tools. Never claim success unless the fixed test "
            "runner reports passed=true. Tests are immutable and are not available to write."
        )},
        {"role": "user", "content": task},
    ]
    trace: list[dict[str, Any]] = []
    verified = False

    for turn in range(1, MAX_TURNS + 1):
        response = client.responses.create(
            model=os.environ["OPENAI_MODEL"],
            input=conversation,
            tools=TOOLS,
            parallel_tool_calls=False,
        )
        conversation.extend(item.model_dump() for item in response.output)
        calls = [item for item in response.output if item.type == "function_call"]
        if not calls:
            print(response.output_text or "No final text.")
            print(json.dumps({"turns": turn, "verified": verified, "trace": trace}, indent=2))
            return 0 if verified else 1

        for call in calls:
            result = dispatch_tool(call.name, call.arguments)
            trace.append({"turn": turn, "tool": call.name,
                          "ok": result.get("ok", False),
                          "passed": result.get("passed")})
            if call.name == "write_source" and result.get("ok"):
                verified = False
            if call.name == "run_acceptance_tests":
                verified = bool(result.get("passed"))
            conversation.append({
                "type": "function_call_output",
                "call_id": call.call_id,
                "output": json.dumps(result),
            })

    print(json.dumps({"stopped": "turn_budget_exhausted", "trace": trace}, indent=2))
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
