'use client';

import { useEffect, useRef } from 'react';

type Ring = { r: number; color: string; opacity: number; dur: number; delay: number; sw: number };
type Group = { cx: number; cy: number; rings: Ring[] };

// Holons: nested circles representing whole-parts — some concentric, some independent
const groups: Group[] = [
  // Large nested holon — upper right
  { cx: 80, cy: 18, rings: [
    { r: 18,  color: '#2C5E47', opacity: 0.12, dur: 20, delay:  0,  sw: 0.5  },
    { r: 11,  color: '#6E8B3D', opacity: 0.10, dur: 16, delay: -4,  sw: 0.4  },
    { r:  5,  color: '#B7A24B', opacity: 0.13, dur: 12, delay: -8,  sw: 0.35 },
  ]},
  // Medium nested holon — lower left
  { cx: 12, cy: 76, rings: [
    { r: 14,  color: '#1E4634', opacity: 0.10, dur: 24, delay: -6,  sw: 0.45 },
    { r:  8,  color: '#6E8B3D', opacity: 0.09, dur: 17, delay: -2,  sw: 0.4  },
    { r:  4,  color: '#C2CB52', opacity: 0.08, dur: 13, delay: -9,  sw: 0.3  },
  ]},
  // Small nested holon — bottom center
  { cx: 54, cy: 89, rings: [
    { r:  9,  color: '#2C5E47', opacity: 0.08, dur: 22, delay: -5,  sw: 0.4  },
    { r:  5,  color: '#B7A24B', opacity: 0.09, dur: 15, delay: -11, sw: 0.3  },
  ]},
  // Small nested holon — left edge mid
  { cx:  4, cy: 38, rings: [
    { r:  7,  color: '#6E8B3D', opacity: 0.07, dur: 19, delay: -5,  sw: 0.35 },
    { r:3.5,  color: '#1E4634', opacity: 0.06, dur: 14, delay: -2,  sw: 0.25 },
  ]},
  // Independent holons — scattered
  { cx: 36, cy: 10, rings: [{ r: 5,  color: '#B7A24B', opacity: 0.08, dur: 13, delay: -7,  sw: 0.35 }] },
  { cx: 93, cy: 54, rings: [{ r: 6,  color: '#6E8B3D', opacity: 0.07, dur: 18, delay: -3,  sw: 0.35 }] },
  { cx: 20, cy: 40, rings: [{ r: 4,  color: '#C2CB52', opacity: 0.07, dur: 11, delay: -14, sw: 0.3  }] },
  { cx: 68, cy: 33, rings: [{ r: 3,  color: '#B7A24B', opacity: 0.07, dur: 14, delay: -9,  sw: 0.3  }] },
  { cx: 44, cy: 62, rings: [{ r: 4.5, color: '#6E8B3D', opacity: 0.06, dur: 16, delay: -6, sw: 0.3  }] },
];

// Build scoped CSS keyframes for each ring (transform-box: fill-box scales around own center)
function buildStyles(): string {
  let css = '';
  let i = 0;
  for (const g of groups) {
    for (const ring of g.rings) {
      const scaleUp = (1.12).toFixed(3);
      const opHigh  = (ring.opacity * 1.45).toFixed(3);
      css += `
        @keyframes hb${i}{0%,100%{transform:scale(1);opacity:${ring.opacity}}50%{transform:scale(${scaleUp});opacity:${opHigh}}}
        .hn${i}{transform-box:fill-box;transform-origin:center;animation:hb${i} ${ring.dur}s ${ring.delay}s ease-in-out infinite}
      `;
      i++;
    }
  }
  return css;
}

const STYLES = buildStyles();

export default function HolonBackground() {
  const ref = useRef<HTMLDivElement>(null);

  // Very subtle mouse parallax — the holons breathe with the cursor
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth  - 0.5) * 9;
      ty = (e.clientY / window.innerHeight - 0.5) * 6;
    };

    const tick = () => {
      cx += (tx - cx) * 0.035;
      cy += (ty - cy) * 0.035;
      el.style.transform = `translate(${cx.toFixed(2)}px,${cy.toFixed(2)}px)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove); };
  }, []);

  let ringIndex = 0;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <style>{STYLES}</style>
        </defs>

        {groups.map((g, gi) =>
          g.rings.map((ring, ri) => {
            const cls = `hn${ringIndex++}`;
            return (
              <circle
                key={`${gi}-${ri}`}
                cx={g.cx}
                cy={g.cy}
                r={ring.r}
                fill="none"
                stroke={ring.color}
                strokeWidth={ring.sw}
                className={cls}
              />
            );
          })
        )}
      </svg>
    </div>
  );
}
