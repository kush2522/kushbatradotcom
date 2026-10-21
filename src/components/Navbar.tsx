"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendarDays, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "/services", label: "Services" },
  { href: "/training", label: "Training" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Insights" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled || open
          ? "bg-ink-950/85 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-sm tracking-wide text-mist-100 flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan via-accent-blue to-accent-violet flex items-center justify-center text-ink-950 font-bold text-xs">
            {profile.initials}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-mist-100">{profile.name}</span>
            <span className="hidden sm:inline text-[11px] text-mist-400">
              {profile.shortTitle}
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm text-mist-300">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors hover:text-mist-100 ${
                isActive(l.href) ? "text-mist-100" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-4 py-2 text-sm font-medium text-ink-950 hover:scale-[1.03] transition-transform"
          >
            <CalendarDays size={15} /> Book a call
          </Link>
        </div>

        <button
          className="md:hidden text-mist-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 px-6 py-4 flex flex-col gap-4 text-sm text-mist-300">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-mist-100 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-4 py-2 font-medium text-ink-950"
          >
            <CalendarDays size={15} /> Book a call
          </Link>
        </div>
      )}
    </header>
  );
}
