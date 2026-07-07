"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#home", id: "home", label: "Start" },
  { href: "/#about", id: "about", label: "Über mich" },
  { href: "/#projects", id: "projects", label: "Projekte" },
  { href: "/#contact", id: "contact", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") return;

    const navOffset = 120;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + navOffset;
      let current = links[0].id;

      for (const link of links) {
        const section = document.getElementById(link.id);
        if (!section) continue;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= scrollPosition) {
          current = link.id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    const hash = window.location.hash.replace("#", "");
    if (hash) setActiveSection(hash);
  }, [pathname]);

  const handleNavClick = (id: string) => {
    setOpen(false);
    setActiveSection(id);

    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/#home" className="brand" onClick={() => handleNavClick("home")}>
          <span className="brand-mark">CL</span>
          <span>Cadima Lusiola</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Navigation öffnen"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={pathname === "/" && activeSection === link.id ? "active" : undefined}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
