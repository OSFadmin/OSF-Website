interface PhotoBlockProps {
  label?: string;
  variant?: 'landscape' | 'portrait' | 'square' | 'panoramic' | 'wide';
  aspectRatio?: string;
  className?: string;
  style?: React.CSSProperties;
}

const variantRatios: Record<string, string> = {
  landscape: '4 / 3',
  portrait:  '3 / 4',
  square:    '1 / 1',
  panoramic: '21 / 9',
  wide:      '16 / 9',
};

export default function PhotoBlock({
  label = 'Photography',
  variant = 'landscape',
  aspectRatio,
  className = '',
  style,
}: PhotoBlockProps) {
  const ratio = aspectRatio ?? variantRatios[variant];

  return (
    <div
      className={`photo-placeholder ${className}`}
      style={{ aspectRatio: ratio, ...style }}
      role="img"
      aria-label={`Image placeholder: ${label}`}
    >
      {/* Rule-of-thirds grid */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 3 2"
        preserveAspectRatio="none"
        style={{ opacity: 0.07, zIndex: 1 }}
      >
        <line x1="1" y1="0" x2="1" y2="2" stroke="#C2CB52" strokeWidth="0.016" />
        <line x1="2" y1="0" x2="2" y2="2" stroke="#C2CB52" strokeWidth="0.016" />
        <line x1="0" y1="0.667" x2="3" y2="0.667" stroke="#C2CB52" strokeWidth="0.016" />
        <line x1="0" y1="1.333" x2="3" y2="1.333" stroke="#C2CB52" strokeWidth="0.016" />
      </svg>

      {/* Viewfinder corner brackets */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ opacity: 0.16, zIndex: 1 }}
      >
        <path d="M5 17 L5 5 L17 5"   stroke="#C2CB52" strokeWidth="1" fill="none" />
        <path d="M83 5 L95 5 L95 17" stroke="#C2CB52" strokeWidth="1" fill="none" />
        <path d="M5 83 L5 95 L17 95" stroke="#C2CB52" strokeWidth="1" fill="none" />
        <path d="M83 95 L95 95 L95 83" stroke="#C2CB52" strokeWidth="1" fill="none" />
      </svg>

      {/* Horizon line suggestion */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: '62%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(194,203,82,0.18) 20%, rgba(194,203,82,0.28) 50%, rgba(194,203,82,0.18) 80%, transparent)',
          zIndex: 1,
        }}
      />

      {/* Camera icon */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ zIndex: 2 }}
      >
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" style={{ opacity: 0.2 }}>
          <rect x="3" y="10" width="32" height="22" rx="4" stroke="#F5F1E6" strokeWidth="1.5" />
          <circle cx="19" cy="21" r="7" stroke="#F5F1E6" strokeWidth="1.4" />
          <circle cx="19" cy="21" r="2.5" fill="rgba(245,241,230,0.3)" />
          <path d="M14 10 L16 6 L22 6 L24 10" stroke="#F5F1E6" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
          <circle cx="30" cy="14" r="1.8" fill="rgba(245,241,230,0.5)" />
        </svg>
      </div>

      {/* Bottom meta bar */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-4 py-3"
        style={{ zIndex: 3 }}
      >
        <span
          className="font-body"
          style={{
            fontSize: '0.625rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(245,241,230,0.5)',
            background: 'rgba(20,38,28,0.6)',
            backdropFilter: 'blur(8px)',
            padding: '4px 10px',
            borderRadius: '99px',
            border: '1px solid rgba(245,241,230,0.1)',
          }}
        >
          {label}
        </span>
        <span
          className="font-body"
          style={{
            fontSize: '0.55rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(245,241,230,0.2)',
          }}
        >
          Placeholder
        </span>
      </div>
    </div>
  );
}
