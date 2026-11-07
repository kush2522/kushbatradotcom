import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import BookCTA from "@/components/BookCTA";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Live products built by Kush Batra: Software Factory, AI Coding Tools, Brain and Recruova. Each with a demo, documentation and summary.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Working products, not slideware."
        description="Four live products I've built. Open any demo, read the docs, or ask how the same approach would work in your organisation."
      />
      <section className="mx-auto max-w-6xl px-6 pb-12 grid md:grid-cols-2 gap-5">
        {products.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </section>
      <BookCTA title="Want a guided walkthrough?" text="I'll demo any of these live and show how it maps to your team." />
    </>
  );
}
