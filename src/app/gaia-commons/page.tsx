import Link from 'next/link';
import GaiaArchitecture from '@/components/GaiaArchitecture';

export const metadata = { title: 'Gaia Commons — Open Systems Foundation' };

export default function GaiaCommons() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{ background: '#0D1F17' }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(30,70,52,0.45) 0%, transparent 70%)' }}
        />

        {/* Animated globe SVG */}
        <svg
          viewBox="0 0 600 600"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: 0.08 }}
        >
          <circle cx="300" cy="300" r="240" stroke="#6E8B3D" strokeWidth="1" fill="none" />
          <circle cx="300" cy="300" r="180" stroke="#2C5E47" strokeWidth="1" fill="none" />
          <circle cx="300" cy="300" r="120" stroke="#B7A24B" strokeWidth="1.2" fill="none" />
          <ellipse cx="300" cy="300" rx="240" ry="80" stroke="#6E8B3D" strokeWidth="0.8" fill="none" />
          <ellipse cx="300" cy="300" rx="240" ry="140" stroke="#2C5E47" strokeWidth="0.7" fill="none" />
          <line x1="60" y1="300" x2="540" y2="300" stroke="#B7A24B" strokeWidth="0.8" />
          <line x1="300" y1="60" x2="300" y2="540" stroke="#B7A24B" strokeWidth="0.8" />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p
            className="animate-fade-up text-xs uppercase tracking-[0.22em] mb-6 font-body"
            style={{ color: '#6E8B3D', animationDelay: '0.1s' }}
          >
            Our flagship ecosystem
          </p>
          <h1
            className="animate-fade-up font-display font-bold leading-[1.12] mb-8"
            style={{ color: '#F5F1E6', fontSize: 'clamp(2.6rem, 6vw, 4.8rem)', animationDelay: '0.25s' }}
          >
            Gaia Commons
          </h1>
          <p
            className="animate-fade-up font-body font-light text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ color: 'rgba(245,241,230,0.72)', animationDelay: '0.45s' }}
          >
            The integrated transition infrastructure for a regenerative commons economy — connecting people, projects, organizations, capital, knowledge, and governance into a living ecosystem for planetary stewardship.
          </p>
          <div className="animate-fade-up flex flex-wrap justify-center gap-4" style={{ animationDelay: '0.65s' }}>
            <a
              href="https://gaiacommons.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide transition-all hover:shadow-lg"
              style={{ background: '#C2CB52', color: '#1A2A23' }}
            >
              Dedicated Website
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
                <path d="M7 17 L17 7 M9 7 h8 v8" stroke="#1A2A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-medium text-sm"
              style={{ border: '1px solid rgba(245,241,230,0.25)', color: 'rgba(245,241,230,0.8)' }}
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section id="explore" className="py-24 px-6" style={{ background: '#111D15' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: '#6E8B3D' }}>
            What Gaia Commons is
          </p>
          <h2
            className="font-display font-bold leading-tight mb-8"
            style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            More than a network. A commons architecture.
          </h2>
          <div className="space-y-5">
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              Gaia Commons is the most developed expression of the Open Earth vision: a living ecosystem for coordinating regenerative work across people, projects, organizations, communities, funders, and bioregions.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              It is not simply another alliance or community platform. Gaia Commons is being developed as transition infrastructure — the legal, operational, technological, financial, and governance architecture needed for sovereign actors to collaborate as part of a shared regenerative commons.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              The Open Systems Foundation provides the charitable home, stewardship, and strategic support. Gaia Commons is where that vision becomes a working field: projects coordinate, shared resources are stewarded, agreements are formed, knowledge circulates, and regenerative value can flow back into the commons.
            </p>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-24 px-6" style={{ background: '#0D1F17' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: '#6E8B3D' }}>
            The problem it responds to
          </p>
          <h2
            className="font-display font-bold leading-tight mb-8"
            style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            Regenerative work is abundant. Coordination is missing.
          </h2>
          <div className="space-y-5">
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              Across the world, people are building regenerative farms, new governance methods, open technologies, community economies, ecological restoration projects, cultural initiatives, and mission-led enterprises.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              The problem is not lack of good will. It is fragmentation.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              Projects remain isolated. Knowledge gets trapped in silos. Funding flows unevenly. Agreements are hard to coordinate. Local initiatives struggle to connect with global resources without losing autonomy.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              Gaia Commons exists to solve this coordination gap: helping regenerative actors stay sovereign while gaining the shared infrastructure needed to work together, learn together, and build more powerful outcomes than any one initiative could produce alone.
            </p>
          </div>
        </div>
      </section>

      {/* Live Architecture */}
      <GaiaArchitecture />

      {/* What it enables */}
      <section className="py-24 px-6" style={{ background: '#111D15' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: '#6E8B3D' }}>
              What it enables
            </p>
            <h2 className="font-display font-bold" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              From scattered initiatives to a coordinated commons
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Coordinate sovereign actors',
                desc: 'Help projects, communities, organizations, funders, and contributors work together without being absorbed into one central institution.',
                icon: (
                  <svg viewBox="0 0 36 36" width="28" fill="none">
                    <circle cx="8" cy="10" r="2.8" stroke="#6E8B3D" strokeWidth="1.3" />
                    <circle cx="28" cy="10" r="2.8" stroke="#B7A24B" strokeWidth="1.3" />
                    <circle cx="18" cy="27" r="2.8" stroke="#C2CB52" strokeWidth="1.3" />
                    <path d="M10 12 L16 24 M26 12 L20 24 M11 10 L25 10" stroke="#6E8B3D" strokeWidth="1.1" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: 'Steward shared resources',
                desc: 'Create practical ways to protect, share, license, govern, and develop knowledge, tools, methods, designs, capital, and other commons assets.',
                icon: (
                  <svg viewBox="0 0 36 36" width="28" fill="none">
                    <circle cx="18" cy="18" r="13" stroke="#6E8B3D" strokeWidth="1.4" />
                    <path d="M18 5 L21 18 L18 31 L15 18 Z" stroke="#B7A24B" strokeWidth="1.3" />
                    <path d="M5 18 L18 15 L31 18 L18 21 Z" stroke="#C2CB52" strokeWidth="1.1" />
                    <circle cx="18" cy="18" r="2" fill="#B7A24B" />
                  </svg>
                ),
              },
              {
                title: 'Route resources where they matter',
                desc: 'Build pathways for funding, support, capacity, and attention to reach regenerative work with high systemic value.',
                icon: (
                  <svg viewBox="0 0 36 36" width="28" fill="none">
                    <circle cx="14" cy="14" r="7.5" stroke="#6E8B3D" strokeWidth="1.5" />
                    <circle cx="22" cy="14" r="7.5" stroke="#B7A24B" strokeWidth="1.5" />
                    <circle cx="18" cy="22" r="7.5" stroke="#C2CB52" strokeWidth="1.5" />
                  </svg>
                ),
              },
              {
                title: 'Grow local and planetary coherence',
                desc: 'Support local commons and bioregional initiatives while connecting them into wider patterns of learning, exchange, and mutual support.',
                icon: (
                  <svg viewBox="0 0 36 36" width="28" fill="none">
                    <path d="M18 31 L18 15" stroke="#6E8B3D" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M18 20 C12 20 9 16 9 11 C15 11 18 15 18 20 Z" stroke="#B7A24B" strokeWidth="1.3" />
                    <path d="M18 17 C24 17 27 13 27 8 C21 8 18 12 18 17 Z" stroke="#C2CB52" strokeWidth="1.3" />
                    <path d="M13 31 L23 31" stroke="#6E8B3D" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl flex flex-col"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(110,139,61,0.2)' }}
              >
                <div
                  className="mb-5 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(110,139,61,0.14)', border: '1px solid rgba(110,139,61,0.28)' }}
                >
                  {item.icon}
                </div>
                <h3 className="font-display font-semibold text-xl mb-4" style={{ color: '#F5F1E6' }}>
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.6)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6" style={{ background: '#0D1F17' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: '#6E8B3D' }}>
              How it works
            </p>
            <h2 className="font-display font-bold" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              A living ecosystem, not a central command structure
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { step: '01', title: 'Start with sovereignty', desc: 'People, projects, and organizations enter from where they are. Gaia Commons is designed to support autonomy, not erase it.' },
              { step: '02', title: 'Form working groups', desc: 'Shared purposes become coordinated work: teams, circles, projects, and partnerships form around real needs and opportunities.' },
              { step: '03', title: 'Use shared infrastructure', desc: 'Governance methods, legal frameworks, licensing tools, coordination platforms, and resource-flow structures help the work become durable.' },
              { step: '04', title: 'Contribute and receive', desc: 'Participants contribute knowledge, capital, services, tools, learning, or capacity — and gain access to shared resources, partners, support, and opportunities.' },
              { step: '05', title: 'Build the commons', desc: 'Over time, useful work becomes shared capacity: infrastructure, methods, knowledge, agreements, and economic flows that strengthen the whole field.' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-6 p-6 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(110,139,61,0.15)' }}
              >
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-xs tracking-wide"
                  style={{ background: 'rgba(110,139,61,0.2)', color: '#6E8B3D' }}
                >
                  {item.step}
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1" style={{ color: '#F5F1E6' }}>{item.title}</h4>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.6)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current development */}
      <section className="py-24 px-6" style={{ background: '#111D15' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: '#6E8B3D' }}>
            Current development
          </p>
          <h2
            className="font-display font-bold leading-tight mb-8"
            style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            Building the first layer of commons infrastructure
          </h2>
          <div className="space-y-5">
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              Gaia Commons is currently moving through its foundational buildout: governance architecture, GaiaOps, OPAL, PASEO, regenerative funding structures, and the pathway toward GaiaOS.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              The first phase is focused on making the commons operational: coordinating the initial ecosystem, testing legal and organizational frameworks, onboarding aligned partners, and preparing the infrastructure that future local and bioregional commons can adapt for their own contexts.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              This is not a finished system. It is a living architecture under active development — built through pilots, partnerships, open calls, and practical use.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6" style={{ background: '#1E4634' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: 'rgba(194,203,82,0.75)' }}>
            Join the commons buildout
          </p>
          <h2 className="font-display font-bold mb-6" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Help build the infrastructure for regenerative coordination
          </h2>
          <p className="font-body text-lg font-light leading-relaxed mb-10" style={{ color: 'rgba(245,241,230,0.72)' }}>
            Gaia Commons is for people and organizations working on the deeper transition: regenerators, funders, communities, technologists, researchers, land projects, cultural builders, governance designers, and purpose-driven enterprises.
          </p>
          <p className="font-body text-base mb-10" style={{ color: 'rgba(245,241,230,0.55)' }}>
            If your work belongs in a regenerative commons economy, there is a pathway to participate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://gaiacommons.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide transition-all hover:shadow-lg"
              style={{ background: '#C2CB52', color: '#1A2A23' }}
            >
              Dedicated Website
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
                <path d="M7 17 L17 7 M9 7 h8 v8" stroke="#1A2A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-medium text-sm transition-all"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(245,241,230,0.2)', color: 'rgba(245,241,230,0.85)' }}
            >
              Get involved
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-medium text-sm"
              style={{ border: '1px solid rgba(245,241,230,0.2)', color: 'rgba(245,241,230,0.6)' }}
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
