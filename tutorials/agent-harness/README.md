# Agent Harness: a small, test-driven coding-agent demo

This repository accompanies the first **Agentic Systems Fieldbook** video.

> **Disclosure:** `offline_demo.py` is a deterministic scripted simulation. It does not call an LLM. The separate `harness.py` is an optional live, API-backed example.

## What it demonstrates

- A narrow task contract and one writable source file.
- Explicit tool allow-listing and application-side dispatch.
- JSON argument parsing and schema-like validation in the dispatcher.
- A fixed acceptance-test runner the agent cannot edit through its tools.
- Bounded model turns and a subprocess timeout.
- Independent verification: success is reported only when the fixed tests pass.
- A trace of tool calls and verification outcomes.

## Run the deterministic walkthrough

Requires Python 3.10+ and no API credentials:

```bash
python offline_demo.py
```

The six fixed tests should show this progression:

1. Starter implementation: **5 failures, 1 pass**.
2. Incomplete arithmetic-only fix: **2 failures, 4 passes**.
3. Complete fix with input validation: **6 passes**.

The test suite is deliberately not writable through the demo tools. It defines the task contract.

## Run the live model-backed version

The live version requires an OpenAI API key and a model available to your API project. ChatGPT subscriptions do not include API credit.

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env with OPENAI_API_KEY and OPENAI_MODEL.
set -a && source .env && set +a
python harness.py
```

Keep `.env` out of version control and never show it in a screen recording.

## Safety limitations

This is a teaching example, **not a hardened sandbox**. Path checks, tool allow-lists, turn limits, and test timeouts are useful application controls, but do not make arbitrary code safe to execute on a production host.

For untrusted code, use a disposable VM or container with CPU, memory and time limits; restricted network egress; a read-only base image; explicit writable mounts; no ambient credentials; and human approval for consequential external side effects.

## Video

Channel: https://www.youtube.com/channel/UCALwhO0sR7A1GKdSuWlSgeg

The first video is being prepared. This repository is public source material for the walkthrough; it does not imply the video is already published.
