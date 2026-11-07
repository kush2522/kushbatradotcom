// Contact-form topics, derived from offerings so the form never drifts from the site.
import { offerings } from "./products";

export const topics = [
  ...offerings.map((o) => o.title),
  "Training / workshop",
  "Product demo or access request",
  "Speaking or something else",
];

export const teamSizes = ["Just me / 1–10", "11–100", "101–1,000", "1,000+"];
export const timelines = ["Now (within a month)", "1–3 months", "3–6 months", "Exploring"];
export const budgets = ["Under $10k", "$10k–$50k", "$50k–$150k", "$150k+", "Not sure yet"];

export const contactHref = (topic: string) => `/contact?topic=${encodeURIComponent(topic)}#proposal`;
