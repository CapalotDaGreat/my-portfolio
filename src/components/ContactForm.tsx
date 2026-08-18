"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (status === "error") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    const formElement = event.currentTarget;
    const company = new FormData(formElement).get("company");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, company }),
      });

      const data = (await response.json()) as { error?: string; success?: boolean };

      if (!response.ok) {
        throw new Error(data.error ?? "Nachricht konnte nicht gesendet werden.");
      }

      setForm(initialForm);
      formElement.reset();
      setStatus("success");
      setFeedback("Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich zeitnah bei Ihnen.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut."
      );
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Kontaktformular">
      <div className="form-header">
        <h3>Nachricht senden</h3>
        <p>Für Recruiter, Teams und Projektanfragen – ich antworte in der Regel innerhalb von 24 Stunden.</p>
      </div>

      <div className="form-grid">
        <label className="form-field" htmlFor="contact-name">
          <span>Name</span>
          <input
            id="contact-name"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Ihr Name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            required
            minLength={2}
            maxLength={80}
          />
        </label>

        <label className="form-field" htmlFor="contact-email">
          <span>E-Mail</span>
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="ihre.email@beispiel.ch"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            required
          />
        </label>
      </div>

      <label className="form-field" htmlFor="contact-message">
        <span>Nachricht</span>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder="Beschreiben Sie kurz die Position, das Projekt oder Ihre Anfrage..."
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          required
          minLength={10}
          maxLength={4000}
        />
      </label>

      <label className="form-honeypot" aria-hidden="true">
        Firma
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="form-footer">
        <button className="button primary" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Wird gesendet..." : "Nachricht absenden"}
        </button>
        <p className="form-note">Mit dem Absenden stimmen Sie zu, dass ich Ihre Angaben zur Beantwortung verwende.</p>
      </div>

      {feedback ? (
        <p className={`form-feedback ${status === "success" ? "success" : "error"}`} role="status">
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
