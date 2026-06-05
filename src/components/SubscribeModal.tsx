'use client';

import { useState, useEffect } from 'react';

export default function SubscribeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-2.5 rounded-full text-sm font-body font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
        style={{ background: '#C2CB52', color: '#1A2A23' }}
      >
        Subscribe
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6"
          style={{ background: 'rgba(7,22,14,0.82)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div
            className="w-full max-w-[480px] rounded-2xl p-7 sm:p-9 relative"
            style={{
              background: '#0D1F17',
              border: '1px solid rgba(194,203,82,0.16)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.65), 0 0 0 1px rgba(245,241,230,0.04)',
            }}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-all hover:opacity-80"
              style={{ background: 'rgba(245,241,230,0.07)', color: 'rgba(245,241,230,0.55)' }}
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Kicker */}
            <p className="font-body text-xs uppercase tracking-[0.22em] mb-3" style={{ color: 'rgba(194,203,82,0.7)' }}>
              Open Systems Foundation
            </p>

            {/* Heading */}
            <h3 className="font-display font-bold mb-2 leading-snug" style={{ color: '#F5F1E6', fontSize: '1.3rem' }}>
              Stay close to the work
            </h3>
            <p className="font-body text-sm leading-relaxed mb-7" style={{ color: 'rgba(245,241,230,0.48)' }}>
              Updates on projects, ideas, and the evolution of the Open Earth — straight to your inbox.
            </p>

            {/* Substack embed */}
            <div
              className="overflow-hidden rounded-xl"
              style={{ background: 'rgba(245,241,230,0.03)', border: '1px solid rgba(245,241,230,0.07)' }}
            >
              <iframe
                src="https://opensystemsfoundation.substack.com/embed?transparent=1"
                width="100%"
                height="150"
                style={{ border: 0, background: 'transparent', overflow: 'hidden', display: 'block' }}
                title="Subscribe to Open Systems Foundation updates"
              />
            </div>

            {/* Footer note */}
            <p className="font-body text-xs mt-4 text-center" style={{ color: 'rgba(245,241,230,0.2)' }}>
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
