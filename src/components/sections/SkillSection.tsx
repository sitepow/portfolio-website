import { Section } from "../Section";

export function SkillSection() {
  const skills = [
    { title: "Frameworks", items: ["Next.js", "React", "Express"] },
    { title: "Languages", items: ["TypeScript", "JavaScript", "SQL"] },
    {
      title: "Database & ORM",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma"],
    },
    {
      title: "Ecosystem & API",
      items: ["TanStack Query", "tRPC (Basic Knowledge)"],
    },
    {
      title: "Tools & DevOps",
      items: [
        "Vite",
        "Tailwind CSS",
        "Git",
        "Docker",
        "Vercel",
        "Ubuntu/Linux",
      ],
    },
    {
      title: "Cyber Security (Learning)",
      items: ["Ghidra", "Assembly (x86)", "C"],
    },
  ];

  return (
    <Section imageFolder="skill">
      <div className="text-white flex flex-col gap-4 backdrop-blur-md p-5">
        <h2 className="leading-tight font-bold text-5xl md:text-7xl">
          My Skills
        </h2>

        <div className="space-y-8">
          {skills.map((category) => {
            return (
              <div
                key={category.title}
                className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 border-b border-white/10 pb-8 last:border-0"
              >
                <h3
                  className={`w-48 text-xl font-bold uppercase shrink-0 text-white/40`}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className={`px-4 py-2 border rounded-lg text-sm font-medium cursor-default transition-colors bg-white/5 border-white/10 text-white/80 hover:bg-white/10`}
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
