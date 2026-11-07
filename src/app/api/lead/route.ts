import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { budgets, teamSizes, timelines, topics } from "@/data/topics";

export const runtime = "nodejs";

const MAX = { short: 200, message: 4000 };
const hits = new Map<string, number[]>();

// Best-effort per-instance rate limit: 5 submissions per IP per 10 minutes.
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 600_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const clean = (v: unknown, max = MAX.short) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ");
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const oneOf = (v: string, list: string[]) => (list.includes(v) ? v : "");

async function send(apiKey: string, payload: Record<string, unknown>) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`resend ${res.status}`);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill this, humans never see it. Pretend success.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) return NextResponse.json({ error: "Too many requests" }, { status: 429 });

  const lead = {
    name: clean(body.name),
    email: clean(body.email),
    company: clean(body.company),
    topic: oneOf(clean(body.topic), topics) || "Other",
    teamSize: oneOf(clean(body.teamSize), teamSizes),
    timeline: oneOf(clean(body.timeline), timelines),
    budget: oneOf(clean(body.budget), budgets),
    message: clean(body.message, MAX.message),
  };

  if (!lead.name || !lead.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ error: "Name, a valid email and a message are required" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Client falls back to opening the visitor's email app.
    return NextResponse.json({ error: "Email delivery is not configured" }, { status: 503 });
  }

  const to = process.env.LEAD_TO_EMAIL || profile.email;
  const from = process.env.LEAD_FROM_EMAIL;
  const details: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Company", lead.company || "—"],
    ["Interested in", lead.topic],
    ["Team size", lead.teamSize || "—"],
    ["Timeline", lead.timeline || "—"],
    ["Budget", lead.budget || "—"],
  ];

  try {
    await send(apiKey, {
      from: from ? `Kush Batra Portal <${from}>` : "Kush Batra Portal <onboarding@resend.dev>",
      to: [to],
      reply_to: lead.email,
      subject: oneLine(`[kushbatra.com] ${lead.topic} — ${lead.company || lead.name}`),
      text: `${details.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${lead.message}`,
      html: `<table>${details
        .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`)
        .join("")}</table><p style="white-space:pre-wrap">${esc(lead.message)}</p>`,
    });
  } catch (err) {
    console.error("lead.notify failed:", err);
    return NextResponse.json({ error: "Could not send" }, { status: 502 });
  }

  // Confirmation to the visitor needs a verified sending domain, so it is opt-in.
  if (from) {
    try {
      await send(apiKey, {
        from: `Kush Batra <${from}>`,
        to: [lead.email],
        reply_to: to,
        subject: "Got your message — proposal within 48 hours",
        text: `Hi ${oneLine(lead.name)},\n\nThanks for getting in touch about "${lead.topic}". I'll reply within one business day, and a written proposal follows within 48 hours of our first call.\n\nKush Batra\n${profile.siteUrl}`,
      });
    } catch (err) {
      console.error("lead.confirm failed:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
