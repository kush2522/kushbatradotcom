import type { Metadata } from "next";
import DemoCard from "@/components/DemoCard";
import SectionHeading from "@/components/SectionHeading";
import { demoProjects } from "@/data/profile";

export const metadata: Metadata = {
  title: "Product Demos — Kush Batra",
  description: "MVP product demos and walkthroughs.",
};

export default function DemosPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-28">
      <SectionHeading
        eyebrow="Demos"
        title="Product demos, built and shipped."
        description="MVP walkthroughs and product demos — drop in a YouTube/Loom embed URL per project in src/data/profile.ts (demoProjects[].videoUrl) and the card goes live automatically."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoProjects.map((demo, i) => (
          <DemoCard key={demo.title} demo={demo} index={i} />
        ))}
      </div>
    </section>
  );
}
