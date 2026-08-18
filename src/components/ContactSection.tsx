import ContactForm from "./ContactForm";

const contactMethods = [
  {
    label: "E-Mail",
    value: "clusiola4@gmail.com",
    href: "mailto:clusiola4@gmail.com",
    hint: "Direkter Kontakt für Bewerbungen",
  },
  {
    label: "Telefon",
    value: "078 672 88 05",
    href: "tel:+41786728805",
    hint: "Für ein kurzes Erstgespräch",
  },
  {
    label: "LinkedIn",
    value: "cadima-lusiola",
    href: "https://www.linkedin.com/in/cadima-lusiola-392833380/",
    hint: "Profil & berufliches Netzwerk",
    external: true,
  },
  {
    label: "GitHub",
    value: "CapalotDaGreat",
    href: "https://github.com/CapalotDaGreat",
    hint: "Code, Demos und Projekte",
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="page-section contact-panel">
      <div className="contact-header">
        <p className="eyebrow">Kontakt</p>
        <h2>Kontakt</h2>
        <p className="lead">
          Ich suche eine Junior-Stelle als Full-Stack Developer. Schreiben Sie mir über das Formular
          oder direkt per E-Mail, Telefon oder LinkedIn.
        </p>
      </div>

      <div className="contact-layout">
        <ContactForm />

        <aside className="contact-aside">
          <div className="contact-aside-card">
            <h3>Direkter Kontakt</h3>
            <p>Alle Kanäle sind aktiv und werden regelmässig geprüft.</p>
            <ul className="contact-method-list">
              {contactMethods.map((method) => (
                <li key={method.label}>
                  <a
                    className="contact-method-link"
                    href={method.href}
                    {...(method.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <span className="contact-method-label">{method.label}</span>
                    <span className="contact-method-value">{method.value}</span>
                    <span className="contact-method-hint">{method.hint}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-trust-card">
            <strong>Verfügbar für Gespräche</strong>
            <p>Offen für Vollzeit, Praktikum oder eine Einstiegsstelle im Web-Development.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
