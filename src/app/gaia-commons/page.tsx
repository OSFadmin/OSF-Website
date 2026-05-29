import Link from 'next/link';

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
            Our flagship initiative
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
            A living network uniting individuals and organisations to co-create and promote regenerative solutions — stewarding our planet as a living system.
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
            A global ecosystem for regenerative cultures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              Gaia Commons is a global ecosystem dedicated to fostering regenerative cultures and planetary wellbeing — the result of many years of conversations, prototyping, and lived experience, drawing inspiration from a wide range of sources, frameworks, and networks.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              It is the most developed expression of the Open Earth vision, and the initiative the Foundation stewards most closely. Where the Foundation provides the charitable home and strategic direction, Gaia Commons is where the vision becomes a working network.
            </p>
          </div>
        </div>
      </section>

      {/* What it aims to do */}
      <section className="py-24 px-6" style={{ background: '#0D1F17' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: '#6E8B3D' }}>
              What it aims to do
            </p>
            <h2 className="font-display font-bold" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              Four core aims
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Align purpose and innovation',
                desc: 'Align personal growth and shared purpose with innovation in governance, technology, and the way we organise — weaving wisdom with cutting-edge practice.',
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
                title: 'Weave regenerative cultures',
                desc: 'Bring ecological wellbeing, cultural diversity, and social fairness together into a tapestry of regenerative cultures.',
                icon: (
                  <svg viewBox="0 0 36 36" width="28" fill="none">
                    <circle cx="14" cy="14" r="7.5" stroke="#6E8B3D" strokeWidth="1.5" />
                    <circle cx="22" cy="14" r="7.5" stroke="#B7A24B" strokeWidth="1.5" />
                    <circle cx="18" cy="22" r="7.5" stroke="#C2CB52" strokeWidth="1.5" />
                  </svg>
                ),
              },
              {
                title: 'Transform how we coordinate',
                desc: 'Transform how we produce, build, and coordinate — while inspiring a deeper sense of belonging and purpose.',
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
                title: 'Demonstrate flourishing',
                desc: 'Demonstrate that humanity can flourish without depleting resources, harming ecosystems, or exploiting vulnerable populations.',
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
      <section className="py-24 px-6" style={{ background: '#111D15' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: '#6E8B3D' }}>
              The architecture
            </p>
            <h2 className="font-display font-bold mb-6" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              How it works
            </h2>
            <p className="font-body text-base leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(245,241,230,0.65)' }}>
              Gaia Commons coordinates sovereign teams without erasing their autonomy. Members work together within self-organising units with defined purposes and roles, and initiatives integrate through open frameworks rather than top-down control.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { step: '1', title: 'Plug in', desc: 'People and projects connect to the network while remaining sovereign in their own right.' },
              { step: '2', title: 'Build together', desc: 'Working groups form around shared purposes. Initiatives build on one another through open frameworks.' },
              { step: '3', title: 'Coordinate as one', desc: 'The operational backbone — GaiaOps — makes coordination effective and scalable as the commons grows.' },
              { step: '4', title: 'Share the benefits', desc: 'Progress, learning, and outputs are shared openly across the network and the wider Open Earth ecosystem.' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-6 p-6 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(110,139,61,0.15)' }}
              >
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm"
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

      {/* GaiaOps */}
      <section className="py-24 px-6" style={{ background: '#0D1F17' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: '#6E8B3D' }}>
              The operational backbone
            </p>
            <h2 className="font-display font-bold mb-6" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              GaiaOps
            </h2>
            <p className="font-body text-base leading-relaxed mb-4 max-w-2xl mx-auto" style={{ color: 'rgba(245,241,230,0.65)' }}>
              GaiaOps is the operational platform within Gaia Commons — the substrate that lets teams, working groups, organisations, and communities coordinate as one living system.
            </p>
            <p className="font-body text-base leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(245,241,230,0.65)' }}>
              The regenerative movement has more aligned people and good ideas than ever — what it lacks is coordination infrastructure built for it. GaiaOps is built for exactly that.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/gaiaops.png"
            alt="GaiaOps"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px', marginBottom: '2.5rem' }}
          />
          <div className="text-center">
            <Link
              href="/projects"
              className="font-body font-medium text-sm transition-opacity hover:opacity-60"
              style={{ color: '#6E8B3D' }}
            >
              Learn about GaiaOps on the projects page →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ background: '#1E4634' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold mb-6" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Ready to contribute?
          </h2>
          <p className="font-body text-lg font-light leading-relaxed mb-10" style={{ color: 'rgba(245,241,230,0.72)' }}>
            Gaia Commons is open. We need builders, ecologists, thinkers, and stewards to help co-create what comes next.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-semibold text-sm transition-all hover:shadow-lg"
              style={{ background: '#C2CB52', color: '#1A2A23' }}
            >
              Explore the projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-medium text-sm"
              style={{ border: '1px solid rgba(245,241,230,0.3)', color: 'rgba(245,241,230,0.85)' }}
            >
              Support the commons →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
