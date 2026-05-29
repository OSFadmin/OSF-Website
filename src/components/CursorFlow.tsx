'use client';

import { useEffect, useRef } from 'react';

/**
 * Click delight: on each click, a few elegant swirling tendrils spiral off
 * the cursor and dissolve. No cursor trail, no ripples.
 *
 * Fixed, full-viewport canvas with pointer-events: none so it never
 * intercepts interaction. Disabled on touch devices and when the user
 * prefers reduced motion. Palette-matched (lime / gold / sage).
 */
export default function CursorFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const COLORS = ['194,203,82', '183,162,75', '110,139,61']; // lime / gold / sage

    type Pt = { x: number; y: number };
    type Swirl = {
      ox: number;
      oy: number;
      angle: number;
      angVel: number;
      radius: number;
      speed: number;
      life: number;
      decay: number;
      color: string;
      pts: Pt[];
    };

    const swirls: Swirl[] = [];

    const spawn = (cx: number, cy: number) => {
      const count = 5 + Math.floor(Math.random() * 2); // 5–6 tendrils
      const base = Math.random() * Math.PI * 2;
      const dir = Math.random() < 0.5 ? 1 : -1; // coherent swirl direction
      for (let i = 0; i < count; i++) {
        swirls.push({
          ox: cx,
          oy: cy,
          angle: base + (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.4,
          angVel: dir * (0.08 + Math.random() * 0.05),
          radius: 4,
          speed: 1.7 + Math.random() * 1.0,
          life: 1,
          decay: 0.011 + Math.random() * 0.005,
          color: COLORS[i % COLORS.length],
          pts: [],
        });
      }
    };

    const onDown = (e: MouseEvent) => spawn(e.clientX, e.clientY);
    window.addEventListener('mousedown', onDown, { passive: true });

    let raf = 0;
    const render = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      for (let s = swirls.length - 1; s >= 0; s--) {
        const sw = swirls[s];
        sw.angle += sw.angVel;
        sw.speed *= 0.965;
        sw.radius += sw.speed;
        sw.life -= sw.decay;

        const px = sw.ox + Math.cos(sw.angle) * sw.radius;
        const py = sw.oy + Math.sin(sw.angle) * sw.radius;
        sw.pts.push({ x: px, y: py });
        if (sw.pts.length > 16) sw.pts.shift();

        // flowing tendril — tapered, fading from tail to head
        const pts = sw.pts;
        for (let i = 1; i < pts.length; i++) {
          const t = i / pts.length; // tail → head
          const p0 = pts[i - 1];
          const p1 = pts[i];
          const mx = (p0.x + p1.x) / 2;
          const my = (p0.y + p1.y) / 2;
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.quadraticCurveTo(p0.x, p0.y, mx, my);
          ctx.lineTo(p1.x, p1.y);
          ctx.strokeStyle = `rgba(${sw.color},${Math.max(0, sw.life) * t * 0.85})`;
          ctx.lineWidth = 2.2 * t;
          ctx.stroke();
        }

        // soft head
        if (pts.length) {
          const head = pts[pts.length - 1];
          ctx.beginPath();
          ctx.arc(head.x, head.y, 1.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${sw.color},${Math.max(0, sw.life) * 0.9})`;
          ctx.fill();
        }

        if (sw.life <= 0) swirls.splice(s, 1);
      }

      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousedown', onDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        pointerEvents: 'none',
      }}
    />
  );
}
