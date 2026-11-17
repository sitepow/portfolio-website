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
        "ระบบบอทเทรดอัตโนมัติประสิทธิภาพสูง ทำงานร่วมกับกลยุทธ์ SMC, Price Action และ Momentum Breakout พร้อมอัลกอริทึมการคำนวณคะแนนตัดสินใจแบบอัจฉริยะแบบ Multi-component",
      techStack: ["Python", "Trading Engine", "SMC", "Algorithms"],
      image: "/navbar/premium_photo-1689246621798-4e9cc4d07b13.jpeg",
    },
    {
      name: "Nepalora Platform",
      github: "https://github.com/sitepow/nepalora",
      websiteUrl: "",
      description:
        "แพลตฟอร์มไกด์นำเที่ยวและเดินเขาในเทือกเขาหิมาลัยแบบครบวงจร พัฒนาในรูปแบบ Polyglot Monorepo ด้วยเทคโนโลยีหลากหลายที่ใช้งานจริงบนระบบ Production",
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
        "ระบบวางแผนและจัดการทรัพยากรองค์กร (ERP) ที่ออกแบบมาสำหรับธุรกิจก่อสร้างโดยเฉพาะ รองรับการติดตามสถานะโปรเจกต์ บริหารจัดการทรัพยากร วางงบประมาณ และควบคุมการปฏิบัติงาน",
      techStack: ["TypeScript", "Next.js", "Node.js", "ERP"],
      image: "/navbar/premium_photo-1689246621798-4e9cc4d07b13.jpeg",
    },
    {
      name: "Bang Phriang SAO E-Learning",
      github: "https://github.com/sitepow/bangphriang-sao-elearning",
      websiteUrl: "",
      description:
        "แพลตฟอร์มจัดการเรียนรู้ออนไลน์และระบบการศึกษาดิจิทัล สำหรับองค์การบริหารส่วนตำบลบางเพรียง (อบต. บางเพรียง)",
      techStack: ["TypeScript", "Next.js", "React", "Redux", "Tailwind CSS"],
      image: "/navbar/premium_photo-1689246621798-4e9cc4d07b13.jpeg",
    },
    {
      name: "Sitepow Store (SaaS)",
      github: "https://github.com/sitepow/sitepow-store",
      websiteUrl: "",
      description:
        "แพลตฟอร์มอีคอมเมิร์ซแบบ SaaS ยุคใหม่ พร้อมระบบขายหน้าร้าน (POS) ในตัว พัฒนาด้วยเว็บเทคโนโลยีที่ทันสมัยและเชื่อมต่อกับระบบชำระเงินออนไลน์",
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
        "Repository นี้ถูกเก็บถาวรโดยเจ้าของแล้วเมื่อวันที่ 7 พ.ย. 2026 ปัจจุบันเป็นแบบอ่านอย่างเดียว (Read-only)",
    },
    {
      name: "FAOS Heritage Website",
      github: "https://github.com/sitepow/faos-heritage-website",
      websiteUrl: "",
      description:
        "หน้าร้านค้าออนไลน์สำหรับการบริหารจัดการและจัดจำหน่ายน้ำมันมะกอกบริสุทธิ์พิเศษ (Extra Virgin Olive Oils) และน้ำผึ้งธรรมชาติระดับพรีเมียมที่ได้รับการรับรองมาตรฐานออร์แกนิก",
      techStack: ["TypeScript", "Next.js", "E-commerce"],
      image: "/navbar/premium_photo-1689246621798-4e9cc4d07b13.jpeg",
      alertMessage:
        "Repository นี้ถูกเก็บถาวรโดยเจ้าของแล้วเมื่อวันที่ 7 พ.ย. 2026 ปัจจุบันเป็นแบบอ่านอย่างเดียว (Read-only)",
    },
    {
      name: "Portfolio Website",
      github: "https://github.com/sitepow/portfolio-website",
      websiteUrl: "",
      description:
        "เว็บไซต์พอร์ตโฟลิโอส่วนตัวสำหรับแนะนำโปรเจกต์และทักษะความสามารถในการพัฒนาซอฟต์แวร์ พัฒนาด้วย Vite, React, TypeScript, Tailwind CSS และ Shadcn UI",
      techStack: ["Vite", "React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      image: "/navbar/premium_photo-1689246621798-4e9cc4d07b13.jpeg",
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
            ผลงานของฉัน
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
                        ไม่มีภาพตัวอย่าง
                      </div>
                    )}
                    {project.alertMessage && (
                      <div className="bg-red-500/90 backdrop-blur-xs text-white text-xs p-2.5 text-center w-full absolute bottom-0 font-sans">
                        {project.alertMessage}
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
                      {hasWebsite ? "เข้าชมเว็บไซต์" : "ดูซอร์สโค้ดบน GitHub"}
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
