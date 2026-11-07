// Products (live subdomains) and portal offerings. Edit here; pages read from this file.
// Docs live on this site (/products/[slug]#docs). Set `docsUrl` to point at an external docs site instead.

import { calendarInviteUrl } from "./consulting";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  url: string;
  demoUrl: string;
  docsUrl?: string;
  status: "Live" | "Sign-in required";
  highlights: string[];
  docs: {
    overview: string;
    steps: { title: string; text: string }[];
    notes: string[];
  };
  offerings: string[]; // slugs from `offerings`
};

export const products: Product[] = [
  {
    slug: "factory",
    name: "Software Factory",
    tagline: "Ticket-to-PR delivery with agents, approval gates and release evidence.",
    summary:
      "An agentic software delivery platform. Work arrives as a ticket, agents plan and build it, checks run in CI, and a human approves the pull request. Every step leaves an audit trail.",
    url: "https://factory.kushbatra.com",
    demoUrl: "https://factory.kushbatra.com",
    status: "Sign-in required",
    highlights: [
      "Ticket-to-PR workflows with human approval gates",
      "Test automation and security checks in the pipeline",
      "Scoped identities for every agent run",
      "Release evidence captured for audit",
    ],
    docs: {
      overview:
        "Software Factory turns a well-written ticket into a reviewed pull request, using the same CI/CD and GitOps controls your engineers already trust.",
      steps: [
        { title: "Sign in", text: "Use your Google account on factory.kushbatra.com." },
        { title: "Pick a ticket", text: "Choose a work item and review the scope the agent will operate in." },
        { title: "Watch the run", text: "Follow the agent's plan, edits and test results as they happen." },
        { title: "Approve", text: "Review the diff and evidence, then approve or send it back." },
      ],
      notes: [
        "Access is by Google sign-in. Ask for a walkthrough if you'd like a guided demo first.",
        "Agents run on approved infrastructure with scoped credentials and evaluation checks.",
      ],
    },
    offerings: ["software-factory-devops", "agentic-ecosystem"],
  },
  {
    slug: "ai-coding-tools",
    name: "AI Coding Tools",
    tagline: "Compare coding harnesses and models on a real story.",
    summary:
      "Pick a JIRA story, choose an AI coding harness and model, watch the agent work, review the diff and open a PR. A hands-on way to evaluate tools before you commit to one.",
    url: "https://aicodingtools.kushbatra.com",
    demoUrl: "https://aicodingtools.kushbatra.com",
    status: "Live",
    highlights: [
      "Choose the harness and the model per run",
      "Live view of the agent working a real story",
      "Diff review, then open a PR",
      "Side-by-side evidence for tool and model evaluations",
    ],
    docs: {
      overview:
        "AI Coding Tools gives teams a fair, repeatable way to try coding agents and models on their own kind of work before standardising.",
      steps: [
        { title: "Pick a story", text: "Select a JIRA story to work on." },
        { title: "Choose harness and model", text: "Decide which coding tool and which model should do the work." },
        { title: "Watch the agent", text: "See each step as the agent works through the story." },
        { title: "Review and ship", text: "Inspect the diff and open a PR." },
      ],
      notes: [
        "Use it to compare Claude Code, Codex and other tools on identical work.",
        "Pairs with a model evaluation engagement under Technology strategy and AI advisory.",
      ],
    },
    offerings: ["technology-strategy-ai-advisory", "cost-ai-governance"],
  },
  {
    slug: "brain",
    name: "Brain",
    tagline: "The operating system for restaurants.",
    summary:
      "Launch a website, bookings, QR ordering, an AI voice agent and growth tools in minutes. Works in any country, any currency and any language.",
    url: "https://business-automation.kushbatra.com",
    demoUrl: "https://business-automation.kushbatra.com",
    status: "Live",
    highlights: [
      "Website, bookings and QR ordering in one place",
      "AI voice agent for calls and reservations",
      "Growth tools built in",
      "Any country, currency and language",
    ],
    docs: {
      overview:
        "Brain is a business-automation platform for restaurants. It replaces a stack of separate tools with one operating system.",
      steps: [
        { title: "Open Brain", text: "Visit business-automation.kushbatra.com and start a restaurant." },
        { title: "Set up the basics", text: "Add your menu, hours, currency and language." },
        { title: "Turn on channels", text: "Enable bookings, QR ordering and the AI voice agent." },
        { title: "Grow", text: "Use the growth tools to bring guests back." },
      ],
      notes: [
        "Brain is the reference build for managed engineering and operations: a product run end to end.",
      ],
    },
    offerings: ["managed-engineering-operations", "agentic-ecosystem"],
  },
  {
    slug: "recruova",
    name: "Recruova",
    tagline: "Hire on the whole career.",
    summary:
      "Global recruitment, AI-assisted and human-decided. Deep CV understanding, tier-aware search, AI screening and privacy-first outreach.",
    url: "https://recruova.com",
    demoUrl: "https://recruova.com/demo",
    status: "Live",
    highlights: [
      "Deep CV understanding across the full career",
      "Tier-aware candidate search",
      "AI screening with humans making the decision",
      "Privacy-first outreach",
    ],
    docs: {
      overview:
        "Recruova helps hiring teams find and screen candidates globally. AI does the reading and ranking; people make every hiring decision.",
      steps: [
        { title: "Browse", text: "Explore open roles at recruova.com/careers without signing in." },
        { title: "Try the demo", text: "Walk through search and screening at recruova.com/demo." },
        { title: "Search", text: "Find candidates with tier-aware search." },
        { title: "Screen and reach out", text: "Review AI screening, then contact candidates privately." },
      ],
      notes: [
        "Built around data-privacy-first design, with decisions kept with the recruiter.",
      ],
    },
    offerings: ["agentic-ecosystem", "data-platforms"],
  },
];

export type Offering = {
  slug: string;
  title: string;
  getting: string;
  icon: "compass" | "bot" | "factory" | "cloud" | "database" | "coins" | "wrench";
  demoProducts: string[]; // product slugs
  walkthroughTopic: string;
};

export const offerings: Offering[] = [
  {
    slug: "technology-strategy-ai-advisory",
    title: "Technology strategy and AI advisory",
    getting:
      "Target architecture, implementation roadmap, operating model, investment priorities, and Claude Code, Codex, Cowork and model evaluations.",
    icon: "compass",
    demoProducts: ["ai-coding-tools"],
    walkthroughTopic: "Demo: technology strategy and AI advisory",
  },
  {
    slug: "agentic-ecosystem",
    title: "Agentic ecosystem",
    getting:
      "Headless agents running on approved infrastructure, triggered by events, schedules or CI with scoped identities, evaluations and approval gates.",
    icon: "bot",
    demoProducts: ["factory", "brain"],
    walkthroughTopic: "Demo: agentic ecosystem",
  },
  {
    slug: "software-factory-devops",
    title: "Software factory and DevOps",
    getting:
      "Ticket-to-PR workflows, test automation, security checks, CI/CD, GitOps and release evidence.",
    icon: "factory",
    demoProducts: ["factory", "ai-coding-tools"],
    walkthroughTopic: "Demo: software factory and DevOps",
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud and infrastructure",
    getting:
      "Cloud architecture, Terraform, Kubernetes, GCP and AWS migration planning, reliability, and infrastructure automation.",
    icon: "cloud",
    demoProducts: [],
    walkthroughTopic: "Demo: cloud and infrastructure",
  },
  {
    slug: "data-platforms",
    title: "Data platforms",
    getting:
      "Warehousing, ingestion, data quality, workload design, and delivery plans grounded in Paytm experience.",
    icon: "database",
    demoProducts: ["recruova"],
    walkthroughTopic: "Demo: data platforms",
  },
  {
    slug: "cost-ai-governance",
    title: "Cost and AI governance",
    getting:
      "Cloud and model spend baselines, sizing, team budgets, identity, audit logs, retention, egress and residency design.",
    icon: "coins",
    demoProducts: ["ai-coding-tools"],
    walkthroughTopic: "Demo: cost and AI governance",
  },
  {
    slug: "managed-engineering-operations",
    title: "Managed engineering and operations",
    getting:
      "Scoped teams, platform support, observability, maintenance, incident escalation and a documented handover.",
    icon: "wrench",
    demoProducts: ["brain"],
    walkthroughTopic: "Demo: managed engineering and operations",
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const offeringBySlug = (slug: string) => offerings.find((o) => o.slug === slug);
export const walkthroughHref = (topic: string) => calendarInviteUrl(topic);
