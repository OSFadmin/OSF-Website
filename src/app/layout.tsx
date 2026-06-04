import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import SketchFilter from "@/components/SketchFilter";
import InteriorBackground from "@/components/InteriorBackground";
import NavBar from "@/components/NavBar";
import SubscribeForm from "@/components/SubscribeForm";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Open Systems Foundation",
  description: "Building open infrastructure for a thriving planet.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen font-body" style={{ background: "var(--background)", color: "var(--foreground)" }}>
        <SketchFilter />
        <InteriorBackground />
        <NavBar />

        {/* ── Main content ─────────────────────────── */}
        <main className="relative" style={{ zIndex: 1 }}>
          {children}
        </main>

        {/* ── Footer ───────────────────────────────── */}
        <footer className="relative" style={{ background: "#0F1F17", color: "#F5F1E6", zIndex: 1 }}>

          {/* Newsletter band */}
          <div
            className="border-b"
            style={{ borderColor: "rgba(245,241,230,0.07)", background: "rgba(30,70,52,0.45)" }}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="font-body font-semibold text-base mb-1" style={{ color: "#F5F1E6" }}>
                  Stay close to the work
                </p>
                <p className="font-body text-sm" style={{ color: "rgba(245,241,230,0.52)" }}>
                  Updates on projects, ideas, and the evolution of the Open Earth.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <SubscribeForm variant="footer" source="footer" />
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Brand — wider column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="shrink-0" style={{ height: '40px', width: '55px' }}>
                  <Image
                    src="/osf-logo.png"
                    alt="Open Systems Foundation"
                    width={55}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-display font-semibold text-base block" style={{ color: "#F5F1E6", lineHeight: 1.2 }}>
                    Open Systems Foundation
                  </span>
                  <span className="font-body text-xs" style={{ color: "rgba(245,241,230,0.4)", letterSpacing: "0.08em" }}>
                    For a thriving Open Earth
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(245,241,230,0.55)" }}>
                A charitable foundation in Vaduz, Liechtenstein, dedicated to building and supporting the open infrastructure an Open Earth requires.
              </p>
              <p className="text-xs mb-6" style={{ color: "rgba(245,241,230,0.3)" }}>
                contact@opensystems.foundation
              </p>

              {/* Social links */}
              <div className="flex gap-3">
                <Link
                  href="https://github.com/OSFadmin"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:opacity-100"
                  style={{ background: "rgba(245,241,230,0.07)", border: "1px solid rgba(245,241,230,0.1)", color: "rgba(245,241,230,0.5)" }}
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/open-systems-foundation"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:opacity-100"
                  style={{ background: "rgba(245,241,230,0.07)", border: "1px solid rgba(245,241,230,0.1)", color: "rgba(245,241,230,0.5)" }}
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Work */}
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-5 font-body" style={{ color: "#B7A24B" }}>Work</h4>
              <ul className="space-y-3">
                {[
                  { href: "/projects",     label: "Projects" },
                  { href: "/gaia-commons", label: "Gaia Commons" },
                  { href: "/resources",    label: "Resources" },
                  { href: "/manifesto",    label: "Manifesto" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm font-body transition-all hover:opacity-100 hover:translate-x-0.5 inline-block" style={{ color: "rgba(245,241,230,0.5)" }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Foundation */}
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-5 font-body" style={{ color: "#B7A24B" }}>Foundation</h4>
              <ul className="space-y-3">
                {[
                  { href: "/about",    label: "About" },
                  { href: "/culture",  label: "Culture" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm font-body transition-all hover:opacity-100 hover:translate-x-0.5 inline-block" style={{ color: "rgba(245,241,230,0.5)" }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-5 font-body" style={{ color: "#B7A24B" }}>Connect</h4>
              <ul className="space-y-3">
                {[
                  { href: "/contact",    label: "Get involved" },
                  { href: "/contact",    label: "Partner with us" },
                  { href: "https://github.com/OSFadmin", label: "GitHub" },
                ].map((l, i) => (
                  <li key={i}>
                    <Link href={l.href} className="text-sm font-body transition-all hover:opacity-100 hover:translate-x-0.5 inline-block" style={{ color: "rgba(245,241,230,0.5)" }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(245,241,230,0.07)" }}>
                <p className="text-xs font-body mb-2" style={{ color: "rgba(245,241,230,0.3)" }}>Registered foundation</p>
                <p className="text-xs font-body" style={{ color: "rgba(245,241,230,0.22)", lineHeight: 1.7 }}>
                  Liechtenstein PGR<br />Vaduz, FL-9490
                </p>
              </div>
            </div>
          </div>

          <div
            className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-body"
            style={{ borderTop: "1px solid rgba(245,241,230,0.07)", color: "rgba(245,241,230,0.3)" }}
          >
            <p>© {new Date().getFullYear()} Open Systems Foundation. Content licensed CC BY-SA 4.0.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:opacity-70 transition-opacity">Privacy</Link>
              <Link href="/resources" className="hover:opacity-70 transition-opacity">Governance</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
