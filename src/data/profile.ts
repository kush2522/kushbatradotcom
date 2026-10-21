// Identity, contact and career facts. Consulting offers live in ./consulting.ts,
// writing lives in ./blog.ts.

export const profile = {
  name: "Kush Batra",
  initials: "KB",
  title: "Enterprise GenAI Advisor & Trainer",
  shortTitle: "GenAI Advisor & Trainer",
  headline: "Take generative AI from pilot to governed production — at enterprise scale.",
  subhead:
    "I help engineering and technology leaders roll out AI coding agents, build agentic RAG and AI platforms, and train their teams — with the security, evaluation and cost controls a regulated enterprise needs.",
  location: "Bengaluru, India · working globally",
  availability: "Booking advisory & training engagements for Q4 2026 – Q1 2027",
  email: "er.kushbatra@gmail.com",
  phone: "+91 72041 89357",
  phoneHref: "+917204189357",
  whatsapp: "https://wa.me/917204189357",
  linkedin: "https://www.linkedin.com/in/kush-batra",
  siteUrl: "https://kushbatra.com",
  timezone: "IST (UTC+05:30) — overlaps with Europe, the Middle East and US East mornings",
  summary: [
    "I spent the last three years at Capital One leading the Engineering, DevOps and ML engineering teams that put generative AI into the hands of tens of thousands of engineers — inside one of the most heavily regulated industries there is.",
    "That meant rolling out AI coding agents (Claude Code, Codex, Windsurf, Cowork) to 30,000+ users, building an agentic code-review platform across 50,000+ repositories, and shipping DeX, a multi-tenant agentic RAG assistant used across 70+ platforms — all with Risk, Cyber and the Model Risk Office as partners, not blockers.",
    "Before that I ran SRE, DevOps and platform engineering for Paytm's 55PB central data estate, delivering $1.8M+ in monthly cloud savings, and spent a decade keeping telecom platforms alive across Europe and India.",
    "Today I work independently: advising leadership teams, reviewing architectures, standing up AI developer platforms, and running hands-on training. I'm opinionated about one thing — GenAI is an engineering and operations problem first, and a model problem second.",
  ],
};

export const stats = [
  { label: "Engineers enabled with AI coding agents", value: "30,000+" },
  { label: "Repositories under AI code review", value: "50,000+" },
  { label: "Median cost per AI-reviewed PR", value: "< $4" },
  { label: "Monthly cloud savings delivered", value: "$1.8M+" },
];

export const expertiseGroups = [
  {
    title: "Enterprise GenAI",
    items: [
      "AI coding agents rollout",
      "Claude Code · Codex · Cursor · Windsurf",
      "Agentic RAG",
      "AI code review",
      "Evals & LLM-as-judge",
      "Guardrails",
      "MCP & tool governance",
      "Model routing & caching",
    ],
  },
  {
    title: "AI Platform & Cloud",
    items: [
      "AWS Bedrock",
      "Kubernetes / EKS",
      "Serverless",
      "API gateways & OAuth",
      "OpenTelemetry",
      "GPU capacity planning",
      "Terraform",
      "AWS · GCP · Azure",
    ],
  },
  {
    title: "Risk, Security & Governance",
    items: [
      "Model risk partnership",
      "Cyber logging & detections",
      "Sensitive-data controls",
      "RBAC & token budgets",
      "Software supply chain",
      "DPDP-aware design",
    ],
  },
  {
    title: "Leadership & Operations",
    items: [
      "Architecture Review Boards",
      "Operating models",
      "SRE / DevOps",
      "FinOps",
      "RFPs & pre-sales",
      "Hiring & building teams",
    ],
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  recognition?: string;
};

export const experience: ExperienceEntry[] = [
  {
    company: "Capital One",
    role: "Director, Generative AI & Engineering",
    period: "Aug 2023 — Oct 2026",
    location: "Bengaluru, India",
    points: [
      "Led a ~50-person Engineering, DevOps and MLE organisation across three enterprise AI programs, partnering with Risk, Cyber and the Model Risk Office.",
      "Rolled out AI coding agents — Claude Code, Cowork, Codex and Windsurf — to 30,000+ users with managed settings, RBAC, token limits, sensitive-data guardrails and OpenTelemetry productivity telemetry.",
      "Built an agentic code-review platform across 50,000+ repositories and 350K+ PRs a month at under $4 median cost per PR.",
      "Led DeX, a multi-tenant agentic RAG assistant grounded in product docs and Slack history, scaled to 70+ platforms and resolving 80% of repeated queries.",
      "Contributed to the CEO-level \"How We Build Software\" strategy exercise on GenAI and cyber solutioning gaps.",
    ],
    recognition: "TechX Award 2026 · Icons of Excellence 2025 · Achievers Award 2024 · GenAI Hackathon 2nd Prize",
  },
  {
    company: "Paytm",
    role: "Senior Engineering Manager, Central Data",
    period: "Dec 2021 — Aug 2023",
    location: "Noida, India",
    points: [
      "Led SRE, DevOps and platform engineering (~40 people) for a 55PB data estate including a 15PB warehouse serving ~10,000 analysts.",
      "Delivered $1.8M+ monthly savings through Graviton migration, transient EMR, Kubernetes-based Presto/Starburst and removing inter-region data transfer.",
      "Automated provisioning (days → ~1 hour), access management (2–7 days → ~10 minutes) and patch cycles (~3 months → 1 week).",
    ],
    recognition: "Hall of Fame",
  },
  {
    company: "Coforge",
    role: "Specialist",
    period: "Mar 2021 — Dec 2021",
    location: "India",
    points: [
      "Led Dev, DevOps and QA on a mainframe-to-microservices transformation for a global travel GDS on GCP.",
    ],
  },
  {
    company: "Mobileum",
    role: "Technical Lead",
    period: "Sep 2015 — Feb 2021",
    location: "Gurgaon, India",
    points: [
      "Led cloud, SRE and DevOps for Telia Group and other European operators across Nordic markets; ran RFP and pre-sales solutioning for European clients.",
    ],
    recognition: "MVP Award 2019",
  },
  {
    company: "Earlier career",
    role: "Tecnotree · Huawei Enterprise · QuadGen Wireless · Ericsson",
    period: "2010 — 2015",
    location: "India",
    points: [
      "A decade-deep foundation in on-prem infrastructure, telecom platforms, automation and change management for European customers.",
    ],
  },
];

export const recognition = [
  { title: "TechX Award 2026", org: "Capital One" },
  { title: "Icons of Excellence 2025", org: "Capital One" },
  { title: "Achievers Award 2024", org: "Capital One" },
  { title: "GenAI Hackathon 2024 — 2nd Prize", org: "Capital One" },
  { title: "Hall of Fame", org: "Paytm" },
  { title: "MVP Award 2019", org: "Mobileum" },
];

export const education = [
  {
    title: "B.E. Electronics & Communication Engineering",
    org: "B.R.C.M College of Engineering and Technology",
    period: "2005 — 2009",
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    org: "CNCF / Linux Foundation",
    period: "2022",
  },
];
