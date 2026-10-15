export const profile = {
  name: "Kush Batra",
  initials: "KB",
  title: "Director / VP Technology",
  subtitle: "AI & Engineering · Platform & Cloud · DevOps/SRE",
  location: "Bengaluru, India",
  availability: "Open to India & global leadership opportunities",
  email: "er.kushbatra@gmail.com",
  linkedin: "https://www.linkedin.com/in/kushbatra-86578444",
  phone: "+91 72041 89357",
  heroStat: "16+ years turning emerging technology into production-grade engineering impact.",
  summary: [
    "Technology and engineering leader with 16+ years of experience building and transforming software engineering, enterprise platforms, cloud infrastructure, SRE/DevOps and AI capabilities across large-scale organizations.",
    "Most recently served as Director, Generative AI & Engineering at Capital One, leading global initiatives across AI-powered software engineering, developer platforms, enterprise knowledge systems and engineering automation — translating emerging technologies into secure, scalable, production-ready capabilities.",
    "Combines strategic technology leadership with deep hands-on engineering expertise across AI/ML, cloud architecture, Kubernetes, platform engineering, distributed systems, DevOps/SRE and application platforms. Built and scaled AI capabilities reaching 16,000+ engineers and delivered $1.8M+ annualized infrastructure savings.",
  ],
};

export const stats = [
  { label: "Years in technology leadership", value: "16+" },
  { label: "Engineers reached with AI tooling", value: "16,000+" },
  { label: "Annualized infrastructure savings delivered", value: "$1.8M+" },
  { label: "Provisioning turnaround, days to", value: "~1 hr" },
];

export const expertiseGroups = [
  {
    title: "Technology Leadership",
    items: [
      "Technology Strategy",
      "Engineering Strategy",
      "Architecture",
      "Digital Transformation",
      "0→1 Product Development",
      "Engineering Operating Models",
      "Technical Roadmaps",
      "Executive Stakeholder Management",
    ],
  },
  {
    title: "AI & Engineering",
    items: [
      "Generative AI",
      "LLM Applications",
      "RAG",
      "Agentic AI",
      "AI Developer Platforms",
      "AI Code Review",
      "Test Generation",
      "Developer Knowledge Systems",
      "Enterprise AI Adoption",
      "AI Governance",
    ],
  },
  {
    title: "Cloud & Platforms",
    items: [
      "AWS",
      "AWS Bedrock",
      "Kubernetes",
      "Amazon EKS",
      "Azure",
      "GCP",
      "Platform Engineering",
      "Infrastructure as Code",
      "APIs",
      "Distributed Systems",
      "Microservices",
    ],
  },
  {
    title: "Reliability & Operations",
    items: [
      "DevOps",
      "SRE",
      "CI/CD",
      "Observability",
      "Reliability Engineering",
      "Production Readiness",
      "Infrastructure Automation",
      "Security",
      "Access Management",
      "Cloud Cost Optimization",
    ],
  },
  {
    title: "Application & Data",
    items: [
      "PostgreSQL",
      "Supabase",
      "OpenSearch",
      "Semantic Search",
      "Data Modeling",
      "Application Architecture",
      "Enterprise Knowledge Platforms",
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
    period: "2026 — Present",
    location: "Bengaluru / Global",
    points: [
      "Lead a portfolio of enterprise AI and engineering initiatives spanning AI-powered code review, intelligent engineering assistants, enterprise knowledge platforms and AI developer tooling.",
      "Define technical strategy and architecture across scalability, security, governance, developer experience and production reliability.",
      "Lead cross-functional MLE, Engineering, Platform Engineering and DevOps teams, partnering with senior technology and CTO leadership across the US and India.",
      "Architected a production engineering knowledge platform combining AWS EKS, OpenSearch, semantic retrieval, reranking, LLMs and historical support knowledge.",
      "Led secure enterprise integration of Claude Code CLI with AWS Bedrock via API Gateway and OAuth, coordinating Engineering, Cybersecurity, Risk, Compliance, Architecture and Platform teams.",
    ],
    recognition: "CTO TechX Award 2026 · Icons of Excellence 2025",
  },
  {
    company: "Capital One",
    role: "Senior Manager, Generative AI Initiatives",
    period: "2023 — 2026",
    location: "Bengaluru / Global",
    points: [
      "Built and scaled AI-assisted software engineering capabilities reaching 16,000+ engineers across the enterprise.",
      "Led 0→1 development and enterprise adoption of AI products: code review, test-case generation, documentation, risk-impact analysis and developer knowledge support.",
      "Established reusable architecture patterns for RAG, semantic retrieval, reranking and LLM-powered engineering workflows.",
      "Led technology evaluation, security and operational readiness, and enterprise rollout of AI coding assistants (Claude Code, Cursor, Windsurf, Code Rabbit) across global engineering orgs.",
      "Partnered with senior US technology leadership to define AI engineering strategy and scale successful initiatives.",
    ],
    recognition: "Achievers Award 2024 · GenAI Hackathon 2024, 2nd Prize",
  },
  {
    company: "Paytm",
    role: "Senior Engineering Manager",
    period: "2021 — 2023",
    location: "Bengaluru / Noida",
    points: [
      "Led cloud infrastructure, platform engineering, DevOps/SRE and engineering automation initiatives.",
      "Delivered $1.8M+ annualized savings through cloud optimization, infrastructure modernization and automation.",
      "Automated JIRA-driven infrastructure provisioning — turnaround cut from days to ~1 hour, saving 10+ developer-hours per request.",
      "Automated access management — turnaround cut from 2–7 days to ~10 minutes.",
      "Migrated an EC2-based Hive environment to a Kubernetes-based Presto platform; modernized identity from OpenLDAP to SAML.",
    ],
    recognition: "Hall of Fame 2023",
  },
  {
    company: "Coforge",
    role: "DevOps Specialist",
    period: "2021",
    location: "India",
    points: [
      "Delivered cloud, DevOps, infrastructure automation and platform engineering capabilities across enterprise environments.",
      "Supported modernization of engineering and operational workflows through automation and reliability improvements.",
    ],
  },
  {
    company: "Mobileum",
    role: "Project Lead / Technical Lead, SRE",
    period: "2015 — 2021",
    location: "Gurgaon",
    points: [
      "Led SRE, cloud, DevOps and reliability engineering initiatives supporting Telia Group across Nordic & European markets.",
      "Drove production reliability, automation, security and infrastructure modernization across distributed production environments.",
    ],
    recognition: "MVP Award 2019",
  },
  {
    company: "Earlier Career",
    role: "Tecnotree · Huawei Enterprise · Quadgen Wireless · Ericsson",
    period: "2010 — 2015",
    location: "India",
    points: [
      "Built foundational depth across OS/DB administration, billing & mediation systems, telecom platforms and infrastructure operations — the groundwork for a 16-year climb into platform and AI engineering leadership.",
    ],
  },
];

export const impactHighlights = [
  {
    title: "AI Engineering at Enterprise Scale",
    description:
      "Scaled AI-assisted software engineering to 16,000+ engineers — spanning code review, test generation, documentation, knowledge retrieval and developer productivity.",
  },
  {
    title: "Enterprise AI Knowledge Platform",
    description:
      "Architected a production platform combining EKS, OpenSearch, semantic retrieval, reranking, LLMs and organizational support knowledge to improve engineering knowledge discovery.",
  },
  {
    title: "Cloud Cost Transformation",
    description:
      "Delivered $1.8M+ annualized savings through cloud optimization, infrastructure modernization, cost intelligence and automation.",
  },
  {
    title: "Engineering Automation",
    description:
      "Automated infrastructure provisioning, access management and patch management — cutting operational processes from days/months to minutes/weeks.",
  },
  {
    title: "Platform Modernization",
    description:
      "Modernized identity, data and infrastructure platforms through SAML, Kubernetes, Presto and cloud-native architectures.",
  },
];

export const recognition = [
  { title: "CTO TechX Award 2026", org: "Capital One" },
  { title: "Icons of Excellence 2025", org: "Capital One" },
  { title: "Achievers Award 2024", org: "Capital One" },
  { title: "GenAI Hackathon 2024 — 2nd Prize", org: "Capital One" },
  { title: "Hall of Fame 2023", org: "Paytm" },
  { title: "MVP Award 2019", org: "Mobileum" },
];

export const education = [
  {
    title: "B.E. Electronics & Communication Engineering",
    org: "Maharshi Dayanand University",
    period: "2005 — 2009",
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    org: "Linux Foundation",
    period: "",
  },
];

export type DemoProject = {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  videoUrl?: string;
  status: "live" | "coming-soon";
};

export const demoProjects: DemoProject[] = [
  {
    title: "Enterprise AI Knowledge Copilot",
    tagline: "RAG + semantic search over engineering knowledge",
    description:
      "A placeholder slot for a walkthrough demo of a RAG-based knowledge assistant — add your screen recording or Loom/YouTube link here.",
    tags: ["RAG", "OpenSearch", "LLM", "AWS EKS"],
    status: "coming-soon",
  },
  {
    title: "AI Code Review Assistant",
    tagline: "Agentic PR review at enterprise scale",
    description:
      "Showcase a demo of an AI-assisted code review / test-generation product here once recorded.",
    tags: ["Agentic AI", "Code Review", "Developer Tooling"],
    status: "coming-soon",
  },
  {
    title: "Infra Automation Console",
    tagline: "Self-service provisioning & access management",
    description:
      "Demo slot for an infrastructure automation tool — provisioning, access and patch workflows reduced from days to minutes.",
    tags: ["IaC", "Automation", "Cloud Cost"],
    status: "coming-soon",
  },
];

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
    slug: "moving-genai-from-poc-to-production",
    title: "Moving GenAI from POC to Production: What Actually Breaks",
    excerpt:
      "Enterprise GenAI demos are easy. Production is where governance, evaluation and reliability either hold — or don't. Notes from scaling AI tooling to 16,000+ engineers.",
    date: "2026-09-10",
    readTime: "6 min read",
    tags: ["GenAI", "Platform Engineering", "Enterprise AI"],
    content: [
      "Every org I've worked with can produce an impressive GenAI demo in a week. Almost none can take that same capability to 16,000 engineers without it falling over — on cost, on security review, or on trust.",
      "The gap isn't model capability. It's the unglamorous layer underneath: evaluation harnesses that catch regressions before users do, retrieval pipelines that don't silently degrade as knowledge sources drift, and access/governance controls that satisfy risk and compliance without strangling iteration speed.",
      "This is a placeholder post — replace with your own write-up on what broke, what you fixed, and what you'd do differently next time.",
    ],
  },
  {
    slug: "cutting-infra-provisioning-from-days-to-minutes",
    title: "Cutting Infrastructure Provisioning from Days to an Hour",
    excerpt:
      "A field note on automating JIRA-driven provisioning and access management — and the organizational change management that mattered more than the code.",
    date: "2026-07-22",
    readTime: "5 min read",
    tags: ["DevOps", "Automation", "SRE"],
    content: [
      "The technical automation was the easy 20%. The hard 80% was getting every downstream team to trust a system they didn't build, and retiring the manual process without a painful transition period.",
      "This is a placeholder post — swap in your own breakdown of the automation architecture, the rollout strategy, and the before/after metrics.",
    ],
  },
  {
    slug: "what-16-years-in-infra-taught-me-about-ai",
    title: "What 16 Years in Infrastructure Taught Me About Building AI Platforms",
    excerpt:
      "Model capability is the easy part. Production reliability, security and economics are what separate a prototype from a platform — lessons carried over from SRE and cloud infra.",
    date: "2026-05-02",
    readTime: "7 min read",
    tags: ["Career", "AI Platforms", "SRE"],
    content: [
      "Long before 'AI engineering' was a job title, the discipline of keeping distributed systems reliable at 3am taught the same lessons that now apply to LLM-powered platforms: observability first, blast radius always in mind, and never ship what you can't roll back.",
      "This is a placeholder post — replace with your own career reflections and lessons.",
    ],
  },
];
