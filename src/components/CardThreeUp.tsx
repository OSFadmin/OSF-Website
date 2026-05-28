import Link from 'next/link';
import React from 'react';

interface Card {
  title: string;
  description: string;
  link?: string;
  icon?: React.ReactNode;
}

interface CardThreeUpProps {
  heading?: string;
  subheading?: string;
  cards: Card[];
  bg?: string;
}

export default function CardThreeUp({ heading, subheading, cards, bg }: CardThreeUpProps) {
  return (
    <section className="py-20 md:py-28" style={{ background: bg ?? 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {(heading || subheading) && (
          <div className="text-center mb-14">
            {heading && (
              <h2
                className="font-display font-bold mb-4"
                style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
              >
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="font-body text-lg max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
                {subheading}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="glass-card flex flex-col p-8"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {card.icon && (
                <div className="mb-5 text-pineGreen">{card.icon}</div>
              )}
              <h3
                className="font-display font-semibold text-xl mb-3"
                style={{ color: 'var(--ink)' }}
              >
                {card.title}
              </h3>
              <p className="font-body text-sm leading-relaxed flex-grow mb-6" style={{ color: 'var(--muted)' }}>
                {card.description}
              </p>
              {card.link && (
                <Link
                  href={card.link}
                  className="inline-flex items-center gap-1.5 text-sm font-body font-medium transition-opacity hover:opacity-60 mt-auto"
                  style={{ color: 'var(--pine)' }}
                >
                  Learn more <span>→</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
