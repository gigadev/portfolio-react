import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen text-gray-100">
      <div className="relative flex flex-col items-center justify-center py-16 mb-10 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-800 shadow-lg rounded-b-3xl px-4">
        <span className="bg-white rounded-xl px-4 py-3 mb-6 shadow-lg inline-flex"><Logo height={56} /></span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-white drop-shadow-lg text-center">Scott Shepherd</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-blue-200 mb-3 text-center">SaaS &amp; PWA Product Builder &middot; AI-Enabled Software for SMBs</h2>
        <p className="text-md md:text-lg text-blue-100 max-w-2xl text-center">I turn ideas, manual processes, and internal tools into secure, multi-tenant, cloud-ready SaaS products and progressive web apps&mdash;with AI woven in where it earns its place.</p>
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <Link to="/portfolio" className="bg-white text-blue-800 font-semibold px-5 py-2 rounded-full shadow hover:bg-blue-100 transition">View My Work</Link>
          <Link to="/services" className="border border-white text-white font-semibold px-5 py-2 rounded-full hover:bg-white/10 transition">Services</Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-300">What I Build</h2>
        <section className="mb-8">
          <p className="mb-4">I'm a software architect and full-stack engineer with 20+ years of experience, focused on shipping real products: secure, multi-tenant platforms that work online and off, scale as the business grows, and increasingly put AI to work where it creates genuine leverage.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-tenant SaaS platforms with database-enforced tenant isolation.</li>
            <li>Offline-first progressive web apps (PWAs) that keep working without a connection.</li>
            <li>AI-enabled features&mdash;message generation, summarization, and classification&mdash;built on the Anthropic Claude API.</li>
            <li>Configurable, extensible products (pluggable "packs" and plugins) shaped around how a business actually works.</li>
            <li>Full lifecycle delivery&mdash;from discovery and architecture through CI/CD and production.</li>
          </ul>
        </section>

        <h2 className="text-2xl font-bold mb-4 text-purple-300">How I Work</h2>
        <section className="mb-8">
          <ul className="list-disc list-inside space-y-2">
            <li>Own the whole stack: data model, API, UI, auth, billing, and deployment.</li>
            <li>Design for multi-tenancy and security from day one&mdash;not bolted on later.</li>
            <li>Share validation and types across client and server so there's a single source of truth.</li>
            <li>Build reusable foundations and frameworks that compound in value across projects.</li>
            <li>Ship iteratively, test paranoidally, and keep the codebase clean and maintainable.</li>
          </ul>
        </section>

        <h2 className="text-2xl font-bold mb-4 text-indigo-300">Currently Building</h2>
        <section className="mb-8">
          <p>A multi-tenant CRM platform built specifically for SMBs&mdash;engineered to be configured and extended per industry through pluggable packs and plugins, so a business gets a CRM shaped around its real workflow instead of forcing its process into someone else's mold.{' '}
            <Link to="/portfolio" className="text-blue-400 hover:underline">See the full portfolio &rarr;</Link>
          </p>
        </section>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-10 pb-12">
        <h2 className="text-2xl font-bold mb-4 text-green-300">Connect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://www.linkedin.com/in/scottwshepherd/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn Profile</a></li>
          <li><a href="https://www.freelancer.com/u/gigadev?frm=gigadev&sb=t" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Freelancer Profile</a></li>
          <li><a href="https://www.upwork.com/freelancers/gigadev?viewMode=1" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Upwork Profile</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
