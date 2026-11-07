import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ServicesGrid from "@/components/ServicesGrid";
import SectionHeading from "@/components/SectionHeading";
import CaseStudyCard from "@/components/CaseStudyCard";
import BookCTA from "@/components/BookCTA";
import { caseStudies, processSteps, trainingPrograms } from "@/data/consulting";
import ProductCard from "@/components/ProductCard";
import { blogPosts } from "@/data/blog";
import { products } from "@/data/products";

const differentiators = [
  {
    title: "I've done it at scale, in a regulated bank",
    text: "30,000+ users on AI coding agents and 50,000+ repositories under AI review — with Risk, Cyber and Model Risk signing off.",
  },
  {
    title: "Engineering and operations first",
    text: "Sixteen years of SRE, platform and cloud work. I care about evals, telemetry, rollback and cost as much as models.",
  },
  {
    title: "Vendor-neutral",
    text: "Anthropic, OpenAI, Google and open-weight models, side by side. Recommendations follow your constraints.",
  },
  {
    title: "I leave capability behind",
    text: "Your engineers pair with me, own the runbooks and dashboards, and keep shipping after I've gone.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Products"
            title="Live products, each with a demo and docs."
          />
          <Link href="/products" className="mb-14 text-sm text-mist-300 hover:text-accent-cyan inline-flex items-center gap-1">
            All products <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {products.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Why me" title="Advice from someone who has carried the pager." />
        <div className="grid sm:grid-cols-2 gap-5">
          {differentiators.map((d) => (
            <div key={d.title} className="card-glass rounded-2xl p-6 flex gap-4">
              <span className="mt-0.5 inline-flex w-6 h-6 shrink-0 items-center justify-center rounded-full bg-accent-cyan/15 text-accent-cyan">
                <Check size={14} />
              </span>
              <div>
                <h3 className="font-display text-base text-mist-100">{d.title}</h3>
                <p className="mt-2 text-sm text-mist-400 leading-relaxed">{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Case studies" title="Outcomes, with numbers attached." />
          <Link href="/case-studies" className="mb-14 text-sm text-mist-300 hover:text-accent-cyan inline-flex items-center gap-1">
            All case studies <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} cs={cs} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Training"
            title="Upskill your teams on the work they'll actually do."
          />
          <Link href="/training" className="mb-14 text-sm text-mist-300 hover:text-accent-cyan inline-flex items-center gap-1">
            All programs <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {trainingPrograms.map((t) => (
            <Link
              key={t.slug}
              href={`/training#${t.slug}`}
              className="group card-glass rounded-2xl p-6 hover:border-accent-violet/30 transition-colors"
            >
              <span className="font-mono text-[11px] text-accent-violet">{t.format}</span>
              <h3 className="mt-3 font-display text-lg text-mist-100 group-hover:text-accent-violet transition-colors">
                {t.title}
              </h3>
              <p className="mt-2 text-sm text-mist-400 leading-relaxed">{t.summary}</p>
              <p className="mt-4 text-xs text-mist-400">For: {t.audience}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="How it works" title="Simple to start. Built to hand over." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((p) => (
            <div key={p.step} className="card-glass rounded-2xl p-6">
              <span className="font-mono text-sm text-gradient">{p.step}</span>
              <h3 className="mt-3 font-display text-base text-mist-100">{p.title}</h3>
              <p className="mt-2 text-sm text-mist-400 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Insights" title="Field notes from enterprise GenAI." />
          <Link href="/blog" className="mb-14 text-sm text-mist-300 hover:text-accent-cyan inline-flex items-center gap-1">
            All posts <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card-glass rounded-2xl p-6 flex flex-col hover:border-accent-cyan/30 transition-colors"
            >
              <span className="font-mono text-[11px] text-mist-400">
                {post.tags[0]} · {post.readTime}
              </span>
              <h3 className="mt-3 font-display text-base text-mist-100 leading-snug group-hover:text-accent-cyan transition-colors">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-mist-400 leading-relaxed flex-1">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <BookCTA />
    </>
  );
}
