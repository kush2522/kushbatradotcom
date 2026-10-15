import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Impact from "@/components/Impact";
import Recognition from "@/components/Recognition";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Impact />
      <Recognition />
      <ContactCTA />
    </>
  );
}
