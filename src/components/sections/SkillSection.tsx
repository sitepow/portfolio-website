import { Section } from "../Section";
import { useI18n } from "@/context/i18n";

export function SkillSection() {
  const { t } = useI18n();

  const skills = [
    {
      title: t.skills.frameworks,
      items: [
        "Next.js",
        "React",
        "Express",
        "NestJS (Basic Knowledge)",
        "Nuxt.js (Basic Knowledge)",
        "Vue.js (Basic Knowledge)",
      ],
    },
    {
      title: t.skills.languages,
      items: ["TypeScript", "JavaScript", "SQL", "PHP (Legacy)"],
    },
    {
      title: t.skills.database,
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma"],
    },
    {
      title: t.skills.ecosystem,
      items: ["TanStack Query", "tRPC (Basic Knowledge)"],
    },
    {
      title: t.skills.tools,
      items: [
        "Vite",
        "Tailwind CSS",
        "HTML/CSS (Fundamentals)",
        "WordPress (Legacy)",
        "Git",
        "Docker",
        "Vercel",
        "Ubuntu/Linux",
      ],
    },
    {
      title: t.skills.security,
      items: ["Ghidra", "Assembly (x86)", "C"],
    },
  ];

  return (
    <Section id="skills" imageFolder="skill">
      <div className="text-white flex flex-col gap-4 backdrop-blur-md p-5">
        <h2 className="leading-tight font-bold text-5xl md:text-7xl">
          {t.skills.title}
        </h2>

        <div className="space-y-8">
          {skills.map((category) => {
            return (
              <div
                key={category.title}
                className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 border-b border-white/10 pb-8 last:border-0"
              >
                <h3 className="w-48 text-xl font-bold uppercase shrink-0 text-white/40">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 border rounded-lg text-sm font-medium cursor-default transition-colors bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
