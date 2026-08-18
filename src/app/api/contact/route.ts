import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getMailConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL ?? "clusiola4@gmail.com";

  if (!host || !user || !pass) {
    return null;
  }

  return { host, port, user, pass, to };
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const company = payload.company?.trim() ?? "";

  if (company) {
    return NextResponse.json({ success: true });
  }

  if (!name || name.length < 2) {
    return NextResponse.json({ error: "Bitte geben Sie Ihren Namen ein." }, { status: 400 });
  }

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
      { status: 400 }
    );
  }

  if (!message || message.length < 10) {
    return NextResponse.json(
      { error: "Ihre Nachricht sollte mindestens 10 Zeichen enthalten." },
      { status: 400 }
    );
  }

  if (message.length > 4000) {
    return NextResponse.json(
      { error: "Ihre Nachricht ist zu lang. Bitte kürzen Sie sie." },
      { status: 400 }
    );
  }

  const mailConfig = getMailConfig();
  if (!mailConfig) {
    return NextResponse.json(
      {
        error:
          "E-Mail-Versand ist noch nicht konfiguriert. Bitte SMTP-Zugangsdaten in .env.local hinterlegen.",
      },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: mailConfig.host,
    port: mailConfig.port,
    secure: mailConfig.port === 465,
    auth: {
      user: mailConfig.user,
      pass: mailConfig.pass,
    },
  });

  const safeName = name.replace(/[<>]/g, "");
  const safeEmail = email.replace(/[<>]/g, "");
  const safeMessage = message.replace(/[<>]/g, "");

  try {
    await transporter.sendMail({
      from: `"Portfolio Kontakt" <${mailConfig.user}>`,
      to: mailConfig.to,
      replyTo: safeEmail,
      subject: `Neue Portfolio-Nachricht von ${safeName}`,
      text: [
        `Name: ${safeName}`,
        `E-Mail: ${safeEmail}`,
        "",
        "Nachricht:",
        safeMessage,
      ].join("\n"),
      html: `
        <h2>Neue Nachricht über Ihr Portfolio</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>E-Mail:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Nachricht:</strong></p>
        <p style="white-space: pre-wrap;">${safeMessage}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form mail error:", error);
    return NextResponse.json(
      { error: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}
