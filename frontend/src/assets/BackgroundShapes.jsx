import React from 'react';

const BackgroundShapes = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className="background-shapes">
    <defs>
      <linearGradient id="gradient1" x1="0" y1="0" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 0.2 }} />
        <stop offset="100%" style={{ stopColor: '#7C3AED', stopOpacity: 0.1 }} />
      </linearGradient>
    </defs>
    <circle cx="900" cy="100" r="250" fill="url(#gradient1)" />
    <circle cx="100" cy="850" r="200" fill="url(#gradient1)" />
    <path d="M400,50 Q600,250 800,100 T1000,300" stroke="#4F46E5" strokeWidth="2" fill="none" opacity="0.1" />
    <path d="M0,700 Q200,800 400,750 T800,900" stroke="#7C3AED" strokeWidth="2" fill="none" opacity="0.1" />
  </svg>
);

export default BackgroundShapes;