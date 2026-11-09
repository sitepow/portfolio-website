import { BUTTON_ClASS } from "@/constants/system";
import { Section } from "../Section";
import { Button } from "../ui/button";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { useI18n } from "@/context/i18n";

export function FeaturedProjectsSection() {
  const { t } = useI18n();

  const projects = [
    {
      name: "Sitepow Store (SaaS)",
      github: "",
      websiteUrl: "https://sitepow.store",
      description: t.featured.sitepowDesc,
      techStack: ["Node.js + Bun", "PostgreSQL", "Prisma", "Redis", "Next.js"],
      image: "/images/featured-projects/sitepow.png",
    },
    {
      name: "Giftwise Sales Buddy",
      github: "",
      websiteUrl: "",
      description:
        "A web-based sales application for generating product catalogues, configuring filtering presets, and tracking sales rankings with PDF generation support.",
      techStack: ["Next.js", "React", "Tailwind CSS", "PDF Generation"],
      image: "/images/featured-projects/giftwise.png",
    },
    {
      name: "Athgolds",
      github: "",
      websiteUrl: "",
      description:
        "A web application that calculates real-time gold trading prices across various gold types including molten gold, gold bars, and gold jewelry.",
      techStack: ["React", "Node.js", "Tailwind CSS", "Real-time API"],
      image: "/images/featured-projects/athgolds.png",
    },
    {
      name: "FAOS.asia",
      github: "",
      websiteUrl: "https://faos.asia",
      description:
        "An e-commerce platform offering certified organic extra virgin olive oil and natural honey products with automated onboarding and recruitment portal integration.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      image: "/images/featured-projects/faos.png",
    },
  ];

  return (
    <Section id="featured-projects" imageFolder="featured-projects">
      <div className="text-white flex flex-col gap-8 backdrop-blur-md p-5 md:p-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10">
            <FolderGit2 className="size-5 text-white/80" />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            {t.featured.title || "Projects"}
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
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
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-white/30 text-sm">
                      No Image Preview
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white">{project.name}</h3>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                    >
                      <span className="size-1.5 rounded-full bg-emerald-500"></span>
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
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    {project.github
                      ? t.featured.viewGithub
                      : t.featured.viewWebsite}
                  </Button>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
