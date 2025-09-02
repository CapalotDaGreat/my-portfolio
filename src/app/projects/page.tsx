"use client";

import React from "react";
import { motion } from "framer-motion";


export default function ProjectsPage() {
    const projects = [
        {
            title: "Konkursfälle der Schweiz Webseite",
            description: "Eine Webseite, die Informationen über Konkursfälle in der Schweiz bereitstellt.",
            tags: ["Javascript", "HTML", "CSS"],
            type: "Backend",
            link: "https://konkursfaelle.vercel.app/",
            githubLink: "https://github.com/im23b-mahfuzr/PrWr_Projekt"
        },
        {
            title: "Smart Taschenrechner",
            description: "Ein Taschenrechner, der nicht nur die Grundrechenarten beherrscht, sondern auch komplexe mathematische Operationen durchführen kann.",
            tags: ["Javascript", "HTML", "CSS"],
            type: "Frontend",
            link: "https://taschenrechner-pesv.vercel.app/",
            githubLink: "https://github.com/CapalotDaGreat/Taschenrechner"
        },
        {
            title: "Mensa-App",
            description: "Eine Web-App, die die Mensa-Speiseplan für die Mensa-BZZ anzeigt.",
            tags: ["HTML5", "CSS", "JavaScript"],
            type: "Fullstack",
            link: "https://mensa-app-nine.vercel.app/",
            githubLink: "https://github.com/im23b-busere/Mensa-App"
        },
        {
            title: "Budget-Tracker",
            description: "Ein Budget-Tracker, der Ihnen hilft, Ihr Geld besser zu verwalten.",
            tags: ["JavaScript", "CSS", "HTML"],
            type: "Frontend",
            link: "https://budget-tracker-chi-one.vercel.app/",
            githubLink: "https://github.com/CapalotDaGreat/Budget-Tracker"
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Projects Header */}
            <div className="relative py-16 mb-16 overflow-hidden rounded-2xl bg-surface-color">
                <div className="animated-bg">
                    <div className="animated-bg__shape"></div>
                    <div className="animated-bg__shape"></div>
                    <div className="animated-bg__shape"></div>
                    <div className="animated-bg__shape"></div>
                </div>

                <motion.div
                    className="text-center mb-0 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="section-title mb-4">Meine Projekte</h1>
                    <p className="section-description max-w-2xl mx-auto">
                        Eine Auswahl meiner Projekte aus verschiedenen Bereichen der Webentwicklung.
                    </p>
                </motion.div>
            </div>

            {/* Projects Grid */}
            <section className="mb-24">
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-item">
                            <div className="project-box">
                                <div className="project-top-bar"></div>

                                <a href={project.link} className="project-website-link">
                                    <div className="project-inner">
                                        <span className="project-type">{project.type}</span>
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>

                                        <div className="project-tags">
                                            {project.tags.slice(0, 3).map((tag, i) => (
                                                <span key={i} className="project-tag">{tag}</span>
                                            ))}
                                        </div>

                                        <div className="project-actions">
                      <span className="view-project">
                        Projekt ansehen
                        <svg
                            className="arrow-icon"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </span>

                                            <a
                                                href={project.githubLink}
                                                className="github-button"
                                                onClick={(e) => e.stopPropagation()}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                                </svg>
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 text-center bg-surface-color rounded-2xl shadow-md mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-xl mx-auto"
                >
                    <h2 className="text-2xl font-bold mb-6">Haben Sie ein spannendes Projekt?</h2>
                    <p className="mb-8 text-text-secondary">
                        Ich bin stets auf der Suche nach neuen Herausforderungen und spannenden Projekten.
                        Nehmen Sie bitte Kontakt mit mir auf!
                    </p>
                    <motion.a
                        href="mailto:clusiola4@gmail.com"
                        className="button inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 9h10M7 13h5m-9 1.5c0 2.3079 0 3.4619.6862 4.2259a3 3 0 0 0 .8879.8879C5.0381 21 6.192 21 8.5 21h7c2.3079 0 3.4619 0 4.2259-.6862a3 3 0 0 0 .8879-.8879C21 17.9619 21 16.8079 21 14.5v-5c0-2.3079 0-3.4619-.6862-4.2259a3 3 0 0 0-.8879-.8879C18.9619 3 17.8079 3 15.5 3h-7c-2.3079 0-3.4619 0-4.2259.6862a3 3 0 0 0-.8879.8879C3 6.0381 3 7.192 3 9.5v5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                        </svg>
                        Kontakt aufnehmen
                    </motion.a>
                </motion.div>
            </section>

            <style jsx>{`
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 2rem;
                    width: 100%;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                @media (min-width: 640px) {
                    .projects-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (min-width: 1024px) {
                    .projects-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                .project-item {
                    width: 100%;
                    height: 100%;
                }

                .project-box {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    background-color: var(--card-bg);
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                }

                .project-box:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
                }

                .project-top-bar {
                    height: 8px;
                    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
                    width: 100%;
                }

                .project-website-link {
                    text-decoration: none;
                    color: inherit;
                    display: block;
                    height: 100%;
                }

                .project-inner {
                    padding: 1.75rem;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }

                .project-type {
                    display: inline-block;
                    padding: 0.25rem 0.75rem;
                    font-size: 0.75rem;
                    font-weight: 600;
                    border-radius: 9999px;
                    background-color: rgba(var(--primary-rgb), 0.1);
                    color: var(--primary-color);
                    margin-bottom: 1rem;
                    align-self: flex-start;
                }

                .project-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 0.75rem;
                    color: var(--text-primary);
                }

                .project-description {
                    color: var(--text-secondary);
                    margin-bottom: 1.5rem;
                    line-height: 1.7;
                    font-size: 0.975rem;
                    flex-grow: 1;
                }

                .project-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                }

                .project-tag {
                    padding: 0.25rem 0.75rem;
                    font-size: 0.75rem;
                    border-radius: 9999px;
                    background-color: var(--background-color);
                    color: var(--text-secondary);
                    border: 1px solid var(--border-color);
                }

                .project-actions {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: auto;
                }

                .view-project {
                    display: inline-flex;
                    align-items: center;
                    color: var(--primary-color);
                    font-weight: 500;
                    font-size: 0.875rem;
                }

                .arrow-icon {
                    margin-left: 0.5rem;
                    width: 1rem;
                    height: 1rem;
                }

                .github-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    background-color: #24292e;
                    color: white;
                    border-radius: 0.375rem;
                    font-size: 0.875rem;
                    font-weight: 500;
                    transition: all 0.2s ease;
                    z-index: 10;
                    position: relative;
                }

                .github-button:hover {
                    background-color: #2c3136;
                }
            `}</style>
        </div>
    );
} 