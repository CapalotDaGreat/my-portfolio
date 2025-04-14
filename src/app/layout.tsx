"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
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
                    transition: background-color 0.3s;
                }

                .nav-link:hover {
                    background-color: rgba(255, 255, 255, 0.1);
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
                }

                main {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem;
                }
            `}</style>
        </head>
        <body className={inter.className}>
        <header>
            <nav className="container">
                <h1>Mein Portfolio</h1>
                <ul>
                    <li><Link href="/" className="nav-link">Home</Link></li>
                    <li><Link href="/projects" className="nav-link">Projekte</Link></li>
                    <li><Link href="/about" className="nav-link">Über mich</Link></li>
                    <li><Link href="/contact" className="nav-link">Kontakt</Link></li>
                    <li><Link href="/impressum" className="nav-link">Impressum</Link></li>
                    <li><Link href="/datenschutz" className="nav-link">Datenschutz</Link></li>
                </ul>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="theme-toggle"
                >
                    {darkMode ? "☀️ Hell" : "🌙 Dunkel"}
                </button>
            </nav>
        </header>

        <main>{children}</main>

        <footer>
            <p>&copy; {new Date().getFullYear()} Cadima-Mukasa Lusiola</p>
        </footer>
        </body>
        </html>
    );
}
