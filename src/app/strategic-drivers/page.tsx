import Hero from '@/components/Hero';
import CtaBand from '@/components/CtaBand';

export const metadata = { title: 'Strategic Drivers — Open Systems Foundation' };

const strategyStatement =
  "We create and deploy Open Systems infrastructure — technological, social, physical and organizational — that enables the Open Earth movement to unite and spread organically. Through these foundational systems, we empower peers, communities, organizations, and initiatives to learn together, collaborate effectively and share resources intentionally, catalyzing the shift from competitive to collaborative models. All developments are contributed to the Gaia Commons, held in trust for the benefit of all participants in the Open Earth ecosystem.";

const intro =
  "The Open Systems Foundation's work is guided by five strategic drivers that represent our core mechanisms for catalyzing change. These drivers shape how we advance our focus areas and implement our strategy, ensuring our efforts are both comprehensive and coherent. They follow a natural progression from foundational knowledge to systemic transformation through the following pattern: learn → create → connect → resource → scale. Each driver addresses a distinct yet interconnected aspect of the transformation needed to manifest an Open Earth, and holds 5 sub-drivers that bring the strategy in action.";

const intro2 =
  "Underlying all five strategic drivers is our commitment to Integrated Intelligence — ensuring that as we develop technological capabilities, enhance creative capacity, and build networks, we maintain conscious human agency while leveraging AI to augment rather than replace human wisdom and authentic expression.";

const drivers = [
  {
    code: 'SD1',
    title: 'Knowledge Integration',
    tagline: 'Learning to Transform Together',
    desc: "Systematically unify and make accessible humanity's collective wisdom and innovations through an expanding open knowledge commons that enables effective implementation of solutions at any scale.",
    subs: [
      ['SD1.1 — Knowledge Unity', 'Unify existing knowledge bases across multiple formats (text, video, interactive etc.) into a holistic solutions that easily enable retrieval and contextual matching of information.'],
      ['SD1.2 — Knowledge Capture', 'Develop systems for capturing and sharing living expertise and best practices spread across contexts and cultures.'],
      ['SD1.3 — Knowledge Diversity', 'Build bridges between traditional wisdom and modern innovations to create comprehensive perspectives.'],
      ['SD1.4 — Knowledge Development', 'Support creation of new open educational resources and learning pathways that expand collective wisdom.'],
      ['SD1.5 — Knowledge Deployment', 'Enable rapid knowledge transfer and local application for effective implementation in diverse contexts.'],
    ],
  },
  {
    code: 'SD2',
    title: 'Creative Acceleration',
    tagline: 'Amplifying Creative Capacity',
    desc: "Amplify humanity's capacity to manifest positive transformation by developing advanced tools and frameworks that enhance both individual and collective creative capabilities while connecting complementary efforts.",
    subs: [
      ['SD2.1 — Creative Tools', 'Deploy innovative platforms that amplify individual creative potential, clarify and align creative focus, and empower the effective deployment of solutions.'],
      ['SD2.2 — Creative Methodology', 'Design systematic approaches for turning ideas into implementable solutions through proven frameworks and processes.'],
      ['SD2.3 — Creative Organization', 'Pioneer organizational frameworks that enable cross-pollination between complimentary projects, interconnecting creative efforts, and enable efficient coordination of initiatives at scale through integrated systems and strategies.'],
      ['SD2.4 — Creative Modules', 'Develop modular, building-block processes, products and components that can be easily repurposed, customized, and deployed into a variety of contexts leading to rapid creative progress.'],
      ['SD2.5 — Creative Environments', 'Support physical and digital environments that enable rapid prototyping, testing, and refinement of Open Earth Innovations.'],
    ],
  },
  {
    code: 'SD3',
    title: 'Network Cultivation',
    tagline: 'Connecting aligned efforts',
    desc: 'Build and strengthen interconnected communities of practice that enable meaningful collaboration across sectors, scales, and geographies while maintaining coherent alignment with Open Earth principles.',
    subs: [
      ['SD3.1 — Network Culture', 'Document and live shared values and cultural practices that enable authentic collaboration, while developing systems for maintaining network alignment, resolving tensions, and strengthening bonds between diverse participants.'],
      ['SD3.2 — Network Synergy', 'Develop systems for matching people, complementary talents, projects and resources into collaborative configurations that accelerate impact and drive measurable progress.'],
      ['SD3.3 — Network Governance', 'Develop frameworks for network functioning that enable participatory decision-making, collective stewardship, and unified progress.'],
      ['SD3.4 — Network Weaving', 'Create both digital and physical spaces that enable effective collaboration and co-creation between aligned people and initiatives.'],
      ['SD3.5 — Network Growth', 'Support emergence of local nodes, regional hubs, digital communities and specialized clusters that strengthen the overall ecosystem.'],
    ],
  },
  {
    code: 'SD4',
    title: 'Commons Restoration',
    tagline: 'Regenerating shared abundance',
    desc: 'Design and implement intelligent systems for restoring and stewarding the whole commons — including physical, digital, cultural, and other shared resources — while developing frameworks that enable collaborative stewardship and equitable access for all participants.',
    subs: [
      ['SD4.1 — Commons Mapping', 'Create living maps of the whole commons that represent current states, identify restoration needs, and enable clear understanding of development opportunities across all scales.'],
      ['SD4.2 — Commons Development', 'Support initiatives that restore, enhance and expand the whole commons through unifying frameworks that interweave aligned efforts, accelerating innovative solutions, and generating new forms of shared value.'],
      ['SD4.3 — Commons Management', 'Enable seamless integration and flow within the whole commons through unified systems that leverage network intelligence, distributed action and legal infrastructure to sustain and grow the commons.'],
      ['SD4.4 — Commons Stewardship', 'Create frameworks for collaborative governance that empower contributors while enabling effective distribution of responsibility and value across the whole commons.'],
      ['SD4.5 — Commons Access', 'Develop systems for ensuring equitable access to shared resources through protocols that maintain regenerative use, honor stewardship rights, and enable innovative development of aggregate solutions while ensuring fair attribution and value distribution to participants.'],
    ],
  },
  {
    code: 'SD5',
    title: 'Ecosystem Evolution',
    tagline: 'Scaling systemic transformation',
    desc: 'Cultivate a self-sustaining and expanding Open Earth ecosystem that grows organically through the value it generates, creating pathways for increasing participation while enabling coordinated evolution toward planetary thriving.',
    subs: [
      ['SD5.1 — Ecosystem Foundation', 'Design and deploy foundational systems and infrastructure that integrate collective knowledge, creative capacity, networks and commons resources to enable coherent yet autonomous development across all scales.'],
      ['SD5.2 — Ecosystem Growth', 'Enable smooth expansion through clear entry points and progression paths that welcome aligned participation at any level while fostering deeper engagement over time.'],
      ['SD5.3 — Ecosystem Exchange', "Develop value exchange systems that reward diverse forms of contribution while fostering prosperity throughout the ecosystem's interconnected layers."],
      ['SD5.4 — Ecosystem Integration', 'Create frameworks for synergistic interactions between inner ecosystem activities and outside reality, that extend the Open Earth values while inviting participation.'],
      ['SD5.5 — Ecosystem Evolution', 'Support ongoing emergence of economic and social patterns aligned with Open Earth principles through active monitoring and strategic stimulus of promising developments.'],
    ],
  },
];

const livingDrivers = [
  "The 5 strategic drivers and their respective sub-drivers intend to capture the full strategic scope of the Open Systems Foundation, based on the visibility and knowledge available to us today. We recognize that the evolution of these drivers to increasingly advance us towards the co-creation of the Open Earth is possible. Though we also know that it is important to safeguard the integrity of the drivers, which has led us to design a diligent process requiring review and approval by the Foundation Guardians (see governance section 8) that ensure ongoing alignment should any change be proposed.",
  "These drivers find their true essence as “living” drivers in the way they become implemented within Open Earth projects. Every project supported by the foundation must explicitly contribute to the progress towards at least one of these drivers, though it is encouraged to pursue multiple where possible. It is through this strategic pursuit that the tangible solutions to address the 5 main drivers and 25 sub-drivers get brought into form. Therefore, the drivers can be understood as guiding directions, that all lead towards the creation of an Open Earth, though each address different focus areas needed to get there. To concretize them further, we look at the Strategic Focus.",
];

export default function StrategicDrivers() {
  return (
    <div>
      <Hero
        kicker="Strategy"
        headline="Strategic Drivers"
        subhead="Five core mechanisms for catalyzing change — learn → create → connect → resource → scale — each holding five sub-drivers that bring the strategy into action."
      />

      {/* Strategy statement */}
      <section className="py-20 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-5" style={{ color: 'var(--sage)' }}>
            Strategy statement
          </p>
          <blockquote
            className="font-display font-semibold italic leading-snug"
            style={{ color: 'var(--ink)', fontSize: 'clamp(1.25rem, 2.4vw, 1.7rem)', lineHeight: 1.4 }}
          >
            {strategyStatement}
          </blockquote>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-8 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-4xl mx-auto space-y-5">
          <p className="font-body text-base leading-relaxed" style={{ color: 'var(--muted)' }}>{intro}</p>
          <p className="font-body text-base leading-relaxed" style={{ color: 'var(--muted)' }}>{intro2}</p>
        </div>
      </section>

      {/* The five drivers */}
      <section className="py-20 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-4xl mx-auto space-y-8">
          {drivers.map((d) => (
            <div key={d.code} className="glass-card p-8 md:p-10">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-body font-bold text-sm" style={{ color: 'var(--gold)' }}>{d.code}</span>
                <h2 className="font-display font-bold" style={{ color: 'var(--ink)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)' }}>
                  {d.title}
                </h2>
              </div>
              <p className="font-body text-sm uppercase tracking-[0.14em] mb-5" style={{ color: 'var(--sage)' }}>
                {d.tagline}
              </p>
              <p className="font-body text-base leading-relaxed mb-7" style={{ color: 'var(--muted)' }}>
                {d.desc}
              </p>
              <p className="text-xs uppercase tracking-[0.15em] font-body mb-4" style={{ color: 'var(--sage)' }}>
                Strategy in action
              </p>
              <ul className="space-y-4">
                {d.subs.map(([name, text]) => (
                  <li key={name} className="flex gap-3">
                    <span className="shrink-0 mt-1 text-xs" style={{ color: 'var(--gold)' }}>◆</span>
                    <span className="font-body text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                      <strong style={{ color: 'var(--ink)' }}>{name}:</strong> {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Living drivers */}
      <section className="py-20 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold mb-6" style={{ color: 'var(--ink)', fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)' }}>
            Living Drivers
          </h2>
          <div className="space-y-5">
            {livingDrivers.map((p, i) => (
              <p key={i} className="font-body text-base leading-relaxed" style={{ color: 'var(--muted)' }}>{p}</p>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="/downloads/Strategic_Drivers.pdf"
              download
              className="inline-flex items-center px-7 py-3 rounded-full font-body font-medium text-sm transition-all hover:shadow-md"
              style={{ background: 'var(--pine)', color: '#F5F1E6' }}
            >
              Download the Strategic Drivers (PDF) ↓
            </a>
          </div>
        </div>
      </section>

      <CtaBand
        headline="Building toward an Open Earth?"
        text="Every initiative we support advances at least one of these drivers. If your work aligns, we would love to hear from you."
        buttonText="Get in touch"
        buttonLink="/contact"
        secondaryButtonText="Explore our projects →"
        secondaryButtonLink="/projects"
      />
    </div>
  );
}
