"use client";

import { motion } from "framer-motion";
import { Trophy, GraduationCap } from "lucide-react";
import { recognition, education } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function Recognition() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Recognition" title="Awards & credentials." />

      <div className="grid lg:grid-cols-3 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 card-glass rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-5 text-mist-100">
            <Trophy size={16} className="text-accent-amber" />
            <h3 className="font-display text-base">Awards</h3>
          </div>
          <ul className="space-y-3">
            {recognition.map((r) => (
              <li
                key={r.title}
                className="flex items-center justify-between text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0"
              >
                <span className="text-mist-200">{r.title}</span>
                <span className="font-mono text-xs text-mist-400">
                  {r.org}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-glass rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-5 text-mist-100">
            <GraduationCap size={16} className="text-accent-cyan" />
            <h3 className="font-display text-base">Education</h3>
          </div>
          <ul className="space-y-4">
            {education.map((e) => (
              <li key={e.title} className="text-sm">
                <div className="text-mist-200">{e.title}</div>
                <div className="font-mono text-xs text-mist-400 mt-1">
                  {e.org} {e.period && `· ${e.period}`}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
