"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/profile";

export default function Stats() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 -mt-8 sm:-mt-12">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-glass rounded-2xl px-5 py-6 text-center"
          >
            <div className="font-display text-2xl sm:text-3xl text-gradient font-medium">
              {s.value}
            </div>
            <div className="mt-2 text-xs text-mist-400 leading-snug">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
