"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import ProjectsSection from "../components/ProjectsSection";

const skills = [
  "React / Next.js",
  "TypeScript / JavaScript",
  "UI Engineering",
  "Responsive Design",
  "API Integration",
  "Clean Code",
];

const values = [
  {
    title: "Produktfokus",
    text: "Ich entwickle Features mit Blick auf Nutzen, Klarheit und messbaren Mehrwert.",
  },
  {
    title: "Saubere Umsetzung",
    text: "Strukturierter Code, gute Lesbarkeit und wartbare Architektur stehen im Zentrum.",
  },
  {
    title: "Schnelles Lernen",
    text: "Neue Tools und Feedback setze ich zügig um und liefere zuverlässig Ergebnisse.",
  },
];

const contactMethods = [
  {
    label: "E-Mail",
    value: "clusiola4@gmail.com",
    href: "mailto:clusiola4@gmail.com",
    hint: "Bevorzugter Kanal für Bewerbungen und Anfragen",
  },
  {
    label: "Telefon",
    value: "078 672 88 05",
    href: "tel:+41786728805",
    hint: "Für ein kurzes Erstgespräch oder Rückfragen",
  },
  {
    label: "LinkedIn",
    value: "cadima-lusiola",
    href: "https://www.linkedin.com/in/cadima-lusiola-392833380/",
    hint: "Profil, Werdegang und Netzwerk",
    external: true,
  },
  {
    label: "GitHub",
    value: "CapalotDaGreat",
    href: "https://github.com/CapalotDaGreat",
    hint: "Repositories, Demos und Code-Beispiele",
    external: true,
  },
];

const aboutCards = [
  {
    title: "Was ich mitbringe",
    text: "Strukturiertes Denken, saubere UI-Umsetzung und der Wille, echte Probleme mit pragmatischen Lösungen zu lösen.",
  },
  {
    title: "Wie ich arbeite",
    text: "Ich zerlege Aufgaben in klare Schritte, teste früh und kommuniziere offen, wenn etwas verbessert werden kann.",
  },
  {
    title: "Wohin ich will",
    text: "In einem Team wachsen, Verantwortung übernehmen und Produkte bauen, die Nutzer und Unternehmen weiterbringen.",
  },
];

export default function Home() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="site-root one-page">
      <section id="home" className="page-section hero-panel hero-with-profile">
        <div className="hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Offen für Junior / Entry-Level Positionen
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            Cadima Lusiola baut digitale Produkte, die man sofort versteht.
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
          >
            Full-Stack Developer mit Fokus auf React, Next.js und TypeScript. Ich verbinde
            moderne Interfaces mit sauberer Logik und echten Projekten aus meinem GitHub-Profil.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            <a href="#projects" className="button primary">
              GitHub Projekte ansehen
            </a>
            <a href="#contact" className="button ghost">
              Kontakt aufnehmen
            </a>
          </motion.div>

          <div className="stats-row grid four">
            <div className="stat-card">
              <strong>8+</strong>
              <span>GitHub Projekte</span>
            </div>
            <div className="stat-card">
              <strong>3</strong>
              <span>Live Demos</span>
            </div>
            <div className="stat-card">
              <strong>TS / JS</strong>
              <span>Kern-Stack</span>
            </div>
            <div className="stat-card">
              <strong>Full-Stack</strong>
              <span>Profil</span>
            </div>
          </div>
        </div>

        <motion.div
          className="hero-profile"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Image
            src="/images/profile-cadima.png"
            alt="Cadima Lusiola"
            width={320}
            height={320}
            className="profile-image"
            priority
          />
        </motion.div>
      </section>

      <section id="about" className="page-section section">
        <div className="section-head">
          <h2>Über mich</h2>
        </div>
        <p className="lead section-intro">
          Ich entwickle Web-Erlebnisse, die klar, schnell und professionell wirken. Meine Projekte
          auf GitHub zeigen, wie ich von der Idee bis zur funktionierenden Anwendung arbeite.
        </p>

        <div className="grid three about-grid">
          {aboutCards.map((card) => (
            <article className="value-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <div className="section subsection">
          <div className="section-head">
            <h2>Warum Teams mit mir arbeiten sollten</h2>
          </div>
          <div className="grid three">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="section subsection">
          <div className="section-head">
            <h2>Tech Stack</h2>
          </div>
          <div className="grid three">
            {skills.map((skill) => (
              <article className="skill-card" key={skill}>
                <h3>{skill}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="page-section section">
        <ProjectsSection />
      </section>

      <section id="contact" className="page-section contact-panel">
        <div className="contact-header">
          <p className="eyebrow">Kontakt</p>
          <h2>Lassen Sie uns sprechen</h2>
          <p className="lead">
            Ich freue mich über Anfragen zu Junior- oder Entry-Level-Positionen, Projektideen
            oder einem ersten Kennenlernen. Wählen Sie einfach den Kanal, der für Sie passt.
          </p>
        </div>

        <div className="contact-grid">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              className="contact-card"
              href={method.href}
              {...(method.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span className="contact-card-label">{method.label}</span>
              <span className="contact-card-value">{method.value}</span>
              <span className="contact-card-hint">{method.hint}</span>
            </a>
          ))}
        </div>

        <div className="contact-actions">
          <a className="button primary" href="mailto:clusiola4@gmail.com">
            E-Mail schreiben
          </a>
          <a className="button ghost" href="tel:+41786728805">
            Jetzt anrufen
          </a>
        </div>
      </section>
    </div>
  );
}
