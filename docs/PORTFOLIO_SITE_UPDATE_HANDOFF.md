# Portfolio Site Update Handoff (gigadevconsulting.netlify.app)

Prepared 2026-09-28 for Claude Code. Owner: Scott Shepherd, Gigadev Consulting.

## Why

The site is about a month behind the resume and cover note that went out today. The cover note sends readers to the site for the RAG assistant and the Kubernetes rollout writeup, and neither is on it. Several numbers on the home page and the CRM card are stale. Every figure below was verified against the repos on 2026-09-28; do not round them up or "improve" them.

## Rules

- Change copy and cards only. No redesign, no new sections beyond what is listed, no dependency changes.
- No em-dashes anywhere in new copy (use commas, colons, or a period). Existing em-dashes in untouched copy can stay; if you touch a sentence, remove its em-dash.
- Every number must match this document. If the codebase's content file already has a number that disagrees, this document wins.
- Every "View Site" link must resolve. If a URL 404s at build time, ship the card without the link rather than with a dead one.
- One PR. In the description, list each card and stat changed with before and after.

## 1. Home page stat strip

| Stat | Now | Change to |
|---|---|---|
| years of enterprise experience | 25+ | 25+ (no change) |
| apps shipped in the last year | 7 | **8** |
| automated tests on the flagship CRM | 3,700+ | **6,300+** |
| concept to customer beta | <4 mo | <4 mo (no change) |

## 2. Home page "How I Deliver"

Bullet 2 currently reads: "Weeks, not quarters. Seven applications shipped in the last year—three in production, four live as working prototypes."

Change to: "Weeks, not quarters. Eight applications shipped in the last year: three in production, five live as working prototypes."

Bullet 3 ("Enterprise discipline by default") is fine. Optionally append to the list of security items: "measured rollouts" is NOT verified language; leave the bullet as is.

## 3. Home page "Currently Building"

Keep the CRM paragraph. Add one sentence at the end, before "See the full portfolio":

"Alongside it: a stormwater inspection platform that now carries a grounded RAG assistant, an MCP server for Claude, and a Kubernetes packaging and rollout writeup."

## 4. Portfolio page: CRM card (Ninja Prospecting CRM)

Result line currently: "First commit to customer beta in under 4 months, solo — ~209,000 lines of TypeScript, 165 API endpoints, 3,700+ automated tests."

Change to: "First commit to customer beta in under 4 months, solo. Today: ~288,000 lines of TypeScript, 203 API routes, 64 data models across 94 migrations, over 6,300 automated tests including 99 Playwright end-to-end specs, 61 ADRs."

Source: crm-platform at HEAD 42f7a42c (2026-09-25). Web vitest suite 5,209 tests / 356 files (docs/handoffs/CI_TEST_PARALLELISM_HANDOFF.md), shared 330, extension 709, e2e 99 static `test(` count in apps/web/e2e.

Description: keep. Optionally add "Meeting scheduler with public booking links" to the feature list; it shipped 2026-09-11 (ADR-059). Tech chips: keep.

## 5. Portfolio page: Stormwater Inspection Platform card (the big one)

This card still describes the August build. Replace the whole card body. Status label: keep "Live prototype" unless Scott says otherwise.

**Title:** Stormwater Inspection Platform (RAG + MCP + Kubernetes)

**Description:**
"Offline-first PWA for municipal MS4 stormwater-compliance inspections, extended in August and September 2026 into a full AI-application showcase. 'Ask the Permit' answers questions from four public permit PDFs (228 pages, 255 embedded passages) with pgvector + HNSW retrieval on the existing Postgres and Claude generation under strict grounding, section citations, and an honest 'not addressed' refusal. inspection-mcp exposes the platform to Claude as an MCP server: 7 tools on a purpose-built agent API with bearer auth, server-side tenant mapping, and tiered rate limits, with the single write tool registered only behind an explicit flag. The same app is packaged with a multi-stage Docker build (2.48 GB builder to 91 MB image) and deployed to k3d and AKS from hand-written manifests with a 2-line diff between clusters."

**Challenge:** "Inspectors needed permit answers in the field, and Claude needed a safe, read-mostly way into the platform's data."

**Result:** "15 golden questions at 100% retrieval, refusal, and groundedness (methodology caveats documented in the ADR); ~20 ms retrieval, ~$0.035 per question. The MCP write gate held under adversarial testing, and that testing surfaced a mislabelled field, three false negatives in the test suite, and two runbook errors before release. A rolling-update race that dropped one request per cutover was measured, fixed with a preStop hook, and re-verified at zero."

**Tech chips:** Next.js · Supabase · pgvector · Voyage embeddings · Claude API · MCP SDK · Serwist PWA · Docker · Kubernetes (k3d, AKS)

**Links:**
- View Site → https://inspection-platform.vercel.app/
- Ask the Permit → https://inspection-platform.vercel.app/stormwater/ask-permit
- Kubernetes writeup → link to the ADR 0003 / K8s explainer if it is published anywhere public (the repo's `K8s_Explained-Stormwater.md`). If there is no public URL for it, omit this link and change the home-page sentence in §3 from "a Kubernetes packaging and rollout writeup" to "Kubernetes packaging and rollout".

## 6. Portfolio page: new card, Job Search Inventory

Insert after the Stormwater card, before Ward Status. Status label: "Live prototype" only if https://job-search-inventory.vercel.app/ returns 200 at build time. It returned a Vercel 404 on 2026-09-28 (project not yet attached or deploy not landed). If it still 404s, use status "In development" and omit the View Site link.

**Title:** Job Search Inventory

**Description:**
"Multi-tenant SaaS for running a job search: companies, jobs, contacts, interactions, documents, and follow-up reminders, with a 10-tool MCP server so Claude can query and update the pipeline directly, hybrid pgvector + full-text RAG with cited answers, LLM paste-to-ingest with a mandatory confirm step, a daily digest, and an installable PWA. Built to the CRM's tenancy pattern: every row carries a workspace id, Postgres RLS on every domain table, and no unscoped database client exported to request handlers."

**Challenge:** "Track a real job search without a spreadsheet, and make the tracker something Claude can operate as a tool."

**Result:** "Specified and built in one weekend by directing Claude Code against a written handoff: 12 models, 28 route handlers, 7 migrations, ~13,000 lines of TypeScript, tenancy integration test as the merge gate, Playwright golden-path suite. Deployed from GitHub Actions to Vercel after CI passes."

**Tech chips:** Next.js · TypeScript · Prisma · Supabase/PostgreSQL · pgvector · MCP SDK · Claude API · Serwist PWA · Vercel

**Link:** View Site → https://job-search-inventory.vercel.app/ (see status rule above)

## 7. Portfolio page intro

Currently: "Some are in production with real users; others are live working prototypes—built to show what's possible."

Change to: "Three are in production with real users; five are live working prototypes built to show what is possible." (Adjust "five" to "four" if the Job Search Inventory card ships without a live link.)

## 8. Other cards

No changes to NinjaCRM AI Messaging Studio, APS, Media Gallery, Vacation Rental Ops, Ward Status, HomeCache, MyTracker, Mortgage Calculator.

## 9. Acceptance

- Home stat strip shows 8 and 6,300+.
- "How I Deliver" says eight, three, five.
- CRM card shows 288,000 / 203 / 64 / 94 / 6,300+ / 99 / 61.
- Stormwater card names RAG, MCP, and Kubernetes with the numbers above and links to /stormwater/ask-permit.
- Job Search Inventory card exists with the correct status for its URL.
- No em-dashes in any changed sentence. `grep -n "—"` on the changed files shows only untouched lines.
- All View Site links return 200 in a post-deploy check; list the results in the PR.
- Netlify deploy preview reviewed by Scott before merge to main.

## 10. Additions from review (2026-09-28, Claude review of this handoff against the repo and live URLs)

These resolve gaps the sections above would hit at execution time. Where an item conflicts with an earlier section, this section wins.

### 10.1 Card component: allow a minimal `links` array

`src/pages/Portfolio.jsx` cards have a single `link` field and a hard-coded "View Site" anchor. §5 needs up to three links on the Stormwater card. Authorized change: replace `link: string | null` with `links: [{ label, href }]` on every featured card (existing cards become `links: [{ label: 'View Site', href: <old link> }]`, or `[]` where link was null), and render them as a row of anchors with the same classes as the current "View Site" anchor. No other markup or styling changes. While in the file, change the card `key={i}` to `key={p.title}`.

### 10.2 Resolved conditionals (verified 2026-09-28 17:10 MT)

- `https://job-search-inventory.vercel.app/` returns 404. Ship the Job Search Inventory card with status `development`, badge "In development", and `links: []`. §7 intro therefore reads "four are live working prototypes".
- The Kubernetes writeup has no public URL and the current draft (`K8s_Explained-Stormwater.md`) is written as interview prep, not for publication. Use the fallback: omit the link on the Stormwater card and use the §3 alternate sentence: "Alongside it: a stormwater inspection platform that now carries a grounded RAG assistant, an MCP server for Claude, and Kubernetes packaging and rollout." A public PDF version is a follow-up (see 10.6).
- `https://inspection-platform.vercel.app/stormwater/ask-permit` resolves (200) but renders the sign-in form. Keep the link. See 10.5 for the demo-access follow-up; until that lands, add this sentence to the end of the Stormwater card description: "Ask the Permit requires a sign-in; demo access is on the way."

### 10.3 Production count must match the badges

The portfolio page shows four cards with a green "In production" badge: Ninja Prospecting CRM, NinjaCRM AI Messaging Studio, APS Inspections Platform, Media Gallery. §7 says "Three are in production." Do not ship a sentence that disagrees with the badges above it. Use this intro instead:

"SaaS products and progressive web apps I have designed and built end to end. Eight shipped in the last year: three are in production with real users, four are live working prototypes, and one is in development. Older production work is included below. If your business needs something similar, I can build it for you."

"How I Deliver" bullet 2 (§2) and the stat strip (§1) stay as specified; they are scoped to "the last year" and the sentence above now makes that scope explicit.

### 10.4 About page (adds to §8)

`src/pages/AboutMe.jsx` line 18 still describes the prototypes as "an operations SaaS for short-term rental hosts, a municipal stormwater-compliance platform, and offline-first PWAs." Replace that sentence with:

"Lately that means a multi-tenant CRM platform now in beta with its first customer, an AI-powered LinkedIn-native CRM in production, and a set of live working prototypes: a municipal stormwater-compliance platform extended with a grounded RAG assistant, an MCP server for Claude, and Kubernetes packaging, plus an operations SaaS for short-term rental hosts and offline-first PWAs. Built across the modern web (Next.js, TypeScript, Laravel) with deep Microsoft (.NET, Azure) experience to draw on, all delivered with Claude AI coding agents under senior-architect direction."

Remove the em-dashes in that sentence as part of the edit (rule in "Rules" above).

### 10.5 `index.html` metadata

- Replace the `description`, `og:description`, and `twitter:description` content with: "Scott Shepherd builds AI-enabled, multi-tenant SaaS products and offline-first PWAs, including a grounded RAG assistant, an MCP server for Claude, and Kubernetes rollouts. Delivered at AI speed, backed by 25+ years of architectural judgment."
- Delete the `<meta name="keywords">` line.
- Add a favicon: copy `public/images/GigadevLogo2.png` to `public/favicon.png` and add `<link rel="icon" type="image/png" href="/favicon.png" />` in `<head>`. Do not add a build plugin or dependency for this.

### 10.6 Follow-ups, NOT in this PR (each is its own handoff)

1. **Demo access for Ask the Permit** (inspection-platform repo). Highest value: the cover note sends readers to a login wall. Preferred: a read-only demo account (RLS-scoped, rate-limited) with credentials displayed on the ask-permit sign-in page and on the portfolio card. Alternative: a public demo mode for the ask-permit route only. When it lands, remove the "requires a sign-in" sentence from 10.2.
2. **Publish the Kubernetes and RAG writeups.** Trim `K8s_Explained-Stormwater.md` to the build/rollout half (multi-stage Docker, k3d vs AKS diff, the preStop-hook race) and `RAG_Explained-Ask_The_Permit.md` to the design and evaluation half, remove interview framing, export both to PDF under `public/docs/`, then add the links to the Stormwater card and restore the "writeup" wording in §3.
3. **Land the Job Search Inventory deploy**, then flip its card to `prototype` / "Live prototype" with the View Site link and change the intro to "five".
4. **Prerender for crawlers.** The site is a client-rendered SPA; crawlers get an empty `#root`. Add `vite-plugin-prerender` (or a `react-snap` post-build step) for `/`, `/portfolio`, `/services`, `/skills`, `/about`. Dependency change, so separate PR.
5. **Security headers in `netlify.toml`.** Add a `[[headers]]` block for `/*` with `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`, and a CSP that allows self, data: images, and the Google Fonts hosts if any are used. Verify with securityheaders.com after deploy.
6. **Repo hygiene.** `dist_byo_5/` and `dist_check/` sit in the repo root; `.gitignore` only covers `dist/`. Delete them or change the ignore pattern to `dist*/`.
7. **Derive the counts.** The 3/4/8 numbers are restated by hand in the stat strip, "How I Deliver", the portfolio intro, and About. Export `featuredProjects` from a shared `src/data/projects.js` and compute production/prototype/development counts from `status`, so the next update touches one array.

### 10.7 Acceptance additions

- Stormwater card shows two links (View Site, Ask the Permit) and the sign-in sentence.
- Job Search Inventory card shows the "In development" badge and no link.
- Portfolio intro says eight / three / four / one and does not contradict the badge count.
- About page names RAG, MCP, and Kubernetes.
- Browser tab shows the Gigadev favicon; `view-source` shows the new description and no keywords tag.
- `grep -n "—" src/pages/AboutMe.jsx` shows no em-dash on the edited sentence.
