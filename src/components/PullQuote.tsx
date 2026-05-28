interface PullQuoteProps {
  quote: string;
  attribution?: string;
}

export default function PullQuote({ quote, attribution }: PullQuoteProps) {
  return (
    <div className="py-16 md:py-24 px-6 max-w-4xl mx-auto text-center">
      {/* Decorative element */}
      <svg
        viewBox="0 0 80 40"
        width="80"
        className="mx-auto mb-8"
        filter="url(#sketch-wobble)"
      >
        <line x1="0" y1="20" x2="26" y2="20" stroke="#B7A24B" strokeWidth="1.5" />
        <circle cx="40" cy="20" r="4" stroke="#B7A24B" strokeWidth="1.5" fill="none" />
        <line x1="54" y1="20" x2="80" y2="20" stroke="#B7A24B" strokeWidth="1.5" />
      </svg>

      <blockquote
        className="font-display font-semibold italic leading-snug mb-8"
        style={{
          color: 'var(--ink)',
          fontSize: 'clamp(1.5rem, 3.2vw, 2.4rem)',
          lineHeight: 1.35,
        }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      {attribution && (
        <cite
          className="block text-xs uppercase tracking-[0.2em] font-body not-italic"
          style={{ color: 'var(--muted)' }}
        >
          — {attribution}
        </cite>
      )}
    </div>
  );
}
