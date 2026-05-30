import React from 'react';
import { Globe, Database, Cpu, Layers, Server } from 'lucide-react';

const groups = [
  {
    title: 'Web',
    icon: Globe,
    color: 'text-blue-400',
    items: ['Next.js', 'React', 'TypeScript', 'Laravel / PHP', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Data',
    icon: Database,
    color: 'text-green-400',
    items: ['PostgreSQL', 'Supabase', 'Prisma', 'Drizzle ORM', 'SQLite', 'Row-Level Security'],
  },
  {
    title: 'AI',
    icon: Cpu,
    color: 'text-pink-400',
    items: [
      'Anthropic Claude API',
      'LLM integration',
      'Prompt engineering',
      'Message generation',
      'Summarization & classification',
    ],
  },
  {
    title: 'Architecture & Patterns',
    icon: Layers,
    color: 'text-purple-400',
    items: [
      'Multi-tenant SaaS',
      'Offline-first PWAs',
      'Pluggable packs & plugins',
      'Auth & SSO / 2FA',
      'Stripe billing',
      'CI/CD',
    ],
  },
  {
    title: 'Microsoft Stack',
    icon: Server,
    color: 'text-indigo-400',
    items: ['.NET', 'Blazor', 'Entity Framework', 'SQL Server', 'Azure', 'Azure DevOps'],
  },
];

const Skills = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen text-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-2 text-blue-300">Skills &amp; Tech</h1>
        <p className="text-blue-100 mb-10 max-w-2xl">
          The tools I reach for to ship multi-tenant SaaS, offline-first PWAs, and AI-enabled
          features&mdash;modern web stacks first, with deep Microsoft experience to draw on.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.title}
                className="bg-gray-900/70 border border-blue-800/40 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Icon className={`mr-3 ${g.color}`} />
                  <h2 className="text-xl font-bold text-white">{g.title}</h2>
                </div>
                <div className="flex flex-wrap">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block bg-blue-900/60 text-blue-200 text-sm font-medium px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
