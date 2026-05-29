'use client';

import { useState } from 'react';

type Variant = 'footer' | 'panel';
type Status = 'idle' | 'loading' | 'success' | 'error';

interface SubscribeFormProps {
  /** Visual treatment: compact footer band, or the larger journal panel. */
  variant?: Variant;
  /** Identifies where the signup came from; stored on the CRM record. */
  source?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SubscribeForm({ variant = 'panel', source }: SubscribeFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'loading') return;

    if (!EMAIL_RE.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: source ?? variant }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus('success');
        setMessage(data.message ?? 'You are subscribed. Welcome to the commons.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  const isFooter = variant === 'footer';

  return (
    <form
      onSubmit={handleSubmit}
      className={
        isFooter
          ? 'flex gap-2 w-full md:w-auto'
          : 'flex flex-col sm:flex-row gap-3 max-w-md mx-auto'
      }
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        aria-label="Email address"
        disabled={status === 'loading'}
        className={
          isFooter
            ? 'flex-1 md:w-64 px-4 py-2.5 rounded-full text-sm font-body outline-none'
            : 'flex-grow px-5 py-3 rounded-full text-sm font-body focus:outline-none'
        }
        style={{
          background: isFooter ? 'rgba(245,241,230,0.07)' : 'rgba(250,247,239,0.1)',
          border: isFooter
            ? '1px solid rgba(245,241,230,0.14)'
            : '1px solid rgba(245,241,230,0.25)',
          color: '#F5F1E6',
        }}
      />
      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className={
          isFooter
            ? 'px-6 py-2.5 rounded-full text-sm font-body font-semibold transition-all hover:scale-[1.02] disabled:opacity-60'
            : 'px-7 py-3 rounded-full font-body font-semibold text-sm transition-all hover:scale-[1.02] disabled:opacity-60'
        }
        style={{ background: '#C2CB52', color: '#1A2A23' }}
      >
        {status === 'loading' ? 'Subscribing…' : status === 'success' ? 'Subscribed ✓' : 'Subscribe'}
      </button>

      {message && (
        <p
          role="status"
          className={
            isFooter
              ? 'w-full text-xs font-body mt-2 basis-full'
              : 'w-full text-xs font-body mt-3 text-center basis-full'
          }
          style={{
            color: status === 'error' ? '#E8A87C' : 'rgba(194,203,82,0.95)',
          }}
        >
          {message}
        </p>
      )}
    </form>
  );
}
