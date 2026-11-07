"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendarDays, ChevronDown, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { products } from "@/data/products";

const productLinks = products.map((p) => ({ href: `/products/${p.slug}`, label: p.name }));

const links = [
  { href: "/offerings", label: "Offerings" },
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
          {links.slice(0, 1).map((l) => (
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
          <div className="relative group">
            <Link
              href="/products"
              className={`inline-flex items-center gap-1 transition-colors hover:text-mist-100 ${
                isActive("/products") ? "text-mist-100" : ""
              }`}
            >
              Products <ChevronDown size={14} />
            </Link>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity absolute left-1/2 -translate-x-1/2 top-full pt-3">
              <div className="w-64 rounded-xl border border-white/10 bg-ink-900/95 backdrop-blur-lg p-2 shadow-xl">
                {productLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-mist-100"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link href="/products" className="block rounded-lg px-3 py-2 text-xs text-accent-cyan hover:bg-white/5">
                  All products, demos and docs
                </Link>
              </div>
            </div>
          </div>
          {links.slice(1).map((l) => (
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
            href="/contact#proposal"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-4 py-2 text-sm font-medium text-ink-950 hover:scale-[1.03] transition-transform"
          >
            <CalendarDays size={15} /> Get a proposal
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
          {[links[0], { href: "/products", label: "Products" }, ...productLinks.map((l) => ({ ...l, sub: true })), ...links.slice(1)].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:text-mist-100 transition-colors ${"sub" in l ? "pl-4 text-mist-400" : ""}`}
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
