import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const stats = [
  { value: '25+', label: 'years of enterprise experience' },
  { value: '7', label: 'apps shipped in the last year' },
  { value: '3,700+', label: 'automated tests on the flagship CRM' },
  { value: '<4 mo', label: 'concept to customer beta' },
];

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen text-gray-100">
      <div className="relative flex flex-col items-center justify-center py-16 mb-10 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-800 shadow-lg rounded-b-3xl px-4">
        <span className="bg-white rounded-xl px-4 py-3 mb-6 shadow-lg inline-flex"><Logo height={56} /></span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-white drop-shadow-lg text-center">Scott Shepherd</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-blue-200 mb-3 text-center">SaaS &amp; PWA Product Builder &middot; Delivered at AI Speed, Backed by 25+ Years of Architectural Judgment</h2>
        <p className="text-md md:text-lg text-blue-100 max-w-2xl text-center">I turn ideas, manual processes, and internal tools into secure, multi-tenant SaaS products and progressive web apps&mdash;enterprise-grade software without the enterprise overhead, with AI woven in where it earns its place.</p>
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <Link to="/portfolio" className="bg-white text-blue-800 font-semibold px-5 py-2 rounded-full shadow hover:bg-blue-100 transition">View My Work</Link>
          <Link to="/services" className="border border-white text-white font-semibold px-5 py-2 rounded-full hover:bg-white/10 transition">Services</Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-gray-900/70 border border-blue-800/40 rounded-xl p-4 text-center shadow-lg">
              <div className="text-3xl font-extrabold text-blue-300">{s.value}</div>
              <div className="text-xs text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-300">What I Build</h2>
        <section className="mb-8">
          <p className="mb-4">I'm a software architect and full-stack engineer with 25+ years of experience&mdash;including enterprise work for Hewlett-Packard, UL Solutions, The Princeton Review, and H&amp;R Block / RedGear&mdash;focused on shipping real products: secure, multi-tenant platforms that work online and off, scale as the business grows, and put AI to work where it creates genuine leverage.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-tenant SaaS platforms with database-enforced tenant isolation.</li>
            <li>Offline-first progressive web apps (PWAs) that keep working without a connection.</li>
            <li>AI-enabled features&mdash;message generation, summarization, and classification&mdash;built on the Anthropic Claude API.</li>
            <li>Configurable, extensible products (pluggable "packs" and plugins) shaped around how a business actually works.</li>
            <li>Full lifecycle delivery&mdash;from discovery and architecture through CI/CD and production.</li>
          </ul>
        </section>

        <h2 className="text-2xl font-bold mb-4 text-purple-300">How I Deliver</h2>
        <section className="mb-8">
          <p className="mb-4">My delivery model pairs Claude AI coding agents with senior-architect oversight: the AI provides implementation speed, and 25+ years of judgment owns every design decision, code review, and test.</p>
          <ul className="list-disc list-inside space-y-2">
            <li><span className="font-semibold text-gray-100">Senior judgment on every line.</span> AI accelerates the typing; experience decides what gets built and verifies it's right.</li>
            <li><span className="font-semibold text-gray-100">Weeks, not quarters.</span> Seven applications shipped in the last year&mdash;three in production, four live as working prototypes.</li>
            <li><span className="font-semibold text-gray-100">Enterprise discipline by default.</span> Automated test suites, CI that blocks failures, documented architecture decisions, and security built in&mdash;OAuth, encrypted tokens, database-level tenant isolation, audit logging.</li>
            <li><span className="font-semibold text-gray-100">One accountable partner.</span> You work directly with the architect who writes, reviews, and stands behind the code&mdash;no hand-offs, no telephone game.</li>
          </ul>
        </section>

        <h2 className="text-2xl font-bold mb-4 text-indigo-300">Currently Building</h2>
        <section className="mb-8">
          <p>A multi-tenant CRM platform&mdash;now in beta with its first customer, a B2B lead-generation agency. Engineered to be configured and extended per industry through pluggable packs and plugins, so a business gets a CRM shaped around its real workflow instead of forcing its process into someone else's mold. First commit to customer beta in under 4 months.{' '}
            <Link to="/portfolio" className="text-blue-400 hover:underline">See the full portfolio &rarr;</Link>
          </p>
        </section>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-10 pb-12">
        <h2 className="text-2xl font-bold mb-4 text-green-300">Connect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://www.linkedin.com/in/scottwshepherd/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn Profile</a></li>
          <li><a href="mailto:scott.shepherd@gigadev.net" className="text-blue-400 hover:underline">Email: scott.shepherd@gigadev.net</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
