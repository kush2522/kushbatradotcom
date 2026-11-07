import Link from "next/link";
import { ArrowUpRight, BookOpen, PlayCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { contactHref } from "@/data/topics";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <div className="card-glass rounded-2xl p-6 flex flex-col hover:border-accent-cyan/30 transition-colors">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-accent-cyan">{p.status}</span>
        <span className="font-mono text-[11px] text-mist-400">{p.url.replace("https://", "")}</span>
      </div>
      <Link href={`/products/${p.slug}`} className="group">
        <h3 className="mt-4 font-display text-xl text-mist-100 group-hover:text-accent-cyan transition-colors">
          {p.name}
        </h3>
        <p className="mt-1 text-sm text-mist-300">{p.tagline}</p>
      </Link>
      <p className="mt-3 text-sm text-mist-400 leading-relaxed flex-1">{p.summary}</p>
      <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
        <a
          href={p.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-4 py-2 font-medium text-ink-950 hover:scale-[1.03] transition-transform"
        >
          <PlayCircle size={15} /> Live demo
        </a>
        {p.status === "Sign-in required" && (
          <Link
            href={contactHref("Product demo or access request")}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-mist-200 hover:bg-white/5 transition-colors"
          >
            Request access
          </Link>
        )}
        <Link
          href={`/products/${p.slug}#docs`}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-mist-200 hover:bg-white/5 transition-colors"
        >
          <BookOpen size={15} /> Docs
        </Link>
        <Link
          href={`/products/${p.slug}`}
          className="inline-flex items-center gap-1 px-2 py-2 text-mist-300 hover:text-accent-cyan"
        >
          Summary <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
}
