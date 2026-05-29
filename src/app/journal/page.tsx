import Hero from '@/components/Hero';
import Link from 'next/link';
import SubscribeForm from '@/components/SubscribeForm';

export const metadata = { title: 'Journal — Open Systems Foundation' };

const featured = {
  date: 'October 24, 2025',
  category: 'Research',
  title: 'Introducing the Gaia Protocol: A New Standard for Ecological Verification',
  excerpt: 'Today we are releasing the first public draft of the Gaia Protocol — an open standard designed to make ecological state verifiable, transparent, and computable at any scale.',
  href: '#',
  image: '/journal/gaia-protocol.png',
};

const posts = [
  {
    date: 'October 12, 2025',
    category: 'Transparency',
    title: 'Q3 2025 Foundation Transparency Report',
    excerpt: 'A detailed breakdown of our grants, expenditures, and organizational progress over the last quarter.',
    href: '#',
    image: '/journal/transparency-q3.png',
  },
  {
    date: 'September 28, 2025',
    category: 'Events',
    title: 'Open Earth Summit 2025: Key Takeaways',
    excerpt: 'Reflections and recordings from our annual gathering of builders, scientists, and stewards from 40 countries.',
    href: '#',
    image: '/journal/summit-2025.png',
  },
  {
    date: 'September 15, 2025',
    category: 'Research',
    title: 'Decentralizing Sensor Networks for Forest Monitoring',
    excerpt: 'An exploration of low-cost, open-hardware approaches to tracking biodiversity and canopy health in remote areas.',
    href: '#',
    image: '/journal/sensor-networks.png',
  },
  {
    date: 'August 30, 2025',
    category: 'Protocol',
    title: 'Gaia Commons Data Schema v0.3 Released',
    excerpt: 'What changed, what we learned from the first implementation partners, and where the schema is headed.',
    href: '#',
    image: '/journal/data-schema.png',
  },
  {
    date: 'August 14, 2025',
    category: 'Community',
    title: 'Building the Open Earth Community: A Year in Review',
    excerpt: 'From six founding members to a global network spanning 40+ countries — how our community grew and what we learned.',
    href: '#',
    image: '/journal/community-year.png',
  },
  {
    date: 'July 22, 2025',
    category: 'Policy',
    title: 'Why Open Standards Are Essential for Carbon Markets',
    excerpt: 'The voluntary carbon market is growing fast. Without open, verifiable standards it will remain vulnerable to greenwashing.',
    href: '#',
    image: '/journal/carbon-standards.png',
  },
];

const categoryColors: Record<string, string> = {
  Research: 'rgba(30,70,52,0.12)',
  Transparency: 'rgba(183,162,75,0.13)',
  Events: 'rgba(110,139,61,0.12)',
  Protocol: 'rgba(44,94,71,0.12)',
  Community: 'rgba(194,203,82,0.14)',
  Policy: 'rgba(30,70,52,0.1)',
};

export default function Journal() {
  return (
    <div>
      <Hero
        kicker="The OSF Journal"
        headline="Field notes from an Open Earth."
        subhead="Insights, updates, and research from the Open Systems Foundation and our wider ecosystem."
      />

      {/* Featured post */}
      <section className="py-24 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-8" style={{ color: 'var(--sage)' }}>
            Featured
          </p>
          <Link href={featured.href} className="block group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Featured image */}
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-xs uppercase tracking-widest font-body px-2.5 py-1 rounded-full"
                    style={{ background: categoryColors[featured.category], color: 'var(--forest)' }}
                  >
                    {featured.category}
                  </span>
                  <span className="text-xs font-body" style={{ color: 'var(--muted)' }}>{featured.date}</span>
                </div>
                <h2
                  className="font-display font-bold leading-tight mb-5 group-hover:opacity-75 transition-opacity"
                  style={{ color: 'var(--ink)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
                >
                  {featured.title}
                </h2>
                <p className="font-body text-base leading-relaxed mb-7" style={{ color: 'var(--muted)' }}>
                  {featured.excerpt}
                </p>
                <span className="font-body font-medium text-sm" style={{ color: 'var(--pine)' }}>
                  Read full article →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Recent posts */}
      <section className="py-24 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-10" style={{ color: 'var(--sage)' }}>
            Recent updates
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Link key={i} href={post.href} className="glass-card p-7 flex flex-col group no-underline">
                {/* Post image */}
                <div className="aspect-[16/9] rounded-xl mb-5 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs uppercase tracking-widest font-body px-2 py-0.5 rounded-full"
                    style={{ background: categoryColors[post.category] ?? 'rgba(30,70,52,0.1)', color: 'var(--forest)' }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs font-body" style={{ color: 'var(--muted)' }}>{post.date}</span>
                </div>
                <h3
                  className="font-display font-semibold text-base leading-snug mb-3 flex-grow group-hover:opacity-75 transition-opacity"
                  style={{ color: 'var(--ink)' }}
                >
                  {post.title}
                </h3>
                <p className="font-body text-xs leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                  {post.excerpt}
                </p>
                <span className="font-body text-xs font-medium" style={{ color: 'var(--pine)' }}>
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6" style={{ background: '#1E4634' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: 'rgba(194,203,82,0.8)' }}>
            Stay connected
          </p>
          <h2 className="font-display font-bold mb-5" style={{ color: '#F5F1E6', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Updates from the commons
          </h2>
          <p className="font-body text-base font-light leading-relaxed mb-10" style={{ color: 'rgba(245,241,230,0.65)' }}>
            Occasional dispatches on research, protocol updates, events, and what we are building.
          </p>
          <SubscribeForm variant="panel" source="journal" />
          <p className="text-xs font-body mt-5" style={{ color: 'rgba(245,241,230,0.35)' }}>
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </section>
    </div>
  );
}
