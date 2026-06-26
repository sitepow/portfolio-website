import { Section } from "../Section";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

export function OtherProjectsSection() {
  const projects = [
    {
      name: "e-Learning",
      github: "",
      description:
        "ระบบการเรียนรู้ออนไลน์ โปรเจกต์จบจากมหาวิทยาลัยราชภัฏธนบุรี สมุทรปราการ (สาขาวิทยาการคอมพิวเตอร์)",
      tech: "Node.js, Express, MySQL, Sequelize, React.js",
    },
    {
      name: "ERP (Enterprise Resource Planning)",
      github: "",
      description:
        "ระบบบริหารจัดการทรัพยากรและกระบวนการทำงานทั้งหมดขององค์กร แผนกต่างๆ เช่น การเงิน, บัญชี, คลังสินค้า, การผลิต, จัดซื้อ และฝ่ายบุคคล ให้ทำงานร่วมกันได้อย่างมีประสิทธิภาพ",
      tech: "Node.js, MySQL, Sequelize, Next.js",
    },
  ];

  return (
    <Section imageFolder="projects">
      <div className="text-white flex flex-col gap-4 backdrop-blur-md p-5">
        <h2 className="leading-tight font-bold text-5xl md:text-7xl">
          Other Projects
        </h2>

        <ul className="grid gap-6">
          {projects.map((project, index) => (
            <li
              key={index}
              className="group flex flex-col gap-1 border-b border-white/10 pb-6 last:border-0"
            >
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <span className="text-sm bg-primary text-white/40 font-mono italic">
                  {project.tech}
                </span>
              </div>
              <p className="text-white/60 text-lg">{project.description}</p>
              <Button className="w-fit" variant="secondary">
                <ArrowUpRight /> ดูโค๊ดบน Github
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
