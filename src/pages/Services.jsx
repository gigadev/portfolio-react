import React from 'react';
import { Rocket, Smartphone, Cpu, Compass, Database, Wrench } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'SaaS Product Development',
    desc: 'Multi-tenant, cloud-ready SaaS built from concept to production—data model, API, UI, auth, billing, and deployment. Secure tenant isolation from day one.',
  },
  {
    icon: Smartphone,
    title: 'PWA Development',
    desc: 'Installable, offline-first progressive web apps that keep working without a connection and sync to the cloud when it returns.',
  },
  {
    icon: Cpu,
    title: 'AI Integration',
    desc: 'Practical AI woven into your product—message generation, summarization, classification, and auto-capture—built on the Anthropic Claude and other LLM APIs.',
  },
  {
    icon: Compass,
    title: 'Technical Architecture & Advisory',
    desc: 'Architecture, data modeling, and roadmap guidance for SaaS and PWA products—multi-tenancy, security, and scale designed in, not bolted on.',
  },
  {
    icon: Database,
    title: 'Database & Backend Development',
    desc: 'PostgreSQL/Supabase schema design, Prisma/Drizzle data layers, REST APIs, webhooks, and background jobs—performant and maintainable.',
  },
  {
    icon: Wrench,
    title: 'Product Modernization',
    desc: 'Turn a spreadsheet-bound process or aging internal tool into a polished, scalable SaaS or PWA application—often AI-enabled.',
  },
];

const Services = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen text-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-2 text-blue-300">Services</h1>
        <p className="text-blue-100 mb-10 max-w-2xl">
          Open to providing services. I help SMBs and founders launch SaaS products, build
          PWAs, and add AI to software they already run&mdash;available for remote and
          fractional product builds across the U.S.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-gray-900/70 border border-blue-800/40 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-3">
                  <Icon className="mr-3 text-blue-400" />
                  <h2 className="text-xl font-bold text-white">{s.title}</h2>
                </div>
                <p className="text-gray-300 text-sm">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-800 rounded-xl p-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-2">Have an idea worth building?</h2>
          <p className="text-blue-100 mb-5 max-w-xl mx-auto">
            Whether you&apos;re launching a SaaS product, building a PWA, or want to add AI to
            software you already run&mdash;let&apos;s talk.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://www.linkedin.com/in/scottwshepherd/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-800 font-semibold px-5 py-2 rounded-full shadow hover:bg-blue-100 transition"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://www.upwork.com/freelancers/gigadev?viewMode=1"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white font-semibold px-5 py-2 rounded-full hover:bg-white/10 transition"
            >
              Hire on Upwork
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
