import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import BookCTA from "@/components/BookCTA";
import { blogPosts } from "@/data/blog";
import { profile } from "@/data/profile";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

type Block = { kind: "h2" | "p" | "quote"; text: string } | { kind: "ul"; items: string[] };

function toBlocks(content: string[]): Block[] {
  const blocks: Block[] = [];
  for (const line of content) {
    if (line.startsWith("- ")) {
      const last = blocks[blocks.length - 1];
      if (last && last.kind === "ul") last.items.push(line.slice(2));
      else blocks.push({ kind: "ul", items: [line.slice(2)] });
    } else if (line.startsWith("## ")) blocks.push({ kind: "h2", text: line.slice(3) });
    else if (line.startsWith("> ")) blocks.push({ kind: "quote", text: line.slice(2) });
    else blocks.push({ kind: "p", text: line });
  }
  return blocks;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <article className="mx-auto max-w-3xl px-6 pt-20 pb-8">
        <Link
          href="/blog"
          className="flex w-fit items-center gap-2 text-sm text-mist-400 hover:text-accent-cyan transition-colors mb-10"
        >
          <ArrowLeft size={15} /> All insights
        </Link>

        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">{post.tags.join(" · ")}</span>
        <h1 className="mt-4 font-display text-3xl sm:text-4xl text-mist-100 font-medium tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-5 text-xs text-mist-400">
          <span className="text-mist-200">{profile.name}</span>
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} /> {post.readTime}
          </span>
        </div>

        <div className="mt-12 space-y-6 text-mist-300 leading-relaxed text-[17px]">
          {toBlocks(post.content).map((b, i) => {
            if (b.kind === "h2")
              return (
                <h2 key={i} className="pt-4 font-display text-2xl text-mist-100">
                  {b.text}
                </h2>
              );
            if (b.kind === "quote")
              return (
                <blockquote key={i} className="border-l-2 border-accent-cyan pl-5 font-display text-xl text-mist-100 leading-snug">
                  {b.text}
                </blockquote>
              );
            if (b.kind === "ul")
              return (
                <ul key={i} className="space-y-2.5">
                  {b.items.map((it, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent-violet shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              );
            return <p key={i}>{b.text}</p>;
          })}
        </div>
      </article>
      <BookCTA title="Working on something similar?" text="I help teams solve exactly these problems. Book a free 30-minute call." />
    </>
  );
}
