import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const links = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/skills', label: 'Skills' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-900 text-gray-100 px-6 py-4 shadow-lg">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Home">
          <span className="bg-white rounded-md px-2 py-1 flex items-center">
            <Logo height={26} />
          </span>
          <span className="font-extrabold text-lg tracking-tight hidden sm:inline">Scott Shepherd</span>
        </Link>
        <ul className="hidden md:flex space-x-8 items-center text-lg font-semibold">
          {links.map((l) => (
            <li key={l.to}><Link to={l.to} className="hover:text-blue-400 transition">{l.label}</Link></li>
          ))}
        </ul>
        <button className="md:hidden text-2xl" onClick={() => setOpen((o) => !o)} aria-label="Toggle navigation">
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <ul className="md:hidden mt-4 space-y-3 text-center text-lg font-semibold">
          {links.map((l) => (
            <li key={l.to}><Link to={l.to} className="block hover:text-blue-400 transition" onClick={() => setOpen(false)}>{l.label}</Link></li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
