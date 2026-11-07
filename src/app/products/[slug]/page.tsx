import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, BookOpen, Check, PlayCircle } from "lucide-react";
import BookCTA from "@/components/BookCTA";
import { offeringBySlug, productBySlug, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) return {};
  return { title: `${p.name} — ${p.tagline}`, description: p.summary };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) notFound();
  const related = p.offerings.map(offeringBySlug).filter((o) => !!o);

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <Link href="/products" className="inline-flex items-center gap-1 text-sm text-mist-400 hover:text-accent-cyan">
          <ArrowLeft size={14} /> All products
        </Link>
        <span className="mt-8 block font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">{p.status}</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-medium tracking-tight text-mist-100">{p.name}</h1>
        <p className="mt-3 text-xl text-mist-300 max-w-2xl">{p.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <a
            href={p.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-5 py-2.5 font-medium text-ink-950 hover:scale-[1.03] transition-transform"
          >
            <PlayCircle size={16} /> Open live demo
          </a>
          <Link
            href="#docs"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-mist-200 hover:bg-white/5 transition-colors"
          >
            <BookOpen size={16} /> Documentation
          </Link>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2 py-2.5 text-mist-300 hover:text-accent-cyan"
          >
            {p.url.replace("https://", "")} <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      <section id="summary" className="mx-auto max-w-6xl px-6 py-10 scroll-mt-24 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 card-glass rounded-3xl p-7 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist-400">Summary</p>
          <p className="mt-4 text-lg text-mist-200 leading-relaxed">{p.summary}</p>
        </div>
        <div className="lg:col-span-2 card-glass rounded-3xl p-7 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist-400">Highlights</p>
          <ul className="mt-4 space-y-3">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm text-mist-200 leading-relaxed">
                <Check size={16} className="shrink-0 mt-0.5 text-accent-cyan" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="docs" className="mx-auto max-w-6xl px-6 py-10 scroll-mt-24">
        <div className="card-glass rounded-3xl p-7 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist-400">Documentation</p>
          <h2 className="mt-3 font-display text-2xl text-mist-100">Getting started with {p.name}</h2>
          <p className="mt-3 text-mist-300 leading-relaxed max-w-3xl">{p.docs.overview}</p>
          <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {p.docs.steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-white/10 p-5">
                <span className="font-mono text-sm text-gradient">0{i + 1}</span>
                <h3 className="mt-2 font-display text-base text-mist-100">{s.title}</h3>
                <p className="mt-2 text-sm text-mist-400 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
          <ul className="mt-8 space-y-2 text-sm text-mist-400 list-disc pl-5">
            {p.docs.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          {p.docsUrl && (
            <a href={p.docsUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1 text-sm text-accent-cyan">
              Full documentation <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist-400">Related offerings</p>
          <div className="mt-4 grid md:grid-cols-2 gap-5">
            {related.map((o) => (
              <Link
                key={o!.slug}
                href={`/offerings#${o!.slug}`}
                className="group card-glass rounded-2xl p-6 hover:border-accent-cyan/30 transition-colors"
              >
                <h3 className="font-display text-base text-mist-100 group-hover:text-accent-cyan transition-colors">{o!.title}</h3>
                <p className="mt-2 text-sm text-mist-400 leading-relaxed">{o!.getting}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <BookCTA title={`Want ${p.name} in your organisation?`} text="Book a call and I'll walk you through it live." />
    </>
  );
}
