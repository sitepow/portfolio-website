import { BUTTON_ClASS } from "@/constants/system";
import { Section } from "../Section";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/context/i18n";

export function FeaturedProjectsSection() {
  const { t } = useI18n();

  const projects = [
    {
      name: "Sitepow Store (SaaS)",
      github: "",
      websiteUrl: "https://sitepow.store",
      description: t.featured.sitepowDesc,
      tech: "(Node.js + Bun.js Hybrid), Postgresql, Prisma, Redis, Next.js",
    },
  ];

  return (
    <Section imageFolder="featured-projects">
      <div className="text-white flex flex-col gap-4 backdrop-blur-md p-5">
        <h2 className="leading-tight font-bold text-5xl md:text-7xl">
          {t.featured.title}
        </h2>

        <ul className="grid gap-6">
          {projects.map((project, index) => (
            <li
              key={index}
              className="group flex space-y-4 flex-col gap-1 border-b border-white/10 pb-6 last:border-0"
            >
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <span className="text-sm text-white/40">{project.tech}</span>
              </div>
              <p className="text-white/60 text-lg">{project.description}</p>
              {project.websiteUrl ? (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit"
                >
                  <Button className={BUTTON_ClASS}>
                    <ArrowUpRight />{" "}
                    {project.github
                      ? t.featured.viewGithub
                      : t.featured.viewWebsite}
                  </Button>
                </a>
              ) : (
                <Button className={BUTTON_ClASS}>
                  <ArrowUpRight />{" "}
                  {project?.github
                    ? t.featured.viewGithub
                    : t.featured.viewWebsite}
                </Button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
