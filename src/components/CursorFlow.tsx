'use client';

import { useEffect, useRef } from 'react';

/**
 * Site-wide cursor delight:
 *  - a soft glow + tapered "flow" ribbon that eases behind the pointer
 *  - elegant expanding ripples on click
 *
 * Rendered on a fixed, full-viewport canvas with pointer-events: none so it
 * never intercepts interaction. Disabled on touch devices and when the user
 * prefers reduced motion. Palette-matched (lime / gold / sage).
 */
export default function CursorFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return; // leave the (transparent) canvas inert

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

    type Pt = { x: number; y: number };
    type Ripple = { x: number; y: number; r: number; a: number };

    const trail: Pt[] = [];
    const MAX_TRAIL = 22;
    const ripples: Ripple[] = [];

    let mouseX = w / 2;
    let mouseY = h / 2;
    let glowX = mouseX;
    let glowY = mouseY;
    let moved = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!moved) {
        glowX = mouseX;
        glowY = mouseY;
        moved = true;
      }
    };
    const onDown = (e: MouseEvent) => {
      ripples.push({ x: e.clientX, y: e.clientY, r: 0, a: 0.5 });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown, { passive: true });

    let raf = 0;
    const render = () => {
      ctx.clearRect(0, 0, w, h);

      if (moved) {
        // ease the glow toward the real cursor → flowing lag
        glowX += (mouseX - glowX) * 0.18;
        glowY += (mouseY - glowY) * 0.18;

        trail.push({ x: glowX, y: glowY });
        if (trail.length > MAX_TRAIL) trail.shift();

        // soft lead glow
        const grad = ctx.createRadialGradient(glowX, glowY, 0, glowX, glowY, 28);
        grad.addColorStop(0, 'rgba(194,203,82,0.16)');
        grad.addColorStop(1, 'rgba(194,203,82,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(glowX, glowY, 28, 0, Math.PI * 2);
        ctx.fill();

        // tapered flowing ribbon through the trail
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        for (let i = 1; i < trail.length; i++) {
          const p0 = trail[i - 1];
          const p1 = trail[i];
          const t = i / trail.length; // 0 (old) → 1 (recent)
          const mx = (p0.x + p1.x) / 2;
          const my = (p0.y + p1.y) / 2;
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.quadraticCurveTo(p0.x, p0.y, mx, my);
          ctx.lineTo(p1.x, p1.y);
          ctx.strokeStyle = `rgba(183,162,75,${0.4 * t})`;
          ctx.lineWidth = 2.4 * t;
          ctx.stroke();
        }
      } else if (trail.length) {
        trail.shift(); // dissolve when idle
      }

      // click ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += (96 - rp.r) * 0.06 + 0.6; // ease outward
        rp.a *= 0.94; // fade

        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(110,139,61,${rp.a})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r * 0.58, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(183,162,75,${rp.a * 0.6})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        if (rp.a < 0.02) ripples.splice(i, 1);
      }

      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
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
