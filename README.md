# Kush Batra — Portfolio Site

Dark, AI/tech-themed personal site built with Next.js 14 (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Structure

- `src/data/profile.ts` — **single source of truth** for all content: bio, experience, skills, demo projects, blog posts. Edit this file to update the site.
- `src/app/page.tsx` — homepage (hero, about, experience, impact, recognition, contact)
- `src/app/demos` — product demo showcase (add a `videoUrl` per entry in `profile.ts` to embed a YouTube/Loom player; leave blank for a "coming soon" card)
- `src/app/video-resume` — video resume page (set `VIDEO_RESUME_URL` in that file once recorded)
- `src/app/blog` — blog list + `[slug]` post pages, driven by `blogPosts` in `profile.ts`
- `public/resume.pdf` — downloadable resume (swap this file to update the download)

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Updating content

- **Add a demo video:** edit `demoProjects` in `src/data/profile.ts`, set `videoUrl` to a YouTube embed URL (`https://www.youtube.com/embed/VIDEO_ID`) or Loom embed URL, and `status: "live"`.
- **Add the video resume:** edit `VIDEO_RESUME_URL` in `src/app/video-resume/page.tsx`.
- **Write a blog post:** add an entry to `blogPosts` in `src/data/profile.ts` (slug, title, excerpt, date, tags, content paragraphs).
- **Update the downloadable resume:** replace `public/resume.pdf`.

## Deployment

**Recommended: Vercel (free Hobby tier)**
1. Push this repo to GitHub.
2. Import the repo at https://vercel.com/new — zero config needed, it auto-detects Next.js.
3. Add the custom domain under Project → Settings → Domains.

**Recommended domain: `kushbatra.com`**
- Register via **Cloudflare Registrar** (sells at-cost, no markup, ~$10/yr with renewal at the same price — unlike many registrars that hike renewal pricing).
- Backups if taken: `kushbatra.dev`, `heykush.com`.
- Point the domain's DNS to Vercel per their custom-domain instructions (two CNAME/A records).

Total estimated cost: **~$10/year** (domain only — hosting is free on Vercel's Hobby tier for a personal/non-commercial site).
