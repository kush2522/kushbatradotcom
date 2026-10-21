"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const logos = ["Capital One", "Paytm", "Telia Group", "Huawei", "Ericsson"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-glow-radial from-accent-violet/20 via-accent-blue/10 to-transparent blur-3xl animate-pulse-slow" />
      <div className="absolute top-40 -right-20 w-[400px] h-[400px] rounded-full bg-glow-radial from-accent-cyan/10 to-transparent blur-3xl animate-float" />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-28 sm:pt-28 sm:pb-36">
        <motion.div
          {...fade(0)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-mist-300 mb-8"
        >
          <Sparkles size={14} className="text-accent-cyan" />
          {profile.availability}
        </motion.div>

        <motion.h1
          {...fade(0.1)}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-mist-100 max-w-4xl"
        >
          Take generative AI from pilot to{" "}
          <span className="text-gradient">governed production</span>.
        </motion.h1>

        <motion.p {...fade(0.2)} className="mt-6 max-w-2xl text-lg text-mist-300 leading-relaxed">
          {profile.subhead}
        </motion.p>

        <motion.div {...fade(0.3)} className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-6 py-3 text-sm font-medium text-ink-950 transition-transform hover:scale-[1.03]"
          >
            <CalendarDays size={16} />
            Book a free 30-min call
          </Link>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-mist-200 hover:bg-white/5 transition-colors"
          >
            See how I help
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div {...fade(0.4)} className="mt-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist-400">
            16 years building and running platforms for
          </p>
          <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 font-display text-mist-300/80 text-lg">
            {logos.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
