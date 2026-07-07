import type { Metadata } from "next";
import ProjectsPage from "./projects";

export const metadata: Metadata = {
  title: "Projekte",
  description: "Ausgewaehlte Projekte von Mahfuz Rahman mit Fokus auf Produktwert und Code-Qualitaet.",
};

export default function Page() {
  return <ProjectsPage />;
}
