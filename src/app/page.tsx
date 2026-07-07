"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const featuredProjects = [
  {
    title: "Konkursfaelle der Schweiz",
    description:
      "Informationsplattform mit klarem Datenzugriff und nutzerfreundlichem UI fuer komplexe Inhalte.",
    stack: ["JavaScript", "HTML", "CSS"],
    impact: "Strukturierte komplexe Informationen fuer schnelle Entscheidungen.",
    url: "https://github.com/im23b-mahfuzr/PrWr_Projekt",
  },
  {
    title: "Smart Taschenrechner",
    description:
      "Modular aufgebauter Rechner mit sauberer Logiktrennung und Fokus auf gute Bedienbarkeit.",
    stack: ["JavaScript", "HTML", "CSS"],
    impact: "Stabile Architektur fuer Erweiterungen und bessere Wartbarkeit.",
    url: "https://github.com/CapalotDaGreat/Taschenrechner",
  },
  {
    title: "Budget Tracker",
    description:
      "Persoenliches Finanztool mit klaren Uebersichten zur besseren Steuerung von Ausgaben.",
    stack: ["JavaScript", "HTML", "CSS"],
    impact: "Bessere Transparenz ueber Budget und wiederkehrende Ausgaben.",
    url: "https://github.com/CapalotDaGreat/Budget-Tracker",
  },
];

const coreSkills = [
  "React / Next.js",
  "TypeScript / JavaScript",
  "Node.js Basics",
  "Responsive UI Engineering",
  "Performance Thinking",
  "Clean Code & Maintainability",
];

export default function Home() {
  return (
    <div className="site-root">
      <section className="hero">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hero-kicker">
          Verfuegbar fuer Junior / Entry-Level Rollen
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          Ich baue moderne Webprodukte, die schnell, klar und nutzerfreundlich sind.
        </motion.h1>
        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          Ich bin Mahfuz Rahman, Full-Stack Developer mit Fokus auf React, Next.js und
          TypeScript. Mein Ziel: messbaren Produktwert liefern und in einem starken Team schnell
          wachsen.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <a className="button primary" href="/projects">
            Projekte ansehen
          </a>
          <a className="button ghost" href="#contact">
            Kontakt
          </a>
        </motion.div>
        <div className="socials">
          <a href="https://github.com/CapalotDaGreat" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:clusiola4@gmail.com" aria-label="E-Mail">
            <FaEnvelope />
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Warum ich ein guter Hire bin</h2>
        <div className="grid three">
          <article className="card">
            <h3>Business Fokus</h3>
            <p>
              Ich denke nicht nur in Features, sondern in Ergebnissen: schnellere Ablaufe,
              klarere Interfaces und bessere Nutzererfahrung.
            </p>
          </article>
          <article className="card">
            <h3>Sauberer Code</h3>
            <p>
              Ich arbeite strukturiert, schreibe wartbaren Code und beachte Performance sowie
              Accessibility frueh im Prozess.
            </p>
          </article>
          <article className="card">
            <h3>Team Mentalitaet</h3>
            <p>
              Ich kommuniziere aktiv, nehme Feedback schnell auf und setze Verbesserungen
              zuverlaessig um.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Core Skills</h2>
        <ul className="skill-list">
          {coreSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Ausgewaehlte Projekte</h2>
          <a href="/projects">Alle Projekte</a>
        </div>
        <div className="grid three">
          {featuredProjects.map((project) => (
            <article className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="impact">{project.impact}</p>
              <div className="chips">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a href={project.url} target="_blank" rel="noreferrer">
                GitHub ansehen
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <h2>Kontakt</h2>
        <p>
          Wenn ihr Team einen motivierten Developer sucht, der Verantwortung uebernimmt und schnell
          lernt, freue ich mich auf ein Gespraech.
        </p>
        <a className="button primary" href="mailto:clusiola4@gmail.com">
          clusiola4@gmail.com
        </a>
      </section>
    </div>
  );
}
