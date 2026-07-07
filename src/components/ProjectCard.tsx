import Image from "next/image";
import type { Project } from "../data/projects";
import { categoryLabels } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export default function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className={`project-card ${compact ? "compact" : ""}`}>
      <div className="project-image-wrap">
        <Image
          src={project.imageUrl}
          alt={`${project.title} Vorschau`}
          width={640}
          height={360}
          className="project-image"
        />
      </div>
      <div className="project-card-top">
        <span className="project-category">{categoryLabels[project.category]}</span>
        {project.liveUrl ? <span className="project-live">Live Demo</span> : null}
      </div>

      <h3>{project.title}</h3>
      <p>{compact ? project.summary : project.description}</p>

      {!compact ? (
        <>
          <p className="project-result">
            <strong>Ergebnis:</strong> {project.result}
          </p>
          <p className="project-role">
            <strong>Rolle:</strong> {project.role}
          </p>
        </>
      ) : (
        <p className="project-result">{project.result}</p>
      )}

      <div className="chips">
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-actions">
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button ghost">
          GitHub
        </a>
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button primary">
            Live ansehen
          </a>
        ) : null}
      </div>
    </article>
  );
}
