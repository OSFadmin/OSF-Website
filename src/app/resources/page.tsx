import Hero from '@/components/Hero';
import ResourceCard from '@/components/ResourceCard';

export const metadata = { title: 'Resources — Open Systems Foundation' };

export default function Resources() {
  return (
    <div>
      <Hero
        kicker="Resources & documentation"
        headline="An overview of our publicly available resources."
        subhead="Freely available papers, frameworks, and assets — free to read, download, and (where noted) fork."
      />

      {/* Vision & culture */}
      <section className="py-24 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: 'var(--sage)' }}>
              Vision & culture
            </p>
            <h2 className="font-display font-bold" style={{ color: 'var(--ink)', fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)' }}>
              Foundational documents
            </h2>
          </div>
          <div className="space-y-4">
            <ResourceCard
              title="The Open Earth Manifesto"
              description="The founding vision — laying the groundwork for a collaborative global ecosystem. Download the full document for offline reading and sharing."
              format="PDF"
              url="/downloads/Open_Earth_Manifesto_v1.11.pdf"
              download
            />
            <ResourceCard
              title="Open Earth Culture"
              description="The Open Philosophy in action — a freely forkable cultural commons asset. Download the full document for offline reading, sharing, and adaptation."
              format="PDF"
              url="/downloads/Open_Earth_Culture_V1.pdf"
              download
            />
          </div>
        </div>
      </section>

      {/* Gaia Commons & GaiaOps */}
      <section className="py-24 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: 'var(--sage)' }}>
              Initiatives
            </p>
            <h2 className="font-display font-bold" style={{ color: 'var(--ink)', fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)' }}>
              Gaia Commons & GaiaOps
            </h2>
          </div>
          <div className="space-y-4">
            <ResourceCard
              title="Gaia Commons — Overview"
              description="Introduction to the flagship initiative and its purpose as a living network for regenerative planetary stewardship."
              format="Web"
              url="https://gaiacommons.net/#/en/ecosystem"
            />
            <ResourceCard
              title="GaiaOps — Public Overview"
              description="How the operational platform makes the commons buildout effective — coordination infrastructure built for the regenerative movement."
              format="PDF"
              url="/downloads/GaiaOps_Public_Overview.pdf"
              download
            />
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-24 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: 'var(--sage)' }}>
              Governance
            </p>
            <h2 className="font-display font-bold" style={{ color: 'var(--ink)', fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)' }}>
              Foundation documents
            </h2>
          </div>
          <div className="space-y-4">
            <ResourceCard
              title="Articles of Association"
              description="The legal founding document of the Open Systems Foundation — our deed and constitutional framework (Liechtenstein PGR)."
              format="PDF"
              url="#"
            />
            <ResourceCard
              title="Strategic Drivers"
              description="The five strategic drivers — and 25 sub-drivers — that guide how the Foundation catalyzes change toward an Open Earth."
              format="Web"
              url="/strategic-drivers"
            />
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="py-16 px-6" style={{ background: '#1E4634' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: 'rgba(194,203,82,0.8)' }}>
              How to use these resources
            </p>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.72)' }}>
              Many of these are living commons assets. Where a document invites it, you are welcome to use, adapt, and submit improved or forked versions to the Foundation for the ongoing evolution of the shared commons. Only charitable, vision, and operational documents are listed here.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: 'rgba(194,203,82,0.8)' }}>
              Licensing
            </p>
            <p className="font-body text-sm leading-relaxed mb-3" style={{ color: 'rgba(245,241,230,0.72)' }}>
              All written content is licensed under <strong className="text-cream">Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)</strong>.
            </p>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.72)' }}>
              All software and code is licensed under the <strong className="text-cream">MIT License</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
