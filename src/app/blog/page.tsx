import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Field notes on rolling out AI coding agents, agentic RAG, AI code review, MCP security and LLM cost control in the enterprise.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Field notes from enterprise GenAI."
        description="What actually works when you take AI from demo to thousands of users — written from the inside."
      />
      <section className="mx-auto max-w-5xl px-6 pb-20 space-y-5">
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
                <p className="mt-3 text-sm text-mist-400 leading-relaxed max-w-2xl">{post.excerpt}</p>
              </div>
              <ArrowUpRight
                size={20}
                className="text-mist-400 group-hover:text-accent-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0"
              />
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-mist-400">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} /> {post.readTime}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-white/5 border border-white/5 rounded-full px-2.5 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
