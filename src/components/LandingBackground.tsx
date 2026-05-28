'use client';

import { useEffect, useState } from 'react';

export default function LandingBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallaxSlow = -scrollY * 0.12;
  const parallaxFast = -scrollY * 0.22;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Soft radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: `translateX(-50%) translateY(${parallaxSlow * 0.5}px)`,
          width: '900px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(110,139,61,0.08) 0%, rgba(30,70,52,0.06) 45%, transparent 70%)',
          transition: 'transform 0.05s linear',
        }}
      />

      {/* Orbital rings */}
      <svg
        viewBox="0 0 1000 700"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          transform: `translateY(${parallaxSlow}px)`,
          transition: 'transform 0.05s linear',
          opacity: 0.07,
        }}
      >
        <circle cx="500" cy="320" r="280" stroke="#B7A24B" strokeWidth="0.8" fill="none" />
        <circle cx="500" cy="320" r="200" stroke="#6E8B3D" strokeWidth="0.7" fill="none" />
        <circle cx="500" cy="320" r="130" stroke="#2C5E47" strokeWidth="0.6" fill="none" />
        <ellipse cx="500" cy="320" rx="280" ry="90" stroke="#B7A24B" strokeWidth="0.6" fill="none" />
        <ellipse cx="500" cy="320" rx="200" ry="65" stroke="#6E8B3D" strokeWidth="0.5" fill="none" />
        <line x1="220" y1="320" x2="780" y2="320" stroke="#B7A24B" strokeWidth="0.5" />
        <line x1="500" y1="40" x2="500" y2="600" stroke="#B7A24B" strokeWidth="0.5" />
      </svg>

      {/* Gentle horizon line */}
      <svg
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '260px',
          transform: `translateY(${parallaxFast}px)`,
          transition: 'transform 0.05s linear',
        }}
      >
        <path
          d="M0 300 L0 190 Q180 150 360 170 Q540 190 720 155 Q900 120 1080 165 Q1260 210 1440 180 L1440 300 Z"
          fill="#1A2A23"
          opacity="0.12"
        />
        <path
          d="M0 300 L0 230 Q200 200 400 215 Q600 230 800 205 Q1000 182 1200 210 Q1340 228 1440 215 L1440 300 Z"
          fill="#2C5E47"
          opacity="0.09"
        />
      </svg>
    </div>
  );
}
