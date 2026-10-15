"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/demos", label: "Demos" },
  { href: "/video-resume", label: "Video Resume" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-ink-950/80 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-sm tracking-wide text-mist-100 flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan via-accent-blue to-accent-violet flex items-center justify-center text-ink-950 font-bold text-xs">
            {profile.initials}
          </span>
          <span className="hidden sm:inline text-mist-200">{profile.name}</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-mist-300">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-mist-100 transition-colors"
            >
              {l.label}
            </Link>
          ))}
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
        <div className="md:hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-lg px-6 py-4 flex flex-col gap-4 text-sm text-mist-300">
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
        </div>
      )}
    </header>
  );
}
