import { Inter } from "next/font/google";
import "./globals.css";
import PageTransition from "./PageTransition";
import Header from "./Header";
export { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de" className={inter.variable}>
        <body className={inter.className}>
        <Header />
        <main className="container py-8">
            <PageTransition>
                {children}
            </PageTransition>
        </main>
        <footer className="bg-surface border-t border-border-color">
            <div className="container py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <p className="text-sm text-text-tertiary">
                            &copy; {new Date().getFullYear()} Cadima Lusiola. Alle Rechte vorbehalten.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://github.com/CapalotDaGreat" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-primary-color transition-colors" aria-label="GitHub">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97552C12.8053 6.57249 11.1947 6.57249 9.66666 6.97552C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9195C5.99999 14.4366 8.19999 15.2091 10.2933 15.4635C10.074 15.6829 9.90483 15.9451 9.79686 16.2324C9.68889 16.5198 9.64453 16.8261 9.66666 17.1308V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.66667 17.7014C7.66667 18.3305 6 17.7014 5 15.6375" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <a href="mailto:clusiola4@gmail.com" className="text-text-tertiary hover:text-primary-color transition-colors" aria-label="Email">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.5 18L14.8571 12M9.14286 12L2.5 18M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}
