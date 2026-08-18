"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML / CSS",
  "Python",
  "Java",
  "MySQL",
  "Git",
];

const aboutCards = [
  {
    title: "Was ich mitbringe",
    text: "Strukturiertes Denken, saubere UI-Umsetzung und der Wille, echte Probleme pragmatisch zu lösen.",
  },
  {
    title: "Wie ich arbeite",
    text: "Ich zerlege Aufgaben in klare Schritte, teste früh und kommuniziere offen, wenn etwas besser werden kann.",
  },
  {
    title: "Wohin ich will",
    text: "In einem Team wachsen, Verantwortung übernehmen und Produkte bauen, die Nutzer weiterbringen.",
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
            Junior Full-Stack Developer · IMS · Zürich
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            Cadima Lusiola
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
          >
            Ich entwickle Web-Anwendungen mit React, Next.js und TypeScript – klar, wartbar und
            nachvollziehbar. Offen für eine Junior-Stelle im Raum Zürich.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            <a href="#projects" className="button primary">
              Projekte ansehen
            </a>
            <a href="#contact" className="button ghost">
              Kontakt aufnehmen
            </a>
          </motion.div>

          <div className="stats-row grid four">
            <div className="stat-card">
              <strong>IMS</strong>
              <span>2023 – 2026</span>
            </div>
            <div className="stat-card">
              <strong>7</strong>
              <span>Eigene Projekte</span>
            </div>
            <div className="stat-card">
              <strong>3</strong>
              <span>Live Demos</span>
            </div>
            <div className="stat-card">
              <strong>EN / DE</strong>
              <span>Muttersprache</span>
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
            width={340}
            height={340}
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
          Ich bin Informatiker der Applikationsentwicklung an der Kantonsschule Hottingen und baue
          eigene Web-Projekte von der Idee bis zur Live-Demo. Zweisprachig aufgewachsen, lerne ich
          schnell und arbeite gerne im Team.
        </p>

        <div className="grid three about-grid">
          {aboutCards.map((card) => (
            <article className="value-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <div className="skill-chips" aria-label="Tech Stack">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="page-section section">
        <ProjectsSection />
      </section>

      <ContactSection />
    </div>
  );
}
