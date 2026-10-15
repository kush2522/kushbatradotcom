import type { Metadata } from "next";
import { Clock, FileDown, PlayCircle } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Video Resume — Kush Batra",
  description: "A 2-3 minute video introduction and career highlight reel.",
};

const VIDEO_RESUME_URL = "";

export default function VideoResumePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-28">
      <SectionHeading
        eyebrow="Video Resume"
        title="A faster way to get to know me."
        description="A short, personal introduction — who I am, how I lead, and the work I'm proudest of. Set VIDEO_RESUME_URL in src/app/video-resume/page.tsx once it's recorded and the player goes live automatically."
      />

      <div className="card-glass rounded-3xl overflow-hidden">
        <div className="relative aspect-video bg-ink-800 flex items-center justify-center">
          {VIDEO_RESUME_URL ? (
            <iframe
              src={VIDEO_RESUME_URL}
              title="Video Resume"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-mist-500">
              <PlayCircle size={48} className="text-mist-600" />
              <span className="font-mono text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Clock size={12} /> Video resume coming soon
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-grid-pattern bg-[size:28px_28px] opacity-20 pointer-events-none" />
        </div>

        <div className="p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-lg text-mist-100">
              {profile.name}
            </h3>
            <p className="text-sm text-mist-400 mt-1">
              {profile.title} · {profile.location}
            </p>
          </div>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-mist-200 hover:bg-white/5 transition-colors shrink-0"
          >
            <FileDown size={16} /> Download written resume
          </Link>
        </div>
      </div>
    </section>
  );
}
