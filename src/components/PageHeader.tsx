export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full bg-glow-radial from-accent-violet/15 via-accent-blue/5 to-transparent blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-12 sm:pt-24">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">{eyebrow}</span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight text-mist-100 max-w-3xl leading-[1.1]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg text-mist-300 leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
