import Link from 'next/link';

export const metadata = { title: 'PASEOs — Open Systems Foundation' };

const tiers = [
  {
    name: 'Light PASEO',
    subtitle: 'First step into commons participation',
    desc: 'For organizations that want to begin participating in a local or distributed commons while keeping their existing structure. A Light PASEO can use shared tools, join aligned collaborations, participate in local commons activity, and contribute back through simple forms of reciprocity such as access fees, ethical commitments, shared learning, or practical support.',
    points: [
      'Easy entry point for existing organizations',
      'Participation in local or distributed commons activity',
      'Basic ethical and reciprocity standards',
      'Simple contribution back into the commons',
    ],
    color: 'rgba(110,139,61,0.2)',
    borderColor: 'rgba(110,139,61,0.35)',
  },
  {
    name: 'Hybrid PASEO',
    subtitle: 'Market activity with commons contribution',
    desc: 'For organizations that still operate in the market but want to dedicate real value back into the commons they participate in. A Hybrid PASEO may contribute revenue, knowledge, capacity, services, infrastructure, or innovation into shared pools. It can collaborate more deeply with aligned organizations while continuing to serve customers and maintain operational independence.',
    points: [
      'Clear contribution of revenue, knowledge, or capacity',
      'Preferential exchange with commons-aligned peers',
      'Deeper collaboration across local and distributed networks',
      'A pathway toward stronger commons alignment over time',
    ],
    color: 'rgba(183,162,75,0.15)',
    borderColor: 'rgba(183,162,75,0.35)',
  },
  {
    name: 'Flagship PASEO',
    subtitle: 'Fully dedicated to commons purpose',
    desc: 'For organizations designed from the ground up to serve public benefit, regenerative outcomes, and long-term commons stewardship. A Flagship PASEO is deeply mission-locked. It operates with high transparency, shares learning and innovation where appropriate, and directs surplus toward the commons and the wider ecosystem it serves.',
    points: [
      'Full commitment to commons-aligned purpose',
      'High transparency and shared learning',
      'Surplus flows back into commons development',
      'Strong participation in local and distributed commons networks',
      'The fullest expression of a commons-aligned organization',
    ],
    color: 'rgba(194,203,82,0.12)',
    borderColor: 'rgba(194,203,82,0.35)',
  },
];

const howItWorks = [
  {
    title: 'Start where you are',
    desc: 'An organization begins at the level of participation that fits its current structure, capacity, and readiness.',
  },
  {
    title: 'Contribute what you can',
    desc: 'Contribution can take many forms: money, knowledge, services, infrastructure, access, learning, local capacity, or practical support.',
  },
  {
    title: 'Receive what you need',
    desc: 'Deeper participation can unlock access to shared tools, aligned partners, knowledge, funding pathways, support capacity, and other commons resources — held and distributed by the commons, not a central authority.',
  },
  {
    title: 'Deepen through trust',
    desc: 'As trust and contribution grow, the organization can move toward deeper reciprocity, transparency, and commons stewardship.',
  },
];

export default function PASEOs() {
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
          <path d="M300 80 L500 200 L500 400 L300 520 L100 400 L100 200 Z" stroke="#6E8B3D" strokeWidth="1" fill="none" />
          <path d="M300 140 L450 230 L450 370 L300 460 L150 370 L150 230 Z" stroke="#B7A24B" strokeWidth="0.9" fill="none" />
          <path d="M300 200 L400 260 L400 340 L300 400 L200 340 L200 260 Z" stroke="#C2CB52" strokeWidth="0.8" fill="none" />
          <circle cx="300" cy="300" r="20" stroke="#B7A24B" strokeWidth="0.9" fill="none" />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="animate-fade-up text-xs uppercase tracking-[0.22em] mb-4 font-body" style={{ color: '#6E8B3D', animationDelay: '0.1s' }}>
            Open infrastructure
          </p>
          <h1
            className="animate-fade-up font-display font-bold leading-[1.12] mb-4"
            style={{ color: '#F5F1E6', fontSize: 'clamp(2.6rem, 6vw, 4.8rem)', animationDelay: '0.25s' }}
          >
            PASEOs
          </h1>
          <p className="animate-fade-up font-body text-base mb-6" style={{ color: '#B7A24B', animationDelay: '0.35s' }}>
            Purpose-driven. Altruistic. Syntropic. Ecosystem. Organization.
          </p>
          <p
            className="animate-fade-up font-body font-light text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ color: 'rgba(245,241,230,0.72)', animationDelay: '0.45s' }}
          >
            An open methodology for purpose-driven organizations to participate in local and distributed commons — starting lightly, deepening through reciprocity, and contributing to shared resources over time.
          </p>
          <div className="animate-fade-up flex flex-wrap justify-center gap-4" style={{ animationDelay: '0.65s' }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide transition-all hover:shadow-lg"
              style={{ background: '#C2CB52', color: '#1A2A23' }}
            >
              Explore participation
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-medium text-sm"
              style={{ border: '1px solid rgba(245,241,230,0.25)', color: 'rgba(245,241,230,0.8)' }}
            >
              ← All projects
            </Link>
          </div>
        </div>
      </section>

      {/* Removing barriers */}
      <section className="py-24 px-6" style={{ background: '#111D15' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: '#6E8B3D' }}>
            Removing barriers
          </p>
          <h2 className="font-display font-bold leading-tight mb-8" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Every organisation has a place to start
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              PASEO helps existing organizations participate in commons-based collaboration without needing to fully restructure on day one. They can begin with simple commitments, shared tools, aligned partnerships, or local commons participation.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              The three tiers are not fixed boxes. They describe a continuous journey of deeper reciprocity — from first participation, to meaningful contribution, to full commons dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Body image */}
      <section className="px-6 pb-16" style={{ background: '#111D15' }}>
        <div className="max-w-4xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/paseo.png"
            alt="PASEOs"
            loading="lazy"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }}
          />
        </div>
      </section>

      {/* Three tiers */}
      <section className="py-24 px-6" style={{ background: '#0D1F17' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: '#6E8B3D' }}>
              The participation gradient
            </p>
            <h2 className="font-display font-bold" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              Three tiers, one continuous journey
            </h2>
          </div>
          <p className="font-body text-base leading-relaxed max-w-3xl mx-auto text-center mb-14" style={{ color: 'rgba(245,241,230,0.6)' }}>
            PASEO is an open methodology for purpose-driven organizations to deepen their relationship with the commons over time. It can be used by local commons, bioregional networks, partner ecosystems, and distributed initiatives — not as access to one central system, but as a shared way to structure reciprocity, collaboration, and commons-aligned value flow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl flex flex-col"
                style={{ background: tier.color, border: `1px solid ${tier.borderColor}` }}
              >
                <div className="mb-2">
                  <span
                    className="text-xs uppercase tracking-widest font-body px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.07)', color: '#B7A24B' }}
                  >
                    Tier {i + 1}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl mt-4 mb-1" style={{ color: '#F5F1E6' }}>
                  {tier.name}
                </h3>
                <p className="font-body text-xs uppercase tracking-wide mb-4" style={{ color: 'rgba(245,241,230,0.45)' }}>
                  {tier.subtitle}
                </p>
                <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'rgba(245,241,230,0.6)' }}>
                  {tier.desc}
                </p>
                <ul className="space-y-2 mt-auto">
                  {tier.points.map((point, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="shrink-0 mt-0.5 text-xs" style={{ color: '#B7A24B' }}>◆</span>
                      <span className="font-body text-xs leading-relaxed" style={{ color: 'rgba(245,241,230,0.55)' }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How PASEO works */}
      <section className="py-24 px-6" style={{ background: '#111D15' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: '#6E8B3D' }}>
              How PASEO works
            </p>
            <h2 className="font-display font-bold mb-6" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              Start where you are. Contribute what you can. Receive what you need. Deepen over time.
            </h2>
            <p className="font-body text-base leading-relaxed max-w-3xl" style={{ color: 'rgba(245,241,230,0.65)' }}>
              PASEO gives organizations a simple way to understand their relationship with the commons. The point is not to force every organization into the same model, but to make participation, reciprocity, shared support, and value flow easier to coordinate. As organizations contribute more clearly to the commons, they can also access more of the collective resources, opportunities, knowledge, and support the commons makes available.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {howItWorks.map((card, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl flex flex-col"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(110,139,61,0.18)' }}
              >
                <div
                  className="mb-5 w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-sm"
                  style={{ background: 'rgba(110,139,61,0.14)', color: '#B7A24B', border: '1px solid rgba(110,139,61,0.28)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display font-semibold text-base mb-3" style={{ color: '#F5F1E6' }}>
                  {card.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.6)' }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current progress */}
      <section className="py-24 px-6" style={{ background: '#0D1F17' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: '#6E8B3D' }}>
            Current progress
          </p>
          <h2 className="font-display font-bold leading-tight mb-8" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Framework development is underway
          </h2>
          <div className="space-y-5 max-w-2xl">
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              PASEO is currently being refined as an open organizational methodology for commons participation. The first major test case will be the GaiaOS consortium process, where selected projects and partner entities can enter through PASEO-style pathways, clarify their contribution, and coordinate around a shared Commons Purpose Vehicle.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              This also connects directly with OPAL, the open innovation licensing architecture under development. Where PASEO helps define how organizations participate in the commons, OPAL helps define how shared assets, knowledge, software, designs, and methods can be contributed, protected, accessed, and reciprocally used.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              Together, PASEO and OPAL form two sides of the same commons participation logic: organizations enter through PASEO, and the assets they steward can be governed through OPAL.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/projects/gaiaos"
              className="inline-flex items-center font-body font-medium text-sm transition-opacity hover:opacity-70"
              style={{ color: '#6E8B3D' }}
            >
              Learn about GaiaOS →
            </Link>
            <Link
              href="/projects/opal"
              className="inline-flex items-center font-body font-medium text-sm transition-opacity hover:opacity-70"
              style={{ color: '#6E8B3D' }}
            >
              Learn about OPAL →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ background: '#1E4634' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold mb-6" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Begin your commons participation pathway
          </h2>
          <p className="font-body text-lg font-light leading-relaxed mb-10" style={{ color: 'rgba(245,241,230,0.72)' }}>
            Whether you are a local enterprise, community project, research group, foundation, cooperative, or mission-driven company, PASEO offers a way to start contributing to a commons economy without losing your autonomy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-semibold text-sm transition-all hover:shadow-lg"
              style={{ background: '#C2CB52', color: '#1A2A23' }}
            >
              Start the conversation
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-medium text-sm"
              style={{ border: '1px solid rgba(245,241,230,0.3)', color: 'rgba(245,241,230,0.85)' }}
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
