import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/profile";

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
  return { title: `${post.title} — Kush Batra`, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 pt-20 pb-28">
      <Link
        href="/blog"
        className="flex w-fit items-center gap-2 text-sm text-mist-400 hover:text-accent-cyan transition-colors mb-10"
      >
        <ArrowLeft size={15} /> Back to blog
      </Link>

      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
        {post.tags.join(" · ")}
      </span>
      <h1 className="mt-4 font-display text-3xl sm:text-4xl text-mist-100 font-medium tracking-tight leading-tight">
        {post.title}
      </h1>

      <div className="mt-5 flex items-center gap-5 text-xs text-mist-500">
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
      </div>

      <div className="mt-12 space-y-6 text-mist-300 leading-relaxed text-[17px]">
        {post.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </article>
  );
}
