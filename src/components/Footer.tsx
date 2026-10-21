import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";

const cols = [
  {
    title: "Work with me",
    links: [
      { href: "/services", label: "Services" },
      { href: "/training", label: "Training" },
      { href: "/case-studies", label: "Case studies" },
      { href: "/contact", label: "Book a call" },
    ],
  },
  {
    title: "More",
    links: [
      { href: "/blog", label: "Insights" },
      { href: "/about", label: "About" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-12">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div className="lg:col-span-2">
          <p className="font-display text-mist-100">{profile.name}</p>
          <p className="mt-1 text-mist-400">{profile.title}</p>
          <p className="mt-4 text-mist-400 max-w-sm leading-relaxed">
            Advisory, implementation and training for enterprises putting generative AI into production.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-mist-300">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-accent-cyan">
              <Mail size={15} /> {profile.email}
            </a>
            <a href={`tel:${profile.phoneHref}`} className="flex items-center gap-2 hover:text-accent-cyan">
              <Phone size={15} /> {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent-cyan"
            >
              <Linkedin size={15} /> linkedin.com/in/kush-batra
            </a>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist-400">{c.title}</p>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-mist-300 hover:text-accent-cyan transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-mist-400 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
