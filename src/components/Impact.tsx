"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { impactHighlights } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function Impact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Selected Impact"
        title="Outcomes, not activity."
        description="A few of the initiatives that moved the needle on cost, reliability and engineering productivity at enterprise scale."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {impactHighlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="card-glass rounded-2xl p-6 group hover:border-accent-cyan/30 transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 flex items-center justify-center mb-4">
              <Zap size={16} className="text-accent-cyan" />
            </div>
            <h3 className="font-display text-base text-mist-100 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-mist-400 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
