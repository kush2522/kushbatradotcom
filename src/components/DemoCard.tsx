"use client";

import { motion } from "framer-motion";
import { PlayCircle, Clock } from "lucide-react";
import type { DemoProject } from "@/data/profile";

export default function DemoCard({
  demo,
  index,
}: {
  demo: DemoProject;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card-glass rounded-2xl overflow-hidden group hover:border-accent-cyan/30 transition-colors"
    >
      <div className="relative aspect-video bg-ink-800 flex items-center justify-center">
        {demo.videoUrl ? (
          <iframe
            src={demo.videoUrl}
            title={demo.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-mist-500">
            <PlayCircle
              size={40}
              className="text-mist-600 group-hover:text-accent-cyan transition-colors"
            />
            <span className="font-mono text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Clock size={12} /> Coming soon
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-grid-pattern bg-[size:24px_24px] opacity-20 pointer-events-none" />
      </div>

      <div className="p-6">
        <h3 className="font-display text-lg text-mist-100">{demo.title}</h3>
        <p className="text-sm text-accent-cyan mt-1">{demo.tagline}</p>
        <p className="text-sm text-mist-400 mt-3 leading-relaxed">
          {demo.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {demo.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-mist-400 bg-white/5 border border-white/5 rounded-full px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
