'use client';

import { useEffect, useRef } from 'react';

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function hexToRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

function blendColor(a: string, b: string, t: number): string {
  const [r1, g1, b1] = hexToRgb(a);
  const [r2, g2, b2] = hexToRgb(b);
  return `rgb(${Math.round(lerp(r1, r2, t))},${Math.round(lerp(g1, g2, t))},${Math.round(lerp(b1, b2, t))})`;
}

// Four gradient stops: deep shadow → pine → forest → warm base
// State A = at rest (no scroll) — deep, dark
// State B = scrolled — lifts toward lighter forest greens
const A = ['#07110A', '#1E4634', '#2C5E47', '#253A28'];
const B = ['#1A3D2B', '#2C5E47', '#3A5C38', '#4A5C35'];

function buildGradient(t: number) {
  const angle = Math.round(lerp(180, 178, t));
  const c0 = blendColor(A[0], B[0], t);
  const c1 = blendColor(A[1], B[1], t);
  const c2 = blendColor(A[2], B[2], t);
  const c3 = blendColor(A[3], B[3], t);
  // warm golden-cream wash that grows softly at the bottom as you scroll
  const warmOpacity = (t * 0.28).toFixed(3);
  return `linear-gradient(${angle}deg, ${c0} 0%, ${c1} 28%, ${c2} 58%, ${c3} 76%, rgba(210,185,130,${warmOpacity}) 100%)`;
}

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const t = Math.min(window.scrollY / 520, 1);
      el.style.background = buildGradient(t);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{ background: buildGradient(0) }}
    />
  );
}
