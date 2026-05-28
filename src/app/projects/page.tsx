import Hero from '@/components/Hero';
import CtaBand from '@/components/CtaBand';
import Link from 'next/link';

export const metadata = { title: 'Projects — Open Systems Foundation' };

const featured = [
  {
    tag: 'Flagship · Stewarded',
    title: 'Gaia Commons',
    image: null,
    desc: 'A living network uniting individuals and organisations to co-create and promote regenerative solutions — stewarding our planet as a living system. Gaia Commons is our flagship: the most developed expression of the Open Earth vision.',
    details: [
      'Global ecosystem for regenerative cultures and planetary wellbeing',
      'Coordinates sovereign teams without erasing their autonomy',
      'Open frameworks let projects participate while keeping their identity',
      'The Foundation stewards Gaia Commons most closely',
    ],
    href: '/gaia-commons',
    status: 'Active',
  },
  {
    tag: 'Within Gaia Commons',
    title: 'GaiaOps',
    image: '/projects/gaiaops.png',
    desc: 'GaiaOps is the operational platform within Gaia Commons — the substrate that lets teams, working groups, organisations, and communities coordinate as one living system. The regenerative movement has more aligned people, and good ideas than ever — what it lacks is coordination infrastructure built for it.',
    details: [
      'Coordination infrastructure built for the regenerative movement',
      'Working groups form, decisions are made, agreements are signed',
      'Durable output from every conversation and session',
      'Scales as the commons and the movement grow',
    ],
    href: '/resources',
    status: 'Active',
  },
];

const initiatives = [
  {
    tag: 'Foundation initiative',
    title: 'Open Earth Culture',
    desc: 'A freely forkable cultural commons — the Open Philosophy in action. Five applied, living pillars that any community or organisation can adopt, adapt, and improve.',
    href: '/culture',
  },
  {
    tag: 'Foundation initiative',
    title: 'CreActive Design Lab',
    desc: 'The methodology and accelerator that develops and matures new initiatives within the Open Earth ecosystem — bridging imagination and implementation.',
    href: '/about',
  },
];

const statusColors: Record<string, string> = {
  Active: 'rgba(110,139,61,0.15)',
  Beta: 'rgba(183,162,75,0.15)',
};

export default function Projects() {
  return (
    <div>
      <Hero
        kicker="Our initiatives"
        headline="The initiatives we support."
        subhead="A growing family of projects bringing an Open Earth into being — some we steward directly, others we partner with and amplify."
      />

      {/* Featured projects */}
      <section className="py-24 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: 'var(--sage)' }}>
              Featured
            </p>
            <h2 className="font-display font-bold" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              Gaia Commons & GaiaOps
            </h2>
          </div>

          <div className="space-y-8">
            {featured.map((proj, i) => (
              <div key={i} className="glass-card overflow-hidden">
                {proj.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }}
                  />
                )}
                <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className="text-xs uppercase tracking-widest font-body px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(30,70,52,0.1)', color: 'var(--forest)' }}
                      >
                        {proj.tag}
                      </span>
                      <span
                        className="text-xs uppercase tracking-widest font-body px-2.5 py-1 rounded-full"
                        style={{ background: statusColors[proj.status], color: 'var(--forest)' }}
                      >
                        {proj.status}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-4" style={{ color: 'var(--ink)' }}>
                      {proj.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
                      {proj.desc}
                    </p>
                    <Link
                      href={proj.href}
                      className="inline-flex items-center px-7 py-3 rounded-full font-body font-medium text-sm transition-all hover:shadow-md"
                      style={{ background: 'var(--pine)', color: '#F5F1E6' }}
                    >
                      Learn more →
                    </Link>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] font-body mb-5" style={{ color: 'var(--sage)' }}>
                      Key points
                    </p>
                    <ul className="space-y-3">
                      {proj.details.map((d, j) => (
                        <li key={j} className="flex gap-3">
                          <span className="shrink-0 mt-1 text-xs" style={{ color: 'var(--gold)' }}>◆</span>
                          <span className="font-body text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GaiaOS, OPAL, PASEOs grid */}
      <section className="py-24 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: 'var(--sage)' }}>
              Open infrastructure
            </p>
            <h2 className="font-display font-bold" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              More active projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: 'Within Gaia Commons',
                title: 'GaiaOS',
                image: '/projects/gaiaos.png',
                status: 'Active',
                desc: 'The operating system layer of Gaia Commons — shared infrastructure, protocols, and interfaces that underpin the entire commons network.',
              },
              {
                tag: 'Open Infrastructure',
                title: 'Open Peer Access License (OPAL)',
                image: '/projects/opal.png',
                status: 'Active',
                desc: 'A novel licensing framework enabling commons-based peer production while protecting open contributions from proprietary capture.',
              },
              {
                tag: 'Open Infrastructure',
                title: 'PASEOs',
                image: '/projects/paseo.png',
                status: 'Active',
                desc: 'Participatory Architecture for Shared Economic Organisations — governance and economic tooling for distributed, self-organising communities.',
              },
            ].map((proj, i) => (
              <div key={i} className="glass-card overflow-hidden flex flex-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs uppercase tracking-widest font-body px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(30,70,52,0.1)', color: 'var(--forest)' }}>
                      {proj.tag}
                    </span>
                    <span className="text-xs uppercase tracking-widest font-body px-2.5 py-1 rounded-full"
                      style={{ background: statusColors[proj.status], color: 'var(--forest)' }}>
                      {proj.status}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-3" style={{ color: 'var(--ink)' }}>
                    {proj.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>
                    {proj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other initiatives */}
      <section className="py-24 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: 'var(--sage)' }}>
              Foundation initiatives
            </p>
            <h2 className="font-display font-bold mb-4" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              More from the ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initiatives.map((item, i) => (
              <Link key={i} href={item.href} className="glass-card p-8 block no-underline group">
                <span
                  className="text-xs uppercase tracking-widest font-body px-2.5 py-1 rounded-full mb-5 inline-block"
                  style={{ background: 'rgba(30,70,52,0.1)', color: 'var(--forest)' }}
                >
                  {item.tag}
                </span>
                <h3 className="font-display font-semibold text-xl mb-3 group-hover:opacity-75 transition-opacity" style={{ color: 'var(--ink)' }}>
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                  {item.desc}
                </p>
                <span className="font-body text-sm font-medium" style={{ color: 'var(--pine)' }}>
                  Learn more →
                </span>
              </Link>
            ))}

            {/* Placeholder slot */}
            <div
              className="glass-card p-8 flex items-center justify-center"
              style={{ border: '1.5px dashed var(--border)', background: 'transparent' }}
            >
              <p className="font-body text-sm text-center" style={{ color: 'var(--muted)' }}>
                The project grid is designed to grow.<br />More initiatives coming.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        headline="Building something aligned?"
        text="The Foundation supports initiatives that advance an Open Earth. We'd love to hear about your project."
        buttonText="Tell us about your project"
        buttonLink="/contact"
        secondaryButtonText="Explore resources →"
        secondaryButtonLink="/resources"
      />
    </div>
  );
}
