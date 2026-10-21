// Blog posts. Content is an array of blocks:
//   "## Heading"  → section heading
//   "- item"      → bullet (consecutive bullets are grouped)
//   "> quote"     → pull quote
//   anything else → paragraph

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "rolling-out-ai-coding-agents-to-30000-engineers",
    title: "Rolling Out AI Coding Agents to 30,000 Engineers: The Control Plane Nobody Talks About",
    excerpt:
      "Getting Claude Code or Codex onto one laptop takes five minutes. Getting it onto thirty thousand, inside a bank, is a platform problem. Here's the control plane that made it possible.",
    date: "2026-10-20",
    readTime: "8 min read",
    tags: ["AI coding agents", "Governance", "Platform"],
    content: [
      "Every enterprise conversation about AI coding agents starts with the same question: which tool? Claude Code, Codex, Cursor, Windsurf. It's the least important decision you'll make. Over three years at Capital One we ran most of them — some in production, some as proofs of concept — and reached 30,000+ users across Claude Code and Cowork alone. The tool mattered far less than the layer we built around it.",
      "## The tool is the easy part",
      "An AI coding agent is, functionally, a very capable new employee with shell access, a model endpoint and no context about your company. Rolling one out safely means answering the same questions you'd ask about any privileged system: who can use it, what can it reach, what does it send where, how much does it cost, and how would you know if something went wrong?",
      "## The five layers of the control plane",
      "- Access: SSO, role-based access and an enterprise gateway in front of every model call. We integrated through AWS Bedrock and an API gateway so that no tool talked to a model provider directly.",
      "- Budgets: per-user, per-minute token limits. Without them, one runaway agent loop can burn a team's monthly budget before lunch.",
      "- Configuration as code: centrally managed settings, a standard project memory file (CLAUDE.md), hooks and an MCP allow-list. Guardrails have to travel with the tool, not live in a wiki.",
      "- Data controls: guardrails tuned to your data classification, so sensitive data never leaves where it should stay.",
      "- Telemetry: OpenTelemetry for both cyber logging and developer-productivity metrics. If you can't answer \"what did the agents do yesterday?\", you're not ready to scale.",
      "## Treat Risk and Cyber as co-designers",
      "The single most useful thing we did was bring Risk, Cyber, the technology controls team and the Model Risk Office in at design time rather than review time. When the control plane is something they helped shape, approval stops being a gate and becomes a pattern they can reuse for the next tool.",
      "> If your security team first hears about the rollout in a review meeting, you've already lost six weeks.",
      "## Release cadence is a feature",
      "Models now ship every few weeks. Engineers notice immediately when they're stuck on last quarter's model. We built change management and testing specifically for model launches so a new version could be validated and rolled out in days. That speed did more for adoption than any internal marketing campaign.",
      "## Cost is a design constraint, not an afterthought",
      "Token spend scales with usage, and successful adoption means more usage. Prompt caching, a model router that sends simple tasks to cheaper models, and tuning effort levels per use case kept unit costs predictable as adoption grew.",
      "## What I'd tell a CTO starting today",
      "- Pick a gateway pattern before you pick a tool. It makes tools swappable.",
      "- Ship configuration centrally from day one; retrofitting is painful.",
      "- Measure adoption and outcomes separately — seats are not impact.",
      "- Run a champions programme. Peer examples beat training decks.",
      "- Budget for model churn. Your rollout is never \"done\".",
      "If you're planning a rollout of AI coding agents and want a second pair of eyes on the architecture, that's exactly the kind of work I do now.",
    ],
  },
  {
    slug: "ai-code-review-under-4-dollars-a-pr",
    title: "Under $4 a PR: Designing an AI Code Reviewer Engineers Actually Trust",
    excerpt:
      "Most AI review bots get muted within a month. Ours ran across 50,000+ repositories and 350K+ PRs a month. The difference was standards, determinism and evals — not a bigger model.",
    date: "2026-10-08",
    readTime: "7 min read",
    tags: ["Agentic AI", "Code review", "Evals"],
    content: [
      "AI code review has a trust problem. The first week, engineers are curious. By the third week, the bot has flagged forty things nobody cares about, invented two bugs that don't exist and missed the one that did. It gets muted. We built an enterprise code-review platform that went the other way — scaling across 50,000+ repositories and 350K+ pull requests a month at under $4 median cost per PR. Here's what mattered.",
      "## Review against your standards, not the internet's",
      "A general-purpose model reviews code the way a stranger would: lots of opinions, none of them yours. We curated internal engineering standards and made every finding map to a specific rule. If a comment can't cite a rule, it doesn't get posted. That one constraint did more for signal-to-noise than any prompt tweak.",
      "## Wrap the model in determinism",
      "We used deterministic methods around the model to keep hallucinations out: verifying that referenced lines and symbols exist, deduplicating findings, and checking claims against the actual diff. The model proposes; deterministic code disposes.",
      "## Make everything swappable",
      "- The harness, the model, the rules and the agents were all independently swappable.",
      "- Rules could be scoped by language, org, repository and use case.",
      "- A self-service pipeline let teams test new rules against historical PRs before turning them on.",
      "Modularity is what let us ride every model upgrade without a rewrite.",
      "## Gate every change on evals",
      "We tracked offline evals for accuracy, false-positive rate and dissatisfaction rate, and nothing shipped if it regressed them. In production we closed the loop with inline feedback on comments. False-positive rate is the metric that predicts whether engineers keep listening.",
      "> Precision beats recall in code review. One wrong comment costs more trust than ten missed nitpicks earn.",
      "## Cost and speed are product features",
      "A multi-model approach sent cheap work to cheap models and saved the expensive reasoning for the hard parts. Serverless infrastructure with distroless images kept the footprint small and patching easy, and a roughly ten-minute SLA to first review meant feedback landed while the author still had context.",
      "## Beyond review",
      "Once the headless agent harness existed, it became a platform: test-case generation, documentation refresh, gap analysis and change-impact analysis all reused the same plumbing. Build the platform once; ship use cases forever.",
    ],
  },
  {
    slug: "agentic-rag-that-knows-when-not-to-answer",
    title: "Agentic RAG That Knows When Not to Answer",
    excerpt:
      "The most valuable thing an enterprise assistant can say is \"I don't know — here's who does.\" Lessons from building DeX across 70+ platforms.",
    date: "2026-09-24",
    readTime: "7 min read",
    tags: ["RAG", "Agents", "Knowledge platforms"],
    content: [
      "DeX started with a familiar problem: platform teams answering the same questions in Slack over and over. The answers existed, scattered across product docs and years of threads. We built an agentic RAG assistant over all of it, and it grew to 70+ platforms, resolving 80% of repeated queries. The interesting lesson wasn't how it answered. It was how it learned to decline.",
      "## Retrieval quality is the ceiling",
      "No model can answer from context it never received. We invested heavily in ingestion: chunking that respected document structure, metadata for freshness and ownership, bge-m3 embeddings with a reranker, and coverage reports that showed which themes the knowledge base simply didn't cover.",
      "## The agentic loop",
      "- Query rewriting turned vague Slack questions into retrievable ones.",
      "- An answerability check asked: can the retrieved sources actually support an answer?",
      "- A critique step reviewed the draft against the sources before anything was posted.",
      "- A summary step kept answers short enough to be read in a thread.",
      "When answerability failed, DeX said so and routed to a human — with the relevant context attached so the human started ahead.",
      "> A confident wrong answer in an internal tool costs you every right answer that comes after it.",
      "## Roll out in the shadows",
      "We launched in shadow mode: DeX drafted answers privately while humans kept answering publicly. Only when confidence and accuracy were proven per channel did we push answers to the main thread. Shadow mode gave us real evaluation data without spending user trust.",
      "## Measure obsessively",
      "We tracked thousands of metrics, but a handful mattered most: coverage, accuracy, LLM-scored answer quality, ingestion freshness, dissatisfaction rate, and time to acknowledge and resolve. Voice-of-customer themes from feedback told us which docs to write next — and DeX started generating documentation from resolved threads itself.",
      "## The takeaway",
      "Enterprise RAG succeeds or fails on operations: ingestion pipelines, evals, rollout discipline and honest uncertainty. Get those right and the model choice becomes a cost decision, not an existential one.",
    ],
  },
  {
    slug: "your-mcp-servers-are-your-new-supply-chain",
    title: "Your MCP Servers Are Your New Software Supply Chain",
    excerpt:
      "Every tool an agent can call is a dependency with execution rights. Treat MCP like npm in 2016 — before an incident makes you.",
    date: "2026-09-10",
    readTime: "6 min read",
    tags: ["Security", "MCP", "Governance"],
    content: [
      "The Model Context Protocol made it trivially easy to give agents tools. That's the point — and the problem. An MCP server is code that runs with your agent's permissions, and its tool descriptions are read by the model as instructions. If that sounds like a supply-chain risk, it is.",
      "## Why this is different from ordinary dependencies",
      "- Tool descriptions are part of the prompt. A poisoned description can steer an agent without any malicious code at all.",
      "- Agents chain tools. The blast radius of one compromised server includes everything the agent can reach.",
      "- Developers add servers casually, often from community registries, with no review step.",
      "## What we did",
      "When we rolled out AI coding agents, MCP configuration was centrally managed alongside the rest of the tool settings — an allow-list, not a free-for-all. We also worked with Cyber to enable logging and attribution headers on MCP tool use, so every agent action could be audited and traced back to a user and session. Those logs fed sample detection patterns that Cyber turned into live SOC alerts.",
      "> If you can't attribute an agent's action to a human and a session, you can't investigate it.",
      "## A minimum viable MCP policy",
      "- Maintain an allow-list of approved servers, pinned to versions.",
      "- Review tool descriptions as carefully as code — they are code, for the model.",
      "- Scope credentials per server; never hand an agent your full token.",
      "- Log every tool invocation with user, session and arguments.",
      "- Feed those logs to your SIEM and write detections before you need them.",
      "- Rehearse an AI incident at least once a year.",
      "None of this is exotic. It's the software supply-chain discipline we already know, applied to a surface most organisations haven't inventoried yet.",
    ],
  },
  {
    slug: "cloud-finops-lessons-for-llm-token-costs",
    title: "$1.8M a Month: What Cloud FinOps Taught Me About LLM Token Costs",
    excerpt:
      "LLM spend is the new cloud bill, and it's growing faster. The playbook that cut $1.8M a month at Paytm maps almost one-to-one onto token economics.",
    date: "2026-08-27",
    readTime: "6 min read",
    tags: ["FinOps", "LLM cost", "Platform"],
    content: [
      "At Paytm, my team took more than $1.8M a month out of a 55PB data platform. None of it came from a single clever trick. It came from a handful of unglamorous patterns applied relentlessly. Years later, running enterprise GenAI, I kept seeing the same patterns — just measured in tokens instead of instance-hours.",
      "## Pattern 1: Right-size the compute",
      "Moving EMR fleets to AWS Graviton cut that compute to roughly a third of the price for the same work. The LLM equivalent is model routing: most requests don't need your most capable model. Route simple classification, extraction and summarisation to smaller models and save the frontier model for real reasoning.",
      "## Pattern 2: Don't run what you're not using",
      "We replaced always-on clusters with transient, event-driven ones. In LLM terms: tune effort and thinking budgets per use case, cap agent loop lengths and kill idle sessions. Default-to-max is the always-on cluster of the AI era.",
      "## Pattern 3: Stop paying to move the same data",
      "Replicating clusters per region removed inter-region transfer costs entirely. The token analogue is prompt caching. Large, stable system prompts and project context should be cached, not resent and repaid on every turn.",
      "## Pattern 4: Make cost visible to the people who create it",
      "- Per-user and per-team token budgets with sensible limits.",
      "- Showback dashboards next to productivity metrics, not in a finance spreadsheet.",
      "- Proactive alerts on anomalies, before the invoice arrives.",
      "> Cost governance works when engineers see the bill as part of the feedback loop, not as a quarterly surprise.",
      "## The bottom line",
      "Successful AI adoption means more usage, which means more spend. Teams that build cost controls into the platform from day one can keep saying yes to new use cases. Teams that don't end up rationing access — which is the fastest way to kill adoption.",
    ],
  },
];
