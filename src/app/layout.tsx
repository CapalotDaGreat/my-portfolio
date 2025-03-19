import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Mein Portfolio",
    description: "Portfolio mit Next.js",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* Header */}
        <header className="p-4 bg-gray-900 text-white">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Mein Portfolio</h1>
                <ul className="flex gap-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">Über mich</Link></li>
                    <li><Link href="/projects">Projekte</Link></li>
                    <li><Link href="/contact">Kontakt</Link></li>
                    <li><Link href="/impressum">Impressum</Link></li>
                    <li><Link href="/datenschutz">Datenschutz</Link></li>
                </ul>
            </nav>
        </header>

        {/* Hauptinhalt */}
        <main className="container mx-auto p-4">{children}</main>

        {/* Footer */}
        <footer className="p-4 bg-gray-900 text-white text-center">
            <p>&copy; {new Date().getFullYear()} Cadima-Mukasa Lusiola.</p>
        </footer>

        </body>
        </html>
    );
}
