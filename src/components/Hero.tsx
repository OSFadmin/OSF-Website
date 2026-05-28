import Link from 'next/link';
import HeroBackground from './HeroBackground';

interface HeroProps {
  kicker?: string;
  headline: string;
  subhead?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  dark?: boolean;
}

export default function Hero({
  kicker,
  headline,
  subhead,
  ctaText,
  ctaLink,
  ctaSecondaryText,
  ctaSecondaryLink,
  dark = true,
}: HeroProps) {
  const textColor = dark ? '#F5F1E6' : 'var(--foreground)';
  const subColor  = dark ? 'rgba(245,241,230,0.78)' : 'var(--muted)';

  return (
    <section
      className="relative w-full py-28 md:py-36 flex items-center justify-center overflow-hidden"
      style={{ background: dark ? '#1E4634' : 'transparent' }}
    >
      {/* Scroll-reactive gradient background */}
      {dark && <HeroBackground />}

      {/* Radial inner glow */}
      {dark && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 75% 55% at 50% 38%, rgba(110,139,61,0.14) 0%, transparent 70%)',
          }}
        />
      )}

      {/* Decorative horizontal rule */}
      {dark && (
        <svg
          viewBox="0 0 1440 2"
          className="absolute top-1/3 left-0 w-full pointer-events-none"
          style={{ opacity: 0.1 }}
          filter="url(#sketch-wobble)"
        >
          <line x1="0" y1="1" x2="1440" y2="1" stroke="#C2CB52" strokeWidth="1" />
        </svg>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        {kicker && (
          <p
            className="animate-fade-up font-body font-medium uppercase tracking-[0.18em] mb-6"
            style={{
              color: dark ? '#B7A24B' : 'var(--sage)',
              animationDelay: '0.1s',
              fontSize: 'clamp(0.8rem, 1.4vw, 1rem)',
            }}
          >
            {kicker}
          </p>
        )}

        <h1
          className="animate-fade-up font-display font-bold leading-[1.12] mb-6"
          style={{
            color: textColor,
            fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
            animationDelay: '0.25s',
          }}
        >
          {headline}
        </h1>

        {subhead && (
          <p
            className="animate-fade-up font-body font-light leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: subColor, animationDelay: '0.45s', fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)' }}
          >
            {subhead}
          </p>
        )}

        {(ctaText || ctaSecondaryText) && (
          <div
            className="animate-fade-up flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: '0.65s' }}
          >
            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="inline-flex items-center px-8 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide transition-all hover:shadow-lg hover:scale-[1.02]"
                style={{ background: '#C2CB52', color: '#1A2A23' }}
              >
                {ctaText}
              </Link>
            )}
            {ctaSecondaryText && ctaSecondaryLink && (
              <Link
                href={ctaSecondaryLink}
                className="inline-flex items-center px-8 py-3.5 rounded-full font-body font-medium text-sm tracking-wide transition-all hover:opacity-80"
                style={{
                  border: '1px solid rgba(245,241,230,0.35)',
                  color: 'rgba(245,241,230,0.85)',
                }}
              >
                {ctaSecondaryText} →
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
