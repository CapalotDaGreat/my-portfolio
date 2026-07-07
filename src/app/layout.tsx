import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import PageTransition from "../components/PageTransition";

export const metadata: Metadata = {
  title: {
    default: "Mahfuz Rahman | Full-Stack Developer",
    template: "%s | Mahfuz Rahman",
  },
  description:
    "Portfolio von Mahfuz Rahman mit Fokus auf performante, barrierearme und moderne Webanwendungen.",
  keywords: [
    "Mahfuz Rahman",
    "Full-Stack Developer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <header className="site-header">
          <div className="container shell">
            <Link href="/" className="brand">
              Mahfuz Rahman
            </Link>
            <nav className="nav">
              <Link href="/">Start</Link>
              <Link href="/projects">Projekte</Link>
              <a href="/#contact">Kontakt</a>
            </nav>
          </div>
        </header>

        <main className="container main-content">
          <PageTransition>{children}</PageTransition>
        </main>

        <footer className="site-footer">
          <div className="container shell footer-shell">
            <p>© {new Date().getFullYear()} Mahfuz Rahman. Alle Rechte vorbehalten.</p>
            <div className="footer-links">
              <a href="https://github.com/CapalotDaGreat" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="mailto:clusiola4@gmail.com">Email</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
