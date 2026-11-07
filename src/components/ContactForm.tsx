"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CalendarDays, CheckCircle2, Send } from "lucide-react";
import { track } from "@vercel/analytics";
import { profile } from "@/data/profile";
import { bookingHref } from "@/data/consulting";
import { budgets, teamSizes, timelines, topics } from "@/data/topics";

const field =
  "w-full rounded-xl bg-ink-900 border border-white/10 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-400/70 focus:outline-none focus:border-accent-cyan/50";

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

export default function ContactForm() {
  const requested = useSearchParams().get("topic");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    topic: requested && topics.includes(requested) ? requested : topics[0],
    teamSize: "",
    timeline: "",
    budget: "",
    message: "",
    website: "", // honeypot
  });
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const openMail = () => {
    const subject = `[kushbatra.com] ${form.topic} — ${form.company || form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company}`,
      `Topic: ${form.topic}`,
      `Team size: ${form.teamSize}`,
      `Timeline: ${form.timeline}`,
      `Budget: ${form.budget}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        track("lead_submitted", { topic: form.topic });
        setStatus("sent");
      } else if (res.status === 503) {
        // Delivery not configured: keep the lead by falling back to the email app.
        setStatus("fallback");
        openMail();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-accent-cyan/30 bg-accent-cyan/5 p-6">
        <CheckCircle2 className="text-accent-cyan" size={28} />
        <h3 className="mt-3 font-display text-xl text-mist-100">Thanks, {form.name.split(" ")[0]}. I have your message.</h3>
        <p className="mt-2 text-sm text-mist-300 leading-relaxed">
          I'll reply within one business day. Want to move faster? Pick a time and we can talk this week.
        </p>
        <a
          href={bookingHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("book_call_click", { from: "form_success" })}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-6 py-3 text-sm font-medium text-ink-950 hover:scale-[1.03] transition-transform"
        >
          <CalendarDays size={16} /> Book a call
        </a>
      </div>
    );
  }

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
      <div className="grid sm:grid-cols-3 gap-4">
        {(
          [
            ["teamSize", "Team size", teamSizes],
            ["timeline", "Timeline", timelines],
            ["budget", "Budget (optional)", budgets],
          ] as const
        ).map(([key, label, options]) => (
          <label key={key} className="block">
            <span className="text-xs text-mist-400">{label}</span>
            <select value={form[key]} onChange={set(key)} className={`${field} mt-1.5`}>
              <option value="">Select…</option>
              {options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
        ))}
      </div>
      <label className="block">
        <span className="text-xs text-mist-400">What are you trying to achieve?</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={set("message")}
          className={`${field} mt-1.5 resize-y`}
          placeholder="Tools in use, constraints, and what success looks like."
        />
      </label>
      <input
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.website}
        onChange={set("website")}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        name="website"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-6 py-3 text-sm font-medium text-ink-950 hover:scale-[1.03] transition-transform disabled:opacity-60"
      >
        <Send size={15} /> {status === "sending" ? "Sending…" : "Request my proposal"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-300">
          That didn&apos;t go through.{" "}
          <button type="button" onClick={openMail} className="underline">
            Email me instead
          </button>
          .
        </p>
      )}
      {status === "fallback" && (
        <p className="text-sm text-mist-300">Opening your email app with the details filled in.</p>
      )}
      <p className="text-xs text-mist-400">You&apos;ll get a reply within one business day and a written proposal within 48 hours of our first call.</p>
    </form>
  );
}
