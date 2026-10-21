"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/data/profile";

const topics = [
  "AI coding agents rollout",
  "GenAI strategy / architecture review",
  "Agentic RAG / AI platform build",
  "AI governance, security & cost",
  "Fractional AI engineering lead",
  "Training / workshop",
  "Speaking or something else",
];

const field =
  "w-full rounded-xl bg-ink-900 border border-white/10 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-400/70 focus:outline-none focus:border-accent-cyan/50";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    topic: topics[0],
    message: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[kushbatra.com] ${form.topic} — ${form.company || form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company}`,
      `Topic: ${form.topic}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs text-mist-400">Name</span>
          <input required value={form.name} onChange={set("name")} className={`${field} mt-1.5`} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="text-xs text-mist-400">Work email</span>
          <input required type="email" value={form.email} onChange={set("email")} className={`${field} mt-1.5`} placeholder="you@company.com" />
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs text-mist-400">Company</span>
          <input value={form.company} onChange={set("company")} className={`${field} mt-1.5`} placeholder="Company" />
        </label>
        <label className="block">
          <span className="text-xs text-mist-400">I&apos;m interested in</span>
          <select value={form.topic} onChange={set("topic")} className={`${field} mt-1.5`}>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-xs text-mist-400">What are you trying to achieve?</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={set("message")}
          className={`${field} mt-1.5 resize-y`}
          placeholder="Team size, tools in use, timeline, and what success looks like."
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-6 py-3 text-sm font-medium text-ink-950 hover:scale-[1.03] transition-transform"
      >
        <Send size={15} /> Send message
      </button>
      <p className="text-xs text-mist-400">Opens your email app with the details filled in. I reply within one business day.</p>
    </form>
  );
}
