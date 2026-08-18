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
    blurb: 'A multi-tenant CRM engine for a B2B lead-generation agency, configured per industry through pluggable "packs." Database-enforced row-level security, Gmail/Microsoft 365 email, two-way calendar sync, a public API, and a Chrome extension that captures LinkedIn relationships straight into the CRM.',
    challenge: 'Off-the-shelf CRMs didn’t fit a LinkedIn-centric prospecting workflow.',
    result: 'First commit to customer beta in under 4 months, solo — ~209,000 lines of TypeScript, 165 API endpoints, 3,700+ automated tests.',
    tags: ['Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL/Supabase', 'Zod', 'Vercel'],
    link: null,
  },
  {
    title: 'NinjaCRM — AI Messaging Studio',
    badge: 'In production',
    status: 'production',
    blurb: 'An AI-powered, LinkedIn-native CRM for coaches, consultants, and outreach agencies. A Claude-AI engine drafts relationship-first outreach from the agency’s own methodology — layered prompts, chat-based refinement, and AI document-parsing onboarding. Multi-tenant workspaces with SSO, 2FA, and Stripe billing.',
    result: 'In production — and the same client came back and commissioned the full Ninja Prospecting CRM above.',
    tags: ['Laravel 12', 'PHP 8.4', 'Filament', 'Anthropic Claude API', 'PostgreSQL', 'Stripe'],
    link: 'https://ninjacrm-staging.on-forge.com/app/login',
  },
  {
    title: 'APS Inspections Platform',
    badge: 'In production',
    status: 'production',
    blurb: 'End-to-end operations platform for an aerial (drone) inspection company — site inspections, acknowledgment workflows with signature capture, operational and billing reports, and Google Maps site visualization, serving six user roles.',
    challenge: 'The client ran projects, pilots, and billing on spreadsheets.',
    result: 'The company’s entire inspection lifecycle now runs on one production platform with full audit tracking.',
    tags: ['.NET 8', 'Blazor', 'EF Core 8', 'SQL Server', 'Azure'],
    link: 'https://aps.brightshiftops.com/',
  },
  {
    title: 'Media Gallery',
    badge: 'In production',
    status: 'production',
    blurb: 'A family photo & video album platform: albums per family, drag-and-drop uploads, YouTube embeds, share links, comments, and server-side filtering, sorting, and paging — migrated from SQLite to Supabase Postgres.',
    tags: ['Python/Flask', 'SQLAlchemy', 'Bootstrap', 'Supabase/PostgreSQL'],
    link: 'https://gallery.reinowned.com/',
  },
  {
    title: 'Vacation Rental Ops',
    badge: 'In development',
    status: 'development',
    blurb: 'Operational-readiness SaaS for short-term rental hosts. Syncs Airbnb, Vrbo & Booking.com calendars, turns every checkout into a tracked, photo-verified turnover, with offline mobile checklists and par-level inventory restock alerts.',
    tags: ['Next.js', 'TypeScript', 'Supabase/PostgreSQL', 'Drizzle ORM', 'Vercel'],
    link: 'https://vacation-rental-ops.vercel.app/',
  },
  {
    title: 'Stormwater Inspection Platform',
    badge: 'Live prototype',
    status: 'prototype',
    blurb: 'Offline-first PWA for municipal MS4 stormwater-compliance inspections: automated rain-event detection from hourly weather data, inspection deadline countdowns, role-based access with Postgres row-level security, and one-click annual compliance reports.',
    tags: ['Next.js', 'Supabase', 'Serwist PWA', 'pg_cron'],
    link: 'https://inspection-platform.vercel.app/',
  },
  {
    title: 'Ward Status',
    badge: 'Live prototype',
    status: 'prototype',
    blurb: 'Multi-tenant emergency check-in system for community groups — household safety, property damage, and utility tracking, with role-based access, audit logging, interactive maps, and printable reports.',
    tags: ['PHP 8', 'MySQL', 'Leaflet'],
    link: 'https://property-assessment.reinowned.com/public/index.php?route=/login',
  },
  {
    title: 'HomeCache',
    badge: 'Live prototype',
    status: 'prototype',
    blurb: 'An offline-first home-inventory PWA: barcode scanning, automatic grocery lists, and encrypted, password-protected backup. Fully usable with no connection, syncing to the cloud on demand.',
    tags: ['Next.js', 'PWA', 'Dexie/IndexedDB', 'Serwist', 'Prisma', 'PostgreSQL'],
    link: 'https://offline.homecache.net/',
  },
  {
    title: 'MyTracker',
    badge: 'Live prototype',
    status: 'prototype',
    blurb: 'An installable, offline-capable PWA and the reusable foundation — auth, outbox sync, offline shell, and multi-tenant data — that accelerates everything I build next.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Dexie', 'Supabase'],
    link: 'https://my-tracker-web.vercel.app/',
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
          SaaS products and progressive web apps I&apos;ve designed and built end to end. Some are in
          production with real users; others are live working prototypes&mdash;built to show what&apos;s
          possible. If your business needs something similar, I can build it for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((p, i) => (
            <div key={i} className="bg-gray-900/70 border border-blue-800/40 rounded-xl p-6 shadow-lg flex flex-col">
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
              {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-3 text-sm font-semibold">View Site &rarr;</a>}
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
