import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import AgentationDev from "../components/AgentationDev";

export const metadata: Metadata = {
  title: {
    default: "Cadima Lusiola | Full-Stack Developer",
    template: "%s | Cadima Lusiola",
  },
  description:
    "Portfolio von Cadima Lusiola mit modernen Web-Apps, klaren UI-Konzepten und echten GitHub-Projekten.",
  keywords: [
    "Cadima Lusiola",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
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
        <Navbar />
        <main className="container main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <AgentationDev />
      </body>
    </html>
  );
}
