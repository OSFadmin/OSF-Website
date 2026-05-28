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
                {[
                  { label: 'GH', title: 'GitHub', href: 'https://github.com' },
                  { label: 'LI', title: 'LinkedIn', href: '#' },
                  { label: 'X',  title: 'X / Twitter', href: '#' },
                ].map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    title={s.title}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-body font-semibold transition-all hover:opacity-100"
                    style={{
                      background: "rgba(245,241,230,0.07)",
                      border: "1px solid rgba(245,241,230,0.1)",
                      color: "rgba(245,241,230,0.45)",
                    }}
                  >
                    {s.label}
                  </Link>
                ))}
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
                  { href: "/journal",  label: "Journal" },
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
                  { href: "https://github.com", label: "GitHub" },
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
