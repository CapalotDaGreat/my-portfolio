"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
    return (
        <div className="home-container">
            <style jsx>{`
                .home-container {
                    text-align: center;
                    padding: 2rem;
                }

                .hero {
                    margin-bottom: 3rem;
                }

                h1 {
                    font-size: 3rem;
                    color: var(--primary-color);
                    margin-bottom: 1rem;
                }

                .subtitle {
                    font-size: 1.5rem;
                    color: var(--text-color);
                    opacity: 0.8;
                    margin-bottom: 2rem;
                }

                .cta-button {
                    display: inline-block;
                    background-color: var(--primary-color);
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    text-decoration: none;
                    transition: all 0.3s;
                    margin: 0.5rem;
                }

                .cta-button:hover {
                    background-color: var(--secondary-color);
                    transform: translateY(-3px);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }

                .github-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--text-color);
                    text-decoration: none;
                    margin-top: 2rem;
                    padding: 0.5rem 1rem;
                    border: 1px solid var(--text-color);
                    border-radius: 8px;
                    transition: all 0.3s;
                }

                .github-link:hover {
                    background-color: var(--text-color);
                    color: var(--background-color);
                    transform: translateY(-3px);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
            `}</style>

            <motion.div
                className="hero"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Willkommen auf meinem Portfolio
                </motion.h1>
                <motion.p
                    className="subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Ich bin ein leidenschaftlicher Entwickler, der moderne und benutzerfreundliche Webanwendungen erstellt.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <a
                        href="https://github.com/CapalotDaGreat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        <svg height="24" viewBox="0 0 16 16" width="24" fill="currentColor">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                        GitHub Profil
                    </a>
                </motion.div>
            </motion.div>

            <main>
                <p className="description">
                    Willkommen auf meiner Portfolio-Website. Hier finden Sie eine Übersicht meiner Projekte und Fähigkeiten.
                </p>
                <div className="skills">
                    <h2>Meine Fähigkeiten</h2>
                    <ul>
                        <li>Webentwicklung</li>
                        <li>UI/UX Design</li>
                        <li>Projektmanagement</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
