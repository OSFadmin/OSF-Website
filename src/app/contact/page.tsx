'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';

const paths = [
  {
    title: 'General Enquiries',
    desc: 'Anything and everything — press, speaking requests, general questions.',
    email: 'contact@opensystems.foundation',
  },
  {
    title: 'Partnerships & Support',
    desc: 'Benefactors, aligned organisations, and funders of the mission.',
    email: 'impact@opensystems.foundation',
  },
  {
    title: 'Projects',
    desc: 'Proposing or joining an initiative within the Open Earth ecosystem.',
    email: 'impact@opensystems.foundation',
  },
];

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '10px',
  border: '1px solid var(--border)',
  background: 'rgba(250,247,239,0.9)',
  color: 'var(--foreground)',
  fontFamily: 'var(--font-inter), sans-serif',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.2s ease',
};

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', organisation: '', reason: 'General', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [feedback, setFeedback] = useState('');

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'loading') return;
    if (!form.name.trim() || !form.message.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus('error');
      setFeedback('Please provide your name, a valid email, and a message.');
      return;
    }
    setStatus('loading');
    setFeedback('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus('success');
        setFeedback(data.message ?? 'Thank you — your message has been sent.');
        setForm({ name: '', email: '', organisation: '', reason: 'General', message: '' });
      } else {
        setStatus('error');
        setFeedback(data.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setFeedback('Network error. Please email contact@opensystems.foundation directly.');
    }
  }

  return (
    <div>
      <Hero
        kicker="Get in touch"
        headline="Let's build together."
        subhead="Whether you want to support the mission, propose a project, or simply learn more — we'd love to hear from you."
      />

      {/* Contact paths */}
      <section className="py-24 px-6" style={{ background: 'var(--bone)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: paths */}
          <div className="space-y-4">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: 'var(--sage)' }}>
                Reach us directly
              </p>
              <h2 className="font-display font-bold" style={{ color: 'var(--ink)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                How can we help?
              </h2>
            </div>
            {paths.map((path, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--ink)' }}>
                  {path.title}
                </h3>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                  {path.desc}
                </p>
                <a
                  href={`mailto:${path.email}`}
                  className="font-body text-sm font-medium transition-opacity hover:opacity-60"
                  style={{ color: 'var(--pine)' }}
                >
                  {path.email}
                </a>
              </div>
            ))}
          </div>

          {/* Right: form */}
          <div className="lg:col-span-2 glass-card p-10">
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-3" style={{ color: 'var(--sage)' }}>
              Or send a message
            </p>
            <h2 className="font-display font-bold mb-8" style={{ color: 'var(--ink)', fontSize: 'clamp(1.4rem, 2vw, 1.8rem)' }}>
              We read every message
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-body mb-2" style={{ color: 'var(--muted)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={update('name')}
                    style={inputStyle}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--pine)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-body mb-2" style={{ color: 'var(--muted)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    style={inputStyle}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--pine)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-body mb-2" style={{ color: 'var(--muted)' }}>
                  Organisation
                  <span className="ml-1 normal-case not-uppercase" style={{ color: 'var(--border)' }}>(optional)</span>
                </label>
                <input
                  type="text"
                  value={form.organisation}
                  onChange={update('organisation')}
                  style={inputStyle}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--pine)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-body mb-2" style={{ color: 'var(--muted)' }}>
                  Reason for contact
                </label>
                <select
                  value={form.reason}
                  onChange={update('reason')}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--pine)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <option>General</option>
                  <option>Partnership &amp; Support</option>
                  <option>Project</option>
                  <option>Press</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-body mb-2" style={{ color: 'var(--muted)' }}>
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={update('message')}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--pine)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide transition-all hover:shadow-lg hover:scale-[1.02] disabled:opacity-60"
                style={{ background: 'var(--pine)', color: '#F5F1E6' }}
              >
                {status === 'loading' ? 'Sending…' : status === 'success' ? 'Sent ✓' : 'Send message →'}
              </button>
              {feedback && (
                <p
                  role="status"
                  className="font-body text-sm"
                  style={{ color: status === 'error' ? '#B4542F' : 'var(--forest)' }}
                >
                  {feedback}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Support the mission */}
      <section className="py-24 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-body mb-4" style={{ color: 'var(--sage)' }}>
            Support the mission
          </p>
          <h2 className="font-display font-bold mb-6" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
            Partner with the Foundation
          </h2>
          <p className="font-body text-base leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            The Open Systems Foundation invites generous benefactors in service to a brighter future to partner up and contribute to the paradigm shift toward an Open Earth.
          </p>
          <a
            href="mailto:impact@opensystems.foundation"
            className="inline-flex items-center px-9 py-3.5 rounded-full font-body font-medium text-sm transition-all hover:shadow-md"
            style={{ border: '1.5px solid var(--pine)', color: 'var(--pine)', background: 'rgba(30,70,52,0.05)' }}
          >
            Get in touch →
          </a>
        </div>
      </section>
    </div>
  );
}
