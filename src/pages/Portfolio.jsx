import React, { useState } from 'react';

const featuredProjects = [
  { title: 'Gigadev CRM Platform', blurb: 'A multi-tenant CRM engine for SMBs, configured and extended per industry through pluggable "packs" and plugins. Multi-tenant from day one with database-enforced row-level security.', tags: ['Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL/Supabase', 'Zod', 'Vercel'], badge: 'Launching soon', link: null },
  { title: 'NinjaCRM', blurb: 'An AI-powered, LinkedIn-native CRM for coaches, consultants, and outreach agencies. Pairs full prospect-to-customer lifecycle management with a Claude-AI engine that drafts relationship-first outreach. Multi-tenant workspaces with SSO, 2FA, and Stripe billing.', tags: ['Laravel 12', 'PHP 8.4', 'Filament', 'Anthropic Claude API', 'PostgreSQL', 'Stripe'], badge: 'AI-Enabled', link: null },
  { title: 'Vacation Rental Ops', blurb: 'Operational-readiness SaaS for short-term rental hosts. Syncs Airbnb, Vrbo & Booking.com calendars, turns every checkout into a tracked, photo-verified turnover, with offline mobile checklists and par-level inventory restock alerts.', tags: ['Next.js', 'TypeScript', 'Supabase/PostgreSQL', 'Drizzle ORM', 'Vercel'], badge: 'SaaS', link: null },
  { title: 'HomeCache', blurb: 'An offline-first home-inventory PWA: barcode scanning, automatic grocery lists, and encrypted, password-protected backup. Fully usable with no connection, syncing to the cloud on demand.', tags: ['Next.js', 'PWA', 'Dexie/IndexedDB', 'Serwist', 'Prisma', 'PostgreSQL'], badge: 'PWA', link: null },
  { title: 'MyTracker', blurb: 'An installable, offline-capable PWA and the reusable foundation - auth, outbox sync, offline shell, and multi-tenant data - that accelerates everything I build next.', tags: ['Next.js', 'TypeScript', 'Prisma', 'Dexie', 'Supabase'], badge: 'PWA', link: null },
];

const earlierWork = [
  { title: 'Inspection Management', blurb: 'Drone inspection management app with Google Maps integration, hosted on Azure.', image: '/images/InspectionManagement-2025-06-06 17-20-19.png', link: 'https://gds-inspectionmanagement-hzgdbwexbjgefuek.westcentralus-01.azurewebsites.net/', tags: ['Blazor', '.NET', 'Azure SQL'] },
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
        <p className="text-blue-100 mb-10 max-w-2xl">A selection of SaaS products and progressive web apps I've designed and built end to end&mdash;several AI-enabled, all multi-tenant or offline-first by design.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((p, i) => (
            <div key={i} className="bg-gray-900/70 border border-blue-800/40 rounded-xl p-6 shadow-lg flex flex-col">
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-xl font-bold text-white">{p.title}</h2>
                {p.badge && <span className="ml-3 shrink-0 bg-purple-700/70 text-purple-100 text-xs font-semibold px-3 py-1 rounded-full">{p.badge}</span>}
              </div>
              <p className="text-gray-300 text-sm mb-4 flex-grow">{p.blurb}</p>
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
