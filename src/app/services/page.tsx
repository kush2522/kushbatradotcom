import type { Metadata } from "next";
import { Check, Clock, Target, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import BookCTA from "@/components/BookCTA";
import { engagementModels, services } from "@/data/consulting";

export const metadata: Metadata = {
  title: "GenAI Consulting Services",
  description:
    "AI coding agents rollout, GenAI strategy and architecture, agentic RAG platforms, AI governance and fractional AI engineering leadership.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Consulting for teams putting GenAI into production."
        description="Pick one focused outcome, or combine them into a program. Every service is grounded in work I've led at enterprise scale."
      />

      <section className="mx-auto max-w-6xl px-6 pb-12 space-y-6">
        {services.map((s) => (
          <article
            key={s.slug}
            id={s.slug}
            className="scroll-mt-24 card-glass rounded-3xl p-7 sm:p-10 grid lg:grid-cols-5 gap-8"
          >
            <div className="lg:col-span-2">
              <ServiceIcon icon={s.icon} />
              <h2 className="mt-5 font-display text-2xl text-mist-100">{s.title}</h2>
              <p className="mt-3 text-mist-300 leading-relaxed">{s.promise}</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex gap-2 text-mist-400">
                  <Users size={16} className="shrink-0 mt-0.5 text-accent-blue" />
                  <span>{s.forWho}</span>
                </div>
                <div className="flex gap-2 text-mist-400">
                  <Clock size={16} className="shrink-0 mt-0.5 text-accent-blue" />
                  <span>{s.duration}</span>
                </div>
                <div className="flex gap-2 text-mist-400">
                  <Target size={16} className="shrink-0 mt-0.5 text-accent-amber" />
                  <span>{s.proof}</span>
                </div>
              </dl>
            </div>
            <div className="lg:col-span-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist-400">
                What you get
              </p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex gap-2.5 text-sm text-mist-200 leading-relaxed">
                    <Check size={16} className="shrink-0 mt-0.5 text-accent-cyan" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Engagement models"
          title="Start small. Scale when it's working."
          description="Assessments and training are fixed-fee. Implementation is fixed or capped. You'll have a written proposal within 48 hours of our first call."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {engagementModels.map((m) => (
            <div key={m.name} className="card-glass rounded-2xl p-6">
              <h3 className="font-display text-base text-mist-100">{m.name}</h3>
              <p className="mt-1 font-mono text-[11px] text-accent-cyan">{m.length}</p>
              <p className="mt-3 text-sm text-mist-400 leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      <BookCTA title="Not sure which service fits?" text="Book a 30-minute call. We'll work out the smallest engagement that moves you forward." />
    </>
  );
}
