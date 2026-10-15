export const profile = {
  name: "Kush Batra",
  initials: "KB",
  title: "Director, Generative AI & Engineering",
  subtitle: "AI & Engineering · Platform & Cloud · DevOps/SRE",
  location: "Bengaluru, India",
  availability: "Available immediately for Director / Head roles",
  email: "er.kushbatra@gmail.com",
  linkedin: "https://www.linkedin.com/in/kush-batra",
  phone: "+91 72041 89357",
  heroStat: "16+ years turning emerging technology into production-grade engineering impact.",
  summary: [
    "Engineering and technology leader with 16+ years across Generative AI, platform engineering, cloud infrastructure, SRE/DevOps and enterprise data platforms, in large-scale and regulated organizations.",
    "Most recently Director, Generative AI & Engineering at Capital One, leading Engineering, DevOps and MLE teams on enterprise AI programs — taking AI from experiment to secure, governed, production-ready capability with reusable architectures, evaluation, observability and adoption models.",
    "Combines strategic leadership with hands-on depth in AI/ML, RAG, cloud architecture, Kubernetes, distributed systems and DevOps/SRE. Delivered enterprise AI capabilities adopted by 30,000+ users, a code-review platform spanning 50,000+ repositories, and $1.8M+ monthly infrastructure savings.",
    "I partner with CTOs and senior technology leaders, manage managers, hire and mentor strong engineers, and stay hands-on in architecture, design and technology choices.",
  ],
};

export const stats = [
  { label: "Years in technology leadership", value: "16+" },
  { label: "Engineers reached with AI tooling", value: "30,000+" },
  { label: "Monthly infrastructure savings delivered", value: "$1.8M+" },
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
      "Team Management",
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
      "Data Governance",
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
      "Terraform",
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
      "Apache Spark",
      "Kafka",
      "Databricks",
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
    period: "Aug 2026 — Oct 2026",
    location: "Bengaluru, India",
    points: [
      "Led Engineering, DevOps and MLE teams across three enterprise AI programs, partnering with senior technology leadership, Risk, Cyber and the Model Risk Office on priorities, governance and adoption.",
      "Defined engineering strategy for AI-powered developer experience and enterprise GenAI capabilities, shaping roadmaps with global ML and engineering leadership.",
      "Contributed to the CEO-level annual \"How We Build Software\" strategy exercise, identifying GenAI and cyber solutioning gaps and shaping the next year's initiative scope.",
      "Set direction for AI-assisted SDLC capabilities — code and PR review, headless test-case generation, technical documentation and engineering workflows — with evaluation, observability and security controls.",
      "Aligned team size, skill mix and hiring plans with the upcoming year's delivery demand, working with internal and external stakeholders.",
    ],
    recognition: "TechX Award 2026",
  },
  {
    company: "Capital One",
    role: "Senior Manager, GenAI Initiatives",
    period: "Aug 2023 — Aug 2026",
    location: "Bengaluru, India",
    points: [
      "Scaled AI developer tools — Windsurf, Claude Code, Cowork and Codex — to 30,000+ users, with access controls, identity integration, token limits, sensitive-data guardrails and OpenTelemetry productivity telemetry.",
      "Built and scaled an agentic code-review platform from scratch to 50,000+ repositories and 350K+ pull requests per month, at under $4 median cost per PR.",
      "Built a GenAI developer assistant chatbot adopted by 15,000+ engineers.",
      "Led development of DeX, a multi-tenant agentic RAG chatbot grounded in product documentation and historical Slack conversations; scaled to 70+ platforms, serving 90% of queries and resolving 80% of repeated queries.",
      "Architected a production RAG knowledge platform on AWS EKS with OpenSearch, semantic retrieval, reranking and LLMs.",
      "Secured enterprise LLM access by integrating Claude Code with AWS Bedrock via API Gateway and OAuth, and led the evaluation and launch of Windsurf with cybersecurity, risk and compliance.",
      "Led headless AI initiatives for test-case generation, code review, documentation refresh and change risk-impact analysis.",
    ],
    recognition: "Achievers Award 2024 · GenAI Hackathon 2024, 2nd Prize",
  },
  {
    company: "Paytm",
    role: "Senior Engineering Manager, Central Data",
    period: "2021 — 2023",
    location: "Noida, India",
    points: [
      "Led SRE, DevOps and platform engineering for central data platforms totalling 55PB, including a 15PB data warehouse, and owned business-unit vision, P&L, cost and resource planning.",
      "Delivered $1.8M+ monthly savings through cloud modernization, compute migration, data-transfer optimization and automated cost controls.",
      "Modernized the data platform from Hadoop/Hive on EC2 to Kubernetes-based Presto on EKS, self-managed Kafka to managed Kafka, and long-running EMR workloads to transient/serverless EMR.",
      "Automated JIRA-driven provisioning (days to about one hour) and access management (2–7 days to about 10 minutes); cut patch-cycle turnaround from about three months to one week.",
      "Built Kubeflow MLOps pipelines and supported GPU-backed OCR workloads; introduced Databricks and managed data-lake access and governance.",
    ],
    recognition: "Hall of Fame 2023",
  },
  {
    company: "Coforge",
    role: "Specialist",
    period: "2021",
    location: "India",
    points: [
      "Led development, DevOps and QA teams on a mainframe-to-microservices transformation for Sabre's travel Global Distribution System.",
      "Established cloud-native delivery foundations on GCP, with CI/CD, infrastructure automation, observability and security scanning.",
    ],
  },
  {
    company: "Mobileum",
    role: "Technical Lead",
    period: "2015 — 2021",
    location: "Gurgaon, India",
    points: [
      "Led cloud, SRE and DevOps strategy for Telia Group and other European telecom operators across Nordic markets, owning reliability, automation, security and cost planning.",
      "Ran SLO/SLA-driven operations using MTTA, MTTR and RPO/RTO practices across multi-country services, and owned client stakeholder management.",
      "Deployed releases on AWS and GCP (EKS, GKE, ECS, VMs) with Jenkins CI/CD, Ansible and shell automation; set up observability with ELK, Nagios, Prometheus and Grafana.",
    ],
    recognition: "MVP Award 2019",
  },
  {
    company: "Earlier Career",
    role: "Tecnotree · Huawei Enterprise · QuadGen Wireless · Ericsson",
    period: "2010 — 2015",
    location: "India",
    points: [
      "Built foundational depth across OS and database administration, billing and mediation systems, telecom platforms and infrastructure operations.",
    ],
  },
];

export const impactHighlights = [
  {
    title: "AI Engineering at Enterprise Scale",
    description:
      "Scaled AI developer tools to 30,000+ users, and a GenAI developer assistant adopted by 15,000+ engineers — spanning code review, test generation, documentation and knowledge retrieval.",
  },
  {
    title: "Enterprise AI Knowledge Platform",
    description:
      "Architected a production platform combining EKS, OpenSearch, semantic retrieval, reranking and LLMs to improve engineering knowledge discovery across 70+ platforms.",
  },
  {
    title: "Cloud Cost Transformation",
    description:
      "Delivered $1.8M+ monthly savings through cloud modernization, compute migration, data-transfer optimization and automated cost controls.",
  },
  {
    title: "Engineering Automation",
    description:
      "Automated infrastructure provisioning, access management and patch management — cutting operational processes from days or months to minutes or weeks.",
  },
  {
    title: "Platform Modernization",
    description:
      "Modernized identity, data and infrastructure platforms through SAML, Kubernetes, Presto and cloud-native architectures.",
  },
];

export const recognition = [
  { title: "TechX Award 2026", org: "Capital One" },
  { title: "Icons of Excellence 2025", org: "Capital One" },
  { title: "Achievers Award 2024", org: "Capital One" },
  { title: "GenAI Hackathon 2024 — 2nd Prize", org: "Capital One" },
  { title: "Hall of Fame 2023", org: "Paytm" },
  { title: "MVP Award 2019", org: "Mobileum" },
];

export const education = [
  {
    title: "B.E. Electronics & Communication Engineering",
    org: "B.R.C.M College of Engineering and Technology · Maharshi Dayanand University",
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
      "Enterprise GenAI demos are easy. Production is where governance, evaluation and reliability either hold — or don't. Notes from scaling AI tooling to 30,000+ users.",
    date: "2026-09-10",
    readTime: "6 min read",
    tags: ["GenAI", "Platform Engineering", "Enterprise AI"],
    content: [
      "Every org I've worked with can produce an impressive GenAI demo in a week. Almost none can take that same capability to 30,000 users without it falling over — on cost, on security review, or on trust.",
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
