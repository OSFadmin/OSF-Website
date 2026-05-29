import Link from 'next/link';
import PullQuote from '@/components/PullQuote';
import CtaBand from '@/components/CtaBand';
import HeroBackground from '@/components/HeroBackground';
import HolonBackground from '@/components/HolonBackground';

// ── BACKUP: static world-grid SVG (restore by swapping <HolonBackground /> for this) ──
// const WorldGrid = () => (
//   <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice"
//     className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
//     {[180,270,360,450,540,630,720,810,900,990,1080,1170,1260,1350].map((x) => (
//       <line key={x} x1={x} y1="0" x2={x} y2="900" stroke="#C2CB52" strokeWidth="0.8" />
//     ))}
//     {[112,225,337,450,562,675,787].map((y) => (
//       <line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="#C2CB52" strokeWidth="0.8" />
//     ))}
//   </svg>
// );

function PillarCard({ icon, title, description, delay, image }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
  image?: string;
}) {
  return (
    <div
      className="feature-card animate-fade-up flex flex-col p-8"
      style={{ animationDelay: delay }}
    >
      {image && (
        <div className="feature-card-photo" aria-hidden="true">
          <img src={image} alt="" />
        </div>
      )}
      <div className="feature-card-content flex flex-col flex-grow">
        <div className="feature-card-icon mb-6 w-12 h-12 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <h3 className="font-display font-bold mb-3"
          style={{ color: 'var(--ink)', fontSize: '1.18rem', lineHeight: 1.3 }}>
          {title}
        </h3>
        <p className="font-body leading-relaxed flex-grow"
          style={{ color: 'var(--muted)', fontSize: '0.93rem' }}>
          {description}
        </p>
      </div>
    </div>
  );
}

const stats: Array<{ value: string; label: string; sub: string; sub2?: string }> = [
  {
    value: '4',
    label: 'Projects',
    sub: '2 Underway · 2 Scheduled · 0 Complete',
  },
  {
    value: '20+',
    label: 'Collaborators',
    sub: 'And growing · Network expanding',
  },
  {
    value: 'Open',
    label: 'License & Spirit',
    sub: 'CC BY-SA 4.0 · share & adapt',
    sub2: 'Peer Production License (PPL)',
  },
  {
    value: '2024',
    label: 'Initiated',
    sub: 'Reg. Liechtenstein 2025',
    sub2: '501(c)(3) Partner — USA',
  },
];

const partners = [
  { name: 'DigiHub.Li',                          type: 'Partner',       logo: '/partners/digihub.png' },
  { name: 'Flourishing Systems Foundation',       type: 'Partner',       logo: '/partners/flourishing.png' },
  { name: 'Planetir',                             type: 'Collaborator',  logo: '/partners/planetir.jpg' },
  { name: 'P2P Foundation',                       type: 'Partner',       logo: '/partners/p2p.svg' },
  { name: 'The Most Important Conversations',     type: 'Partner',       logo: '/partners/tmic.webp' },
  { name: 'Project Weave',                        type: 'Collaborator',  logo: '/partners/weave.png' },
];

export default function Home() {
  return (
    <div>

      {/* ── Hero ─────────────────────────────────────── */}
      <section
        className="relative min-h-[82vh] flex items-center justify-center overflow-hidden"
        style={{ background: '#1E4634' }}
      >
        {/* Scroll-reactive gradient */}
        <HeroBackground />

        {/* Animated holons background */}
        <HolonBackground />

        {/* Radial centre glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 38%, rgba(110,139,61,0.16) 0%, transparent 68%)',
            zIndex: 1,
          }}
        />

        {/* Decorative horizontal golden accent */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '38%',
            left: 0, right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(183,162,75,0.18) 20%, rgba(194,203,82,0.3) 50%, rgba(183,162,75,0.18) 80%, transparent 100%)',
            zIndex: 1,
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center" style={{ zIndex: 2 }}>

          {/* Kicker pill */}
          <div className="animate-fade-up inline-flex items-center gap-2 mb-8" style={{ animationDelay: '0.08s' }}>
            <span
              className="font-body font-medium text-xs uppercase tracking-[0.24em]"
              style={{
                color: '#B7A24B',
                background: 'rgba(183,162,75,0.1)',
                border: '1px solid rgba(183,162,75,0.25)',
                padding: '6px 16px',
                borderRadius: '99px',
              }}
            >
              Supporting the foundation of an Open Earth
            </span>
          </div>

          <h1
            className="animate-fade-up font-display font-bold leading-[1.08] mb-7"
            style={{
              color: '#F5F1E6',
              fontSize: 'clamp(2.8rem, 6.5vw, 5rem)',
              animationDelay: '0.25s',
              letterSpacing: '-0.01em',
            }}
          >
            Building the open infrastructure
            <br />
            <span style={{ color: '#C2CB52' }}>for a thriving planet.</span>
          </h1>

          <p
            className="animate-fade-up font-body font-light leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ color: 'rgba(245,241,230,0.75)', animationDelay: '0.45s', fontSize: 'clamp(1.05rem, 1.9vw, 1.25rem)' }}
          >
            The Open Systems Foundation supports, co-designs, and funds the technologies, environments, and frameworks that let people everywhere collaborate beyond borders — and stewards Gaia Commons, a living economic infrastructure for planetary regeneration.
          </p>

          <div
            className="animate-fade-up flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: '0.62s' }}
          >
            <Link
              href="/about"
              className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide transition-all hover:shadow-lg hover:scale-[1.02]"
              style={{ background: '#C2CB52', color: '#1A2A23' }}
            >
              Explore the vision
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-medium text-sm transition-all hover:opacity-80"
              style={{ border: '1px solid rgba(245,241,230,0.28)', color: 'rgba(245,241,230,0.85)' }}
            >
              Support the mission →
            </Link>
          </div>
        </div>

      </section>

      {/* ── Stats band ───────────────────────────────── */}
      <section style={{ background: 'var(--ink)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0"
            style={{ borderColor: 'rgba(245,241,230,0.08)' }}>
            {stats.map((stat, i) => (
              <div key={i} className="px-8 py-10 flex flex-col gap-1.5"
                style={{ borderColor: 'rgba(245,241,230,0.08)' }}>
                <span className="stat-value" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
                  {stat.value}
                </span>
                <span className="font-body font-semibold text-sm"
                  style={{ color: 'rgba(245,241,230,0.85)', letterSpacing: '0.02em' }}>
                  {stat.label}
                </span>
                <span className="font-body text-xs leading-snug"
                  style={{ color: 'rgba(245,241,230,0.38)', letterSpacing: '0.04em' }}>
                  {stat.sub}
                </span>
                {stat.sub2 && (
                  <span className="font-body text-xs leading-snug"
                    style={{ color: 'rgba(194,203,82,0.45)', letterSpacing: '0.04em' }}>
                    {stat.sub2}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three pillars ────────────────────────────── */}
      <section className="py-28 md:py-36" style={{ background: 'var(--bone)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="pill-badge mb-5">What we do</span>
            <h2 className="font-display font-bold mb-5 mt-5"
              style={{ color: 'var(--ink)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1 }}>
              Three areas of action
            </h2>
            <p className="font-body max-w-xl mx-auto" style={{ color: 'var(--muted)', fontSize: '1.05rem' }}>
              We empower the creation of Open Earth infrastructure across three interlocking areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PillarCard
              icon={
                <svg viewBox="0 0 36 36" width="26" fill="none">
                  <rect x="4" y="4" width="28" height="28" rx="6" stroke="#1E4634" strokeWidth="1.6" />
                  <path d="M11 18h14M18 11v14" stroke="#6E8B3D" strokeWidth="1.6" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="4" stroke="#B7A24B" strokeWidth="1.2" fill="none" />
                </svg>
              }
              title="Open Earth Technologies"
              description="Digital and physical infrastructure for global collaboration: communication, peer production, resource sharing, and shared decision-making, woven together worldwide."
              delay="0.1s"
              image="/photos/action-technologies.png"
            />
            <PillarCard
              icon={
                <svg viewBox="0 0 36 36" width="26" fill="none">
                  <circle cx="12" cy="14" r="5" stroke="#1E4634" strokeWidth="1.6" />
                  <circle cx="24" cy="14" r="5" stroke="#2C5E47" strokeWidth="1.6" />
                  <path d="M4 30 C4 24 8 20 12 20 C16 20 20 24 20 30" stroke="#6E8B3D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <path d="M16 30 C16 24 20 20 24 20 C28 20 32 24 32 30" stroke="#B7A24B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              }
              title="Open Earth Innovation Environments"
              description="Living laboratories that research, develop, and test open innovations and Open Earth principles at every scale."
              delay="0.22s"
              image="/photos/action-innovation.png"
            />
            <PillarCard
              icon={
                <svg viewBox="0 0 36 36" width="26" fill="none">
                  <circle cx="18" cy="18" r="13" stroke="#1E4634" strokeWidth="1.5" />
                  <path d="M18 8 L18 28 M8 18 L28 18" stroke="#6E8B3D" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M12 12 Q18 6 24 12 Q30 18 24 24 Q18 30 12 24 Q6 18 12 12Z" stroke="#B7A24B" strokeWidth="1.1" fill="none" />
                </svg>
              }
              title="Open Earth Ecosystem"
              description="The foundational architecture of models, frameworks, and value flows that weaves aligned initiatives into a coherent planetary whole."
              delay="0.34s"
              image="/photos/action-ecosystem.png"
            />
          </div>
        </div>
      </section>

      {/* ── Pull quote ───────────────────────────────── */}
      <section style={{ background: 'var(--cream)' }}>
        <PullQuote
          quote="If all willing people can easily exchange best practices, share innovations, and work together toward the goal we share — we reach it far faster through the power of the collective field."
          attribution="Open Earth Manifesto"
        />
      </section>

      {/* ── Infographic strip ────────────────────────── */}
      <section className="px-6 md:px-10 pt-0 pb-14 md:pb-20 -mt-6 md:-mt-10" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto flex justify-center">
          <div style={{ borderRadius: '20px', overflow: 'hidden', maxWidth: '81%', width: '100%' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/open-earth-loop-infographic.png"
              alt="Open Earth · Virtuous Cycle"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── Culture teaser ───────────────────────────── */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#2C5E47' }}>
        <div className="max-w-7xl mx-auto">

          {/* Top row: text + image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center mb-12 md:mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] font-body mb-5" style={{ color: 'rgba(194,203,82,0.75)' }}>
                Open Earth Culture
              </p>
              <h2 className="font-display font-bold leading-tight mb-6"
                style={{ color: '#F5F1E6', fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}>
                The Open Earth;<br />As an Embodied Philosophy
              </h2>
              <p className="font-body text-base leading-relaxed mb-5" style={{ color: 'rgba(245,241,230,0.72)' }}>
                Culture is the social template that precedes all human activity. Open Earth Culture translates the principles of open projects worldwide into five living pillars — a freely forkable cultural commons for any community or organisation building the new paradigm.
              </p>
              <p className="font-body text-sm leading-relaxed mb-8" style={{ color: 'rgba(245,241,230,0.52)' }}>
                Available for use, adaptation, and improvement by anyone contributing to the Open Earth vision, the commons, or open initiatives worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/culture"
                  className="inline-flex items-center px-7 py-3 rounded-full font-body font-semibold text-sm transition-all hover:shadow-lg hover:scale-[1.02]"
                  style={{ background: '#C2CB52', color: '#1A2A23' }}>
                  Explore Open Earth Culture
                </Link>
                <a href="/downloads/Open_Earth_Culture_V1.pdf" download
                  className="inline-flex items-center px-7 py-3 rounded-full font-body font-medium text-sm transition-all hover:opacity-70"
                  style={{ border: '1px solid rgba(245,241,230,0.25)', color: 'rgba(245,241,230,0.8)' }}>
                  Direct Download →
                </a>
              </div>
            </div>

            {/* Culture preview image with pill */}
            <div className="relative" style={{ borderRadius: '20px', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/open-earth-culture-preview.png"
                alt="The Open Earth as an Embodied Philosophy"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '20px' }}
              />
              <div className="absolute bottom-4 left-4">
                <span
                  className="font-body text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: 'rgba(15,31,23,0.82)',
                    border: '1px solid rgba(194,203,82,0.38)',
                    color: 'rgba(194,203,82,0.92)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  Preview: The Open Philosophy
                </span>
              </div>
            </div>
          </div>

          {/* Five pillar tiles — full width below */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              {
                name: 'Open Communication',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C2CB52" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    <line x1="9" y1="10" x2="15" y2="10" opacity="0.55"/>
                    <line x1="9" y1="13" x2="13" y2="13" opacity="0.55"/>
                  </svg>
                ),
              },
              {
                name: 'Collaborative Innovation',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C2CB52" strokeWidth="1.7" strokeLinecap="round">
                    <circle cx="18" cy="5" r="2.5"/>
                    <circle cx="6" cy="12" r="2.5"/>
                    <circle cx="18" cy="19" r="2.5"/>
                    <line x1="8.5" y1="13.4" x2="15.5" y2="17.6"/>
                    <line x1="15.5" y1="6.4" x2="8.5" y2="10.6"/>
                  </svg>
                ),
              },
              {
                name: 'Inclusive Governance',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C2CB52" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
              },
              {
                name: 'Regenerative Stewardship',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C2CB52" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                  </svg>
                ),
              },
              {
                name: 'Collective Evolution',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C2CB52" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                    <polyline points="16 7 22 7 22 13"/>
                  </svg>
                ),
              },
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col items-center text-center py-6 px-3 rounded-xl gap-3"
                style={{ background: 'rgba(245,241,230,0.06)', border: '1px solid rgba(245,241,230,0.1)' }}>
                {pillar.icon}
                <span className="font-body font-medium"
                  style={{ fontSize: '0.78rem', letterSpacing: '0.03em', color: 'rgba(245,241,230,0.75)', lineHeight: 1.45 }}>
                  {pillar.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Gaia Commons feature ─────────────────────── */}
      <section className="py-24 md:py-32 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Gaia Commons logo */}
          <div className="order-2 md:order-1 flex items-center justify-center py-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gaia-commons-logo.png"
              alt="Gaia Commons"
              style={{ width: '100%', maxWidth: '320px', height: 'auto', display: 'block' }}
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: 'var(--sage)' }}>Flagship Initiative</p>
            <h2 className="font-display font-bold leading-tight mb-6"
              style={{ color: 'var(--ink)', fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}>
              Gaia Commons
            </h2>
            <p className="font-body text-base leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
              Gaia Commons is a living commons network and infrastructure stack uniting individuals and organisations to co-create and promote regenerative solutions. It aggregates, develops, and deploys the frameworks for stewarding our planet as a living system.
            </p>
            <p className="font-body text-base leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
              It is the most concentrated expression of the Open Earth vision — the core layer attempting to embed the Open Philosophy in every aspect of economy, technology, and culture. The focal layer we steward with most resources, care, and focus. A long-term meta-initiative made up of many projects underway and planned.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/gaia-commons"
                className="inline-flex items-center px-8 py-3 rounded-full font-body font-medium text-sm transition-all hover:shadow-md"
                style={{ background: 'var(--pine)', color: '#F5F1E6' }}>
                Discover Gaia Commons →
              </Link>
              <Link href="/projects"
                className="inline-flex items-center px-8 py-3 rounded-full font-body font-medium text-sm transition-all hover:opacity-70"
                style={{ border: '1px solid var(--border)', color: 'var(--pine)' }}>
                View all projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Creating the Commons Stack ───────────────── */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#10231A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: 'rgba(194,203,82,0.8)' }}>
              The Commons Stack
            </p>
            <h2 className="font-display font-bold mb-5"
              style={{ color: '#F5F1E6', fontSize: 'clamp(1.9rem, 3.5vw, 3rem)', lineHeight: 1.1 }}>
              Creating the Commons Stack
            </h2>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,241,230,0.7)' }}>
              Open, opt-in protocols and frameworks for an open society — shared infrastructure layers any
              community can adopt, fork, and build on, without lock-in or central control.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Open Protocols',
                desc: 'Interoperable, permissionless standards that let sovereign people, projects, and tools speak the same language.',
                icon: (
                  <svg viewBox="0 0 36 36" width="26" fill="none">
                    <path d="M18 5 L30 11 L18 17 L6 11 Z" stroke="#6E8B3D" strokeWidth="1.4" strokeLinejoin="round" />
                    <path d="M6 18 L18 24 L30 18" stroke="#B7A24B" strokeWidth="1.3" strokeLinejoin="round" />
                    <path d="M6 25 L18 31 L30 25" stroke="#C2CB52" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: 'Open Frameworks',
                desc: 'Governance, economic, and coordination patterns — freely forkable, adopted by choice and adapted to fit.',
                icon: (
                  <svg viewBox="0 0 36 36" width="26" fill="none">
                    <rect x="6" y="6" width="24" height="24" rx="3" stroke="#6E8B3D" strokeWidth="1.4" />
                    <path d="M6 15 H30 M6 23 H30 M15 6 V30 M23 6 V30" stroke="#B7A24B" strokeWidth="1" />
                  </svg>
                ),
              },
              {
                title: 'Opt-in by Design',
                desc: 'No lock-in. Everyone keeps ownership of their identity, data, and direction — participation is always a choice.',
                icon: (
                  <svg viewBox="0 0 36 36" width="26" fill="none">
                    <rect x="6" y="13" width="24" height="11" rx="5.5" stroke="#6E8B3D" strokeWidth="1.4" />
                    <circle cx="23" cy="18.5" r="3.4" stroke="#C2CB52" strokeWidth="1.4" />
                    <path d="M10.5 18.5 l2.4 2.4 L17 16" stroke="#B7A24B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((layer, i) => (
              <div key={i} className="glass-card-dark p-8 flex flex-col">
                <div
                  className="mb-5 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(110,139,61,0.16)', border: '1px solid rgba(110,139,61,0.3)' }}
                >
                  {layer.icon}
                </div>
                <h3 className="font-display font-semibold text-xl mb-3" style={{ color: '#F5F1E6' }}>
                  {layer.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.62)' }}>
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manifesto teaser ─────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="pill-badge mb-5">Our foundational document</span>
          <h2 className="font-display font-bold mb-4 mt-5"
            style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            The Open Earth Manifesto
          </h2>
          <p className="font-display font-semibold mb-6 max-w-2xl mx-auto"
            style={{ color: 'var(--forest)', fontSize: 'clamp(1.05rem, 2vw, 1.4rem)', lineHeight: 1.35 }}>
            Laying the Groundwork for a Collaborative Global Ecosystem
          </p>
          <p className="font-body text-base font-light leading-relaxed mb-4 max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            The vision document that describes the shift from scarcity-driven competition to an abundance-based, openly shared planet.
          </p>
          <p className="font-body text-sm leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: 'var(--muted)', opacity: 0.75 }}>
            Freely available for anyone to read, share, build on, and adapt.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/manifesto"
              className="inline-flex items-center px-8 py-3 rounded-full font-body font-medium text-sm transition-all hover:shadow-md"
              style={{ background: 'var(--pine)', color: '#F5F1E6' }}>
              Read the Manifesto →
            </Link>
            <a href="/downloads/Open_Earth_Manifesto_v1.11.pdf" download
              className="inline-flex items-center px-8 py-3 rounded-full font-body font-medium text-sm transition-all hover:opacity-70"
              style={{ border: '1px solid var(--border)', color: 'var(--pine)' }}>
              Download the PDF →
            </a>
          </div>
        </div>
      </section>

      {/* ── Partners & supporters ────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.22em] font-body mb-3" style={{ color: 'var(--sage)' }}>
              Trusted network
            </p>
            <h2 className="font-display font-bold mb-3"
              style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              Partners &amp; collaborators
            </h2>
            <p className="font-body text-base max-w-xl" style={{ color: 'var(--muted)' }}>
              A growing network of aligned organisations and initiatives building toward an Open Earth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {partners.map((partner, i) => (
              <div key={i} className="glass-card p-7 flex flex-col gap-5">
                {/* Logo — clean, no box */}
                <div className="h-16 flex items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.logo!}
                    alt={partner.name}
                    style={{
                      maxHeight: partner.name === 'Project Weave' ? '72px' : '56px',
                      maxWidth: partner.name === 'Project Weave' ? '100%' : '85%',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1" style={{ color: 'var(--ink)', fontSize: '1rem', lineHeight: 1.3 }}>
                    {partner.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.12em] font-body" style={{ color: 'var(--gold)' }}>
                    {partner.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects teaser ──────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: 'var(--sage)' }}>
                What we&apos;re building
              </p>
              <h2 className="font-display font-bold"
                style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
                Our active projects
              </h2>
            </div>
            <Link href="/projects" className="font-body font-medium text-sm transition-opacity hover:opacity-60"
              style={{ color: 'var(--pine)' }}>
              View all projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                tag: 'Within Gaia Commons',
                title: 'GaiaOps',
                href: '/projects',
                image: '/projects/gaiaops.png',
                fit: 'cover' as const,
                bg: 'transparent',
                desc: 'The operational platform that lets teams, working groups, and communities within Gaia Commons coordinate as one living system.',
              },
              {
                tag: 'Within Gaia Commons',
                title: 'GaiaOS',
                href: '/projects',
                image: '/projects/gaiaos.png',
                fit: 'cover' as const,
                bg: 'transparent',
                desc: 'The operating system layer of Gaia Commons — shared infrastructure, protocols, and interfaces for the broader commons network.',
              },
              {
                tag: 'Open Infrastructure',
                title: 'Open Peer Access License (OPAL)',
                href: '/projects',
                image: '/projects/opal.png',
                fit: 'contain' as const,
                bg: '#ffffff',
                desc: 'A novel licensing framework enabling commons-based peer production while protecting open contributions from proprietary capture.',
              },
              {
                tag: 'Open Infrastructure',
                title: 'PASEOs',
                href: '/projects',
                image: '/projects/paseo.png',
                fit: 'contain' as const,
                bg: '#ffffff',
                desc: 'Participatory Architecture for Shared Economic Organisations — governance and economic tooling for distributed, self-organising communities.',
              },
            ].map((proj, i) => (
              <Link key={i} href={proj.href} className="glass-card block no-underline group overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  style={{ width: '100%', height: '200px', objectFit: proj.fit, display: 'block', borderRadius: '16px 16px 0 0', background: proj.bg, padding: proj.fit === 'contain' ? '12px' : '0' }}
                />
                <div className="p-6">
                  <span className="text-xs uppercase tracking-widest font-body px-2.5 py-1 rounded-full mb-4 inline-block"
                    style={{ background: 'rgba(30,70,52,0.1)', color: 'var(--forest)' }}>
                    {proj.tag}
                  </span>
                  <h3 className="font-display font-semibold text-lg mb-2 group-hover:opacity-75 transition-opacity"
                    style={{ color: 'var(--ink)' }}>
                    {proj.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                    {proj.desc}
                  </p>
                  <span className="text-sm font-body font-medium" style={{ color: 'var(--pine)' }}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <CtaBand
        headline="Partner with us"
        text="The Open Systems Foundation invites generous benefactors and aligned partners to help catalyse the paradigm shift toward an Open Earth."
        buttonText="Partner with us"
        buttonLink="/contact"
        secondaryButtonText="Support the mission"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
