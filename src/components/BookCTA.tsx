import Link from "next/link";
import { CalendarDays, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";

export default function BookCTA({
  title = "Let's talk about where GenAI fits in your organisation.",
  text = "A free 30-minute call to understand your context. If I'm not the right fit, I'll tell you — and point you to someone who is.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative card-glass rounded-3xl px-8 py-16 sm:px-16 text-center overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-glow-radial from-accent-violet/20 to-transparent blur-3xl" />
        <div className="relative">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
            Work with me
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl text-mist-100 font-medium tracking-tight max-w-3xl mx-auto">
            {title}
          </h2>
          <p className="mt-4 text-mist-400 max-w-xl mx-auto">{text}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact#proposal"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-6 py-3 text-sm font-medium text-ink-950 hover:scale-[1.03] transition-transform"
            >
              <CalendarDays size={16} /> Book a call
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-mist-200 hover:bg-white/5 transition-colors"
            >
              <Mail size={16} /> {profile.email}
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-mist-200 hover:bg-white/5 transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-mist-200 hover:bg-white/5 transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
