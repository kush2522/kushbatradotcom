"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays } from "lucide-react";
import { track } from "@vercel/analytics";

// Mobile-only bar so the main action is always one tap away. Hidden on /contact.
export default function StickyCTA() {
  const pathname = usePathname();
  if (pathname.startsWith("/contact")) return null;
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-white/10 bg-ink-950/90 backdrop-blur-lg px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <Link
        href="/contact#proposal"
        onClick={() => track("cta_click", { from: "sticky_mobile" })}
        className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-5 py-3 text-sm font-medium text-ink-950"
      >
        <CalendarDays size={16} /> Get a proposal in 48 hours
      </Link>
    </div>
  );
}
