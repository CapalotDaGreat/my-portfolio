"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";

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
    text: "Neue Tools und Feedback setze ich zuegig um und liefere zuverlaessig Ergebnisse.",
  },
];

export default function Home() {
  return (
    <div className="site-root">
      <section className="hero-panel hero-with-profile">
        <div className="hero-content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Offen fuer Junior / Entry-Level Positionen
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
          <Link href="/projects" className="button primary">
            GitHub Projekte ansehen
          </Link>
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
            <strong>100%</strong>
            <span>Eigenentwicklung</span>
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

      <section className="section">
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
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Top GitHub Projekte</h2>
          <Link href="/projects">Alle anzeigen</Link>
        </div>
        <div className="grid three">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} compact />
          ))}
        </div>
      </section>

      <section className="section">
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
      </section>

      <section className="cta-panel" id="contact">
        <h2>Bereit fuer den naechsten Schritt?</h2>
        <p className="lead">
          Wenn Sie einen motivierten Developer suchen, der Verantwortung uebernimmt und mit
          echten Projekten ueberzeugt, freue ich mich auf Ihre Nachricht.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <a className="button primary" href="mailto:clusiola4@gmail.com">
            clusiola4@gmail.com
          </a>
          <a
            className="button ghost"
            href="https://github.com/CapalotDaGreat"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profil
          </a>
        </div>
      </section>
    </div>
  );
}
