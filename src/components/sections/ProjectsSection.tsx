import { BUTTON_ClASS } from "@/constants/system";
import { Section } from "../Section";
import { Button } from "../ui/button";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      name: "Alpha Nexus Bot",
      github: "https://github.com/sitepow/alpha-nexus-bot",
      websiteUrl: "",
      description:
        "Automated high-performance trading bot engine combining SMC, Price Action, and Momentum Breakout with intelligent multi-component scoring algorithms.",
      techStack: ["Python", "Trading Engine", "SMC", "Algorithms"],
      image: "/navbar/premium_photo-1689246621798-4e9cc4d07b13.jpeg",
    },
    {
      name: "Nepalora Platform",
      github: "https://github.com/sitepow/nepalora",
      websiteUrl: "",
      description:
        "Polyglot Monorepo Platform: An end-to-end Himalayan travel & trekking guide platform engineered across multiple production stacks.",
      techStack: [
        "Next.js",
        "React/Vite",
        "Express",
        "NestJS",
        "Go",
        "FastAPI",
      ],
      image: "/navbar/premium_photo-1689246621798-4e9cc4d07b13.jpeg",
    },
    {
      name: "Akra Construction ERP",
      github: "https://github.com/sitepow/akra-construction-erp",
      websiteUrl: "",
      description:
        "Enterprise Resource Planning (ERP) platform designed for construction management, tracking projects, resources, budgeting, and operations.",
      techStack: ["TypeScript", "Next.js", "Node.js", "ERP"],
      image: "/navbar/premium_photo-1689246621798-4e9cc4d07b13.jpeg",
    },
    {
      name: "Bang Phriang SAO E-Learning",
      github: "https://github.com/sitepow/bangphriang-sao-elearning",
      websiteUrl: "",
      description:
        "E-Learning and digital education management platform for Bang Phriang Subdistrict Administrative Organization (SAO).",
      techStack: ["TypeScript", "Next.js", "React", "Redux", "Tailwind CSS"],
      image: "/navbar/premium_photo-1689246621798-4e9cc4d07b13.jpeg",
    },
    {
      name: "Sitepow Store (SaaS)",
      github: "https://github.com/sitepow/sitepow-store",
      websiteUrl: "",
      description:
        "Next-gen e-commerce SaaS platform with an integrated POS system, built with modern web stacks and payment gateway integrations.",
      techStack: [
        "TypeScript",
        "Next.js",
        "Prisma",
        "Redis",
        "PostgreSQL",
        "Stripe",
      ],
      image: "/navbar/premium_photo-1689246621798-4e9cc4d07b13.jpeg",
      alertMessage:
        "This repo was archived by the owner on Nov 7, 2026. It is now read-only.",
    },
    {
      name: "FAOS Heritage Website",
      github: "https://github.com/sitepow/faos-heritage-website",
      websiteUrl: "",
      description:
        "A storefront built for managing and distributing certified organic extra virgin olive oils and premium natural honeys.",
      techStack: ["TypeScript", "Next.js", "E-commerce"],
      image: "/navbar/premium_photo-1689246621798-4e9cc4d07b13.jpeg",
      alertMessage:
        "This repo was archived by the owner on Nov 7, 2026. It is now read-only.",
    },
  ];

  return (
    <Section id="projects">
      <div className="text-white flex flex-col gap-8 backdrop-blur-md py-5 px-2.5 md:p-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10">
            <FolderGit2 className="size-5 text-white/80" />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            Projects
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const hasWebsite = Boolean(project.websiteUrl);

            return (
              <li
                key={index}
                className="group flex flex-col justify-between bg-[#121212] border border-white/10 rounded-md p-5 overflow-hidden"
              >
                <div className="flex flex-col gap-4">
                  <div className="relative w-full h-48 rounded-md overflow-hidden bg-white/5 border border-white/10">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="size-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-white/30 text-sm">
                        No Image Preview
                      </div>
                    )}
                    {project.alertMessage && (
                      <div className="bg-red-500 text-white text-xs p-2.5 text-center w-full absolute bottom-0">
                        This repo was archived by the owner on Nov 7, 2026. It
                        is now read-only.
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {project.name}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="inline-flex bg-linear-to-r items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-white/60 text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href={project.websiteUrl || project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full block"
                  >
                    <Button className={`w-full justify-center ${BUTTON_ClASS}`}>
                      <ArrowUpRight className="size-4 mr-1" />
                      {hasWebsite ? "Visit Website" : "View Code on GitHub"}
                    </Button>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
