"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="sticky top-0 bg-surface z-50 border-b border-border-color shadow-sm">
            <div className="container flex justify-between items-center py-4">
                <Link href="/" className="font-bold text-lg text-primary-color hover:text-primary-dark transition-colors">
                    Cadima Lusiola
                </Link>

                <nav className="flex items-center gap-4">
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/about" className="nav-link">Über mich</Link>
                    <Link href="/projects" className="nav-link">Projekte</Link>
                </nav>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="theme-toggle ml-auto"
                    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {darkMode ? (
                        <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Hell
                        </>
                    ) : (
                        <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Dunkel
                        </>
                    )}
                </button>
            </div>
        </header>
    );
}


