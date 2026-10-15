import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/data/profile";

export const metadata: Metadata = {
  title: "Blog — Kush Batra",
  description: "Notes on AI engineering, platform engineering and leadership.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-28">
      <SectionHeading
        eyebrow="Writing"
        title="Notes from the trenches."
        description="Field notes on AI engineering, platform engineering, and leading large-scale technology transformation."
      />

      <div className="space-y-5">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block card-glass rounded-2xl p-7 hover:border-accent-cyan/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-xl text-mist-100 group-hover:text-accent-cyan transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-mist-400 leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
              </div>
              <ArrowUpRight
                size={20}
                className="text-mist-500 group-hover:text-accent-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0"
              />
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-mist-500">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {post.readTime}
              </span>
              <div className="flex gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/5 border border-white/5 rounded-full px-2.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
