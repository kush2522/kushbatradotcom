import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/consulting";
import SectionHeading from "./SectionHeading";
import ServiceIcon from "./ServiceIcon";

export default function ServicesGrid() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Services"
        title="Five ways I help teams ship GenAI that lasts."
        description="Every engagement is built on work I've already done at enterprise scale — not slideware."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services#${s.slug}`}
            className="group card-glass rounded-2xl p-6 flex flex-col hover:border-accent-cyan/30 transition-colors"
          >
            <div className="flex items-start justify-between">
              <ServiceIcon icon={s.icon} />
              <ArrowUpRight
                size={18}
                className="text-mist-400 group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </div>
            <h3 className="mt-5 font-display text-lg text-mist-100">{s.title}</h3>
            <p className="mt-2 text-sm text-mist-400 leading-relaxed flex-1">{s.promise}</p>
            <p className="mt-5 font-mono text-[11px] text-accent-cyan">{s.duration}</p>
          </Link>
        ))}
        <Link
          href="/training"
          className="group rounded-2xl p-6 flex flex-col border border-dashed border-white/15 hover:border-accent-violet/40 transition-colors"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-violet">
            Training
          </span>
          <h3 className="mt-4 font-display text-lg text-mist-100">
            Hands-on workshops and bootcamps
          </h3>
          <p className="mt-2 text-sm text-mist-400 leading-relaxed flex-1">
            AI coding agents, production RAG, GenAI leadership and secure AI — customised to your stack.
          </p>
          <span className="mt-5 inline-flex items-center gap-1 text-sm text-mist-200 group-hover:text-accent-violet">
            Explore programs <ArrowUpRight size={15} />
          </span>
        </Link>
      </div>
    </section>
  );
}
