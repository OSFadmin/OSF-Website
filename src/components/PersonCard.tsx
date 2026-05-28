interface PersonCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

export default function PersonCard({ name, role, bio, imageUrl }: PersonCardProps) {
  const initials = name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);
  const nameParts = name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <div className="glass-card overflow-hidden group">
      {/* Photo area */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: '3 / 1.5' }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg,
                #0E2018 0%,
                #152A1D 20%,
                #1E4634 45%,
                #265840 65%,
                #305840 80%,
                #3A5E38 95%,
                #42582A 100%
              )`,
            }}
          >
            {/* Atmospheric radial lights */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 55% 70% at 20% 80%, rgba(94,130,62,0.3) 0%, transparent 52%),
                  radial-gradient(ellipse 45% 55% at 80% 15%, rgba(183,162,75,0.15) 0%, transparent 45%),
                  radial-gradient(ellipse 80% 25% at 50% 105%, rgba(8,18,12,0.5) 0%, transparent 50%)
                `,
              }}
            />

            {/* Corner brackets */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              style={{ opacity: 0.18 }}
            >
              <path d="M5 20 L5 5 L20 5"   stroke="#C2CB52" strokeWidth="1.2" fill="none" />
              <path d="M80 5 L95 5 L95 20" stroke="#C2CB52" strokeWidth="1.2" fill="none" />
              <path d="M5 80 L5 95 L20 95" stroke="#C2CB52" strokeWidth="1.2" fill="none" />
              <path d="M80 95 L95 95 L95 80" stroke="#C2CB52" strokeWidth="1.2" fill="none" />
            </svg>

            {/* Large initials */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-display font-bold select-none"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                  color: 'rgba(245,241,230,0.12)',
                  letterSpacing: '0.08em',
                }}
              >
                {initials}
              </span>
            </div>

            {/* Placeholder label */}
            <div className="absolute bottom-3 right-3">
              <span
                className="font-body"
                style={{
                  fontSize: '0.55rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,241,230,0.25)',
                }}
              >
                Photo placeholder
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7">
        <h4 className="font-display font-semibold mb-0.5" style={{ color: 'var(--ink)', fontSize: '1.12rem' }}>
          {firstName}{' '}
          <span style={{ color: 'var(--forest)' }}>{lastName}</span>
        </h4>
        <p
          className="text-xs uppercase tracking-[0.15em] font-body mb-4"
          style={{ color: 'var(--gold)' }}
        >
          {role}
        </p>
        <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          {bio}
        </p>
      </div>
    </div>
  );
}
