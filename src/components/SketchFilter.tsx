export default function SketchFilter() {
  return (
    <svg
      aria-hidden="true"
      width="0"
      height="0"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
    >
      <defs>
        <filter id="sketch-wobble">
          <feTurbulence type="fractalNoise" baseFrequency="0.032" numOctaves="2" seed="5" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.85" />
        </filter>
        <filter id="sketch-wobble-strong">
          <feTurbulence type="fractalNoise" baseFrequency="0.048" numOctaves="2" seed="11" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
        </filter>
        <filter id="sketch-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2C5E47" stopOpacity="0" />
          <stop offset="30%" stopColor="#2C5E47" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#6E8B3D" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#6E8B3D" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="line-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B7A24B" stopOpacity="0" />
          <stop offset="40%" stopColor="#B7A24B" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#B7A24B" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#B7A24B" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="line-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E4634" stopOpacity="0" />
          <stop offset="35%" stopColor="#1E4634" stopOpacity="0.20" />
          <stop offset="65%" stopColor="#C2CB52" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#C2CB52" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
