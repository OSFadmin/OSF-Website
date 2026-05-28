import Hero from '@/components/Hero';
import CtaBand from '@/components/CtaBand';

export const metadata = { title: 'The Open Earth Manifesto — Open Systems Foundation' };

const principles = [
  {
    num: '01',
    title: 'Transparency',
    body: 'Openness in sharing knowledge and information.',
  },
  {
    num: '02',
    title: 'Collaboration',
    body: 'Building bridges across boundaries and cultures.',
  },
  {
    num: '03',
    title: 'Inclusivity',
    body: 'Welcoming participation and meeting each actor where they are.',
  },
  {
    num: '04',
    title: 'Innovation',
    body: 'Directing creative and technological development toward collective flourishing.',
  },
  {
    num: '05',
    title: 'Shared Direction',
    body: 'Aligning efforts worldwide toward planetary wellbeing while honouring each unique expression.',
  },
];

const visionItems = [
  {
    title: 'The Whole Earth',
    desc: 'Human activity in harmony with the natural world; biodiversity protected and ecosystems restored through coordinated global effort.',
  },
  {
    title: 'Open Organisations',
    desc: 'An open economy where collaboration and shared innovation replace competitive secrecy, and enterprises of every size flourish together.',
  },
  {
    title: 'Global Openness',
    desc: 'Transparent governance and shared knowledge addressing climate, scarcity, and inequality across borders.',
  },
];

export default function Manifesto() {
  return (
    <div>
      <Hero
        kicker="The Open Earth Manifesto"
        headline="Laying the groundwork for a collaborative global ecosystem."
        subhead="At this pivotal moment in human history, we stand before two divergent paths: continuing our trajectory of separation and competition, or stepping into a new paradigm of openness and collaboration."
        dark
      />

      {/* Introduction */}
      <section className="py-24 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-6" style={{ color: 'var(--sage)' }}>
            Introduction
          </p>
          <div className="space-y-5">
            <p className="font-body text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              The Open Earth represents a new paradigm — a world where knowledge flows freely, innovation serves the common good, and communities work together beyond boundaries to address our shared challenges.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              The Open Earth extends a lineage already proven in practice — open source, open access, open innovation, open data, and open government — and generalises it into a planet-wide application. Each showed that shared knowledge and resources can outperform closed competition. Open Earth asks: what if we applied that across every domain of society?
            </p>
          </div>
        </div>
      </section>

      {/* The five principles */}
      <section className="py-24 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: 'var(--sage)' }}>
              The Open Philosophy
            </p>
            <h2 className="font-display font-bold" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              Five principles
            </h2>
          </div>

          <div className="space-y-6">
            {principles.map((p, i) => (
              <div
                key={i}
                className="glass-card p-8 flex flex-col md:flex-row gap-8 items-start"
              >
                <div
                  className="shrink-0 font-display font-bold text-4xl md:text-5xl leading-none"
                  style={{ color: 'rgba(183,162,75,0.2)' }}
                >
                  {p.num}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-3" style={{ color: 'var(--ink)' }}>
                    {p.title}
                  </h3>
                  <p className="font-body text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: 'var(--sage)' }}>
              What we are building toward
            </p>
            <h2 className="font-display font-bold" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              The vision of an Open Earth
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visionItems.map((item, i) => (
              <div key={i} className="glass-card p-7">
                <h3 className="font-display font-semibold text-lg mb-3" style={{ color: 'var(--ink)' }}>
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-base leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
            The Open Earth is a testament to the power of openness. This vision calls upon each of us to contribute to the collective journey toward a better future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/downloads/Open_Earth_Manifesto_v1.11.pdf"
              className="inline-flex items-center px-8 py-3 rounded-full font-body font-medium text-sm transition-all hover:shadow-md"
              style={{ background: 'var(--pine)', color: '#F5F1E6' }}
            >
              Download the Manifesto (PDF)
            </a>
            <a
              href="/culture"
              className="inline-flex items-center px-8 py-3 rounded-full font-body font-medium text-sm transition-all hover:opacity-70"
              style={{ border: '1px solid var(--border)', color: 'var(--pine)' }}
            >
              Explore Open Earth Culture →
            </a>
          </div>
        </div>
      </section>

      <CtaBand
        headline="A vision that belongs to everyone"
        text="The Manifesto is a living commons asset. Read it, share it, and build on it."
        buttonText="Get involved"
        buttonLink="/contact"
        secondaryButtonText="Explore resources"
        secondaryButtonLink="/resources"
      />
    </div>
  );
}
