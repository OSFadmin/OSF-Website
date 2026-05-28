interface ResourceCardProps {
  title: string;
  description: string;
  format: string;
  url: string;
}

const formatColors: Record<string, string> = {
  PDF:      'rgba(183,162,75,0.15)',
  Notion:   'rgba(30,70,52,0.12)',
  GitHub:   'rgba(26,42,35,0.1)',
  Web:      'rgba(110,139,61,0.13)',
  Slides:   'rgba(194,203,82,0.15)',
};

export default function ResourceCard({ title, description, format, url }: ResourceCardProps) {
  const badgeBg = formatColors[format] ?? 'rgba(110,139,61,0.12)';

  return (
    <div className="glass-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 group">
      <div className="flex-grow">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span
            className="text-xs font-body uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: badgeBg, color: 'var(--forest)' }}
          >
            {format}
          </span>
          <h4 className="font-display font-semibold text-base" style={{ color: 'var(--ink)' }}>
            {title}
          </h4>
        </div>
        <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          {description}
        </p>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all hover:shadow-md hover:scale-[1.02]"
        style={{ background: 'var(--pine)', color: '#F5F1E6' }}
      >
        View →
      </a>
    </div>
  );
}
