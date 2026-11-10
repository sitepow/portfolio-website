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
      company: "ProFlow Labs",
      role: "Full Stack Web Developer",
      period: "Dec 2023 - May 2024",
      description:
        "Developed a mission-critical Real-time Omni-channel CRM centralizing Telegram and Line interactions into a single interface. Managed end-to-end development for client projects (Giftwise, Salebuddy, ATHGold) and established standardized Git workflows to elevate team code quality.",
    },
    {
      company: "Brainwave Group",
      role: "Full Stack Web Developer",
      period: "June 2022 - May 2023",
      description:
        "Designed and maintained key ERP modules for Maintenance Departments with a focus on system reliability. Contributed to large-scale insurance web platforms and played a key role in identifying and resolving critical production bugs to reduce downtime.",
    },
  ];

  return (
    <Section id="experience">
      <div className="text-white flex flex-col gap-8 backdrop-blur-md py-5 px-2.5 md:p-10">
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
