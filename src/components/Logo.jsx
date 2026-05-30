import React from 'react';

// Gigadev Consulting brand mark (full horizontal lockup PNG in public/images).
// `height` controls the rendered size; width scales automatically (2.5:1).
const Logo = ({ height = 36, className = '' }) => (
  <img
    src="/images/GigadevLogo2.png"
    alt="Gigadev Consulting"
    style={{ height }}
    className={`w-auto ${className}`}
  />
);

export default Logo;
