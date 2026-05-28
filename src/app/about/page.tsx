import Hero from '@/components/Hero';
import CtaBand from '@/components/CtaBand';
import PhotoBlock from '@/components/PhotoBlock';

export const metadata = { title: 'About — Open Systems Foundation' };

const areas = [
  {
    num: '01',
    title: 'Open Earth Technologies',
    desc: 'Digital and physical infrastructure for global collaboration: communication, peer production, resource sharing, and shared decision-making, woven together worldwide.',
  },
  {
    num: '02',
    title: 'Open Earth Innovation Environments',
    desc: 'Living laboratories that research, develop, and test open innovations and Open Earth principles at every scale.',
  },
  {
    num: '03',
    title: 'Open Earth Ecosystem',
    desc: 'The foundational architecture — models, frameworks, and value flows — that weaves aligned initiatives into a coherent whole.',
  },
];

export default function About() {
  return (
    <div>
      <Hero
        kicker="About the Foundation"
        headline="A foundation for the open shift."
        subhead="Building and supporting the foundational infrastructure an Open Earth requires."
        ctaText="Read the Manifesto"
        ctaLink="/manifesto"
      />

      {/* Who we are — split text + photo */}
      <section className="py-24 md:py-32 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: 'var(--sage)' }}>
              Who we are
            </p>
            <h2
              className="font-display font-bold leading-tight mb-8"
              style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              Building the open infrastructure for an Open Earth
            </h2>
            <p className="font-body text-base leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
              The Open Systems Foundation is a non-profit foundation dedicated to empowering the realisation of an Open Earth. Inspired by the Open Earth Manifesto, we develop and support the foundational infrastructure this vision requires: open technologies, innovation environments, and ecosystem frameworks that let communities, organisations, and initiatives worldwide unite their efforts toward abundance-based systems in which all life can thrive.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              Acting as a catalyst and steward, the Foundation focuses on establishing the essential building blocks that allow aligned efforts to plug in, build on one another, and share the benefits of progress.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <PhotoBlock
              label="Open Systems Foundation · Headquarters & team"
              variant="landscape"
              style={{ borderRadius: '18px' }}
            />
            {/* Quick facts */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: 'Vaduz', label: 'Registered in Liechtenstein' },
                { val: 'Open', label: 'Purpose & outputs' },
                { val: '2026', label: 'Year established' },
              ].map((fact, i) => (
                <div
                  key={i}
                  className="glass-card p-4 text-center"
                >
                  <span className="font-display font-bold block mb-1" style={{ color: 'var(--pine)', fontSize: '1.1rem' }}>
                    {fact.val}
                  </span>
                  <span className="font-body" style={{ fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', lineHeight: 1.4 }}>
                    {fact.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Open Earth vision — split text + photo */}
      <section className="py-24 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <PhotoBlock
              label="Open Earth · Landscape & regeneration"
              variant="landscape"
              style={{ borderRadius: '18px' }}
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: 'var(--sage)' }}>
              The vision
            </p>
            <h2
              className="font-display font-bold leading-tight mb-8"
              style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              An Open Earth
            </h2>
            <p className="font-body text-base leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
              An Open Earth is a globally interconnected ecosystem where transparency, collaboration, inclusivity, and innovation drive sustainable progress, fostering a thriving planet for all life forms.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              This vision is not owned by anyone. It is emerging through countless initiatives where people are already choosing to work openly, share resources, and collaborate toward collective prosperity — from open-source technologies to ecological communities, from transparent governance to collaborative innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Three areas */}
      <section className="py-24 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: 'var(--sage)' }}>
              How we work
            </p>
            <h2 className="font-display font-bold mb-3" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              Three areas of action
            </h2>
            <p className="font-body text-base max-w-xl" style={{ color: 'var(--muted)' }}>
              Everything OSF does maps onto three areas. Together, they form the full stack of an Open Earth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area, i) => (
              <div key={i} className="glass-card p-8">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center mb-6 font-display font-bold text-sm"
                  style={{ background: 'rgba(183,162,75,0.12)', color: 'var(--gold)', border: '1px solid rgba(183,162,75,0.2)' }}
                >
                  {area.num}
                </div>
                <h3 className="font-display font-semibold text-lg mb-3" style={{ color: 'var(--ink)' }}>
                  {area.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach + governance */}
      <section className="py-24 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: 'var(--sage)' }}>
              Our approach
            </p>
            <h2 className="font-display font-bold leading-tight mb-6" style={{ color: 'var(--ink)', fontSize: 'clamp(1.7rem, 3vw, 2.5rem)' }}>
              Systematic yet organic
            </h2>
            <p className="font-body text-base leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
              We take a systematic yet organic approach — combining proven methods with emergent practice. Initiatives are developed and matured through our CreActive Design Lab, and integrate into the ecosystem through open frameworks that let projects participate while keeping their own identity and purpose.
            </p>
            <PhotoBlock
              label="CreActive Design Lab · Process & collaboration"
              variant="wide"
              style={{ borderRadius: '14px', marginTop: '1.5rem' }}
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: 'var(--sage)' }}>
              Foundation & governance
            </p>
            <h2 className="font-display font-bold leading-tight mb-6" style={{ color: 'var(--ink)', fontSize: 'clamp(1.7rem, 3vw, 2.5rem)' }}>
              Exclusively charitable
            </h2>
            <p className="font-body text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              The Open Systems Foundation is established as a charitable foundation in Vaduz, Liechtenstein, under the Liechtenstein Persons and Companies Act (PGR). Its purpose is exclusively and irrevocably charitable: catalysing humanity&apos;s transition toward an Open Earth across environmental regeneration, open knowledge and education, scientific research and innovation, and global collaborative infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/team" className="inline-flex items-center px-7 py-3 rounded-full font-body font-medium text-sm transition-all hover:shadow-md" style={{ background: 'var(--pine)', color: '#F5F1E6' }}>
                Meet the team
              </a>
              <a href="/resources" className="inline-flex items-center px-7 py-3 rounded-full font-body font-medium text-sm transition-all hover:opacity-70" style={{ border: '1px solid var(--border)', color: 'var(--pine)' }}>
                Governance documents →
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        headline="Ready to be part of this?"
        text="The Foundation invites aligned partners, benefactors, and builders to join the work of an Open Earth."
        buttonText="Get involved"
        buttonLink="/contact"
      />
    </div>
  );
}
