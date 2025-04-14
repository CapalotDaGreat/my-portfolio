"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import PageTransition from "./PageTransition";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <html lang="de">
        <head>
            <style jsx global>{`
                    .nav-link {
                        color: var(--header-text);
                        text-decoration: none;
                        padding: 0.5rem 1rem;
                        border-radius: 4px;
                        transition: all 0.3s;
                        position: relative;
                    }

                    .nav-link::after {
                        content: '';
                        position: absolute;
                        bottom: -2px;
                        left: 0;
                        width: 0;
                        height: 2px;
                        background-color: var(--header-text);
                        transition: width 0.3s;
                    }

                    .nav-link:hover::after {
                        width: 100%;
                    }

                    .theme-toggle {
                        background-color: var(--card-bg);
                        color: var(--text-color);
                        border: 1px solid var(--text-color);
                        padding: 0.5rem 1rem;
                        border-radius: 4px;
                        cursor: pointer;
                        transition: all 0.3s;
                    }

                    .theme-toggle:hover {
                        background-color: var(--text-color);
                        color: var(--background-color);
                        transform: scale(1.05);
                    }

                    main {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 2rem;
                        min-height: calc(100vh - 200px); /* Account for header and footer */
                    }

                    footer {
                        position: fixed;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background-color: var(--header-bg);
                        color: var(--header-text);
                        padding: 1rem;
                        text-align: center;
                    }
                `}</style>
        </head>
        <body className={inter.className}>
        <header>
            <nav className="container">
                <h1>Cadima Lusiola</h1>
                <ul>
                    <li><Link href="/" className="nav-link">Home</Link></li>
                    <li><Link href="/projects" className="nav-link">Projekte</Link></li>
                    <li><Link href="/about" className="nav-link">Über mich</Link></li>
                    <li><Link href="/contact" className="nav-link">Kontakt</Link></li>
                    <li><Link href="/impressum" className="nav-link">Impressum</Link></li>
                    <li><Link href="/datenschutz" className="nav-link">Datenschutz</Link></li>
                </ul>
                <li>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="theme-toggle"
                    >
                        {darkMode ? 'dunkel' : 'hell'}
                    </button>
                </li>
            </nav>
        </header>

        <main>
            <PageTransition>
                {children}
            </PageTransition>
        </main>

        <footer>
            <p>&copy; {new Date().getFullYear()} Cadima-Mukasa Lusiola</p>
        </footer>
        </body>
        </html>
    );
}
