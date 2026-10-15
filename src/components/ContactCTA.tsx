"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Mail, FileDown } from "lucide-react";
import { profile } from "@/data/profile";

export default function ContactCTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative card-glass rounded-3xl px-8 py-16 sm:px-16 text-center overflow-hidden"
      >
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-glow-radial from-accent-violet/20 to-transparent blur-3xl" />
        <div className="relative">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
            Let's talk
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl text-mist-100 font-medium tracking-tight">
            Open to the next leadership challenge.
          </h2>
          <p className="mt-4 text-mist-400 max-w-xl mx-auto">
            Reach out about Director / Head roles in Generative AI, AI platforms,
            platform engineering or developer productivity — or just to talk shop.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-6 py-3 text-sm font-medium text-ink-950 hover:scale-[1.03] transition-transform"
            >
              <Mail size={16} /> {profile.email}
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-mist-200 hover:bg-white/5 transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-mist-200 hover:bg-white/5 transition-colors"
            >
              <FileDown size={16} /> Resume
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
