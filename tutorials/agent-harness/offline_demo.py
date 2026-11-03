"""Deterministic offline simulation. No LLM or external API is called."""
from __future__ import annotations

import json
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SOURCE = Path("src") / "discounts.py"
TESTS = Path("tests") / "run_tests.py"

PARTIAL_FIX = '''def total_after_discount(subtotal: float, discount_percent: float) -> float:
    """Return the amount due after applying a percentage discount."""
    return round(subtotal * (1 - discount_percent / 100), 2)
'''

COMPLETE_FIX = '''def total_after_discount(subtotal: float, discount_percent: float) -> float:
    """Return the amount due after applying a percentage discount."""
    if subtotal < 0:
        raise ValueError("subtotal must be non-negative")
    if not 0 <= discount_percent <= 100:
        raise ValueError("discount_percent must be between 0 and 100")
    return round(subtotal * (1 - discount_percent / 100), 2)
'''


def run_tests(workspace: Path) -> dict:
    proc = subprocess.run(
        [sys.executable, "-I", str(workspace / TESTS)],
        cwd=workspace,
        capture_output=True,
        text=True,
        timeout=8,
        check=False,
    )
    return {
        "passed": proc.returncode == 0,
        "exit_code": proc.returncode,
        "stdout": proc.stdout,
        "stderr": proc.stderr,
    }


def main() -> int:
    trace = []
    with tempfile.TemporaryDirectory(prefix="agent-harness-") as temp:
        workspace = Path(temp)
        shutil.copytree(ROOT / "src", workspace / "src")
        shutil.copytree(ROOT / "tests", workspace / "tests")
        allowed_source = (workspace / SOURCE).resolve()

        def read_source():
            path = (workspace / SOURCE).resolve()
            if path != allowed_source:
                raise ValueError("Read path outside allow-list")
            return path.read_text(encoding="utf-8")

        def write_source(content: str):
            path = (workspace / SOURCE).resolve()
            if path != allowed_source:
                raise ValueError("Write path outside allow-list")
            if len(content) > 20_000:
                raise ValueError("Source exceeds demo size limit")
            path.write_text(content, encoding="utf-8")

        print("OFFLINE · DETERMINISTIC · SCRIPTED SIMULATION — NOT A LIVE LLM")
        print("\n[0] Baseline: run fixed acceptance tests")
        baseline = run_tests(workspace)
        trace.append({"step": 0, "tool": "run_acceptance_tests",
                      "passed": baseline["passed"], "note": "broken starter"})
        print(baseline["stdout"], baseline["stderr"])
        if baseline["passed"]:
            raise RuntimeError("Broken starter unexpectedly passed.")

        print("\n[1] Read the one permitted source file")
        print(read_source())
        trace.append({"step": 1, "tool": "read_source", "ok": True})

        print("\n[2] Scripted first correction: arithmetic only")
        write_source(PARTIAL_FIX)
        trace.append({"step": 2, "tool": "write_source", "ok": True,
                      "note": "input validation intentionally omitted"})
        partial = run_tests(workspace)
        trace.append({"step": 3, "tool": "run_acceptance_tests",
                      "passed": partial["passed"], "note": "partial correction"})
        print(partial["stdout"], partial["stderr"])
        if partial["passed"]:
            raise RuntimeError("Partial correction unexpectedly passed.")

        print("\n[4] Scripted second correction: add input validation")
        write_source(COMPLETE_FIX)
        trace.append({"step": 4, "tool": "write_source", "ok": True,
                      "note": "complete correction"})
        final = run_tests(workspace)
        trace.append({"step": 5, "tool": "run_acceptance_tests",
                      "passed": final["passed"], "note": "final verification"})
        print(final["stdout"], final["stderr"])

        print("\nTRACE")
        print(json.dumps(trace, indent=2))
        print("\nVERIFICATION:", "PASS" if final["passed"] else "FAIL")
        print("This walkthrough is scripted and deterministic; it is not a live LLM run.")
        return 0 if final["passed"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
