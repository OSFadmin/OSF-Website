import Link from 'next/link';

export const metadata = { title: 'OPAL — Open Systems Foundation' };

const capabilities = [
  {
    title: 'Commons-first sharing',
    desc: 'Aligned peers can share, adapt, and improve useful work together.',
  },
  {
    title: 'Commercial reciprocity',
    desc: 'Market-facing use can carry clear terms for payment, revenue share, or contribution back.',
  },
  {
    title: 'Attribution and contribution memory',
    desc: 'Creators, funders, contributors, and host communities remain visible as assets evolve.',
  },
  {
    title: 'Derivative stewardship',
    desc: 'Improvements and adaptations can carry share-back or reciprocity obligations.',
  },
  {
    title: 'Graduated access',
    desc: 'Assets do not need to be only open or closed. Access can depend on trust, purpose, contribution, and use.',
  },
  {
    title: 'Value-flow into the commons',
    desc: 'Commercial success can help fund the people, projects, and infrastructure that made the innovation possible.',
  },
];

const steps = [
  {
    title: 'Refine the architecture',
    desc: 'Clarify the access, reciprocity, commercial, derivative, and value-flow logic.',
  },
  {
    title: 'Translate into legal instruments',
    desc: 'Work with legal experts to turn the framework into usable licence terms and agreements.',
  },
  {
    title: 'Test with real assets',
    desc: 'Pilot OPAL with software, research, designs, methods, hardware, or educational resources.',
  },
  {
    title: 'Build practical presets',
    desc: 'Create simple configurations that people can actually understand and use.',
  },
  {
    title: 'Connect to commons infrastructure',
    desc: 'Link OPAL assets to operational systems that can track contributors, permissions, agreements, and value-flow over time.',
  },
];

export default function OPAL() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{ background: '#0D1F17' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(30,70,52,0.45) 0%, transparent 70%)' }}
        />
        <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.07 }}>
          <polygon points="300,80 520,210 520,390 300,520 80,390 80,210" stroke="#6E8B3D" strokeWidth="1" fill="none" />
          <polygon points="300,130 475,225 475,375 300,470 125,375 125,225" stroke="#B7A24B" strokeWidth="0.9" fill="none" />
          <polygon points="300,180 430,245 430,355 300,420 170,355 170,245" stroke="#C2CB52" strokeWidth="0.8" fill="none" />
          <circle cx="300" cy="300" r="30" stroke="#B7A24B" strokeWidth="0.9" fill="none" />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="animate-fade-up text-xs uppercase tracking-[0.22em] mb-4 font-body" style={{ color: '#6E8B3D', animationDelay: '0.1s' }}>
            Open Innovation Licensing
          </p>
          <h1
            className="animate-fade-up font-display font-bold leading-[1.12] mb-4"
            style={{ color: '#F5F1E6', fontSize: 'clamp(2.6rem, 6vw, 4.8rem)', animationDelay: '0.25s' }}
          >
            OPAL
          </h1>
          <p className="animate-fade-up font-body text-lg mb-6" style={{ color: '#B7A24B', animationDelay: '0.35s' }}>
            The Open Peer Access Licence
          </p>
          <p
            className="animate-fade-up font-body font-light text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ color: 'rgba(245,241,230,0.72)', animationDelay: '0.45s' }}
          >
            A licensing architecture under development for sharing innovation openly while protecting reciprocity, attribution, and value-flow back into the commons.
          </p>
          <div className="animate-fade-up flex flex-col items-center gap-4" style={{ animationDelay: '0.65s' }}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide transition-all hover:shadow-lg"
                style={{ background: '#C2CB52', color: '#1A2A23' }}
              >
                Get involved
              </Link>
              <Link
                href="#stewardship"
                className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-medium text-sm"
                style={{ border: '1px solid rgba(245,241,230,0.25)', color: 'rgba(245,241,230,0.8)' }}
              >
                Explore the stewardship architecture
              </Link>
            </div>
            <Link
              href="/projects"
              className="font-body text-sm transition-opacity hover:opacity-70"
              style={{ color: 'rgba(245,241,230,0.45)' }}
            >
              ← All projects
            </Link>
          </div>
        </div>
      </section>

      {/* The problem it solves */}
      <section className="py-24 px-6" style={{ background: '#111D15' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: '#6E8B3D' }}>
            The problem it solves
          </p>
          <h2 className="font-display font-bold leading-tight mb-8" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Open innovation needs better rules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="space-y-4">
              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
                Open innovation helps people build faster together. But today, innovators are often forced into a bad choice.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
                Fully open licences allow knowledge to spread, but they can leave little protection against extractive commercial use.
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
                Proprietary licences protect value, but they often lock useful knowledge away from the people and communities who could build on it.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
                OPAL is being developed for the space between these extremes: a way for knowledge, software, research, designs, methods, and shared technologies to circulate through an inner commons while still creating fair terms for commercial use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing landscape */}
      <section className="py-24 px-6" style={{ background: '#0D1F17' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4 text-center" style={{ color: '#6E8B3D' }}>
            Licensing landscape
          </p>
          <h2 className="font-display font-bold leading-tight mb-14 text-center" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Between open and proprietary
          </h2>

          {/* Spectrum */}
          <div className="mb-10">
            {/* Polarity labels */}
            <div className="flex justify-between mb-3">
              <span className="font-body text-xs uppercase tracking-[0.15em]" style={{ color: 'rgba(245,241,230,0.3)' }}>Fully Open</span>
              <span className="font-body text-xs uppercase tracking-[0.15em]" style={{ color: 'rgba(245,241,230,0.3)' }}>Proprietary</span>
            </div>

            {/* Bar */}
            <div className="relative h-5 rounded-full" style={{ background: 'rgba(255,255,255,0.04)' }}>
              {/* Full gradient fill */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(to right, rgba(194,203,82,0.12) 0%, rgba(194,203,82,0.5) 18%, rgba(183,162,75,0.9) 50%, rgba(110,139,61,0.5) 82%, rgba(110,139,61,0.1) 100%)',
                }}
              />
              {/* OPAL pill: 80% wide, centered (10% from each edge) */}
              <div
                className="absolute inset-y-0 rounded-full"
                style={{
                  left: '10%',
                  width: '80%',
                  border: '1.5px solid rgba(194,203,82,0.55)',
                }}
              />
            </div>

            {/* OPAL Gradient title — aligned to the pill */}
            <div className="mt-3" style={{ marginLeft: '10%', marginRight: '10%' }}>
              <p
                className="text-center font-display font-semibold uppercase tracking-[0.18em]"
                style={{ color: '#B7A24B', fontSize: '0.75rem' }}
              >
                OPAL Gradient
              </p>
            </div>
          </div>

          {/* Two poles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div
              className="p-8 rounded-2xl"
              style={{ background: 'rgba(110,139,61,0.07)', border: '1px solid rgba(110,139,61,0.25)' }}
            >
              <h3 className="font-display font-semibold text-lg mb-3" style={{ color: '#6E8B3D' }}>
                Inner Commons
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
                Aligned peers, projects, labs, communities, and purpose-driven organizations can share and improve work together.
              </p>
            </div>
            <div
              className="p-8 rounded-2xl"
              style={{ background: 'rgba(183,162,75,0.07)', border: '1px solid rgba(183,162,75,0.25)' }}
            >
              <h3 className="font-display font-semibold text-lg mb-3" style={{ color: '#B7A24B' }}>
                Commercial Relationships
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
                Market-facing use can include licence fees, revenue share, attribution, reciprocity duties, and value-flow back into the commons.
              </p>
            </div>
          </div>

          <p className="font-body text-sm text-center" style={{ color: 'rgba(245,241,230,0.38)' }}>
            OPAL is inspired by dual licensing approaches, but is designed to be more fluid. It maps a gradient between commons sharing and commercial use.
          </p>
        </div>
      </section>

      {/* Lineage */}
      <section className="py-24 px-6" style={{ background: '#111D15' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: '#6E8B3D' }}>
            Lineage
          </p>
          <h2 className="font-display font-bold leading-tight mb-8" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Inspired by peer production
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              OPAL is inspired in part by the Peer Production Licence and the wider commons-based peer production movement supported by our partners at the P2P Foundation. The core idea is powerful: commoners should be able to share freely with other commoners, while commercial actors who benefit from shared work should contribute back.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              OPAL takes this idea further by developing a broader licensing architecture for open innovation, including attribution, contribution memory, commercial bridges, derivative rules, and value-flow into shared commons infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6" style={{ background: '#0D1F17' }}>
        <div className="max-w-4xl mx-auto">
          <div
            className="p-10 rounded-2xl"
            style={{ background: 'rgba(183,162,75,0.07)', border: '1px solid rgba(183,162,75,0.2)' }}
          >
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: '#B7A24B' }}>
              Philosophy
            </p>
            <h3 className="font-display font-semibold mb-6" style={{ color: '#F5F1E6', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
              Share more. Extract less. Advance faster together.
            </h3>
            <div className="space-y-4">
              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
                OPAL is based on a simple belief: useful knowledge should move, but it should not be stripped from the people and communities that created it.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
                When innovators can build on each other's work, everyone moves faster. But when commercial value is created from commons-generated knowledge, some of that value should return to the commons.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
                This is the principle of{' '}
                <em style={{ color: '#B7A24B', fontStyle: 'normal', fontWeight: 500 }}>transvestment</em>
                {': '}value generated through market activity is directed back into the shared field, helping fund further innovation, stewardship, and commons infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What OPAL is being designed to enable */}
      <section id="stewardship" className="py-24 px-6" style={{ background: '#111D15' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: '#6E8B3D' }}>
              What OPAL is being designed to enable
            </p>
            <h2 className="font-display font-bold" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              The stewardship architecture
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl flex flex-col"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(110,139,61,0.2)' }}
              >
                <div
                  className="mb-5 w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm"
                  style={{ background: 'rgba(110,139,61,0.14)', color: '#B7A24B', border: '1px solid rgba(110,139,61,0.28)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display font-semibold text-lg mb-3" style={{ color: '#F5F1E6' }}>
                  {cap.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.6)' }}>
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development pathway */}
      <section className="py-24 px-6" style={{ background: '#0D1F17' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: '#6E8B3D' }}>
            Development pathway
          </p>
          <h2 className="font-display font-bold leading-tight mb-4" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Under development
          </h2>
          <p className="font-body text-base leading-relaxed mb-12 max-w-2xl" style={{ color: 'rgba(245,241,230,0.65)' }}>
            OPAL is not finished. It is currently being developed as a legal, economic, and operational framework for reciprocal open innovation. The next steps are:
          </p>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-6 p-6 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(110,139,61,0.15)' }}
              >
                <span
                  className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-sm mt-0.5"
                  style={{ background: 'rgba(110,139,61,0.14)', color: '#B7A24B', border: '1px solid rgba(110,139,61,0.28)' }}
                >
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-display font-semibold mb-1" style={{ color: '#F5F1E6' }}>{step.title}</h4>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.6)' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ background: '#1E4634' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold mb-6" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Help shape the next licensing layer for open innovation
          </h2>
          <p className="font-body text-lg font-light leading-relaxed mb-10" style={{ color: 'rgba(245,241,230,0.72)' }}>
            OPAL is being developed for creators, researchers, software builders, labs, educators, open hardware projects, regenerative innovators, and purpose-driven organizations that want to share useful work without allowing it to be extracted.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-semibold text-sm transition-all hover:shadow-lg"
              style={{ background: '#C2CB52', color: '#1A2A23' }}
            >
              Get involved
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-medium text-sm transition-all"
              style={{ border: '1px solid rgba(245,241,230,0.3)', color: 'rgba(245,241,230,0.85)' }}
            >
              Share a use case
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-medium text-sm transition-all"
              style={{ border: '1px solid rgba(245,241,230,0.18)', color: 'rgba(245,241,230,0.65)' }}
            >
              Contact us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
