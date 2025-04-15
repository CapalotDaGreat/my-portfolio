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
        <html lang="en">
        <head>
            <style jsx global>{`
                    .container {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 0 1rem;
                    }
                    
                    header {
                        padding: 1rem 0;
                        background-color: var(--header-bg);
                        color: var(--header-text);
                    }
                    
                    header nav {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    
                    header h1 {
                        font-size: 1.5rem;
                        font-weight: 700;
                    }
                    
                    header ul {
                        display: flex;
                        gap: 1rem;
                        list-style: none;
                        align-items: center;
                    }
                    
                    header li {
                        display: inline-block;
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
                    <li><Link href="/datenschutz" className="nav-link">Datenschutz</Link></li>
                    <li>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="theme-toggle"
                        >
                            {darkMode ? '🌙 Dunkel' : '☀️ Hell'}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <PageTransition>
                {children}
            </PageTransition>
        </main>
        <footer>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Cadima Lusiola. Alle Rechte vorbehalten.</p>
            </div>
        </footer>
        </body>
        </html>
    );
}
