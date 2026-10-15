import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-40 text-center">
      <span className="font-mono text-sm text-accent-cyan">404</span>
      <h1 className="mt-4 font-display text-3xl text-mist-100">
        Page not found.
      </h1>
      <p className="mt-3 text-mist-400">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-6 py-3 text-sm font-medium text-ink-950"
      >
        Back home
      </Link>
    </section>
  );
}
