import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Recognition from "@/components/Recognition";
import BookCTA from "@/components/BookCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kush Batra — former Director of Generative AI & Engineering at Capital One, now an independent enterprise GenAI advisor and trainer based in Bengaluru.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Sixteen years of shipping platforms. The last three, shipping GenAI."
        description="From telecom data centres to a 55PB fintech data estate to AI agents at a top US bank — the throughline is the same: ship it, scale it, keep it reliable."
      />
      <About />
      <Experience />
      <Recognition />
      <BookCTA />
    </>
  );
}
