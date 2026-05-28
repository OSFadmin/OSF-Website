export default function InteriorBackground() {
  const dots = [
    { top: '8%',  left: '4%',  size: 6,  dur: '5.2s', delay: '0s' },
    { top: '22%', left: '92%', size: 4,  dur: '6.8s', delay: '1.2s' },
    { top: '38%', left: '7%',  size: 5,  dur: '4.5s', delay: '2.4s' },
    { top: '55%', left: '95%', size: 3,  dur: '7.1s', delay: '0.6s' },
    { top: '70%', left: '3%',  size: 4,  dur: '5.8s', delay: '1.8s' },
    { top: '85%', left: '90%', size: 5,  dur: '4.9s', delay: '3.0s' },
    { top: '15%', left: '48%', size: 3,  dur: '6.3s', delay: '0.9s' },
    { top: '65%', left: '52%', size: 4,  dur: '5.5s', delay: '2.1s' },
    { top: '45%', left: '88%', size: 3,  dur: '7.4s', delay: '1.5s' },
    { top: '30%', left: '12%', size: 4,  dur: '4.8s', delay: '3.3s' },
    { top: '78%', left: '35%', size: 3,  dur: '6.0s', delay: '0.3s' },
    { top: '12%', left: '70%', size: 5,  dur: '5.1s', delay: '2.7s' },
    { top: '92%', left: '18%', size: 3,  dur: '6.6s', delay: '1.0s' },
    { top: '48%', left: '25%', size: 4,  dur: '4.4s', delay: '0.5s' },
    { top: '62%', left: '75%', size: 3,  dur: '7.0s', delay: '2.2s' },
    { top: '88%', left: '60%', size: 4,  dur: '5.7s', delay: '1.4s' },
    { top: '25%', left: '38%', size: 3,  dur: '6.4s', delay: '3.6s' },
    { top: '5%',  left: '82%', size: 4,  dur: '4.6s', delay: '0.8s' },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Faint squiggle lines */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        filter="url(#sketch-wobble-strong)"
      >
        <path
          d="M -60 250 Q 250 200 520 240 Q 800 280 1100 220 Q 1320 180 1500 235"
          stroke="#2C5E47"
          strokeWidth="1.2"
          fill="none"
          opacity="0.10"
          className="animate-float-line"
          style={{ '--dur': '18s' } as React.CSSProperties}
        />
        <path
          d="M -80 560 Q 300 510 600 545 Q 900 582 1180 525 Q 1360 495 1520 538"
          stroke="#6E8B3D"
          strokeWidth="1.0"
          fill="none"
          opacity="0.09"
          className="animate-float-line"
          style={{ '--dur': '22s', animationDelay: '-8s' } as React.CSSProperties}
        />
        <path
          d="M -40 780 Q 280 740 560 768 Q 840 800 1100 755 Q 1300 725 1500 760"
          stroke="#B7A24B"
          strokeWidth="0.9"
          fill="none"
          opacity="0.08"
          className="animate-float-line"
          style={{ '--dur': '26s', animationDelay: '-14s' } as React.CSSProperties}
        />
      </svg>

      {/* Floating dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-sparkle"
          style={{
            top: dot.top,
            left: dot.left,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            background: i % 3 === 0
              ? 'radial-gradient(circle, rgba(183,162,75,0.7), transparent)'
              : i % 3 === 1
              ? 'radial-gradient(circle, rgba(44,94,71,0.6), transparent)'
              : 'radial-gradient(circle, rgba(110,139,61,0.6), transparent)',
            '--dur': dot.dur,
            animationDelay: dot.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
