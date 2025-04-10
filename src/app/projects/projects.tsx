"use client";

export default function ProjectsPage() {
    const projects = [
        {
            title: "Portfolio-Website",
            description: "Mein persönliches Portfolio mit Next.js und Tailwind CSS.",
            link: "https://github.com/CapalotDaGreat",
        },
        {
            title: "Quiz-App",
            description: "Interaktive Quiz-Anwendung mit JavaScript.",
            link: "#",
        },
        {
            title: "Rechner",
            description: "Ein moderner Rechner mit OOP in JavaScript.",
            link: "#",
        },
    ];

    return (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4">
            {projects.map((project, index) => (
                <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-zinc-800 text-black dark:text-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                </a>
            ))}
        </div>
    );
}
