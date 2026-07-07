export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-title">Cadima Lusiola</p>
          <p className="footer-copy">Full-Stack Developer · Web Apps · UI Engineering</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/CapalotDaGreat" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/cadima-lusiola-392833380/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:clusiola4@gmail.com">Email</a>
          <a href="/#projects">Projekte</a>
          <a href="/#contact">Kontakt</a>
        </div>
        <p className="footer-meta">© {new Date().getFullYear()} Cadima Lusiola</p>
      </div>
    </footer>
  );
}
