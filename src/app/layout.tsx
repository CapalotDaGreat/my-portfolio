"use client";

import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

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
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-warm-light text-warm-dark transition-colors duration-300`}>
        <header className="p-4 bg-warm-accent text-white">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Mein Portfolio</h1>
                <ul className="flex gap-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/projects">Projekte</Link></li>
                    <li><Link href="/about">Über mich</Link></li>
                    <li><Link href="/contact">Kontakt</Link></li>
                    <li><Link href="/impressum">Impressum</Link></li>
                    <li><Link href="/datenschutz">Datenschutz</Link></li>
                </ul>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="ml-4 px-3 py-1 border rounded text-sm bg-white text-black hover:bg-gray-200"
                >
                    {darkMode ? "☀️ Hell" : "🌙 Dunkel"}
                </button>
            </nav>
        </header>

        <main className="container mx-auto p-4">{children}</main>

        <footer className="p-4 bg-warm-accent text-white text-center">
            <p>&copy; {new Date().getFullYear()} Cadima-Mukasa Lusiola</p>
        </footer>
        </body>
        </html>
    );
}
