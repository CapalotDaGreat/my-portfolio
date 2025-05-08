"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { FaCode, FaServer, FaPalette, FaDatabase, FaCloudUploadAlt, FaMobile } from 'react-icons/fa';

export default function AboutPage() {
    const skillsRef = useRef<HTMLDivElement>(null);

    const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px 0px" });

    const skills = [
        {
            name: "Frontend",
            proficiency: 90,
            category: "Development",
            description: "React, Next.js, TypeScript, HTML/CSS, Tailwind",
            icon: <FaCode />
        },
        {
            name: "Backend",
            proficiency: 85,
            category: "Development",
            description: "Node.js, Express, Python, RESTful APIs",
            icon: <FaServer />
        },
        {
            name: "UI/UX Design",
            proficiency: 90,
            category: "Design",
            description: "Figma, Adobe XD, responsive design, user experience",
            icon: <FaPalette />
        },
        {
            name: "Database",
            proficiency: 85,
            category: "Development",
            description: "MongoDB, Flask, MySQL",
            icon: <FaDatabase />
        },
        {
            name: "DevOps",
            proficiency: 75,
            category: "Development",
            description: "Docker, AWS, Vercel, -",
            icon: <FaCloudUploadAlt />
        },
        {
            name: "Mobile",
            proficiency: 70,
            category: "Development",
            description: "React Native, Flutter, responsive web design",
            icon: <FaMobile />
        }
    ];

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * i,
                duration: 0.5,
                ease: "easeOut",
            }
        }),
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* About Header */}
            <div className="relative py-16 mb-16 overflow-hidden rounded-2xl bg-surface-color">
                <div className="animated-bg">
                    <div className="animated-bg__shape"></div>
                    <div className="animated-bg__shape"></div>
                    <div className="animated-bg__shape"></div>
                    <div className="animated-bg__shape"></div>
                </div>

                <motion.div
                    className="text-center mb-8 relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >
                    <motion.h1
                        className="section-title mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        Über mich
                    </motion.h1>
                    <motion.p
                        className="section-description max-w-4xl mx-auto whitespace-nowrap overflow-x-auto md:whitespace-normal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Erfahren Sie mehr über meine Hintergründe, Fähigkeiten und Expertise im Bereich der Webentwicklung.
                    </motion.p>
                </motion.div>
            </div>

            {/* About Section */}
            <section id="about" className="mb-24 relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-72 h-72 bg-secondary-color/5 rounded-full blur-3xl pointer-events-none"></div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    <div className="bg-surface-color p-8 rounded-xl shadow-md">
                        <h2 className="text-2xl font-bold mb-6 text-primary-color">Mein Hintergrund</h2>
                        <p className="mb-4 text-lg">
                            Mit Erfahrung in der Web-Entwicklung habe ich mich auf die Erstellung
                            vollständiger digitaler Lösungen spezialisiert. Meine Expertise reicht vom <strong>Benutzerinterface</strong> bis
                            zur <strong>Serverarchitektur</strong>, wodurch ich den gesamten Entwicklungsprozess abdecken kann.
                        </p>

                        <p className="mb-4">
                            Ich kombiniere technisches Know-how mit einem ausgeprägten Sinn für Benutzerfreundlichkeit
                            und erstelle so Webanwendungen, die sowohl ästhetisch ansprechend als auch leistungsstark sind.
                            Mein Ziel ist es, die besten Praktiken der Entwicklung mit innovativen Lösungen zu verbinden.
                        </p>
                    </div>

                    <div className="flex flex-col gap-8">
                        <motion.div
                            className="card hover:shadow-lg transition-shadow"
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-xl mb-3 flex items-center">
                <span className="inline-block w-8 h-8 mr-3 rounded-full bg-primary-color/10 flex items-center justify-center text-primary-color">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 7.63636C14 9.92222 11.9853 11.7273 9.5 11.7273C7.01472 11.7273 5 9.92222 5 7.63636C5 5.35051 7.01472 3.54545 9.5 3.54545C11.9853 3.54545 14 5.35051 14 7.63636Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.5 15C5.35786 15 2 18.0833 2 21.8182H17C17 18.0833 13.6421 15 9.5 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 11.5L22 16M22 11.5L17.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                                Frontend-Entwicklung
                            </h3>
                            <p>
                                Erstellung moderner, reaktiver Benutzeroberflächen mit Next.js, React und
                                fortschrittlichen CSS-Techniken. Fokus auf Performance und Barrierefreiheit.
                            </p>
                        </motion.div>

                        <motion.div
                            className="card hover:shadow-lg transition-shadow"
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-xl mb-3 flex items-center">
                <span className="inline-block w-8 h-8 mr-3 rounded-full bg-primary-color/10 flex items-center justify-center text-primary-color">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 7v10m-2 2V5m-4 2v10M9 7v10M3 7v10m2 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                                Backend-Entwicklung
                            </h3>
                            <p>
                                Implementierung robuster Serverlogik mit Node.js, Express und diversen Datenbanktechnologien.
                                Entwicklung skalierbarer APIs und Microservices.
                            </p>
                        </motion.div>

                        <motion.div
                            className="card hover:shadow-lg transition-shadow"
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-xl mb-3 flex items-center">
                <span className="inline-block w-8 h-8 mr-3 rounded-full bg-primary-color/10 flex items-center justify-center text-primary-color">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"/>
                    <path d="M9 17.25h6M8.775 7.25h.9c.695 0 1.043 0 1.295.148.223.131.4.34.495.586.106.279.106.618.106 1.296v4.44c0 .677 0 1.016-.106 1.295a1.25 1.25 0 0 1-.495.587c-.252.148-.6.148-1.295.148h-.9c-.695 0-1.043 0-1.295-.148a1.25 1.25 0 0 1-.495-.587c-.106-.279-.106-.618-.106-1.296V9.28c0-.678 0-1.017.106-1.296.096-.246.272-.455.495-.586.252-.148.6-.148 1.295-.148ZM14.325 7.25h.9c.695 0 1.043 0 1.295.148.223.131.4.34.495.586.106.279.106.618.106 1.296v4.44c0 .677 0 1.016-.106 1.295a1.25 1.25 0 0 1-.495.587c-.252.148-.6.148-1.295.148h-.9c-.695 0-1.043 0-1.295-.148a1.25 1.25 0 0 1-.495-.587c-.106-.279-.106-.618-.106-1.296V9.28c0-.678 0-1.017.106-1.296.096-.246.272-.455.495-.586.252-.148.6-.148 1.295-.148Z" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"/>
                  </svg>
                </span>
                                DevOps & Deployment
                            </h3>
                            <p>
                                Optimierung des Entwicklungszyklus durch CI/CD-Pipelines, Containerisierung und
                                effizientes Deployment auf verschiedenen Cloud-Plattformen.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Skills Section */}
            <section ref={skillsRef} className="mb-24">
                <motion.h2
                    className="section-title mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    Meine Fähigkeiten
                </motion.h2>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={skill.name} className="skill-item">
                            <div className="skill-card">
                                <div className="skill-header">
                                    <div className="skill-icon">
                                        {skill.icon}
                                    </div>
                                    <h3 className="skill-title">{skill.name}</h3>
                                </div>

                                <div className="skill-content">
                                    <div className="skill-progress-container">
                                        <div className="skill-progress-header">
                                            <span>Erfahrung</span>
                                            <span>{skill.proficiency}%</span>
                                        </div>
                                        <div className="skill-progress-bar-bg">
                                            <motion.div
                                                className="skill-progress-bar"
                                                initial={{ width: 0 }}
                                                animate={isSkillsInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                                                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                            ></motion.div>
                                        </div>
                                    </div>

                                    <p className="skill-description">{skill.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 text-center bg-surface-color rounded-2xl shadow-md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-xl mx-auto"
                >
                    <h2 className="text-2xl font-bold mb-6">Interessiert an einer Zusammenarbeit?</h2>
                    <p className="mb-8">Sehen Sie sich meine Projekte an, um mehr über meine Arbeit zu erfahren.</p>
                    <Link href="/projects" className="button inline-flex items-center gap-2">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                            <path d="M7 12h10m-5-5v10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                        </svg>
                        Meine Projekte ansehen
                    </Link>
                </motion.div>
            </section>

            <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
          width: 100%;
        }

        @media (min-width: 640px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .skill-item {
          width: 100%;
          height: 100%;
        }

        .skill-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background-color: var(--card-bg);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          padding: 1.5rem;
        }

        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .skill-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          border-radius: 9999px;
          background-color: rgba(var(--primary-rgb), 0.1);
          color: var(--primary-color);
          font-size: 1.25rem;
        }

        .skill-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skill-content {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .skill-progress-container {
          margin-bottom: 1rem;
        }

        .skill-progress-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .skill-progress-bar-bg {
          width: 100%;
          height: 0.625rem;
          background-color: var(--background-color);
          border-radius: 9999px;
          overflow: hidden;
        }

        .skill-progress-bar {
          height: 100%;
          background-color: var(--primary-color);
          border-radius: 9999px;
        }

        .skill-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-top: 0.75rem;
        }
      `}</style>
        </div>
    );
}