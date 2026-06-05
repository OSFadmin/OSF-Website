import Link from 'next/link';

export const metadata = { title: 'Project Apollo — Open Systems Foundation' };

const highlights = [
  {
    title: 'Commons Innovation Environment',
    desc: 'A resource-backed testbed in the heart of downtown San Francisco — developed with the Flourishing Systems Foundation, where lab operators and innovators participate as commons contributors.',
  },
  {
    title: 'Commons-based systems',
    desc: 'OSF is working with Apollo to implement OPAL for the innovation commons, PASEO for lab-operator participation, and a localised trust stewarding the facility\'s collective outputs.',
  },
  {
    title: 'Bioregional testbed',
    desc: 'Apollo serves as a real-world testbed for commons-based models in an urban innovation context — demonstrating that place-based commons stewardship works at the city scale.',
  },
  {
    title: 'Real-asset strategy',
    desc: 'Apollo is part of the Foundation\'s resource-backed asset approach — capital preservation and long-horizon stewardship focused on the physical infrastructure of the commons.',
  },
];

export default function ProjectApollo() {
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
          <circle cx="300" cy="300" r="200" stroke="#6E8B3D" strokeWidth="1" fill="none" />
          <circle cx="300" cy="300" r="140" stroke="#B7A24B" strokeWidth="0.9" fill="none" />
          <circle cx="300" cy="140" r="18" stroke="#C2CB52" strokeWidth="1" fill="none" />
          <path d="M300 158 L300 460" stroke="#6E8B3D" strokeWidth="0.7" strokeDasharray="4 8" />
          <path d="M114 238 L480 362" stroke="#6E8B3D" strokeWidth="0.7" strokeDasharray="4 8" />
          <path d="M114 362 L480 238" stroke="#6E8B3D" strokeWidth="0.7" strokeDasharray="4 8" />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="animate-fade-up text-xs uppercase tracking-[0.22em] mb-4 font-body" style={{ color: '#6E8B3D', animationDelay: '0.1s' }}>
            Commons Innovation Environment · San Francisco
          </p>
          <h1
            className="animate-fade-up font-display font-bold leading-[1.12] mb-8"
            style={{ color: '#F5F1E6', fontSize: 'clamp(2.6rem, 6vw, 4.8rem)', animationDelay: '0.25s' }}
          >
            Project Apollo
          </h1>
          <p
            className="animate-fade-up font-body font-light text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ color: 'rgba(245,241,230,0.72)', animationDelay: '0.45s' }}
          >
            A Commons Innovation Environment in downtown San Francisco — where lab operators and innovators participate as commons contributors, supported by open infrastructure from OSF.
          </p>
          <div className="animate-fade-up flex flex-wrap justify-center gap-4" style={{ animationDelay: '0.65s' }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide transition-all hover:shadow-lg"
              style={{ background: '#C2CB52', color: '#1A2A23' }}
            >
              Get in touch
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

      {/* What it is */}
      <section className="py-24 px-6" style={{ background: '#111D15' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: '#6E8B3D' }}>
            The project
          </p>
          <h2 className="font-display font-bold leading-tight mb-8" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Commons infrastructure at the city scale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              Project Apollo is a Commons Innovation Environment in the heart of downtown San Francisco — developed with the Flourishing Systems Foundation. Lab operators and innovators participate as commons contributors, with collective outputs stewarded through a localised trust.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.65)' }}>
              OSF is working with Apollo to implement commons-based systems: OPAL for the innovation commons, PASEO for lab-operator participation, and governance structures that keep the facility's outputs serving collective purpose rather than private capture.
            </p>
          </div>
        </div>
      </section>

      {/* Image placeholder */}
      <section className="px-6 pb-16" style={{ background: '#111D15' }}>
        <div className="max-w-4xl mx-auto">
          <div
            className="w-full rounded-2xl flex flex-col items-center justify-center"
            style={{
              height: '360px',
              border: '1.5px dashed rgba(110,139,61,0.35)',
              background: 'rgba(110,139,61,0.04)',
            }}
          >
            <svg viewBox="0 0 48 48" width="40" fill="none" style={{ marginBottom: '1rem', opacity: 0.35 }}>
              <rect x="4" y="10" width="40" height="28" rx="4" stroke="#6E8B3D" strokeWidth="1.5" />
              <circle cx="16" cy="20" r="4" stroke="#B7A24B" strokeWidth="1.5" />
              <path d="M4 34 L15 23 L22 30 L30 22 L44 34" stroke="#C2CB52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-body text-sm" style={{ color: 'rgba(245,241,230,0.3)' }}>Apollo Innovation Hub — photos coming soon</p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 px-6" style={{ background: '#0D1F17' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: '#6E8B3D' }}>
              What OSF is doing here
            </p>
            <h2 className="font-display font-bold" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              Open infrastructure for innovation
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
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

      {/* Second image placeholder */}
      <section className="px-6 py-16" style={{ background: '#111D15' }}>
        <div className="max-w-4xl mx-auto">
          <div
            className="w-full rounded-2xl flex flex-col items-center justify-center"
            style={{
              height: '260px',
              border: '1.5px dashed rgba(110,139,61,0.35)',
              background: 'rgba(110,139,61,0.04)',
            }}
          >
            <svg viewBox="0 0 48 48" width="40" fill="none" style={{ marginBottom: '1rem', opacity: 0.35 }}>
              <rect x="4" y="10" width="40" height="28" rx="4" stroke="#6E8B3D" strokeWidth="1.5" />
              <circle cx="16" cy="20" r="4" stroke="#B7A24B" strokeWidth="1.5" />
              <path d="M4 34 L15 23 L22 30 L30 22 L44 34" stroke="#C2CB52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-body text-sm" style={{ color: 'rgba(245,241,230,0.3)' }}>Community / workspace imagery — coming soon</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ background: '#1E4634' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold mb-6" style={{ color: '#F5F1E6', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Innovation in the commons
          </h2>
          <p className="font-body text-lg font-light leading-relaxed mb-10" style={{ color: 'rgba(245,241,230,0.72)' }}>
            If you are an innovator, lab operator, or organisation interested in participating in the Apollo commons — we would love to hear from you.
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
