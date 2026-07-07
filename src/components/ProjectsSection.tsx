"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  categoryLabels,
  projects,
  type ProjectCategory,
} from "../data/projects";

type FilterValue = "all" | ProjectCategory;

export default function ProjectsSection() {
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
    <>
      <div className="section-head">
        <h2>Projekte</h2>
        <p className="section-subtitle">
          Ausgewählte Repositories von{" "}
          <a href="https://github.com/CapalotDaGreat" target="_blank" rel="noreferrer">
            github.com/CapalotDaGreat
          </a>
        </p>
      </div>

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

      <motion.div
        className="grid two"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </>
  );
}
