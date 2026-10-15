"use client";

import { motion } from "framer-motion";
import { Award, MapPin } from "lucide-react";
import { experience } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Experience"
        title="Sixteen years, one throughline: ship it, scale it, keep it reliable."
      />

      <div className="relative">
        <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-cyan via-accent-blue/50 to-transparent" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative pl-8 sm:pl-10"
            >
              <span className="absolute left-0 top-1.5 w-3.5 h-3.5 sm:w-5.5 sm:h-5.5 rounded-full bg-ink-950 border-2 border-accent-cyan" />

              <div className="card-glass rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg text-mist-100">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs text-accent-cyan">
                    {job.period}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-mist-400 mb-4">
                  <span className="text-mist-200">{job.company}</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} /> {job.location}
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-mist-300 leading-relaxed">
                  {job.points.map((pt, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-accent-violet mt-1.5 w-1 h-1 rounded-full bg-accent-violet shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                {job.recognition && (
                  <div className="mt-4 flex items-center gap-2 text-xs text-accent-amber">
                    <Award size={14} />
                    {job.recognition}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
