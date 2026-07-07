"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import {
  categoryLabels,
  projects,
  type ProjectCategory,
} from "../../data/projects";

type FilterValue = "all" | ProjectCategory;

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  const filters: { value: FilterValue; label: string }[] = [
    { value: "all", label: "Alle" },
    ...Object.entries(categoryLabels).map(([value, label]) => ({
      value: value as ProjectCategory,
      label,
    })),
  ];

  return (
    <div className="site-root">
      <section className="hero-panel">
        <p className="eyebrow">GitHub Portfolio</p>
        <h1>Meine besten Projekte aus dem echten Code</h1>
        <p className="lead">
          Ausgewaehlte Repositories von{" "}
          <a href="https://github.com/CapalotDaGreat" target="_blank" rel="noreferrer">
            github.com/CapalotDaGreat
          </a>
          , priorisiert nach technischer Relevanz, Live-Demos und Produktdenken.
        </p>
      </section>

      <section className="section">
        <div className="filter-bar">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`filter-button ${filter === item.value ? "active" : ""}`}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      <motion.div
        className="grid two"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
}
