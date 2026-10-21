# kushbatra.com — GenAI Consulting & Training


## Structure

Consulting & training site for Kush Batra — Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion.

- `src/data/profile.ts` — identity, contact details, career history, awards
- `src/data/consulting.ts` — services, engagement models, training programs, case studies, FAQs, **booking link**
- `src/data/blog.ts` — Insights posts (blocks: `## heading`, `- bullet`, `> quote`, plain paragraph)
- Pages: `/` · `/services` · `/training` · `/case-studies` · `/about` · `/blog` · `/contact`
- Old `/demos` and `/video-resume` URLs redirect (see `next.config.mjs`)

## Booking calls (Google Calendar)

1. In Google Calendar: **Create → Appointment schedule**, set a 30-min slot, availability and a Google Meet link.
2. Open the schedule → **Share** → copy the booking-page link.
3. In Vercel → Project → Settings → Environment Variables add `NEXT_PUBLIC_BOOKING_URL` = that link (or paste it into `BOOKING_URL` in `src/data/consulting.ts`) and redeploy.

Until it's set, "Book a call" buttons open a pre-filled Google Calendar invite addressed to er.kushbatra@gmail.com, so visitors can still send you an invite.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Updating content

- **Services / training / case studies / FAQs:** edit `src/data/consulting.ts`.
- **Write a post:** add an entry to `blogPosts` in `src/data/blog.ts`.
- **Contact details:** edit `profile` in `src/data/profile.ts`.

## Deployment

**Recommended: Vercel (free Hobby tier)**
1. Push this repo to GitHub.
2. Import the repo at https://vercel.com/new — zero config needed, it auto-detects Next.js.
3. Add the custom domain under Project → Settings → Domains.

**Recommended domain: `kushbatra.com`**
- Register via **Cloudflare Registrar** (sells at-cost, no markup, ~$10/yr with renewal at the same price — unlike many registrars that hike renewal pricing).
- Backups if taken: `kushbatra.dev`, `heykush.com`.
- Point the domain's DNS to Vercel per their custom-domain instructions (two CNAME/A records).

Note: Vercel's Hobby tier is for non-commercial use. A consulting site that sells services should run on Vercel Pro.
