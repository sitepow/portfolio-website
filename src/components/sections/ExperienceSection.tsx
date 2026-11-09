import { Briefcase } from "lucide-react";
import { Section } from "../Section";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      company: "Zentracore / Sitepow",
      role: "Full Stack Developer & Owner",
      period: "2024 - Present",
      description:
        "Architected and deployed SaaS web applications and e-commerce platforms using Next.js, Node.js, and PostgreSQL. Managed server infrastructure, database performance, and API integrations with payment gateways.",
    },
    {
      company: "Proflowlabs",
      role: "Software Developer",
      period: "2023 - 2024",
      description:
        "Developed responsive UI components, integrated complex state management, and collaborated via Agile/Jira workflows to deliver production-ready features on schedule.",
    },
  ];

  return (
    <Section id="featured-projects" imageFolder="featured-projects">
      <div className="text-white flex flex-col gap-8 backdrop-blur-md p-5 md:p-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10">
            <Briefcase className="size-5 text-white/80" />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            Experience
          </h2>
        </div>

        <div className="relative pl-4 md:pl-6">
          <div className="absolute left-2.75 md:left-4.75 top-3 bottom-3 w-0.5 bg-white/20" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start pl-8"
              >
                <div className="absolute -left-1.25 md:-left-0.75 top-2.5 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-[#0a0a0a]" />

                <div className="md:col-span-5 flex flex-col gap-1">
                  <h3 className="text-emerald-400  text-lg md:text-xl font-medium">
                    {exp.company}
                  </h3>
                  <p className="text-white  text-base font-semibold">
                    {exp.role}
                  </p>
                  <span className="text-white/40  text-sm mt-1">
                    {exp.period}
                  </span>
                </div>

                <div className="md:col-span-7">
                  <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
