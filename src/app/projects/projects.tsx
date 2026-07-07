"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  summary: string;
  role: string;
  stack: string[];
  result: string;
  url: string;
};

const projects: Project[] = [
  {
    title: "Konkursfaelle der Schweiz",
    summary:
      "Webplattform zur strukturierten Darstellung komplexer Konkursinformationen fuer bessere Orientierung.",
    role: "Frontend & Struktur",
    stack: ["JavaScript", "HTML", "CSS"],
    result: "Klare Informationsarchitektur fuer schnellere Nutzerfuehrung.",
    url: "https://github.com/im23b-mahfuzr/PrWr_Projekt",
  },
  {
    title: "Smart Taschenrechner",
    summary:
      "Interaktiver Rechner mit modularer Architektur und Fokus auf genaue mathematische Logik.",
    role: "Frontend Entwicklung",
    stack: ["JavaScript", "HTML", "CSS"],
    result: "Sauber trennbare Komponenten fuer einfache Erweiterungen.",
    url: "https://github.com/CapalotDaGreat/Taschenrechner",
  },
  {
    title: "Budget Tracker",
    summary:
      "Tool zur Nachverfolgung von Einnahmen und Ausgaben mit klaren, alltagstauglichen Uebersichten.",
    role: "UI & Logik",
    stack: ["JavaScript", "HTML", "CSS"],
    result: "Verbesserte finanzielle Transparenz fuer Nutzer.",
    url: "https://github.com/CapalotDaGreat/Budget-Tracker",
  },
  {
    title: "Mensa App",
    summary: "Anwendung zur Anzeige des Mensa-Speiseplans in einer schnellen, mobilen UI.",
    role: "Frontend Umsetzung",
    stack: ["HTML", "CSS", "JavaScript"],
    result: "Direkter Zugriff auf relevante Tagesinfos fuer Studierende.",
    url: "https://mensa-app-nine.vercel.app/",
  },
];

export default function ProjectsPage() {
  return (
    <section className="site-root">
      <div className="section">
        <p className="hero-kicker">Portfolio Highlights</p>
        <h1>Projekte mit Fokus auf echten Mehrwert</h1>
        <p className="hero-copy">
          Jede Arbeit zeigt, wie ich technische Entscheidungen auf konkrete Nutzerprobleme und
          Produktziele ausrichte.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="grid two"
      >
        {projects.map((project) => (
          <article className="card" key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <p>
              <strong>Rolle:</strong> {project.role}
            </p>
            <p>
              <strong>Ergebnis:</strong> {project.result}
            </p>
            <div className="chips">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <a href={project.url} target="_blank" rel="noreferrer">
              Projekt ansehen
            </a>
          </article>
        ))}
      </motion.div>
    </section>
  );
}
