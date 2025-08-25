"use client";

import React from "react";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    link: string;
    tags: string[];
    imageUrl?: string;
}

export default function ProjectsPage() {
    const projects: Project[] = [
        {
            title: "Konkursfälle der Schweiz Webseite",
            description: "Eine Webseite, die Informationen über Konkursfälle in der Schweiz bereitstellt.",
            link: "https://github.com/im23b-mahfuzr/PrWr_Projekt",
            tags: ["Javascript", "HTML", "CSS"],
        },
        {
            title: "Smart Taschenrechner",
            description: "Ein Taschenrechner, der nicht nur die Grundrechenarten beherrscht, sondern auch komplexe mathematische Operationen durchführen kann.",
            link: "https://taschenrechner-pesv.vercel.app/",
            tags: ["Javascript", "HTML", "CSS"],
        },
        {
            title: "Mensa-App",
            description: "Eine Web-App, die die Mensa-Speiseplan für die Mensa-BZZ anzeigt.",
            link: "https://mensa-app-nine.vercel.app/",
            tags: ["HTML5", "CSS", "JavaScript"],
        },
        {
            title: "Budget-Tracker",
            description: "Ein Budget-Tracker, der Ihnen hilft, Ihr Geld besser zu verwalten.",
            link: "https://budget-tracker-chi-one.vercel.app/",
            tags: ["JavaScript", "CSS", "HTML"],
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="projects-page">
            <h1 className="page-title">Meine Projekte</h1>
            <p className="page-description">
                Hier finden Sie eine Auswahl meiner aktuellen Projekte und Arbeiten.
                Jedes Projekt spiegelt meine Fähigkeiten und Interessen wider.
            </p>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="projects-grid"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{
                            scale: 1.03,
                            boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="project-card"
                    >
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="project-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </a>
                    </motion.div>
                ))}
            </motion.div>

            <style jsx>{`
                .projects-page {
                    padding: 2rem 0;
                }
                
                .page-title {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: var(--primary-color);
                    text-align: center;
                }
                
                .page-description {
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto 3rem auto;
                    color: var(--text-color);
                    opacity: 0.9;
                }
                
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 2rem;
                    padding: 1rem;
                }
                
                .project-card {
                    background-color: var(--card-bg);
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 4px 10px var(--card-shadow);
                    transition: all 0.3s ease;
                    height: 100%;
                }
                
                .project-link {
                    padding: 1.5rem;
                    display: block;
                    height: 100%;
                    color: var(--text-color);
                    text-decoration: none;
                }
                
                .project-title {
                    font-size: 1.5rem;
                    color: var(--primary-color);
                    margin-bottom: 0.75rem;
                }
                
                .project-description {
                    font-size: 1rem;
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                    color: var(--text-color);
                    opacity: 0.9;
                }
                
                .project-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-top: auto;
                }
                
                .project-tag {
                    background-color: var(--primary-color);
                    color: white;
                    padding: 0.3rem 0.6rem;
                    border-radius: 4px;
                    font-size: 0.75rem;
                    font-weight: 600;
                }
                
                @media (max-width: 768px) {
                    .projects-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .page-title {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </div>
    );
}