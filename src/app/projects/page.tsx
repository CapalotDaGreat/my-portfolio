import type { Metadata } from "next";
import ProjectsPage from "./projects";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Ausgewaehlte GitHub-Projekte von Cadima Lusiola mit Live-Demos, Tech-Stack und Ergebnissen.",
};

export default function Page() {
  return <ProjectsPage />;
}
