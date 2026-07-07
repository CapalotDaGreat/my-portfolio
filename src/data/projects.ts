export type ProjectCategory = "web" | "tool" | "game" | "backend";

export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  stack: string[];
  result: string;
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  featured?: boolean;
  category: ProjectCategory;
};

export const projects: Project[] = [
  {
    id: "my-portfolio",
    title: "Portfolio Website",
    summary: "Moderne Next.js Portfolio-Seite mit Fokus auf Performance und klare Projektdarstellung.",
    description:
      "Persönliches Portfolio mit App Router, TypeScript und animierten UI-Komponenten für professionelle Präsentation.",
    role: "Full-Stack Entwicklung",
    stack: ["Next.js", "React", "TypeScript", "CSS"],
    result: "Schnelle, wartbare und deploybare Portfolio-Plattform für Bewerbungen.",
    githubUrl: "https://github.com/CapalotDaGreat/my-portfolio",
    liveUrl: "https://my-portfolio-cadimas-projects.vercel.app",
    imageUrl: "/images/project-portfolio.png",
    featured: true,
    category: "web",
  },
  {
    id: "scoutx",
    title: "ScoutX",
    summary: "TypeScript-Anwendung mit moderner Architektur und skalierbarer Codebasis.",
    description:
      "Eigenes Softwareprojekt mit TypeScript-Stack, entwickelt für strukturierte Feature-Erweiterung und saubere Wartbarkeit.",
    role: "Frontend & Architektur",
    stack: ["TypeScript", "React", "Node.js"],
    result: "Solide Basis für weiteres Produktwachstum und Teamarbeit.",
    githubUrl: "https://github.com/CapalotDaGreat/ScoutX",
    imageUrl: "/images/project-scoutx.png",
    featured: true,
    category: "web",
  },
  {
    id: "budget-tracker",
    title: "Budget Tracker",
    summary: "Finanz-Tracker mit interaktiven Charts und klarer Budgetübersicht.",
    description:
      "Web-App zur Verfolgung von Einnahmen, Ausgaben und Ersparnissen mit benutzerfreundlicher Oberfläche.",
    role: "Frontend & Logik",
    stack: ["JavaScript", "HTML", "CSS", "Charts"],
    result: "Bessere finanzielle Transparenz durch visuelle Auswertungen.",
    githubUrl: "https://github.com/CapalotDaGreat/Budget-Tracker",
    liveUrl: "https://budget-tracker-drab.vercel.app",
    imageUrl: "/images/project-budget-tracker.png",
    featured: true,
    category: "tool",
  },
  {
    id: "taschenrechner",
    title: "Smart Taschenrechner",
    summary: "Rechner für komplexe mathematische Operationen mit modularer Struktur.",
    description:
      "TypeScript-basierter Taschenrechner mit sauber getrennter Logik und erweiterbarer Architektur.",
    role: "Frontend Entwicklung",
    stack: ["TypeScript", "JavaScript", "HTML", "CSS"],
    result: "Stabile Kernlogik für komplexe Berechnungen.",
    githubUrl: "https://github.com/CapalotDaGreat/Taschenrechner",
    imageUrl: "/images/project-calculator.png",
    category: "tool",
  },
  {
    id: "impostor-game",
    title: "Impostor Game",
    summary: "Interaktives Party-Spiel inspiriert vom populären Impostor-Format.",
    description:
      "Spielprojekt mit Fokus auf Spielmechanik, Nutzerinteraktion und unterhaltsame Multiplayer-Erfahrung.",
    role: "Game Logic & UI",
    stack: ["JavaScript", "HTML", "CSS"],
    result: "Spielerisches Produkt mit klarer Spielschleife und einfachem Einstieg.",
    githubUrl: "https://github.com/CapalotDaGreat/Impostor-game",
    imageUrl: "/images/project-impostor.png",
    category: "game",
  },
  {
    id: "todo-list",
    title: "To-Do List",
    summary: "Python-basierte Aufgabenverwaltung mit klarer Datenstruktur.",
    description:
      "Klassische To-Do-Anwendung in Python mit Fokus auf saubere Logik und erweiterbare Funktionen.",
    role: "Backend & Logik",
    stack: ["Python"],
    result: "Zuverlässige Aufgabenverwaltung als solide Backend-Übung.",
    githubUrl: "https://github.com/CapalotDaGreat/To-Do-List",
    imageUrl: "/images/project-todo.png",
    category: "backend",
  },
  {
    id: "andeo-projekt",
    title: "Andeo Coding Contest",
    summary: "Wettbewerbsprojekt aus dem Andeo Coding Contest.",
    description:
      "Contest-Lösung mit Fokus auf Problemverständnis, strukturierte Umsetzung und funktionierendes Endergebnis.",
    role: "Contest Entwicklung",
    stack: ["JavaScript", "Algorithmen"],
    result: "Praxisnahe Umsetzung unter Zeitdruck mit klarem Ergebnis.",
    githubUrl: "https://github.com/CapalotDaGreat/Andeo_Projekt",
    imageUrl: "/images/project-andeo.png",
    category: "backend",
  },
  {
    id: "mensa-app",
    title: "Mensa App",
    summary: "Web-App für den aktuellen Mensa-Speiseplan der BZZ.",
    description:
      "Mobile-first Anwendung, die Studierenden schnellen Zugriff auf den täglichen Speiseplan bietet.",
    role: "Frontend Umsetzung",
    stack: ["HTML", "CSS", "JavaScript"],
    result: "Direkter Zugriff auf relevante Tagesinfos für den Schulalltag.",
    githubUrl: "https://github.com/CapalotDaGreat",
    liveUrl: "https://mensa-app-nine.vercel.app/",
    imageUrl: "/images/project-mensa.png",
    category: "web",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const categoryLabels: Record<ProjectCategory, string> = {
  web: "Web Apps",
  tool: "Tools",
  game: "Games",
  backend: "Backend",
};
