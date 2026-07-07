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
          <a href="mailto:clusiola4@gmail.com">Email</a>
          <a href="/projects">Projekte</a>
        </div>
        <p className="footer-meta">© {new Date().getFullYear()} Cadima Lusiola</p>
      </div>
    </footer>
  );
}
