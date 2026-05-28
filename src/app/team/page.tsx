import Hero from '@/components/Hero';
import PersonCard from '@/components/PersonCard';
import CtaBand from '@/components/CtaBand';
import PhotoBlock from '@/components/PhotoBlock';

export const metadata = { title: 'Team — Open Systems Foundation' };

const coreTeam = [
  {
    name: 'Oliver Clarity',
    role: 'Founder · Regenerative Infrastructure Design',
    bio: 'Systems architect designing integrated frameworks for global regeneration; founder of the Foundation and lead of its systems architecture and on-the-ground implementation.',
  },
  {
    name: 'Silvana Raveane',
    role: 'Systems Economics & Governance',
    bio: 'Designs the governance, value-flow, and economic models that make commons structures operable; strategy across health tech, construction, and philanthropy.',
  },
  {
    name: 'Rory Tews',
    role: 'Commons Finance Architect',
    bio: 'Leads the commons\' financial architecture; pioneer of impact-linked finance with deep experience structuring innovative finance and fund structures.',
  },
  {
    name: 'Kara Stonehouse',
    role: 'Meshwork Strategy & Facilitation',
    bio: 'Focused on strategy and facilitation across the foundation\'s growing network of aligned initiatives and partners.',
  },
];

const council = [
  {
    name: 'Oliver Clarity',
    role: 'Strategic Member (Founder)',
    desc: 'Founder of the Foundation and lead of systems architecture and on-the-ground implementation of the Open Earth vision.',
  },
  {
    name: 'Silvana Raveane',
    role: 'Strategic Member',
    desc: 'Governs the value-flow and economic models that underpin the Foundation\'s commons structures and partnerships.',
  },
  {
    name: 'Rory Tews',
    role: 'Strategic Member',
    desc: 'Oversees the financial architecture of the Foundation\'s commons work and impact-linked initiatives.',
  },
  {
    name: 'CorPa Trust AG',
    role: 'Corporate Legal Director (Liechtenstein)',
    desc: 'Provides corporate legal direction and ensures the Foundation\'s governance meets its obligations under Liechtenstein law.',
  },
];

const advisors = [
  {
    name: 'Chad Lefèvre',
    contribution: 'Anticipatory design & collaborative design lineage (DesignShop® methodology).',
    org: 'DesignShop®',
  },
  {
    name: 'Franz-Josef Allmayr',
    contribution: 'Regenerative ecosystem integration and Liechtenstein relations.',
    org: 'Advisor',
  },
  {
    name: 'Buckminster Fuller Institute',
    contribution: 'Partnership advancing comprehensive, anticipatory design science.',
    org: 'Partner',
  },
];

export default function Team() {
  return (
    <div>
      <Hero
        kicker="The people"
        headline="The people behind the Foundation."
        subhead="An expert-driven team and a growing circle of advisors, organised around the Foundation's areas of work."
      />

      {/* Core team */}
      <section className="py-24 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: 'var(--sage)' }}>
              Core team
            </p>
            <h2 className="font-display font-bold mb-3" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              The operational heart
            </h2>
            <p className="font-body text-base max-w-xl" style={{ color: 'var(--muted)' }}>
              Responsible for day-to-day coordination, strategy, research, and community stewardship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreTeam.map((person, i) => (
              <PersonCard key={i} {...person} />
            ))}
          </div>
        </div>
      </section>

      {/* Team photo strip */}
      <section className="px-6 md:px-10" style={{ background: 'var(--bone)', paddingBottom: '0' }}>
        <div className="max-w-7xl mx-auto">
          <PhotoBlock
            label="Open Systems Foundation team · Field work & collaboration"
            variant="panoramic"
            style={{ borderRadius: '18px' }}
          />
        </div>
      </section>

      {/* Foundation council */}
      <section className="py-24 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: 'var(--sage)' }}>
              Foundation council
            </p>
            <h2 className="font-display font-bold mb-3" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              Strategic governance
            </h2>
            <p className="font-body text-base max-w-xl" style={{ color: 'var(--muted)' }}>
              The Foundation Council is the Foundation&apos;s supreme governing body, comprising strategic members and a corporate legal director.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {council.map((member, i) => (
              <div key={i} className="glass-card p-8">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-5 font-display font-semibold text-sm"
                  style={{ background: 'rgba(30,70,52,0.1)', color: 'var(--pine)', border: '1.5px solid rgba(30,70,52,0.15)' }}
                >
                  {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <h3 className="font-display font-semibold text-base mb-1" style={{ color: 'var(--ink)', lineHeight: 1.3 }}>
                  {member.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.12em] font-body mb-4" style={{ color: 'var(--gold)' }}>
                  {member.role}
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-24 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: 'var(--sage)' }}>
                Advisors & partners
              </p>
              <h2 className="font-display font-bold mb-3" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
                Our collaborators
              </h2>
              <p className="font-body text-base max-w-xl" style={{ color: 'var(--muted)' }}>
                The advisory circle is growing. We work with leading thinkers across design, finance, ecology, and governance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((advisor, i) => (
              <div key={i} className="glass-card p-7 flex flex-col gap-4">
                {/* Logo/avatar placeholder */}
                <div
                  className="w-full rounded-xl flex items-center justify-center"
                  style={{
                    height: '80px',
                    background: 'rgba(30,70,52,0.06)',
                    border: '1.5px dashed rgba(30,70,52,0.18)',
                  }}
                >
                  <span
                    className="font-body text-xs uppercase tracking-wider"
                    style={{ color: 'rgba(30,70,52,0.35)', letterSpacing: '0.1em' }}
                  >
                    {advisor.org} · Logo
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1" style={{ color: 'var(--ink)', fontSize: '1.05rem' }}>
                    {advisor.name}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {advisor.contribution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Want to work with us?"
        text="We are always looking for researchers, engineers, and ecosystem builders who share our vision."
        buttonText="Get in touch"
        buttonLink="/contact"
      />
    </div>
  );
}
