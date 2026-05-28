import Link from 'next/link';

interface CtaBandProps {
  headline: string;
  text?: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  bg?: string;
}

export default function CtaBand({
  headline,
  text,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  bg,
}: CtaBandProps) {
  return (
    <section
      className="relative overflow-hidden py-24 px-6"
      style={{ background: bg ?? '#1E4634' }}
    >
      {/* Subtle pattern */}
      <svg
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.06 }}
        filter="url(#sketch-wobble)"
      >
        <path d="M0 150 Q360 80 720 150 Q1080 220 1440 150" stroke="#C2CB52" strokeWidth="2" fill="none" />
        <path d="M0 180 Q360 110 720 180 Q1080 250 1440 180" stroke="#C2CB52" strokeWidth="1.5" fill="none" />
      </svg>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2
          className="font-display font-bold mb-5"
          style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
        >
          {headline}
        </h2>
        {text && (
          <p
            className="font-body text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(245,241,230,0.72)' }}
          >
            {text}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={buttonLink}
            className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide transition-all hover:shadow-lg hover:scale-[1.02]"
            style={{ background: '#C2CB52', color: '#1A2A23' }}
          >
            {buttonText}
          </Link>
          {secondaryButtonText && secondaryButtonLink && (
            <Link
              href={secondaryButtonLink}
              className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-medium text-sm transition-all hover:opacity-80"
              style={{ border: '1px solid rgba(245,241,230,0.3)', color: 'rgba(245,241,230,0.85)' }}
            >
              {secondaryButtonText} →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
