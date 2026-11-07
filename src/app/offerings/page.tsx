import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, PlayCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import OfferingIcon from "@/components/OfferingIcon";
import BookCTA from "@/components/BookCTA";
import { offerings, productBySlug, walkthroughHref } from "@/data/products";

export const metadata: Metadata = {
  title: "Offerings",
  description:
    "Technology strategy, agentic ecosystem, software factory and DevOps, cloud, data platforms, AI governance and managed engineering, each with a demo.",
};

export default function OfferingsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Offerings"
        title="Seven capabilities. Each one with a demo."
        description="What a customer gets, and a live product or guided walkthrough that shows it."
      />
      <section className="mx-auto max-w-6xl px-6 pb-12 space-y-5">
        {offerings.map((o) => {
          const demos = o.demoProducts.map(productBySlug).filter((p) => !!p);
          return (
            <article
              key={o.slug}
              id={o.slug}
              className="scroll-mt-24 card-glass rounded-3xl p-7 sm:p-10 grid lg:grid-cols-5 gap-8"
            >
              <div className="lg:col-span-3">
                <OfferingIcon icon={o.icon} />
                <h2 className="mt-5 font-display text-2xl text-mist-100">{o.title}</h2>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-mist-400">What a customer gets</p>
                <p className="mt-2 text-mist-300 leading-relaxed">{o.getting}</p>
              </div>
              <div className="lg:col-span-2 flex flex-col gap-3 justify-center">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist-400">Demo</p>
                {demos.map((p) => (
                  <Link
                    key={p!.slug}
                    href={`/products/${p!.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-5 py-2.5 text-sm font-medium text-ink-950 hover:scale-[1.02] transition-transform w-fit"
                  >
                    <PlayCircle size={16} /> {p!.name}
                  </Link>
                ))}
                <a
                  href={walkthroughHref(o.walkthroughTopic)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-mist-200 hover:bg-white/5 transition-colors w-fit"
                >
                  <CalendarDays size={16} /> {demos.length ? "Book a guided walkthrough" : "Book a live walkthrough"}
                </a>
              </div>
            </article>
          );
        })}
      </section>
      <BookCTA title="Not sure where to start?" text="Tell me the outcome you need. We'll pick the smallest engagement that gets you there." />
    </>
  );
}
