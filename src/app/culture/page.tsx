import Hero from '@/components/Hero';
import CtaBand from '@/components/CtaBand';
import PhotoBlock from '@/components/PhotoBlock';

export const metadata = { title: 'Open Earth Culture — Open Systems Foundation' };

const pillars = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="9" y1="10" x2="15" y2="10" strokeOpacity="0.55"/>
        <line x1="9" y1="13" x2="13" y2="13" strokeOpacity="0.55"/>
      </svg>
    ),
    title: 'Open Communication',
    desc: 'Spaces where authentic dialogue flourishes and information flows freely across difference.',
    color: '#6E8B3D',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <circle cx="18" cy="5" r="2.5"/>
        <circle cx="6" cy="12" r="2.5"/>
        <circle cx="18" cy="19" r="2.5"/>
        <line x1="8.5" y1="13.4" x2="15.5" y2="17.6"/>
        <line x1="15.5" y1="6.4" x2="8.5" y2="10.6"/>
      </svg>
    ),
    title: 'Collaborative Innovation',
    desc: 'Unlocking collective creativity through shared knowledge and rapid, cross-disciplinary experimentation.',
    color: '#B7A24B',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Inclusive Governance',
    desc: 'Participatory decision-making where leadership emerges from expertise and context, and power is distributed.',
    color: '#1E4634',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
      </svg>
    ),
    title: 'Regenerative Stewardship',
    desc: 'Shifting relationships with resources from extraction to reciprocity — restoring rather than depleting the commons.',
    color: '#2C5E47',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: 'Collective Evolution',
    desc: 'Continuous shared learning, integrating traditional wisdom with emerging insight.',
    color: '#6E8B3D',
  },
];

export default function Culture() {
  return (
    <div>
      <Hero
        kicker="The Open Philosophy in action"
        headline="Open Earth Culture"
        subhead="Culture is the social template that precedes all human activity. Open Earth Culture translates the principles of open projects worldwide into five living pillars — a freely forkable cultural commons for any community or organisation building the new paradigm."
        dark
      />

      {/* Why culture — split with photo */}
      <section className="py-24 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-6" style={{ color: 'var(--sage)' }}>
              Why culture matters
            </p>
            <h2
              className="font-display font-bold leading-tight mb-6"
              style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
            >
              The social template for a new paradigm
            </h2>
            <div className="space-y-5">
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                Open Earth Culture translates the principles of open projects worldwide into five living pillars — not a fixed doctrine, but a freely forkable cultural commons that any community or organisation can adopt, adapt, and improve.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                Available for use, adaptation, and improvement by anyone contributing to the Open Earth vision, the commons, or open initiatives worldwide. Improvement suggestions and forked versions are welcomed and can be submitted to the Foundation for the ongoing evolution of this collective commons asset.
              </p>
            </div>
          </div>
          <div>
            <PhotoBlock
              src="/photos/culture-communities.png"
              label="Open Earth Culture · Communities in practice"
              variant="landscape"
              style={{ borderRadius: '18px' }}
            />
          </div>
        </div>
      </section>

      {/* Five pillars */}
      <section className="py-24 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: 'var(--sage)' }}>
              The five pillars
            </p>
            <h2 className="font-display font-bold mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              The practices of an Open Earth culture
            </h2>
            <p className="font-body text-base max-w-lg mx-auto" style={{ color: 'var(--muted)' }}>
              Five living principles — grounded in daily practice, open to evolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="glass-card p-8 group">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `${p.color}14`, border: `1px solid ${p.color}28`, color: p.color }}
                >
                  {p.icon}
                </div>
                <h3 className="font-display font-semibold text-lg mb-3" style={{ color: 'var(--ink)' }}>
                  {p.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {p.desc}
                </p>
              </div>
            ))}

            {/* CreActivity */}
            <div className="glass-card p-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(183,162,75,0.1)', border: '1px solid rgba(183,162,75,0.22)' }}
              >
                <span className="font-display text-lg" style={{ color: 'var(--gold)' }}>✦</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-3" style={{ color: 'var(--ink)' }}>
                CreActivity
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                At the heart of the culture is the practice of CreActivity — the art of turning creative vision into tangible reality through inspired action. It bridges imagination and implementation by testing ideas in real contexts and learning from feedback, and it is the cultural root of our CreActive Design Lab methodology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="px-6 md:px-10 py-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto">
          <PhotoBlock
            src="/photos/culture-pillars.png"
            label="Open Earth Culture · Living the pillars in community"
            variant="panoramic"
            style={{ borderRadius: '18px' }}
          />
        </div>
      </section>

      {/* A living commons */}
      <section className="py-24 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: 'var(--sage)' }}>
            A living commons
          </p>
          <h2 className="font-display font-bold mb-6" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
            Freely available — for anyone
          </h2>
          <p className="font-body text-base leading-relaxed mb-4 max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Open Earth Culture is freely available for use and application by any peer contributing to the Open Earth vision. Take it, adapt it, and build on it. We ask only that you share improvements back.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="/downloads/Open_Earth_Culture_V1.pdf"
              download
              className="inline-flex items-center px-8 py-3 rounded-full font-body font-medium text-sm transition-all hover:shadow-md"
              style={{ background: 'var(--pine)', color: '#F5F1E6' }}
            >
              Download Open Earth Culture (PDF)
            </a>
            <a
              href="/manifesto"
              className="inline-flex items-center px-8 py-3 rounded-full font-body font-medium text-sm transition-all hover:opacity-70"
              style={{ border: '1px solid var(--border)', color: 'var(--pine)' }}
            >
              Read the Manifesto →
            </a>
          </div>
        </div>
      </section>

      <CtaBand
        headline="Build the culture with us"
        text="Open Earth Culture grows through contribution. Join the community and help shape what comes next."
        buttonText="Get involved"
        buttonLink="/contact"
        secondaryButtonText="Explore resources"
        secondaryButtonLink="/resources"
      />
    </div>
  );
}
