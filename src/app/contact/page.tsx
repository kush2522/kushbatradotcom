import { Suspense } from "react";
import type { Metadata } from "next";
import { CalendarDays, CalendarPlus, Clock, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/profile";
import { BOOKING_URL, calendarInviteUrl, faqs } from "@/data/consulting";

export const metadata: Metadata = {
  title: "Contact & Book a Call",
  description: "Book a free 30-minute call with Kush Batra, or get in touch by email, phone or WhatsApp.",
};

export default function ContactPage() {
  const contacts = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Message me", href: profile.whatsapp },
    { icon: Linkedin, label: "LinkedIn", value: "in/kush-batra", href: profile.linkedin },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a scoped proposal in 48 hours."
        description="Tell me what you need, or book a free 30-minute call. Either way you'll get a written scope, timeline and fixed or capped price."
      />

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="card-glass rounded-3xl p-7 sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
                <CalendarDays size={14} /> Schedule
              </span>
              <h2 className="mt-3 font-display text-2xl text-mist-100">Free 30-minute discovery call</h2>
              <p className="mt-2 text-mist-400 leading-relaxed">
                {BOOKING_URL
                  ? "Pick a slot below — you'll get a Google Calendar invite with a Meet link straight away."
                  : "Send me a Google Calendar invite for a time that suits you — I'll accept it or propose an alternative within one business day."}
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm text-mist-400">
                <Clock size={15} /> {profile.timezone}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {BOOKING_URL && (
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-6 py-3 text-sm font-medium text-ink-950 hover:scale-[1.03] transition-transform"
                >
                  <CalendarDays size={16} /> Open booking page
                </a>
              )}
              <a
                href={calendarInviteUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  BOOKING_URL
                    ? "inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-mist-200 hover:bg-white/5 transition-colors"
                    : "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-6 py-3 text-sm font-medium text-ink-950 hover:scale-[1.03] transition-transform"
                }
              >
                <CalendarPlus size={16} /> Send a Google Calendar invite
              </a>
            </div>
          </div>

          {BOOKING_URL && (
            <div className="mt-8 rounded-2xl overflow-hidden bg-white">
              <iframe
                src={BOOKING_URL}
                title="Book a call with Kush Batra"
                className="w-full h-[640px] border-0"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </section>

      <section id="proposal" className="scroll-mt-24 mx-auto max-w-6xl px-6 pb-12 grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 card-glass rounded-3xl p-7 sm:p-10">
          <h2 className="font-display text-xl text-mist-100">Request a proposal</h2>
          <p className="mt-2 mb-6 text-sm text-mist-400">A few lines is plenty. I&apos;ll come back with questions or a time to talk.</p>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
        <div className="lg:col-span-2 space-y-4">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="card-glass rounded-2xl p-5 flex items-center gap-4 hover:border-accent-cyan/30 transition-colors"
            >
              <span className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-white/5 text-accent-cyan">
                <c.icon size={18} />
              </span>
              <span>
                <span className="block text-xs text-mist-400">{c.label}</span>
                <span className="block text-sm text-mist-100">{c.value}</span>
              </span>
            </a>
          ))}
          <div className="card-glass rounded-2xl p-5 flex items-center gap-4">
            <span className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-white/5 text-accent-cyan">
              <MapPin size={18} />
            </span>
            <span>
              <span className="block text-xs text-mist-400">Based in</span>
              <span className="block text-sm text-mist-100">{profile.location}</span>
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="font-display text-2xl text-mist-100 mb-6">Frequently asked</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group card-glass rounded-2xl p-5">
              <summary className="cursor-pointer list-none flex justify-between gap-4 text-mist-100">
                {f.q}
                <span className="text-accent-cyan transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-mist-400 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
