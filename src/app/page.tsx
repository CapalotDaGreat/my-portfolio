"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="hero-section">
            {/* Animated Background */}
            <div className="animated-bg">
                <div className="animated-bg__shape"></div>
                <div className="animated-bg__shape"></div>
                <div className="animated-bg__shape"></div>
                <div className="animated-bg__shape"></div>
            </div>

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-xl"
                >
                    <motion.h1
                        className="mb-md text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="block text-primary-color">Cadima Lusiola</span>
                        <span className="mt-4 block">Applikationsentwickler</span>
                    </motion.h1>

                    <motion.div
                        className="mb-xl text-xl md:text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <p className="mb-lg">
                            Als passionierter Applikationsentwickler kreiere ich nahtlose digitale Erlebnisse,
                            die sowohl benutzerfreundlich als auch technisch robust sind.
                            <span className="typing-cursor"></span>
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col md:flex-row gap-md justify-center mt-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link href="/about" className="button">
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Über mich
                        </Link>
                        <Link href="/projects" className="button secondary">
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                <path d="M7 12h10m-5-5v10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                            </svg>
                            Projekte ansehen
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="mt-2xl text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a href="mailto:cadima.lusiola@student.ksh.ch" className="text-primary-color hover:underline inline-flex items-center gap-2">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5 18 14.8571 12M9.14286 12 2.5 18M2 7l8.1649 5.7154a2.4 2.4 0 0 0 3.6702 0L22 7M6.8 20h10.4c1.6802 0 2.5202 0 3.162-.327a3 3 0 0 0 1.311-1.311c.327-.6418.327-1.4818.327-3.162V8.8c0-1.6802 0-2.5202-.327-3.162a3 3 0 0 0-1.311-1.311C19.7202 4 18.8802 4 17.2 4H6.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C2 6.2798 2 7.1198 2 8.8v6.4c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C4.2798 20 5.1198 20 6.8 20Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                        </svg>
                        cadima.lusiola@student.ksh.ch
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
