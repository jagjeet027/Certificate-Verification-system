import React from 'react';

const AdventureLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="adventure-logo">
    <defs>
      <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#1D4ED8', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#D97706', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    {/* Sun */}
    <circle cx="70" cy="30" r="15" fill="url(#sunGradient)" />
    {/* Mountains */}
    <path d="M10,80 L40,30 L70,80 Z" fill="url(#mountainGradient)" />
    <path d="M30,80 L60,40 L90,80 Z" fill="url(#mountainGradient)" opacity="0.8" />
    {/* Snow Caps */}
    <path d="M35,35 L40,30 L45,35 L40,37 Z" fill="white" />
    <path d="M55,45 L60,40 L65,45 L60,47 Z" fill="white" />
  </svg>
);

export default AdventureLogo;