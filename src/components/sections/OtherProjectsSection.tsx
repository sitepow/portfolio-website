import { BUTTON_ClASS } from "@/constants/system";
import { Section } from "../Section";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/context/i18n";

export function OtherProjectsSection() {
  const { t } = useI18n();

  const projects = [
    {
      name: "e-Learning",
      github: "",
      description: t.otherProjects.elearningDesc,
      tech: "Node.js, Express, MySQL, Sequelize, React.js",
    },
    {
      name: "ERP (Enterprise Resource Planning)",
      github: "",
      description: t.otherProjects.erpDesc,
      tech: "Node.js, MySQL, Sequelize, Next.js",
    },
  ];

  return (
    <Section id="other-projects" imageFolder="projects">
      <div className="text-white flex flex-col gap-4 backdrop-blur-md p-5">
        <h2 className="leading-tight font-bold text-5xl md:text-7xl">
          {t.otherProjects.title}
        </h2>

        <ul className="grid gap-6">
          {projects.map((project, index) => (
            <li
              key={index}
              className="group space-y-4 flex flex-col gap-1 border-b border-white/10 pb-6 last:border-0"
            >
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <span className="text-sm text-white/40">{project.tech}</span>
              </div>
              <p className="text-white/60 text-lg">{project.description}</p>
              <Button className={BUTTON_ClASS}>
                <ArrowUpRight /> {t.otherProjects.viewGithub}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
