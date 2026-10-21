import type { Metadata } from "next";
import { Check, GraduationCap, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BookCTA from "@/components/BookCTA";
import { trainingFormats, trainingPrograms } from "@/data/consulting";

export const metadata: Metadata = {
  title: "GenAI Training & Workshops",
  description:
    "Hands-on corporate training on AI coding agents (Claude Code, Codex, Cursor), production RAG and agents, GenAI leadership and secure AI.",
};

export default function TrainingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Training"
        title="Hands-on GenAI training, taught by a practitioner."
        description="Programs built from shipping AI to tens of thousands of engineers. Every session is practical, customised to your stack, and ends with something your team has actually built."
      />

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="flex flex-wrap gap-3">
          {trainingFormats.map((f) => (
            <span
              key={f}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-mist-300"
            >
              <Check size={13} className="text-accent-cyan" /> {f}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 space-y-6">
        {trainingPrograms.map((t, i) => (
          <article
            key={t.slug}
            id={t.slug}
            className="scroll-mt-24 card-glass rounded-3xl p-7 sm:p-10"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-2xl">
                <span className="font-mono text-xs text-accent-violet">
                  Program {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 font-display text-2xl text-mist-100">{t.title}</h2>
                <p className="mt-3 text-mist-300 leading-relaxed">{t.summary}</p>
              </div>
              <div className="text-sm text-mist-400 space-y-2 min-w-[220px]">
                <p className="flex gap-2">
                  <Users size={16} className="shrink-0 mt-0.5 text-accent-blue" /> {t.audience}
                </p>
                <p className="flex gap-2">
                  <GraduationCap size={16} className="shrink-0 mt-0.5 text-accent-blue" /> {t.format}
                </p>
              </div>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist-400">
                  Participants will
                </p>
                <ul className="mt-4 space-y-2.5">
                  {t.outcomes.map((o) => (
                    <li key={o} className="flex gap-2.5 text-sm text-mist-200">
                      <Check size={16} className="shrink-0 mt-0.5 text-accent-cyan" /> {o}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist-400">
                  Modules
                </p>
                <ol className="mt-4 space-y-2.5">
                  {t.modules.map((m, j) => (
                    <li key={m} className="flex gap-3 text-sm text-mist-300">
                      <span className="font-mono text-xs text-mist-400 mt-0.5 w-5">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      {m}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </article>
        ))}
      </section>

      <BookCTA
        title="Plan a training for your team."
        text="Tell me who's attending, what tools you use and what you want them to do differently afterwards. I'll send an outline and a fixed quote."
      />
    </>
  );
}
