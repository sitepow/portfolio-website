import { HighlightWording } from "../HighlightWording";
import { Section } from "../Section";

export function InterestedSection() {
  return (
    <Section imageFolder="interested">
      <div className="text-white flex flex-col gap-4 backdrop-blur-md p-5">
        <h2 className="leading-tight font-bold text-5xl md:text-7xl">
          What I'm interested in right now.
        </h2>

        <h2 className="-mt-3 max-w-2xl gap-2.5 text-xl font-medium text-white/60 sm:text-2xl">
          ตอนนี้นอกจากเขียนเว็บไซต์แล้วผมยังสนใจเรื่องของ{" "}
          <HighlightWording>Cyber Security</HighlightWording> และกำลังศึกษาการทำ{" "}
          <HighlightWording>Reverse engineering</HighlightWording> โดยใช้ Ghidra
          ในการแปลงจากภาษา Assembly ให้กลายเป็นภาษา C ซึ่งจะช่วยให้ Debug
          ได้ง่าย และหาจุดแก้ไขได้ตามที่เราต้องการหรือจะศึกษาพฤติกรรมของโปรแกรม{" "}
          <HighlightWording>
            ซึ่งก็เป็นอีกจุดนึง ที่ช่วยให้เราเข้าใจการทำงานของโปรแกรม
            ว่าจะป้องกันยังไงไม่ให้โดนแฮ็ก
          </HighlightWording>
        </h2>
      </div>
    </Section>
  );
}
