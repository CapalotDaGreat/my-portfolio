import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ueber mich",
  description: "Hintergrund, Skills und Arbeitsweise von Cadima Lusiola.",
};

export default function AboutPage() {
  return (
    <div className="site-root">
      <section className="hero-panel hero-with-profile">
        <div className="hero-content">
          <p className="eyebrow">Ueber mich</p>
          <h1>Ich entwickle Web-Erlebnisse, die klar, schnell und professionell wirken.</h1>
          <p className="lead">
            Ich bin Cadima Lusiola, Full-Stack Developer mit Fokus auf React, Next.js und TypeScript.
            Meine Projekte auf GitHub zeigen, wie ich von der Idee bis zur funktionierenden Anwendung
            arbeite.
          </p>
        </div>
        <div className="hero-profile">
          <Image
            src="/images/profile-cadima.png"
            alt="Cadima Lusiola"
            width={280}
            height={280}
            className="profile-image"
          />
        </div>
      </section>

      <section className="section about-grid">
        <article className="value-card">
          <h3>Was ich mitbringe</h3>
          <p>
            Strukturiertes Denken, saubere UI-Umsetzung und der Wille, echte Probleme mit
            pragmatischen Loesungen zu loesen.
          </p>
        </article>
        <article className="value-card">
          <h3>Wie ich arbeite</h3>
          <p>
            Ich zerlege Aufgaben in klare Schritte, teste frueh und kommuniziere offen, wenn etwas
            verbessert werden kann.
          </p>
        </article>
        <article className="value-card">
          <h3>Wohin ich will</h3>
          <p>
            In einem Team wachsen, Verantwortung uebernehmen und Produkte bauen, die Nutzer und
            Unternehmen weiterbringen.
          </p>
        </article>
      </section>

      <section className="cta-panel">
        <h2>Meine Arbeit im Detail</h2>
        <p className="lead">
          Schauen Sie sich meine GitHub-Projekte an, um Code-Qualitaet, Tech-Stack und
          Produktansatz zu sehen.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Link href="/projects" className="button primary">
            Projekte ansehen
          </Link>
          <a className="button ghost" href="mailto:clusiola4@gmail.com">
            Kontakt
          </a>
        </div>
      </section>
    </div>
  );
}
