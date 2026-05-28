import Link from 'next/link';

interface TeaserBlockProps {
  kicker?: string;
  title: string;
  intro: string;
  linkText?: string;
  linkUrl?: string;
  align?: 'left' | 'center';
}

export default function TeaserBlock({ kicker, title, intro, linkText, linkUrl, align = 'left' }: TeaserBlockProps) {
  const centered = align === 'center';

  return (
    <div className={`py-10 ${centered ? 'text-center' : 'text-left'}`}>
      {kicker && (
        <p
          className="text-xs uppercase tracking-[0.18em] font-body mb-3"
          style={{ color: 'var(--sage)' }}
        >
          {kicker}
        </p>
      )}
      <h3
        className="font-display font-bold mb-4"
        style={{ color: 'var(--ink)', fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)' }}
      >
        {title}
      </h3>
      <p
        className={`font-body text-base leading-relaxed mb-6 ${centered ? 'mx-auto' : ''}`}
        style={{ color: 'var(--muted)', maxWidth: '36rem' }}
      >
        {intro}
      </p>
      {linkText && linkUrl && (
        <Link
          href={linkUrl}
          className="inline-flex items-center gap-1.5 font-body font-medium text-sm transition-opacity hover:opacity-60"
          style={{ color: 'var(--pine)' }}
        >
          {linkText} <span>→</span>
        </Link>
      )}
    </div>
  );
}
