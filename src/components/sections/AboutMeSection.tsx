import { HighlightWording } from "../HighlightWording";
import { Section } from "../Section";
import { User } from "lucide-react";

export function AboutMeSection() {
  return (
    <Section id="about-me" imageFolder="about-me">
      <div className="text-white flex flex-col gap-10 backdrop-blur-md py-5 px-2.5 md:p-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10">
            <User className="size-5 text-white/80" />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            เกี่ยวกับฉัน
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 flex flex-col gap-6 text-white/80 text-base md:text-lg leading-relaxed">
            <p>
              สวัสดีครับผม <HighlightWording>ธีรพัฒน์ แสงก่ำ</HighlightWording>{" "}
              เป็น <HighlightWording>Full-Stack Developer</HighlightWording>{" "}
              ที่มีความเชี่ยวชาญด้านการออกแบบ พัฒนา และดูแลรักษา{" "}
              <HighlightWording>
                Web Application ประสิทธิภาพสูง (High-Performance)
              </HighlightWording>{" "}
              โดยมีประสบการณ์การพัฒนาแบบ Full-Stack ด้วยเครื่องมือหลักอย่าง{" "}
              <HighlightWording>Next.js, React.js และ Node.js</HighlightWording>{" "}
              ครับ
            </p>

            <p>
              ผมมีความสามารถในการร่วมขับเคลื่อนโปรเจกต์เชิงเทคนิค ออกแบบ{" "}
              <HighlightWording>
                โครงสร้างระบบที่รองรับการขยายตัว (Scalable System Architecture)
              </HighlightWording>{" "}
              และปรับแต่งประสิทธิภาพฐานข้อมูล นอกจากงานวิศวกรรมเว็บทั่วไปแล้ว
              ผมยังมีความหลงใหลในการพัฒนา{" "}
              <HighlightWording>
                ระบบบอทเทรดอัตโนมัติ (Automated Trading Bot Engines)
              </HighlightWording>{" "}
              และสนใจศึกษาค้นคว้าเกี่ยวกับแนวคิด{" "}
              <HighlightWording>Cybersecurity</HighlightWording> เช่น การทำ
              Reverse Engineering อีกด้วยครับ
            </p>

            <p>
              ผมมุ่งมั่นที่จะเขียนโค้ดที่สะอาด อ่านง่าย บำรุงรักษาง่าย (Clean &
              Maintainable Code) และมีความปลอดภัยสูง (Type-Safe)
              เพื่อส่งมอบผลงานคุณภาพเยี่ยมที่มีคุณค่าและสร้างความมั่นใจให้กับผู้ใช้งานและลูกค้าทุกคน
            </p>

            <p className="text-white font-medium text-lg pt-2">
              มาสร้างสรรค์ผลงานที่น่าจดจำไปด้วยกันครับ! 🚀
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="size-48 rounded-full border-4 border-white overflow-hidden">
              <img
                src="/528e200b-4f2e-408f-b1b6-3f705e46afa7.jpg"
                alt="Teeraphat Saengkum"
                className="size-full object-bottom object-cover scale-[180%]"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
