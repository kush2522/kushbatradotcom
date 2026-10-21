// Consulting & training offers. Edit here; pages read from this file.

import { profile } from "./profile";

// ── Booking ────────────────────────────────────────────────────────────────
// Paste your Google Calendar appointment-schedule link here (or set the
// NEXT_PUBLIC_BOOKING_URL env var in Vercel). Google Calendar → Create →
// Appointment schedule → Share → "Booking page" link.
// When set, /contact embeds the booking page and every "Book a call" button
// opens it. When empty, buttons fall back to a pre-filled Google Calendar
// invite addressed to you (works for anyone with a Google account).
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";

export function calendarInviteUrl(topic = "Intro call") {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${topic} — Kush Batra`,
    details:
      "Agenda: your GenAI context, what you're trying to achieve, and whether I can help.\n\nPlease propose a time that works for you; I'll confirm or suggest an alternative.\n\nhttps://kushbatra.com",
    add: profile.email,
    ctz: "Asia/Kolkata",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export const bookingHref = BOOKING_URL || calendarInviteUrl();

// ── Services ───────────────────────────────────────────────────────────────
export type Service = {
  slug: string;
  icon: "code" | "compass" | "layers" | "shield" | "users";
  title: string;
  promise: string;
  forWho: string;
  deliverables: string[];
  duration: string;
  proof: string;
};

export const services: Service[] = [
  {
    slug: "ai-coding-agents",
    icon: "code",
    title: "AI Coding Agents Rollout",
    promise:
      "Roll out Claude Code, Codex, Cursor or Windsurf to hundreds or thousands of engineers — with the controls your CISO and risk team will sign off on.",
    forWho: "CTOs, VPs of Engineering, Developer Experience and Platform leads",
    deliverables: [
      "Tool evaluation & security review against your data classification",
      "Gateway integration (Bedrock, Vertex, Azure or direct API) with SSO and RBAC",
      "Managed settings, CLAUDE.md / AGENTS.md standards, hooks and MCP allow-lists",
      "Per-user token budgets, model routing and caching for cost control",
      "OpenTelemetry telemetry and an adoption & productivity dashboard",
      "Champions programme, enablement content and a release cadence for new models",
    ],
    duration: "6–10 weeks · pilot to org-wide",
    proof: "Scaled to 30,000+ users at a top-10 US bank.",
  },
  {
    slug: "strategy-architecture",
    icon: "compass",
    title: "GenAI Strategy & Architecture Review",
    promise:
      "A clear-eyed read on where GenAI will pay off for you, what to build vs. buy, and the reference architecture to get there without rework.",
    forWho: "CEOs, CTOs, CIOs and Chief AI Officers starting or resetting a GenAI program",
    deliverables: [
      "Readiness assessment across data, platform, security and skills",
      "Prioritised use-case portfolio with value, risk and effort scoring",
      "Reference architecture and build / buy / partner recommendations",
      "Risk & compliance mapping (model risk, DPDP, sector regulators)",
      "90-day roadmap, operating model and success metrics",
      "Architecture Review Board for in-flight GenAI designs",
    ],
    duration: "2–4 weeks · fixed scope",
    proof: "10+ years running Architecture Review Boards.",
  },
  {
    slug: "agentic-rag-platforms",
    icon: "layers",
    title: "Agentic RAG & AI Platform Build",
    promise:
      "Design and ship knowledge assistants, code-review agents and internal AI platforms that hold up in production — not just in the demo.",
    forWho: "Platform, ML and product engineering teams",
    deliverables: [
      "Retrieval design: ingestion, chunking, embeddings, reranking, freshness",
      "Agentic flows with answerability checks, query rewriting and critique",
      "Offline & online evals — accuracy, false-positive and dissatisfaction rates",
      "Guardrails, observability and multi-tenant access control",
      "Shadow-mode rollout plan and human hand-off paths",
      "Hands-on pairing with your engineers so the capability stays in-house",
    ],
    duration: "8–12 weeks · or as a fractional lead",
    proof: "Built DeX (70+ platforms) and an AI code reviewer across 50,000+ repos.",
  },
  {
    slug: "governance-security-cost",
    icon: "shield",
    title: "AI Governance, Security & LLM Cost",
    promise:
      "Make GenAI auditable, secure and affordable — before the regulator, the incident or the invoice forces the issue.",
    forWho: "CISOs, CROs, GRC, FinOps and platform security teams",
    deliverables: [
      "Threat model for LLM apps, agents and MCP tool chains",
      "Cyber logging, attribution headers and SOC detection patterns for AI usage",
      "Sensitive-data guardrails and policy-to-runtime controls",
      "AI incident-response runbook and tabletop exercise",
      "Token FinOps: caching, routing, effort tuning, budgets and showback",
      "Evidence packs aligned to ISO 42001, NIST AI RMF and DPDP",
    ],
    duration: "3–6 weeks",
    proof: "Partnered with Cyber to turn AI usage logs into live SOC alerts.",
  },
  {
    slug: "fractional",
    icon: "users",
    title: "Fractional Head of AI Engineering",
    promise:
      "Senior AI engineering leadership one to two days a week — strategy, architecture, hiring and delivery oversight — without a full-time executive hire.",
    forWho: "Scale-ups, GCCs and mid-size enterprises building their first AI team",
    deliverables: [
      "AI roadmap ownership and leadership-team reporting",
      "Architecture and vendor decisions",
      "Hiring plans, interview loops and team design",
      "Delivery governance and engineering metrics",
    ],
    duration: "Monthly retainer · 3-month minimum",
    proof: "Led a ~50-person AI org across India and US time zones.",
  },
];

// ── Engagement models ──────────────────────────────────────────────────────
export const engagementModels = [
  {
    name: "Advisory call",
    length: "60 minutes",
    description:
      "A focused working session on one problem — a rollout plan, an architecture, a vendor decision. You leave with written recommendations.",
  },
  {
    name: "Assessment sprint",
    length: "2–4 weeks · fixed fee",
    description:
      "Readiness or architecture review with a prioritised roadmap. The fastest way to de-risk a GenAI program.",
  },
  {
    name: "Implementation partnership",
    length: "6–12 weeks",
    description:
      "I lead or pair with your team to ship a specific outcome — an AI coding-agent rollout, a RAG platform, a governance control plane.",
  },
  {
    name: "Fractional retainer",
    length: "1–2 days / week",
    description:
      "Ongoing senior AI engineering leadership for teams that need judgement more than headcount.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery call",
    text: "30 minutes to understand your context, constraints and what success looks like. No pitch deck.",
  },
  {
    step: "02",
    title: "Proposal in 48 hours",
    text: "A short written scope with outcomes, timeline, team involvement and a fixed or capped price.",
  },
  {
    step: "03",
    title: "Deliver with your team",
    text: "Weekly check-ins, working artefacts in your repos and tools, and decisions documented as we go.",
  },
  {
    step: "04",
    title: "Hand over, not hand off",
    text: "Runbooks, dashboards and trained owners so the capability outlives the engagement.",
  },
];

// ── Training ───────────────────────────────────────────────────────────────
export type TrainingProgram = {
  slug: string;
  title: string;
  audience: string;
  format: string;
  summary: string;
  outcomes: string[];
  modules: string[];
};

export const trainingPrograms: TrainingProgram[] = [
  {
    slug: "ai-coding-agents-in-practice",
    title: "AI Coding Agents in Practice",
    audience: "Software engineers, tech leads, QA and DevOps",
    format: "1–2 days · hands-on · up to 30 per cohort",
    summary:
      "Go beyond autocomplete. Engineers learn to delegate real work to Claude Code, Codex or Cursor — safely, reviewably and on your own codebase.",
    outcomes: [
      "Ship a real ticket end-to-end with an agent, in your repo",
      "Write effective CLAUDE.md / AGENTS.md project context",
      "Use skills, hooks, subagents and MCP tools responsibly",
      "Know what not to send to a model, and why",
    ],
    modules: [
      "How coding agents actually work: context, tools, loops",
      "Context engineering and project memory files",
      "Test generation, refactoring and legacy-code workflows",
      "Agentic code review and PR hygiene",
      "Skills, hooks, subagents and MCP servers",
      "Security, sensitive data and supply-chain hygiene",
      "Measuring impact without vanity metrics",
    ],
  },
  {
    slug: "production-rag-and-agents",
    title: "Building Production RAG & Agents",
    audience: "ML, platform and backend engineers",
    format: "3-day bootcamp · capstone project · up to 20 per cohort",
    summary:
      "The engineering behind assistants that answer correctly — and know when not to. Built from lessons shipping DeX across 70+ platforms.",
    outcomes: [
      "Design an ingestion and retrieval pipeline that stays fresh",
      "Build an agentic flow with answerability and critique steps",
      "Stand up an eval harness that gates every release",
      "Operate it: observability, guardrails, cost",
    ],
    modules: [
      "Ingestion, chunking and metadata strategy",
      "Embeddings, hybrid search and reranking",
      "Agentic retrieval: rewrite, answerability, critique, summarise",
      "Evals: golden sets, LLM-as-judge, online feedback",
      "Guardrails and sensitive-data handling",
      "Observability with OpenTelemetry",
      "Model routing, caching and cost control",
      "Capstone: ship an assistant on your own docs",
    ],
  },
  {
    slug: "genai-for-engineering-leaders",
    title: "GenAI for Engineering Leaders",
    audience: "CTOs, VPs, Directors and engineering managers",
    format: "Half-day workshop · in person or virtual",
    summary:
      "What actually changes in your org when AI writes and reviews code — and how to lead it with numbers, not hype.",
    outcomes: [
      "A 90-day adoption plan for your organisation",
      "A metrics framework your CFO will accept",
      "Clarity on build vs. buy and vendor lock-in",
      "A working model with Risk, Cyber and Legal",
    ],
    modules: [
      "The 2026 landscape: agents, coding tools, platforms",
      "Where ROI shows up — and where it doesn't",
      "Adoption playbooks and change management",
      "Governance and risk partnership models",
      "Team design and skills for the agentic era",
    ],
  },
  {
    slug: "secure-governed-genai",
    title: "Secure & Governed GenAI",
    audience: "Security, GRC, platform and risk teams",
    format: "1 day · workshop + tabletop exercise",
    summary:
      "Threat-model LLM apps and agents, instrument them for audit, and rehearse your first AI incident before it happens.",
    outcomes: [
      "A threat model for your AI estate",
      "Logging and detection patterns for AI usage",
      "An AI incident-response runbook",
      "A mapping to ISO 42001, NIST AI RMF and DPDP",
    ],
    modules: [
      "Prompt injection, data leakage and tool abuse",
      "MCP and agent supply-chain risk",
      "Identity, RBAC and non-human access",
      "Cyber logging, attribution and SOC detections",
      "Regulatory landscape: EU AI Act, DPDP, sector rules",
      "Tabletop: an agent goes wrong",
    ],
  },
];

export const trainingFormats = [
  "On-site in Bengaluru, or travel across India and abroad",
  "Live virtual cohorts across time zones",
  "Customised to your stack, tools and codebase",
  "Post-training office hours and follow-up clinics",
];

// ── Case studies ───────────────────────────────────────────────────────────
export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  approach: string[];
  outcome: string[];
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-coding-agents-at-a-bank",
    client: "Top-10 US bank (Capital One)",
    title: "AI coding agents for 30,000+ engineers, inside a regulated bank",
    metric: "30,000+",
    metricLabel: "users on Claude Code, Codex, Cowork & Windsurf",
    challenge:
      "Engineers wanted the latest AI coding agents; Risk and Cyber needed proof that source code and sensitive data would stay protected, that usage was auditable, and that costs wouldn't run away.",
    approach: [
      "Routed every tool through an enterprise gateway on AWS Bedrock with OAuth, RBAC and per-user, per-minute token limits.",
      "Shipped centrally managed settings, project memory standards, hooks and MCP configuration so guardrails travelled with the tool.",
      "Instrumented usage with OpenTelemetry for cyber logging and developer-productivity metrics.",
      "Built a fast, tested release cadence so new models reached engineers in days, not quarters.",
    ],
    outcome: [
      "30,000+ users across Claude Code and Cowork, with Codex and Windsurf alongside",
      "Cost held down with prompt caching, model routing and effort-level tuning",
      "A pattern Risk, Cyber and the Model Risk Office could approve and reuse",
    ],
    tags: ["AI coding agents", "Governance", "AWS Bedrock"],
  },
  {
    slug: "ai-code-review-platform",
    client: "Top-10 US bank (Capital One)",
    title: "An agentic code reviewer across 50,000+ repositories",
    metric: "< $4",
    metricLabel: "median cost per reviewed PR at 350K+ PRs / month",
    challenge:
      "Generic AI review bots are noisy and expensive. Engineers ignore them after a week. The bank needed findings aligned to its own standards, at monorepo scale, in every language.",
    approach: [
      "Built on the Claude SDK with internally curated standards so every finding maps to a rule.",
      "Used deterministic checks around the model to suppress hallucinated findings.",
      "Made harness, model, rules and agents swappable, with a self-service rules-testing pipeline.",
      "Gated changes on offline evals: accuracy, false-positive rate and dissatisfaction rate.",
    ],
    outcome: [
      "50,000+ repositories and 350K+ PRs per month",
      "~10-minute SLA to first review on serverless infrastructure",
      "Headless agents extended to tests, docs and gap analysis",
    ],
    tags: ["Agentic AI", "Evals", "Developer platforms"],
  },
  {
    slug: "dex-agentic-rag",
    client: "Top-10 US bank (Capital One)",
    title: "DeX: an agentic RAG assistant that knows when not to answer",
    metric: "80%",
    metricLabel: "of repeated support queries resolved",
    challenge:
      "Platform teams were drowning in repeat questions across Slack. Answers existed — scattered across docs and years of threads — but a naive chatbot would confidently invent the rest.",
    approach: [
      "Ingested product docs and historical Slack conversations with bge-m3 embeddings and a reranker.",
      "Added answerability, query-rewrite, critique and summary steps so the agent declines when the source can't support an answer.",
      "Rolled out in shadow mode first, then promoted confident answers to the main channel.",
      "Tracked coverage, accuracy, freshness, MTTA and MTTR on OpenTelemetry dashboards.",
    ],
    outcome: [
      "Scaled to 70+ platforms as a multi-tenant, self-serve service",
      "Automated documentation generated from resolved Slack threads",
      "A human hand-off path whenever confidence was low",
    ],
    tags: ["RAG", "Agents", "Knowledge platforms"],
  },
  {
    slug: "paytm-cloud-savings",
    client: "Paytm",
    title: "$1.8M a month out of a 55PB data platform",
    metric: "$1.8M+",
    metricLabel: "monthly cloud savings",
    challenge:
      "A fast-growing fintech data estate — 15PB warehouse, ~10,000 analysts — was running always-on clusters and paying for cross-region traffic it didn't need.",
    approach: [
      "Migrated EMR fleets to AWS Graviton at roughly a third of the price.",
      "Replaced always-on Hive/Hadoop with autoscaling Starburst on Kubernetes.",
      "Moved to transient, event-driven EMR so not even master nodes ran 24/7.",
      "Removed inter-region data transfer by replicating clusters per region.",
    ],
    outcome: [
      "$1.8M+ saved every month",
      "Provisioning cut from days to ~1 hour; access from days to ~10 minutes",
      "The same playbook now applies to LLM token economics",
    ],
    tags: ["FinOps", "Platform engineering", "Data"],
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────
export const faqs = [
  {
    q: "Do you work with companies outside India?",
    a: "Yes. I'm based in Bengaluru and work remotely with teams in Europe, the Middle East, APAC and the US, and travel for on-site workshops.",
  },
  {
    q: "Are you tied to a particular AI vendor?",
    a: "No. I've deployed Anthropic, OpenAI, Google and open-weight models side by side. Recommendations follow your constraints, not a reseller margin.",
  },
  {
    q: "How do you price engagements?",
    a: "Assessments and training are fixed-fee; implementation work is fixed or capped; fractional work is a monthly retainer. You get a written proposal within 48 hours of a discovery call.",
  },
  {
    q: "Can you work under NDA and our security requirements?",
    a: "Of course. I'm used to bank-grade controls, and can work inside your environment with your accounts and tooling.",
  },
  {
    q: "Can training be customised to our codebase?",
    a: "That's the default. Hands-on sessions use your repositories, tools and policies wherever your security team allows it.",
  },
];
