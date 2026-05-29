'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/about',        label: 'About' },
  { href: '/manifesto',    label: 'Manifesto' },
  { href: '/projects',     label: 'Projects' },
  { href: '/gaia-commons', label: 'Gaia Commons' },
  { href: '/journal',      label: 'Journal' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: 'rgba(20, 48, 32, 0.97)',
        backdropFilter: 'blur(16px) saturate(1.4)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center gap-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="Open Systems Foundation">
          <div className="shrink-0" style={{ height: '36px', width: '49px' }}>
            <Image
              src="/osf-logo.png"
              alt="Open Systems Foundation"
              width={49}
              height={36}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-none gap-0.5">
            <span
              className="font-display font-semibold transition-opacity group-hover:opacity-80"
              style={{ color: '#F5F1E6', fontSize: '0.98rem', letterSpacing: '0.01em', lineHeight: 1 }}
            >
              Open Systems
            </span>
            <span
              className="font-body font-medium"
              style={{ color: 'rgba(245,241,230,0.55)', fontSize: '0.6rem', letterSpacing: '0.13em', textTransform: 'uppercase', lineHeight: 1 }}
            >
              Foundation
            </span>
          </div>
        </Link>

        <div className="flex-1" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium tracking-wide transition-all hover:opacity-100"
              style={{
                color: pathname === link.href ? '#C2CB52' : 'rgba(245,241,230,0.72)',
                fontFamily: 'var(--font-inter), sans-serif',
              }}
            >
              {link.label}
              {pathname === link.href && (
                <span
                  className="absolute -bottom-0.5 left-0 right-0 h-px rounded-full"
                  style={{ background: '#C2CB52', opacity: 0.55 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:scale-[1.02]"
          style={{
            background: '#C2CB52',
            color: '#1A2A23',
            fontFamily: 'var(--font-inter), sans-serif',
          }}
        >
          Get involved
        </Link>

        {/* Burger (mobile) */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl gap-[5px] transition-colors"
          style={{ background: open ? 'rgba(255,255,255,0.1)' : 'transparent' }}
        >
          <span className="block h-[1.5px] w-5 rounded-full transition-all duration-300 origin-center"
            style={{ background: '#F5F1E6', transform: open ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none' }} />
          <span className="block h-[1.5px] w-5 rounded-full transition-all duration-300"
            style={{ background: '#F5F1E6', opacity: open ? 0 : 1 }} />
          <span className="block h-[1.5px] w-5 rounded-full transition-all duration-300 origin-center"
            style={{ background: '#F5F1E6', transform: open ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: open ? '520px' : '0px',
          borderTop: open ? '1px solid rgba(255,255,255,0.08)' : 'none',
          background: 'rgba(14,34,22,0.99)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <nav className="px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 px-4 rounded-xl text-base font-medium transition-colors"
              style={{
                color: pathname === link.href ? '#C2CB52' : 'rgba(245,241,230,0.82)',
                background: pathname === link.href ? 'rgba(194,203,82,0.1)' : 'transparent',
                fontFamily: 'var(--font-inter), sans-serif',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <Link
              href="/contact"
              className="flex items-center justify-center py-3.5 px-6 rounded-full text-sm font-semibold"
              style={{ background: '#C2CB52', color: '#1A2A23', fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Get involved
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
