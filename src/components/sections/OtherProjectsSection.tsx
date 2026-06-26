import { ArrowUpRight } from "lucide-react";
import { Section } from "../Section";

export function OtherProjectsSection() {
  const projects = [
    {
      name: "Project Alpha",
      description: "A real-time collaborative dashboard using WebSockets.",
      tech: "Next.js, Socket.io, Tailwind",
    },
    {
      name: "E-Commerce API",
      description: "Scalable backend for online store with JWT authentication.",
      tech: "Node.js, Express, MongoDB, Prisma",
    },
    {
      name: "Security Audit Tool",
      description:
        "Script for automated vulnerability scanning (Learning project).",
      tech: "C, Bash, Python",
    },
  ];

  return (
    <Section>
      <div className="text-white flex flex-col gap-8 backdrop-blur-md p-8 md:p-12">
        <h2 className="leading-tight font-bold text-5xl md:text-7xl">
          Other Projects
        </h2>

        <ul className="grid gap-6">
          {projects.map((project, index) => (
            <li
              key={index}
              className="group flex flex-col gap-1 border-b border-white/10 pb-6 last:border-0"
            >
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="text-2xl font-bold">
                  {project.name} <ArrowUpRight />
                </h3>
                <span className="text-sm text-white/40 font-mono italic">
                  {project.tech}
                </span>
              </div>
              <p className="text-white/60 text-lg">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
