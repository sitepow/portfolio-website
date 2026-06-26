import { ArrowUpRight, DownloadIcon } from "lucide-react";
import { Section } from "../Section";
import { Button } from "../ui/button";
import { HighlightWording } from "../HighlightWording";

export function GreetingSection() {
  return (
    <Section>
      <div className="text-white flex flex-col items-center gap-4">
        <h1 className="max-w-2xl  leading-tight font-bold text-7xl">
          Web Developer
        </h1>

        <h2 className="-mt-3 max-w-2xl gap-2.5 text-xl font-medium text-white/60 sm:text-2xl">
          สวัสดีครับผมชื่อ{" "}
          <HighlightWording>นายธีรพัฒน์ แสงก่ำ</HighlightWording>{" "}
          ชื่อเล่นว่าตุ้ย มีความรู้และความสามารถในการเขียนและออกแบบเว็บไซต์
          ไม่ว่าจะเป็นการเขียนโค๊ด UX/UI ของหน้าจอ
          หรือจะเป็นการเขียนโค๊ดหลังบ้านใน Server
          เพื่อใช้ในการติดต่อบันทึกลงฐานข้อมูลก็สามารถทำได้เช่นกัน
          <br />
          .
          <br />
          ปัจุบันเป็นเจ้าของแพลตฟอร์ม ให้เช่าร้านค้าออนไลน์ ที่ชื่อว่า{" "}
          <HighlightWording>Sitepow Store</HighlightWording>{" "}
          ซึ่งตอนนี้ก็กำลังอยู่ในช่วงพัฒนาระบบอย่างต่อเนื่อง
        </h2>
      </div>

      <div className="flex gap-2.5 flex-wrap">
        <Button variant="secondary">
          <DownloadIcon />
          ดาว์นโหลดเรซูเม่
        </Button>

        <Button variant="secondary">
          <ArrowUpRight />
          ดูโค๊ดบน Github
        </Button>

        <Button variant="secondary">
          <ArrowUpRight />
          จ้างงานผ่าน Fastwork
        </Button>
      </div>
    </Section>
  );
}
