import { BUTTON_ClASS } from "@/constants/system";
import { Section } from "../Section";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

export function FeaturedProjectsSection() {
  const projects = [
    {
      name: "Sitepow Store (SaaS)",
      github: "",
      websiteUrl: "https://sitepow.store",
      description:
        "แพลตฟอร์มเปิดให้เช่าหน้าเว็บร้านค้าออนไลน์เป็นของตัวเอง เพิ่มความหน้าเชื่อถือของร้านค้า และสามารถจัดการสต็อก/ออเดอร์ได้ง่ายๆ พร้อมสามารถตั้งค่าราคาขนส่งได้เองตามต้องการ (Rate Matrix + Big Data ค่าส่งจากผู้ให้บริการคำนวนมาให้แล้วเป็นค่าเริ่มต้นระบบ) ซึ่งออกมาเพื่อแก้ปัญหาร้านค้าโดนค่าธรรมเนียมระบบแพลตฟอร์มต่างชาติที่แพงมากเกินไป ปัจจุบันก็กำลังอยู่ในช่วงพัฒนาระบบอย่างต่อเนื่อง",
      tech: "(Node.js + Bun.js Hybrid), Postgresql, Prisma, Redis, Next.js",
    },
  ];

  return (
    <Section imageFolder="featured-projects">
      <div className="text-white flex flex-col gap-4 backdrop-blur-md p-5">
        <h2 className="leading-tight font-bold text-5xl md:text-7xl">
          Featured Projects
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
              <Button className={BUTTON_ClASS}>
                <ArrowUpRight />{" "}
                {project?.github ? "ดูโค๊ดบน Github" : "ดูเว็บไซต์"}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
