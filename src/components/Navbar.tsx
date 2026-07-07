"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Start" },
  { href: "/about", label: "Ueber mich" },
  { href: "/projects", label: "Projekte" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">CL</span>
          <span>Cadima Lusiola</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Navigation oeffnen"
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
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a className="nav-cta" href="/#contact" onClick={() => setOpen(false)}>
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
