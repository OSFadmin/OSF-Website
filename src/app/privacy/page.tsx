import Hero from '@/components/Hero';

export const metadata = { title: 'Privacy — Open Systems Foundation' };

const lastUpdated = 'May 2026';

const sections = [
  {
    heading: 'Who we are',
    body: [
      'The Open Systems Foundation ("the Foundation", "we", "us") is a charitable foundation registered in Vaduz, Liechtenstein under the Liechtenstein Persons and Companies Act (PGR). This policy explains how we handle personal data collected through this website and our related activities.',
      'For any privacy-related question or to exercise your rights, contact us at privacy@opensystems.foundation.',
    ],
  },
  {
    heading: 'What we collect',
    body: [
      'We aim to collect as little personal data as possible. Depending on how you interact with us, we may process: contact details you voluntarily provide (such as your name and email address when you write to us or subscribe to updates); correspondence you send to us; and limited technical data automatically generated when you visit the site (such as IP address, browser type, and pages viewed).',
    ],
  },
  {
    heading: 'How we use it',
    body: [
      'We use personal data only for clearly defined purposes: to respond to your enquiries, to send you updates you have requested, to operate and secure the website, and to meet our legal and governance obligations as a Liechtenstein charitable foundation.',
      'We do not sell personal data, and we do not use it for automated decision-making that produces legal effects.',
    ],
  },
  {
    heading: 'Legal basis',
    body: [
      'Where the GDPR or comparable law applies, we process personal data on the basis of your consent (which you may withdraw at any time), our legitimate interest in operating the Foundation and communicating about our work, and our need to comply with legal obligations.',
    ],
  },
  {
    heading: 'Sharing & retention',
    body: [
      'We share personal data only with service providers who help us operate the website and our communications, and only under appropriate confidentiality and data-protection terms. We may disclose data where required by law.',
      'We retain personal data only for as long as necessary for the purposes described above or as required by law, after which it is deleted or anonymised.',
    ],
  },
  {
    heading: 'Your rights',
    body: [
      'Subject to applicable law, you may request access to the personal data we hold about you, ask us to correct or delete it, object to or restrict its processing, and request portability. To make a request, email privacy@opensystems.foundation. You also have the right to lodge a complaint with your local data-protection authority.',
    ],
  },
  {
    heading: 'Changes to this policy',
    body: [
      'We may update this policy as our activities and applicable law evolve. Material changes will be reflected on this page with a revised "last updated" date.',
    ],
  },
];

export default function Privacy() {
  return (
    <div>
      <Hero
        kicker="Privacy"
        headline="How we handle your data."
        subhead="The Open Systems Foundation is committed to data minimalism, transparency, and the rights of the people who interact with us."
      />

      <section className="py-24 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-12" style={{ color: 'var(--sage)' }}>
            Last updated · {lastUpdated}
          </p>

          <div className="space-y-12">
            {sections.map((s, i) => (
              <div key={i}>
                <h2
                  className="font-display font-bold mb-4"
                  style={{ color: 'var(--ink)', fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)' }}
                >
                  {s.heading}
                </h2>
                <div className="space-y-4">
                  {s.body.map((p, j) => (
                    <p key={j} className="font-body text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p
            className="font-body text-sm leading-relaxed mt-16 pt-8"
            style={{ color: 'var(--muted)', borderTop: '1px solid var(--border)' }}
          >
            This page is a good-faith template and not legal advice. Before public launch it
            should be reviewed and finalised by qualified counsel against the Foundation&apos;s
            actual data-processing practices.
          </p>
        </div>
      </section>
    </div>
  );
}
