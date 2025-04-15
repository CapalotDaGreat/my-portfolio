"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
    const skills = [
        { name: "React / Next.js", level: 90, category: "Frontend" },
        { name: "TypeScript", level: 85, category: "Frontend" },
        { name: "CSS / Tailwind", level: 95, category: "Frontend" },
        { name: "Node.js", level: 80, category: "Backend" },
        { name: "Express", level: 75, category: "Backend" },
        { name: "MongoDB", level: 70, category: "Backend" },
        { name: "PostgreSQL", level: 75, category: "Backend" },
        { name: "RESTful APIs", level: 85, category: "Backend" },
        { name: "UI/UX Design", level: 80, category: "Design" },
        { name: "Git / GitHub", level: 85, category: "Tools" },
        { name: "Docker", level: 70, category: "DevOps" },
        { name: "Testing", level: 75, category: "QA" },
    ];

    const projects = [
        {
            title: "Portfolio-Website",
            description: "Responsive Portfolio mit Next.js, framer-motion und fortschrittlichem Theme-Management. Features wie dynamische Komponenten und Animationen zeigen meine Frontend-Expertise.",
            tags: ["Next.js", "React", "CSS", "Framer Motion"],
            type: "Frontend"
        },
        {
            title: "E-Commerce Backend",
            description: "Skalierbares Backend-System mit Node.js und Express für einen Online-Shop. Implementierung von Nutzerauthentifizierung, Zahlungsverarbeitung und Bestandsverwaltung.",
            tags: ["Node.js", "Express", "MongoDB", "JWT"],
            type: "Backend"
        },
        {
            title: "Task Management API",
            description: "RESTful API mit Express und PostgreSQL für ein Aufgabenverwaltungssystem. Features wie Nutzerauthentifizierung, Teamzuweisung und automatische Erinnerungen.",
            tags: ["Node.js", "Express", "PostgreSQL", "REST"],
            type: "Backend"
        },
        {
            title: "Social Media Dashboard",
            description: "Interaktives Dashboard zur Analyse und Verwaltung von Social-Media-Aktivitäten mit reaktiver UI und Echtzeit-Datenvisualisierung.",
            tags: ["React", "D3.js", "Material UI", "Socket.io"],
            type: "Fullstack"
        },
        {
            title: "Content Management System",
            description: "Benutzerdefiniertes CMS mit Admin-Panel, Medien-Bibliothek und dynamischer Inhaltsbearbeitung, mit Fokus auf Barrierefreiheit und Benutzerfreundlichkeit.",
            tags: ["Next.js", "Node.js", "MongoDB", "AWS S3"],
            type: "Fullstack"
        },
        {
            title: "Microservice Architecture",
            description: "Entwicklung einer Microservice-Architektur für einen Dienst mit hohem Datenvolumen unter Verwendung von Docker und Kubernetes für Deployment und Skalierung.",
            tags: ["Node.js", "Docker", "Kubernetes", "RabbitMQ"],
            type: "DevOps"
        },
    ];

    const experiences = [
        {
            title: "Senior Fullstack Developer",
            company: "Tech Innovations GmbH",
            period: "2021 - Present",
            description: "Entwicklung und Wartung von skalierbaren Webanwendungen mit React, Node.js und PostgreSQL. Implementierung von CI/CD-Pipelines und Leitung des Frontend-Teams."
        },
        {
            title: "Backend Developer",
            company: "DataSystems AG",
            period: "2019 - 2021",
            description: "Entwicklung von RESTful APIs und Microservices mit Node.js und MongoDB. Integration von Zahlungsdienstleistern und Optimierung von Datenbankabfragen."
        },
        {
            title: "Frontend Developer",
            company: "WebCreate",
            period: "2017 - 2019",
            description: "Entwicklung von responsiven und barrierefreien Benutzeroberflächen mit React und CSS. Implementierung von Animationen und State Management."
        },
    ];

    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px 0px" });
    const isProjectsInView = useInView(projectsRef, { once: true, margin: "-100px 0px" });
    const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px 0px" });
    const isExperienceInView = useInView(experienceRef, { once: true, margin: "-100px 0px" });
    const isContactInView = useInView(contactRef, { once: true, margin: "-100px 0px" });

    // Animation variants
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

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const useAnimateOnView = (isInView: boolean) => {
        return isInView;
    };

    return (
        <div className="flex flex-col gap-section">
            {/* Hero Section */}
            <section className="py-section">
                <div className="flex flex-col md:flex-row items-center gap-lg">
                    <motion.div
                        className="md:w-2/3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="mb-md">
                            <motion.span
                                className="block text-primary-color"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                            >
                                Fullstack Developer
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                Ich entwickle Lösungen von Frontend bis Backend
                            </motion.span>
                        </h1>

                        <motion.p
                            className="mb-lg text-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            Als passionierter Fullstack-Entwickler kreiere ich nahtlose digitale Erlebnisse,
                            die sowohl benutzerfreundlich als auch technisch robust sind.
                            Meine Expertise umfasst den gesamten Entwicklungsprozess -
                            vom Design über Frontend bis zur Backend-Implementierung.
                        </motion.p>

                        <motion.div
                            className="flex gap-md flex-wrap"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="button"
                            >
                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                    <path d="M7 12h10m-5-5v10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                </svg>
                                Projekte ansehen
                            </a>
                            <a
                                href="mailto:clusiola4@gmail.com"
                                className="button secondary"
                            >
                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.5 18 14.8571 12M9.14286 12 2.5 18M2 7l8.1649 5.7154a2.4 2.4 0 0 0 3.6702 0L22 7M6.8 20h10.4c1.6802 0 2.5202 0 3.162-.327a3 3 0 0 0 1.311-1.311c.327-.6418.327-1.4818.327-3.162V8.8c0-1.6802 0-2.5202-.327-3.162a3 3 0 0 0-1.311-1.311C19.7202 4 18.8802 4 17.2 4H6.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C2 6.2798 2 7.1198 2 8.8v6.4c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C4.2798 20 5.1198 20 6.8 20Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                </svg>
                                Kontakt
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="md:w-1/3 mt-8 md:mt-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <div className="relative w-64 h-64 mx-auto rounded-full bg-primary-color/10 flex items-center justify-center">
                            <svg className="w-32 h-32 text-primary-color" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section ref={aboutRef} id="about" className="py-section">
                <>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Über mich
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <div>
                            <p className="mb-md text-lg">
                                Mit <strong>5+ Jahren Erfahrung</strong> in der Web-Entwicklung habe ich mich auf die Erstellung
                                vollständiger digitaler Lösungen spezialisiert. Meine Expertise reicht vom <strong>Benutzerinterface</strong> bis
                                zur <strong>Serverarchitektur</strong>, wodurch ich den gesamten Entwicklungsprozess abdecken kann.
                            </p>

                            <p className="mb-md">
                                Ich kombiniere technisches Know-how mit einem ausgeprägten Sinn für Benutzerfreundlichkeit
                                und erstelle so Webanwendungen, die sowohl ästhetisch ansprechend als auch leistungsstark sind.
                                Mein Ziel ist es, die besten Praktiken der Entwicklung mit innovativen Lösungen zu verbinden.
                            </p>
                        </div>

                        <div className="flex flex-col gap-md">
                            <div className="card">
                                <h3 className="text-xl mb-sm">Frontend-Entwicklung</h3>
                                <p>
                                    Erstellung moderner, reaktiver Benutzeroberflächen mit Next.js, React und
                                    fortschrittlichen CSS-Techniken. Fokus auf Performance und Barrierefreiheit.
                                </p>
                            </div>

                            <div className="card">
                                <h3 className="text-xl mb-sm">Backend-Entwicklung</h3>
                                <p>
                                    Implementierung robuster Serverlogik mit Node.js, Express und diversen Datenbanktechnologien.
                                    Entwicklung skalierbarer APIs und Microservices.
                                </p>
                            </div>

                            <div className="card">
                                <h3 className="text-xl mb-sm">DevOps & Deployment</h3>
                                <p>
                                    Optimierung des Entwicklungszyklus durch CI/CD-Pipelines, Containerisierung und
                                    effizientes Deployment auf verschiedenen Cloud-Plattformen.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            </section>

            {/* Projects Section */}
            <section ref={projectsRef} id="projects" className="py-section bg-surface">
                <>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Meine Projekte
                    </motion.h2>

                    <motion.p
                        className="section-description"
                        initial={{ opacity: 0 }}
                        animate={isProjectsInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        Eine Auswahl meiner Projekte aus verschiedenen Bereichen der Webentwicklung,
                        die meine vielseitigen Fähigkeiten als Fullstack-Entwickler demonstrieren.
                    </motion.p>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate={isProjectsInView ? "show" : ""}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl mt-xl"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                custom={index}
                                className="card project-card"
                            >
                                <span className="badge mb-sm">{project.type}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </>
            </section>

            {/* Skills Section */}
            <section ref={skillsRef} id="skills" className="py-section">
                <>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Meine Fähigkeiten
                    </motion.h2>

                    <motion.p
                        className="section-description"
                        initial={{ opacity: 0 }}
                        animate={isSkillsInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        Als Fullstack-Entwickler beherrsche ich verschiedene Technologien und Frameworks
                        für die Entwicklung moderner, skalierbarer Webanwendungen.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-md mt-xl">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                custom={index}
                                variants={fadeIn}
                                initial="initial"
                                animate={isSkillsInView ? "animate" : ""}
                                className="card"
                            >
                                <div className="flex justify-between items-center mb-sm">
                                    <div>
                                        <h3 className="text-lg m-0">{skill.name}</h3>
                                        <span className="text-xs text-text-tertiary font-medium">{skill.category}</span>
                                    </div>
                                    <span className="text-sm font-medium">{skill.level}%</span>
                                </div>
                                <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-primary-color"
                                        initial={{ width: 0 }}
                                        animate={isSkillsInView ? { width: `${skill.level}%` } : {}}
                                        transition={{ duration: 1, delay: 0.3 + (index * 0.05) }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </>
            </section>

            {/* Experience Section */}
            <section ref={experienceRef} id="experience" className="py-section bg-surface">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    Berufserfahrung
                </motion.h2>

                <motion.p
                    className="section-description"
                    initial={{ opacity: 0 }}
                    animate={isExperienceInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    Meine bisherigen Stationen in der professionellen Softwareentwicklung.
                </motion.p>

                <div className="mt-xl relative before:absolute before:h-full before:w-0.5 before:bg-border-color before:left-[7px] before:top-0 md:before:left-1/2">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col md:flex-row md:items-center md:justify-between mb-xl relative ${
                                index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                        >
                            <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                <h3 className="text-xl mb-1">{exp.title}</h3>
                                <p className="text-primary-color font-medium">{exp.company}</p>
                                <span className="text-sm text-text-tertiary block mb-2">{exp.period}</span>
                            </div>

                            <div className="experience-dot absolute left-0 top-[6px] w-3.5 h-3.5 rounded-full bg-primary-color md:left-1/2 md:ml-[-7px]"></div>

                            <div className="pl-8 md:pl-0 md:w-5/12">
                                <div className="card">
                                    <p className="m-0">{exp.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section ref={contactRef} id="contact" className="py-section">
                <motion.div
                    className="card text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isContactInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-md">Lassen Sie uns zusammenarbeiten!</h2>
                    <p className="mb-lg">
                        Ich bin stets auf der Suche nach neuen Herausforderungen und spannenden Projekten.
                        Nehmen Sie bitte Kontakt mit mir auf!
                    </p>
                    <a href="mailto:clusiola4@gmail.com" className="button">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 9h10M7 13h5m-9 1.5c0 2.3079 0 3.4619.6862 4.2259a3 3 0 0 0 .8879.8879C5.0381 21 6.192 21 8.5 21h7c2.3079 0 3.4619 0 4.2259-.6862a3 3 0 0 0 .8879-.8879C21 17.9619 21 16.8079 21 14.5v-5c0-2.3079 0-3.4619-.6862-4.2259a3 3 0 0 0-.8879-.8879C18.9619 3 17.8079 3 15.5 3h-7c-2.3079 0-3.4619 0-4.2259.6862a3 3 0 0 0-.8879.8879C3 6.0381 3 7.192 3 9.5v5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                        </svg>
                        Kontakt aufnehmen
                    </a>
                </motion.div>
            </section>
        </div>
    );
}
