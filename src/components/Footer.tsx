import Link from "next/link";
import { Linkedin, Mail, FileDown } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-mist-400">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with intent.
        </p>
        <div className="flex items-center gap-5">
          <Link
            href={profile.linkedin}
            target="_blank"
            className="hover:text-accent-cyan transition-colors flex items-center gap-1.5"
          >
            <Linkedin size={16} /> LinkedIn
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            className="hover:text-accent-cyan transition-colors flex items-center gap-1.5"
          >
            <Mail size={16} /> Email
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="hover:text-accent-cyan transition-colors flex items-center gap-1.5"
          >
            <FileDown size={16} /> Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
