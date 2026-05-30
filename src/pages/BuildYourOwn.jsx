import React from 'react';
import { GitFork, Rocket, Pencil, Github } from 'lucide-react';

const steps = [
  {
    icon: GitFork,
    title: '1. Fork the code',
    desc: 'Grab the open-source code for this very site on GitHub and fork it to your own account. It is a lightweight React + Vite + Tailwind CSS app—no database, no backend, no accounts to manage.',
  },
  {
    icon: Pencil,
    title: '2. Make it yours',
    desc: 'Edit the content in src/pages and src/components: your name and hero copy in Home.jsx, your projects in Portfolio.jsx, your skills in Skills.jsx, and your bio in AboutMe.jsx. Drop your own images into public/images. Run "npm install" then "npm run dev" to preview locally.',
  },
  {
    icon: Rocket,
    title: '3. Deploy free on Netlify',
    desc: 'Connect your forked repo to Netlify (a free hosting tier). It auto-detects the build settings, publishes in a minute or two, and gives you a free https URL plus automatic redeploys on every push. Vercel, Cloudflare Pages, and GitHub Pages work too.',
  },
];

const BuildYourOwn = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen text-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-2 text-blue-300">Build Your Own Portfolio</h1>
        <p className="text-blue-100 mb-8 max-w-2xl">
          Like this site? The code is open source&mdash;fork it, swap in your own details, and
          deploy your own portfolio for free. No license fee, no catch. A clean, fast starting
          point for developers, designers, and freelancers who want a professional presence online.
        </p>

        <div className="space-y-4 mb-8">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="bg-gray-900/70 border border-blue-800/40 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-2">
                  <Icon className="mr-3 text-blue-400 shrink-0" />
                  <h2 className="text-lg font-bold text-white">{s.title}</h2>
                </div>
                <p className="text-gray-300 text-sm">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-800 rounded-xl p-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-2">Get the code</h2>
          <p className="text-blue-100 mb-5 max-w-xl mx-auto">
            Fork the repository on GitHub and you&apos;ll have your own portfolio up in an
            afternoon. Stuck or want it customized for you? I&apos;m happy to help.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://github.com/gigadev/portfolio-react"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-800 font-semibold px-5 py-2 rounded-full shadow hover:bg-blue-100 transition"
            >
              <Github size={18} /> Fork on GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/scottwshepherd/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white font-semibold px-5 py-2 rounded-full hover:bg-white/10 transition"
            >
              Ask me for help
            </a>
          </div>
        </div>

        <p className="text-gray-400 text-xs mt-6 text-center">
          Built with React, Vite, and Tailwind CSS. Hosted free on Netlify.
        </p>
      </div>
    </div>
  );
};

export default BuildYourOwn;
