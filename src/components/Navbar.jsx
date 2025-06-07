import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-900 text-gray-100 px-6 py-4 shadow-lg">
    <ul className="flex space-x-8 justify-center items-center text-lg font-semibold">
      <li>
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
      </li>
      <li>
        <Link to="/portfolio" className="hover:text-blue-400 transition">Portfolio</Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-blue-400 transition">About</Link>
      </li>
      <li>
        <Link to="/react-usage" className="hover:text-blue-400 transition">React Usage</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;