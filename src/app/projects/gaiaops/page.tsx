import Link from 'next/link';

export const metadata = { title: 'GaiaOps — Open Systems Foundation' };

const layers = [
  {
    name: 'People and partner pathways',
    desc: 'Move collaborators, members, partners, funders, contributors, and aligned organizations from first contact into clear participation — with the right context, documents, agreements, and next steps.',
  },
  {
    name: 'Working group coordination',
    desc: 'Give every team, project, initiative, or partner circle a shared operational space where meetings, tasks, roles, decisions, and documents remain connected over time.',
  },
  {
    name: 'Agreements and accountability',
    desc: 'Keep proposals, approvals, signed agreements, responsibilities, role assignments, and decision records in one coherent system instead of scattered across messages, folders, and memory.',
  },
  {
    name: 'Organizational learning',
    desc: 'Turn calls, workshops, updates, reports, and field conversations into durable operational memory — so the organization gets smarter as the work unfolds.',
  },
];

const keyPoints = [
  { title: 'Meetings become memory', desc: 'Important conversations become structured records, decisions, tasks, and follow-ups.' },
  { title: 'Relationships become pathways', desc: 'Promising contacts do not get lost. They move through clear stages of engagement.' },
  { title: 'Projects become visible', desc: 'Teams can see what each initiative needs, what has been agreed, and where progress is blocked.' },
  { title: 'Agreements become actionable', desc: 'Commitments connect to roles, documents, responsibilities, and operating workflows.' },
  { title: 'Partners stay sovereign', desc: 'Organizations remain independent while coordinating through shared infrastructure where collaboration is needed.' },
  { title: 'Learning compounds over time', desc: 'The organization builds memory across teams, projects, programmes, partnerships, and decisions.' },
];

export default function GaiaOps() {
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
          <rect x="120" y="120" width="360" height="360" rx="20" stroke="#6E8B3D" strokeWidth="1" fill="none" />
          <rect x="170" y="170" width="260" height="260" rx="12" stroke="#B7A24B" strokeWidth="0.9" fill="none" />
          <rect x="220" y="220" width="160" height="160" rx="8" stroke="#C2CB52" strokeWidth="0.8" fill="none" />
          <line x1="120" y1="300" x2="480" y2="300" stroke="#6E8B3D" strokeWidth="0.7" />
          <line x1="300" y1="120" x2="300" y2="480" stroke="#6E8B3D" strokeWidth="0.7" />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="animate-fade-up text-xs uppercase tracking-[0.22em] mb-4 font-body" style={{ color: '#6E8B3D', animationDelay: '0.1s' }}>
            Within Gaia Commons
          </p>
          <h1
            className="animate-fade-up font-display font-bold leading-[1.12] mb-8"
            style={{ color: '#F5F1E6', fontSize: 'clamp(2.6rem, 6vw, 4.8rem)', animationDelay: '0.25s' }}
          >
            GaiaOps
          </h1>
          <p
            className="animate-fade-up font-body font-light text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ color: 'rgba(245,241,230,0.72)', animationDelay: '0.45s' }}
          >
            The operational platform within Gaia Commons — the substrate that lets teams, working groups, organisations, and communities coordinate as one living system.
          </p>
          <div className="animate-fade-up flex flex-wrap justify-center gap-4" style={{ animationDelay: '0.65s' }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide transition-all hover:shadow-lg"
              style={{ background: '#C2CB52', color: '#1A2A23' }}
            >
              Get involved
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

      {/* The problem */}
      <section className="py-24 px-6" style={{ background: '#111D15' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: '#6E8B3D' }}>
            The problem it solves
          </p>
          <h2 className="font-display font-bold leading-tight mb-8" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            The regenerative movement needs coordination infrastructure built for it
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              The regenerative movement has more aligned people, capital, and good ideas than ever — what it lacks is coordination infrastructure built for it. Most tools are made for conventional companies and break down across distributed working groups, many organisations, and federations of sovereign partners.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              GaiaOps is built for exactly that. It takes the work the commons is already doing — working groups forming, decisions being made, agreements being signed, projects being run — and gives it a coherent operational backbone that scales as the movement grows.
            </p>
          </div>
        </div>
      </section>

      {/* Workspace screenshot */}
      <section className="px-6 pb-0 pt-0" style={{ background: '#111D15' }}>
        <div className="max-w-4xl mx-auto pb-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/gaiaops-workspace.png"
            alt="GaiaOps workspace screen"
            loading="lazy"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }}
          />
        </div>
      </section>

      {/* Four-layer architecture */}
      <section className="py-24 px-6" style={{ background: '#0D1F17' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: '#6E8B3D' }}>
              Platform architecture
            </p>
            <h2 className="font-display font-bold" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              One backbone for mission-aligned coordination
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {layers.map((layer, i) => (
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
                <h3 className="font-display font-semibold text-xl mb-3" style={{ color: '#F5F1E6' }}>
                  {layer.name}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.6)' }}>
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key points */}
      <section className="py-24 px-6" style={{ background: '#111D15' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: '#6E8B3D' }}>
              Why it matters
            </p>
            <h2 className="font-display font-bold" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              Every hour of purposeful work becomes usable momentum
            </h2>
          </div>
          <ul className="space-y-4">
            {keyPoints.map((point, i) => (
              <li key={i} className="p-6 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(110,139,61,0.12)' }}>
                <p className="font-display font-semibold mb-2" style={{ color: '#6E8B3D', fontSize: '1.05rem' }}>
                  {point.title}
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#F5F1E6' }}>
                  {point.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Relationship to GaiaOS */}
      <section className="py-24 px-6" style={{ background: '#0D1F17' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: '#6E8B3D' }}>
            The arc
          </p>
          <h2 className="font-display font-bold mb-6" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
            GaiaOps is GaiaOS 0.2
          </h2>
          <p className="font-body text-base leading-relaxed mb-6 max-w-2xl mx-auto" style={{ color: 'rgba(245,241,230,0.65)' }}>
            Operations first, Operating System later. GaiaOps earns its way toward the full commons-grade operating system — GaiaOS — by building real coordination capability at every phase. The same hour of work and the same conversation produce far more durable output when there is infrastructure to capture, route, and carry them into the next step.
          </p>
          <Link
            href="/projects/gaiaos"
            className="inline-flex items-center font-body font-medium text-sm transition-opacity hover:opacity-70"
            style={{ color: '#6E8B3D' }}
          >
            Learn about GaiaOS →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ background: '#1E4634' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold mb-6" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Ready to coordinate?
          </h2>
          <p className="font-body text-lg font-light leading-relaxed mb-10" style={{ color: 'rgba(245,241,230,0.72)' }}>
            GaiaOps is in live build. If you are running a working group, initiative, or commons — get in touch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-semibold text-sm transition-all hover:shadow-lg"
              style={{ background: '#C2CB52', color: '#1A2A23' }}
            >
              Get in touch
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
