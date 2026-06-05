import Link from 'next/link';

export const metadata = { title: 'GaiaOS — Open Systems Foundation' };

const ecosystemProcess = [
  {
    num: '01',
    title: 'Open call',
    desc: 'Invite technologists, communities, protocol builders, governance projects, funders, researchers, and purpose-driven organizations to bring forward existing tools, needs, capabilities, and infrastructure components.',
  },
  {
    num: '02',
    title: 'Mapping and discovery',
    desc: 'Identify which projects already solve parts of the GaiaOS stack: coordination, identity, governance, agreements, resource mapping, ecological sensing, funding flows, knowledge systems, supply chains, and distributed compute.',
  },
  {
    num: '03',
    title: 'Gradual selection',
    desc: 'Assess which projects are technically compatible, mission-aligned, mature enough to integrate, and willing to participate in a commons-oriented architecture without losing their sovereignty.',
  },
  {
    num: '04',
    title: 'CreActive Design Lab',
    desc: 'Bring selected contributors into a structured design process where architectures are compared, interfaces are clarified, overlaps are resolved, and the shared GaiaOS blueprint is refined.',
  },
  {
    num: '05',
    title: 'Form the GaiaOS CPV',
    desc: 'After the CreActive Design Lab, selected projects can opt into a joint-venture Commons Purpose Vehicle, agreeing to shared co-creation terms, contribution rights, and the share buyback mechanism for building the full GaiaOS.',
  },
  {
    num: '06',
    title: 'Launch GaiaOS V1',
    desc: 'Selected projects collaboratively deliver the first public version of GaiaOS, with the Foundation supporting direction, OS needs-mapping, design coherence, and commons alignment. GaiaOS launches as infrastructure for the commons and as a SaaS offering for purpose-driven organizations, with revenue flowing back into continued OS development and commons deployment.',
  },
];

const operatingDomains = [
  {
    title: 'People, roles, and organizations',
    desc: 'Who is involved, what they steward, what roles they hold, and how they participate across different contexts.',
  },
  {
    title: 'Governance and agreements',
    desc: 'How decisions are made, proposals move, agreements are signed, responsibilities are assigned, and authority is distributed.',
  },
  {
    title: 'Knowledge and operational memory',
    desc: 'How learning, documents, conversations, field experience, and institutional memory remain available to the whole.',
  },
  {
    title: 'Funding and resource flows',
    desc: 'How needs, capacities, budgets, grants, investments, projects, and commons resources can be mapped and routed.',
  },
  {
    title: 'Trust, identity, and permissions',
    desc: 'How people and organizations can coordinate securely across systems while preserving autonomy and appropriate access boundaries.',
  },
  {
    title: 'Real-world and ecological signals',
    desc: 'How physical infrastructure, land-based projects, supply chains, ecological indicators, sensors, and bioregional data eventually inform coordination.',
  },
];

const intelligences = [
  {
    title: 'Sensing',
    desc: 'Understanding what is happening across projects, working groups, places, resources, and ecological systems.',
  },
  {
    title: 'Memory',
    desc: 'Preserving lessons, decisions, agreements, experience, and operational history so the ecosystem does not lose what it has already learned.',
  },
  {
    title: 'Relationship',
    desc: 'Making visible the roles, trust lines, responsibilities, affiliations, and collaborations that shape how work actually happens.',
  },
  {
    title: 'Judgment',
    desc: 'Supporting better decisions by connecting human wisdom, contextual knowledge, evidence, and transparent governance processes.',
  },
  {
    title: 'Anticipation',
    desc: 'Helping the ecosystem notice emerging risks, opportunities, needs, and leverage points before they become urgent crises.',
  },
];

const devArc = [
  {
    num: '01',
    title: 'Start with GaiaOps',
    desc: 'Coordinate the real work happening now: teams, meetings, documents, roles, tasks, decisions, onboarding, and agreements.',
  },
  {
    num: '02',
    title: 'Open the ecosystem call',
    desc: 'Invite aligned builders and organizations to submit tools, needs, capabilities, infrastructure components, and collaboration proposals.',
  },
  {
    num: '03',
    title: 'Select and design together',
    desc: 'Use a gradual selection process and the CreActive Design Lab to identify compatible components, refine interfaces, and clarify the shared architecture.',
  },
  {
    num: '04',
    title: 'Prototype integration',
    desc: 'Test selected components through practical use cases across Gaia Commons, partner organizations, working groups, projects, and bioregional contexts.',
  },
  {
    num: '05',
    title: 'Federate into GaiaOS',
    desc: 'Grow toward an interoperable commons operating system where sovereign infrastructures can coordinate through shared protocols, governance, trust, and intelligence layers.',
  },
];

export default function GaiaOS() {
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
          <circle cx="300" cy="300" r="230" stroke="#6E8B3D" strokeWidth="1" fill="none" />
          <circle cx="300" cy="300" r="160" stroke="#B7A24B" strokeWidth="0.9" fill="none" />
          <circle cx="300" cy="300" r="90" stroke="#C2CB52" strokeWidth="0.8" fill="none" />
          {[0, 60, 120, 180, 240, 300].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <g key={i}>
                <line
                  x1={300 + 90 * Math.cos(rad)}
                  y1={300 + 90 * Math.sin(rad)}
                  x2={300 + 230 * Math.cos(rad)}
                  y2={300 + 230 * Math.sin(rad)}
                  stroke="#6E8B3D"
                  strokeWidth="0.6"
                />
                <circle cx={300 + 160 * Math.cos(rad)} cy={300 + 160 * Math.sin(rad)} r="3.5" fill="#B7A24B" opacity="0.7" />
                <circle cx={300 + 230 * Math.cos(rad)} cy={300 + 230 * Math.sin(rad)} r="2.5" fill="#6E8B3D" opacity="0.6" />
              </g>
            );
          })}
          <circle cx="300" cy="300" r="6" fill="#C2CB52" opacity="0.5" />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center font-body text-xs mb-8 transition-opacity hover:opacity-70"
            style={{ color: 'rgba(245,241,230,0.4)' }}
          >
            ← All projects
          </Link>
          <p className="animate-fade-up text-xs uppercase tracking-[0.22em] mb-4 font-body block" style={{ color: '#6E8B3D', animationDelay: '0.1s' }}>
            The horizon
          </p>
          <h1
            className="animate-fade-up font-display font-bold leading-[1.12] mb-8"
            style={{ color: '#F5F1E6', fontSize: 'clamp(2.6rem, 6vw, 4.8rem)', animationDelay: '0.25s' }}
          >
            GaiaOS
          </h1>
          <p
            className="animate-fade-up font-body font-light text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ color: 'rgba(245,241,230,0.72)', animationDelay: '0.45s' }}
          >
            The commons-grade operating system for regenerative coordination — not a single tool, but an emerging shared infrastructure layer for purpose-driven organizations, communities, projects, and bioregions to coordinate without centralizing control.
          </p>
          <div className="animate-fade-up flex flex-wrap justify-center gap-4" style={{ animationDelay: '0.65s' }}>
            <Link
              href="/projects/gaiaops"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide transition-all hover:shadow-lg"
              style={{ background: '#C2CB52', color: '#1A2A23' }}
            >
              Start with GaiaOps
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-medium text-sm"
              style={{ border: '1px solid rgba(245,241,230,0.25)', color: 'rgba(245,241,230,0.8)' }}
            >
              Get involved
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1 — What GaiaOS is */}
      <section className="py-24 px-6" style={{ background: '#111D15' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: '#6E8B3D' }}>
            Not one platform. A commons operating system.
          </p>
          <h2 className="font-display font-bold leading-tight mb-8" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            The operating system the regenerative economy will need
          </h2>
          <p className="font-body leading-relaxed mb-6" style={{ color: 'rgba(245,241,230,0.8)', fontSize: '1.125rem' }}>
            GaiaOS is the long-term coordination operating system Gaia Commons is working toward: a shared infrastructure layer through which sovereign organizations, communities, projects, funders, knowledge systems, governance processes, and resource flows can coordinate as part of one living ecosystem.
          </p>
          <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(245,241,230,0.6)' }}>
            It is not meant to be one centralized application owned by a single organization. The regenerative movement already contains many builders, tools, protocols, governance experiments, sensing systems, funding mechanisms, and community platforms. GaiaOS names the larger architecture that can eventually connect these pieces into an interoperable commons-grade operating system.
          </p>
          <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.6)' }}>
            Gaia Commons begins this process with GaiaOps: the operational coordination platform that solves the immediate problem of teams, working groups, partners, agreements, roles, documents, and decision records. GaiaOps is the seed. GaiaOS is the wider ecosystem architecture that can emerge when many aligned infrastructures are discovered, tested, integrated, and federated.
          </p>
        </div>
      </section>

      {/* Section 2 — How it will emerge */}
      <section className="py-24 px-6" style={{ background: '#0D1F17' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: '#6E8B3D' }}>
              The ecosystem process
            </p>
            <h2 className="font-display font-bold mb-6" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              GaiaOS will be composed through open collaboration
            </h2>
            <p className="font-body text-base leading-relaxed max-w-2xl" style={{ color: 'rgba(245,241,230,0.65)' }}>
              The full GaiaOS cannot be built by one team in isolation. It has to emerge through an intentional process of ecosystem discovery, selection, integration, and shared development. Gaia Commons will use GaiaOps as the first coordination layer, then open the field to aligned builders and infrastructure projects that already hold pieces of the future operating system.
            </p>
          </div>

          <div className="relative">
            {/* Vertical connector line */}
            <div
              className="absolute left-[19px] top-10 bottom-10 w-px hidden md:block"
              style={{ background: 'linear-gradient(to bottom, rgba(110,139,61,0.4), rgba(110,139,61,0.1))' }}
            />
            <div className="space-y-6">
              {ecosystemProcess.map((step, i) => (
                <div key={i} className="flex gap-6 relative">
                  <div
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-xs relative z-10"
                    style={{ background: '#0D1F17', border: '1.5px solid rgba(110,139,61,0.5)', color: '#B7A24B' }}
                  >
                    {step.num}
                  </div>
                  <div
                    className="flex-1 p-6 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(110,139,61,0.15)' }}
                  >
                    <h3 className="font-display font-semibold mb-2" style={{ color: '#F5F1E6', fontSize: '1.05rem' }}>
                      {step.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.6)' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Operating domains */}
      <section className="py-24 px-6" style={{ background: '#111D15' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: '#6E8B3D' }}>
              The operating domains
            </p>
            <h2 className="font-display font-bold mb-4" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              A shared architecture for many kinds of infrastructure
            </h2>
            <p className="font-body text-base leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(245,241,230,0.65)' }}>
              GaiaOS is not only about project management. A true commons operating system must connect the practical layers through which a regenerative economy coordinates itself.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operatingDomains.map((domain, i) => (
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
                  {domain.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.6)' }}>
                  {domain.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — The role of GaiaOps */}
      <section className="py-24 px-6" style={{ background: '#0D1F17' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: '#6E8B3D' }}>
            The starting point
          </p>
          <h2 className="font-display font-bold leading-tight mb-8" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            GaiaOps is where the operating system begins
          </h2>
          <p className="font-body leading-relaxed mb-6" style={{ color: 'rgba(245,241,230,0.8)', fontSize: '1.125rem' }}>
            The GaiaOS process starts with the work already happening. GaiaOps provides the first operational layer for coordinating people, teams, documents, meetings, agreements, roles, and working groups inside Gaia Commons and with aligned partners.
          </p>
          <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(245,241,230,0.6)' }}>
            This matters because an operating system cannot be designed only in theory. It has to grow from real coordination problems: onboarding contributors, managing responsibilities, preserving decisions, structuring working groups, tracking commitments, and helping sovereign organizations collaborate without losing their independence.
          </p>
          <p className="font-body text-base leading-relaxed mb-10" style={{ color: 'rgba(245,241,230,0.6)' }}>
            GaiaOps gives the GaiaOS process a live testing ground. The workflows that prove useful in practice can become patterns. The patterns can become shared standards. The shared standards can become federation points for the wider GaiaOS ecosystem.
          </p>
          <Link
            href="/projects/gaiaops"
            className="inline-flex items-center font-body font-medium text-sm transition-opacity hover:opacity-70"
            style={{ color: '#6E8B3D' }}
          >
            Explore GaiaOps →
          </Link>
        </div>
      </section>

      {/* Section 5 — Integrated intelligence */}
      <section className="py-24 px-6" style={{ background: '#111D15' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: '#6E8B3D' }}>
              Integrated intelligence
            </p>
            <h2 className="font-display font-bold mb-4" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              Helping the ecosystem sense, remember, relate, and respond
            </h2>
            <p className="font-body text-base leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(245,241,230,0.65)' }}>
              A commons operating system should not only store information. It should help the ecosystem become more intelligent over time — coordinating with better memory, better context, and better awareness of real-world conditions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {intelligences.map((intel, i) => (
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
                  {intel.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.6)' }}>
                  {intel.desc}
                </p>
              </div>
            ))}
            {/* Sixth card — placeholder for physical layer */}
            <div
              className="p-8 rounded-2xl flex flex-col"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(110,139,61,0.18)' }}
            >
              <div
                className="mb-5 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(110,139,61,0.08)', border: '1px solid rgba(110,139,61,0.2)' }}
              >
                <svg viewBox="0 0 24 24" width="18" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#6E8B3D" strokeWidth="1.5" />
                  <path d="M12 3 Q15 8 12 12 Q9 16 12 21" stroke="#B7A24B" strokeWidth="1" fill="none" />
                  <path d="M3 12 Q8 9 12 12 Q16 15 21 12" stroke="#B7A24B" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg mb-3" style={{ color: 'rgba(245,241,230,0.4)' }}>
                More to emerge
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.3)' }}>
                Additional intelligence layers will be defined through the ecosystem process as GaiaOS components are discovered, tested, and federated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Why open collaboration matters */}
      <section className="py-24 px-6" style={{ background: '#0D1F17' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: '#6E8B3D' }}>
            Why open collaboration matters
          </p>
          <h2 className="font-display font-bold leading-tight mb-8" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            The commons OS must be built like a commons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              A regenerative operating system cannot be created through the same logic as a conventional software monopoly. It must respect the sovereignty of the projects, communities, and organizations it is meant to serve.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              That is why the GaiaOS pathway begins with an open call rather than a closed build. The goal is to find and connect what already exists, identify what is missing, and bring the right builders into a shared design process.
            </p>
          </div>
          <div className="mt-8 p-8 rounded-2xl" style={{ background: 'rgba(110,139,61,0.06)', border: '1px solid rgba(110,139,61,0.2)' }}>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.72)' }}>
              Some tools may remain independent and simply interoperate. Some projects may become deeper collaborators. Some components may be rebuilt or extended through the CreActive Design Lab. Some may become part of a future GaiaOS federation. The point is not to absorb everything. The point is to help the right pieces coordinate as one ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 — Development arc */}
      <section className="py-24 px-6" style={{ background: '#111D15' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: '#6E8B3D' }}>
              The development arc
            </p>
            <h2 className="font-display font-bold" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              From operational seed to federated operating system
            </h2>
          </div>
          <div className="space-y-4">
            {devArc.map((stage, i) => (
              <div
                key={i}
                className="flex gap-6 p-6 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(110,139,61,0.15)' }}
              >
                <div
                  className="shrink-0 rounded-full px-3 py-1 font-body font-medium text-xs whitespace-nowrap self-start mt-1"
                  style={{ background: 'rgba(110,139,61,0.2)', color: '#6E8B3D' }}
                >
                  {stage.num}
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1" style={{ color: '#F5F1E6' }}>{stage.title}</h4>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.6)' }}>{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — Final CTA */}
      <section className="py-24 px-6 text-center" style={{ background: '#1E4634' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-5" style={{ color: 'rgba(194,203,82,0.8)' }}>
            Building the commons OS together
          </p>
          <h2 className="font-display font-bold mb-6" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            GaiaOS begins with the people already building pieces of it
          </h2>
          <p className="font-body text-lg font-light leading-relaxed mb-10" style={{ color: 'rgba(245,241,230,0.72)' }}>
            GaiaOS is not a finished product waiting to be released. It is an ecosystem architecture to be discovered, designed, tested, and federated with aligned builders. The first step is GaiaOps. The next step is opening the field.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects/gaiaops"
              className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-semibold text-sm transition-all hover:shadow-lg"
              style={{ background: '#C2CB52', color: '#1A2A23' }}
            >
              Explore GaiaOps
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-medium text-sm"
              style={{ border: '1px solid rgba(245,241,230,0.3)', color: 'rgba(245,241,230,0.85)' }}
            >
              Join the GaiaOS open call
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center font-body font-medium text-sm transition-opacity hover:opacity-70"
              style={{ color: 'rgba(245,241,230,0.6)', paddingTop: '0.875rem', paddingBottom: '0.875rem' }}
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
