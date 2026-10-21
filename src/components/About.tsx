"use client";

import { motion } from "framer-motion";
import { profile, expertiseGroups } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="The short version"
        title="An operator who has done it — not a slide deck."
      />

      <div className="grid lg:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-5 text-mist-300 leading-relaxed"
        >
          {profile.summary.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>

        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {expertiseGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card-glass rounded-2xl p-5"
            >
              <h3 className="font-display text-sm text-mist-100 mb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-mist-400 bg-white/5 border border-white/5 rounded-full px-2.5 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
