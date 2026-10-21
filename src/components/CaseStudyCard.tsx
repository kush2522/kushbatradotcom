import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/consulting";

export default function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <Link
      href={`/case-studies#${cs.slug}`}
      className="group card-glass rounded-2xl p-6 flex flex-col hover:border-accent-cyan/30 transition-colors"
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-mist-400">
        {cs.client}
      </span>
      <div className="mt-5 font-display text-4xl text-gradient font-medium">{cs.metric}</div>
      <div className="mt-1 text-xs text-mist-400">{cs.metricLabel}</div>
      <h3 className="mt-5 font-display text-base text-mist-100 leading-snug flex-1">
        {cs.title}
      </h3>
      <span className="mt-5 inline-flex items-center gap-1 text-sm text-mist-300 group-hover:text-accent-cyan">
        Read the story <ArrowUpRight size={15} />
      </span>
    </Link>
  );
}
