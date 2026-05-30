import React from 'react';
import { Code, Database, Cpu, Layers, Music } from 'lucide-react';

const highlights = [
  { icon: Code, label: 'Full-Stack SaaS & PWA Development' },
  { icon: Layers, label: 'Multi-Tenant Architecture' },
  { icon: Cpu, label: 'AI Integration (Claude / LLMs)' },
  { icon: Database, label: 'PostgreSQL / Supabase / Prisma' },
];

const AboutMe = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen text-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-gray-900/70 border border-blue-800/40 p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold mb-4 text-blue-300">About Me</h1>
        <p className="mb-4">I'm Scott Shepherd, a software architect and full-stack engineer with 20+ years of experience. I build SaaS products and progressive web apps that give small and mid-sized businesses enterprise-grade software&mdash;without the enterprise overhead.</p>
        <p className="mb-4">My focus is shipping real products: secure, multi-tenant platforms that work online and off, scale as the business grows, and increasingly put AI to work where it creates genuine leverage. I own the whole stack&mdash;data model, API, UI, auth, billing, and deployment&mdash;and I care about clean, maintainable code and designs that hold up under real-world use.</p>
        <p className="mb-6">Lately that means a multi-tenant CRM platform for SMBs, an AI-powered LinkedIn-native CRM, an operations SaaS for short-term rental hosts, and offline-first inventory PWAs&mdash;built across the modern web (Next.js, TypeScript, Laravel) with deep Microsoft (.NET, Azure) experience to draw on.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div key={h.label} className="flex items-center bg-gray-800 rounded-lg p-4">
                <Icon className="text-blue-400 mr-3 shrink-0" />
                <span className="font-medium">{h.label}</span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center text-gray-400 text-sm">
          <Music className="text-blue-400 mr-2 shrink-0" size={18} />
          <span className="italic">Based in Boise, Idaho. When I'm not building, I'm probably listening to rock and metal&mdash;coding solutions as precise and powerful as a good guitar solo.</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
