import React, { useState } from 'react';

const badgeStyles = {
  production: 'bg-emerald-700/70 text-emerald-100',
  prototype: 'bg-amber-600/60 text-amber-100',
  development: 'bg-purple-700/70 text-purple-100',
};

const featuredProjects = [
  {
    title: 'Ninja Prospecting CRM (Gigadev CRM Platform)',
    badge: 'In beta with first customer',
    status: 'production',
    blurb: 'A multi-tenant CRM engine for a B2B lead-generation agency, configured per industry through pluggable "packs." Database-enforced row-level security, Gmail/Microsoft 365 email, two-way calendar sync, a meeting scheduler with public booking links, a public API, and a Chrome extension that captures LinkedIn relationships straight into the CRM.',
    challenge: 'Off-the-shelf CRMs didn’t fit a LinkedIn-centric prospecting workflow.',
    result: 'First commit to customer beta in under 4 months, solo. Today: ~300,000 lines of TypeScript, 208 API routes, 65 data models across 97 migrations, over 6,800 automated tests including 102 Playwright end-to-end specs, 61 ADRs.',
    tags: ['Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL/Supabase', 'Zod', 'Vercel'],
    links: [],
  },
  {
    title: 'NinjaCRM — AI Messaging Studio',
    badge: 'In production',
    status: 'production',
    blurb: 'An AI-powered, LinkedIn-native CRM for coaches, consultants, and outreach agencies. A Claude-AI engine drafts relationship-first outreach from the agency’s own methodology — layered prompts, chat-based refinement, and AI document-parsing onboarding. Multi-tenant workspaces with SSO, 2FA, and Stripe billing.',
    result: 'In production — and the same client came back and commissioned the full Ninja Prospecting CRM above.',
    tags: ['Laravel 12', 'PHP 8.4', 'Filament', 'Anthropic Claude API', 'PostgreSQL', 'Stripe'],
    links: [{ label: 'View Site', href: 'https://ninjacrm-staging.on-forge.com/app/login' }],
  },
  {
    title: 'APS Inspections Platform',
    badge: 'In production',
    status: 'production',
    blurb: 'End-to-end operations platform for an aerial (drone) inspection company — site inspections, acknowledgment workflows with signature capture, operational and billing reports, and Google Maps site visualization, serving six user roles.',
    challenge: 'The client ran projects, pilots, and billing on spreadsheets.',
    result: 'The company’s entire inspection lifecycle now runs on one production platform with full audit tracking.',
    tags: ['.NET 8', 'Blazor', 'EF Core 8', 'SQL Server', 'Azure'],
    links: [{ label: 'View Site', href: 'https://aps.brightshiftops.com/' }],
  },
  {
    title: 'Media Gallery',
    badge: 'In production',
    status: 'production',
    blurb: 'A family photo & video album platform: albums per family, drag-and-drop uploads, YouTube embeds, share links, comments, and server-side filtering, sorting, and paging — migrated from SQLite to Supabase Postgres.',
    tags: ['Python/Flask', 'SQLAlchemy', 'Bootstrap', 'Supabase/PostgreSQL'],
    links: [{ label: 'View Site', href: 'https://gallery.reinowned.com/' }],
  },
  {
    title: 'Vacation Rental Ops',
    badge: 'Live prototype',
    status: 'prototype',
    blurb: 'Operational-readiness SaaS for short-term rental hosts. Syncs Airbnb, Vrbo & Booking.com calendars, turns every checkout into a tracked, photo-verified turnover, with offline mobile checklists and par-level inventory restock alerts.',
    tags: ['Next.js', 'TypeScript', 'Supabase/PostgreSQL', 'Drizzle ORM', 'Vercel'],
    links: [{ label: 'View Site', href: 'https://vacation-rental-ops.vercel.app/dashboard' }],
  },
  {
    title: 'Stormwater Inspection Platform (RAG + MCP + Kubernetes)',
    badge: 'Live prototype',
    status: 'prototype',
    blurb: "Offline-first PWA for municipal MS4 stormwater-compliance inspections, extended in August and September 2026 into a full AI-application showcase. 'Ask the Permit' answers questions from four public permit PDFs (228 pages, 255 embedded passages) with pgvector + HNSW retrieval on the existing Postgres and Claude generation under strict grounding, section citations, and an honest 'not addressed' refusal. inspection-mcp exposes the platform to Claude as an MCP server: 7 tools on a purpose-built agent API with bearer auth, server-side tenant mapping, and tiered rate limits, with the single write tool registered only behind an explicit flag. The same app is packaged with a multi-stage Docker build (2.48 GB builder to 91 MB image) and deployed to k3d and AKS from hand-written manifests with a 2-line diff between clusters. Ask the Permit requires a sign-in; demo access is on the way.",
    challenge: "Inspectors needed permit answers in the field, and Claude needed a safe, read-mostly way into the platform's data.",
    result: '15 golden questions at 100% retrieval, refusal, and groundedness (methodology caveats documented in the ADR); ~20 ms retrieval, ~$0.035 per question. The MCP write gate held under adversarial testing, and that testing surfaced a mislabelled field, three false negatives in the test suite, and two runbook errors before release. A rolling-update race that dropped one request per cutover was measured, fixed with a preStop hook, and re-verified at zero.',
    tags: ['Next.js', 'Supabase', 'pgvector', 'Voyage embeddings', 'Claude API', 'MCP SDK', 'Serwist PWA', 'Docker', 'Kubernetes (k3d, AKS)'],
    links: [
      { label: 'View Site', href: 'https://inspection-platform.vercel.app/' },
      { label: 'Ask the Permit', href: 'https://inspection-platform.vercel.app/stormwater/ask-permit' },
    ],
  },
  {
    title: 'Job Search Inventory',
    badge: 'Live prototype',
    status: 'prototype',
    blurb: "Multi-tenant SaaS for running a job search: companies, jobs, contacts, interactions, documents, and follow-up reminders, with a 10-tool MCP server so Claude can query and update the pipeline directly, hybrid pgvector + full-text RAG with cited answers, LLM paste-to-ingest with a mandatory confirm step, a daily digest, and an installable PWA. Built to the CRM's tenancy pattern: every row carries a workspace id, Postgres RLS on every domain table, and no unscoped database client exported to request handlers.",
    challenge: 'Track a real job search without a spreadsheet, and make the tracker something Claude can operate as a tool.',
    result: 'Core app specified and built in one weekend by directing Claude Code against a written handoff, then refined with auto-save editing and on-device drafts: 12 models, 28 route handlers, 7 migrations, ~14,850 lines of TypeScript, 16 ADRs. 229 Vitest unit and integration tests (the tenancy test is the merge gate) and 48 Playwright end-to-end tests across 14 specs. Deployed from GitHub Actions to Vercel after CI passes, with migrations applied first and a post-deploy smoke check.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Supabase/PostgreSQL', 'pgvector', 'MCP SDK', 'Claude API', 'Serwist PWA', 'Vercel'],
    links: [{ label: 'View Site', href: 'https://job-search-inventory.vercel.app/' }],
  },
  {
    title: 'LevelWard',
    badge: 'Live prototype',
    status: 'prototype',
    blurb: 'Skills learning management system: grade your skills, learn from the best source, prove it. Import a skill inventory (including a LinkedIn skills export), self-grade on a 0 to 4 scale, and compare against job packs to see the gaps. Claude generates outlines, tutorials, quizzes, and projects from ingested sources in background jobs, never while a user waits. Assessments lead to certificates with a public verify page and PDF export. Teams get invites, a skills heat-map, manager approval, and Stripe billing, and a 6-tool MCP server lets Claude read a learner\'s progress. One permission function in Postgres drives both the RLS policies and the Angular route guards, so the UI can never grant what the database refuses.',
    challenge: 'Serve solo learners and employer teams on one data model without a separate code path for each.',
    result: 'All six planned phases built: 48 tables across 14 migrations with RLS on every table, 12 Edge Functions, 31 ADRs, ~21,700 lines of TypeScript. 190 Vitest tests, 23 Deno tests, 261 pgTAP database assertions, and 16 Playwright end-to-end tests.',
    tags: ['Angular 22', 'Signals', 'TypeScript', 'Supabase/PostgreSQL', 'pgvector', 'pgmq', 'Claude API', 'MCP SDK', 'Angular PWA'],
    links: [],
  },
  {
    title: 'Ward Status',
    badge: 'Live prototype',
    status: 'prototype',
    blurb: 'Multi-tenant emergency check-in system for community groups — household safety, property damage, and utility tracking, with role-based access, audit logging, interactive maps, and printable reports.',
    tags: ['PHP 8', 'MySQL', 'Leaflet'],
    links: [{ label: 'View Site', href: 'https://property-assessment.reinowned.com/public/index.php?route=/login' }],
  },
  {
    title: 'HomeCache',
    badge: 'Live prototype',
    status: 'prototype',
    blurb: 'An offline-first home-inventory PWA: barcode scanning, automatic grocery lists, and encrypted, password-protected backup. Fully usable with no connection, syncing to the cloud on demand.',
    tags: ['Next.js', 'PWA', 'Dexie/IndexedDB', 'Serwist', 'Prisma', 'PostgreSQL'],
    links: [{ label: 'View Site', href: 'https://offline.homecache.net/' }],
  },
  {
    title: 'MyTracker',
    badge: 'Live prototype',
    status: 'prototype',
    blurb: 'An installable, offline-capable PWA and the reusable foundation — auth, outbox sync, offline shell, and multi-tenant data — that accelerates everything I build next.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Dexie', 'Supabase'],
    links: [{ label: 'View Site', href: 'https://my-tracker-web.vercel.app/' }],
  },
];

const earlierWork = [
  { title: 'Mortgage Calculator', blurb: 'A self-contained mortgage calculator built in PHP.', image: '/images/MortgageCalculator_2025-06-06 17-22-18.png', link: 'https://mortgage-calculator.reinowned.com/index.php', tags: ['PHP'] },
];

const Tag = ({ children }) => (
  <span className="inline-block bg-blue-900/60 text-blue-200 text-xs font-medium px-2.5 py-1 rounded-full mr-2 mb-2">{children}</span>
);

const Portfolio = () => {
  const [modalImage, setModalImage] = useState(null);
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen text-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-2 text-blue-300">Portfolio</h1>
        <p className="text-blue-100 mb-10 max-w-2xl">
          SaaS products and progressive web apps I have designed and built end to end: three are in
          production with real users, one is in beta with its first customer, and seven are live working
          prototypes. If your business needs something similar, I can build it for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((p) => (
            <div key={p.title} className="bg-gray-900/70 border border-blue-800/40 rounded-xl p-6 shadow-lg flex flex-col">
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-xl font-bold text-white">{p.title}</h2>
                {p.badge && <span className={`ml-3 shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${badgeStyles[p.status] || badgeStyles.prototype}`}>{p.badge}</span>}
              </div>
              <p className="text-gray-300 text-sm mb-3">{p.blurb}</p>
              <div className="flex-grow">
                {p.challenge && (
                  <p className="text-gray-400 text-xs mb-1"><span className="font-semibold text-blue-300">Challenge:</span> {p.challenge}</p>
                )}
                {p.result && (
                  <p className="text-gray-400 text-xs mb-3"><span className="font-semibold text-emerald-300">Result:</span> {p.result}</p>
                )}
              </div>
              <div className="flex flex-wrap">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              {p.links.length > 0 && (
                <div className="flex flex-wrap gap-x-4">
                  {p.links.map((l) => <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-3 text-sm font-semibold">{l.label} &rarr;</a>)}
                </div>
              )}
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-6 text-purple-300">Earlier Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {earlierWork.map((p, i) => (
            <div key={i} className="bg-gray-900/70 border border-blue-800/40 rounded-xl overflow-hidden shadow-lg">
              <img src={p.image} alt={p.title} className="w-full h-44 object-cover cursor-pointer transition-transform duration-200 hover:scale-105" onClick={() => setModalImage(p.image)} title="Click to enlarge" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{p.blurb}</p>
                <div className="flex flex-wrap mb-2">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm font-semibold">View Site &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={() => setModalImage(null)}>
          <img src={modalImage} alt="Enlarged project" className="max-w-full max-h-[90vh] rounded shadow-lg" onClick={(e) => e.stopPropagation()} />
          <button className="absolute top-4 right-8 text-white text-3xl font-bold" onClick={() => setModalImage(null)} aria-label="Close">&times;</button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
