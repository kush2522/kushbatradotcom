import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BookCTA from "@/components/BookCTA";
import { caseStudies } from "@/data/consulting";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Enterprise GenAI outcomes: AI coding agents for 30,000+ engineers, AI code review across 50,000+ repos, agentic RAG across 70+ platforms, and $1.8M/month cloud savings.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Work I've led, and what it delivered."
        description="These are programs I led as an engineering leader. The same playbooks now power my client engagements."
      />

      <section className="mx-auto max-w-6xl px-6 pb-12 space-y-6">
        {caseStudies.map((cs) => (
          <article key={cs.slug} id={cs.slug} className="scroll-mt-24 card-glass rounded-3xl p-7 sm:p-10">
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-mist-400">
                  {cs.client}
                </span>
                <div className="mt-4 font-display text-5xl text-gradient font-medium">{cs.metric}</div>
                <div className="mt-2 text-sm text-mist-400">{cs.metricLabel}</div>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {cs.tags.map((t) => (
                    <span key={t} className="text-xs text-mist-400 bg-white/5 border border-white/5 rounded-full px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2">
                <h2 className="font-display text-2xl text-mist-100 leading-snug">{cs.title}</h2>
                <h3 className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">Challenge</h3>
                <p className="mt-2 text-mist-300 leading-relaxed">{cs.challenge}</p>
                <h3 className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">Approach</h3>
                <ul className="mt-3 space-y-2">
                  {cs.approach.map((a) => (
                    <li key={a} className="flex gap-2.5 text-sm text-mist-300 leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent-violet shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
                <h3 className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">Outcome</h3>
                <ul className="mt-3 space-y-2">
                  {cs.outcome.map((o) => (
                    <li key={o} className="flex gap-2.5 text-sm text-mist-200">
                      <Check size={16} className="shrink-0 mt-0.5 text-accent-cyan" /> {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <BookCTA title="Want results like these in your organisation?" />
    </>
  );
}
