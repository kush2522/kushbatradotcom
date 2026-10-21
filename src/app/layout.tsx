import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteTitle = `${profile.name} — ${profile.title}`;
const siteDescription =
  "Enterprise GenAI consulting and training: AI coding agents rollout (Claude Code, Codex, Cursor), agentic RAG platforms, AI governance and LLM cost control. Former Director of GenAI & Engineering at Capital One.";

export const metadata: Metadata = {
  title: { default: siteTitle, template: `%s — ${profile.name}` },
  description: siteDescription,
  metadataBase: new URL(profile.siteUrl),
  keywords: [
    "GenAI consultant",
    "AI consultant India",
    "Claude Code consulting",
    "AI coding agents rollout",
    "enterprise RAG",
    "AI governance",
    "GenAI training",
    "fractional head of AI",
    "Bengaluru",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: profile.siteUrl,
    siteName: profile.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${profile.name} — GenAI Consulting & Training`,
  url: profile.siteUrl,
  email: profile.email,
  telephone: profile.phoneHref,
  areaServed: "Worldwide",
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
  founder: {
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    sameAs: [profile.linkedin],
  },
  serviceType: [
    "Generative AI consulting",
    "AI coding agents rollout",
    "AI platform engineering",
    "AI governance",
    "Corporate AI training",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-ink-950 text-mist-100 min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="noise-overlay fixed inset-0 pointer-events-none z-0" />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
