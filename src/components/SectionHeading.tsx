"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mb-14"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl text-mist-100 font-medium tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-mist-400 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
