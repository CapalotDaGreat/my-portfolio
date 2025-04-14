"use client";

import React from "react";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    link: string;
}

export default function ProjectsPage() {
    const projects: Project[] = [
        {
            title: "Portfolio-Website",
            description: "Mein persönliches Portfolio mit Next.js und Tailwind CSS.",
            link: "https://github.com/CapalotDaGreat",
        },
        {
            title: "Quiz-App",
            description: "Interaktive Quiz-Anwendung mit JavaScript.",
            link: "#",
        },
        {
            title: "Rechner",
            description: "Ein moderner Rechner mit OOP in JavaScript.",
            link: "#",
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="projects-grid"
        >
            <style jsx>{`
                .projects-grid {
                    display: grid;
                    gap: 2rem;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    padding: 2rem;
                }

                .project-card {
                    background-color: var(--card-bg);
                    color: var(--text-color);
                    border-radius: 8px;
                    padding: 1.5rem;
                    box-shadow: 0 4px 6px var(--card-shadow);
                    transition: all 0.3s;
                    text-decoration: none;
                    display: block;
                }

                .project-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 16px var(--card-shadow);
                }

                .project-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    color: var(--primary-color);
                }

                .project-description {
                    font-size: 0.875rem;
                    color: var(--text-color);
                    opacity: 0.8;
                }
            `}</style>
            {projects.map((project, index) => (
                <motion.a
                    key={index}
                    variants={item}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                </motion.a>
            ))}
        </motion.div>
    );
}