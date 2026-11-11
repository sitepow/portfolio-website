import { Section } from "../Section";
import { Button } from "../ui/button";
import { Mail, Download } from "lucide-react";

export function GetInTouchSection() {
  return (
    <Section id="contact" imageFolder="contact">
      <div className="text-white flex flex-col items-center text-center justify-between min-h-100 backdrop-blur-md py-5 px-2.5 md:px-10 md:py-16">
        <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Get In Touch
          </h2>

          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Focused On{" "}
            <span className="text-emerald-400 font-medium">
              Front-End Development, Back-End Development
            </span>
            .<br />
            Let&apos;s Connect And Bring Your Project To Life!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a
              href="mailto:kteeraphatt@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="bg-white text-black hover:bg-white/90 font-medium px-6 py-2.5 rounded-xl flex items-center gap-2 transition-all">
                <Mail className="size-4" />
                Email
              </Button>
            </a>
            <a
              href="/Resume_Full_Stack_Developer.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="bg-white text-black hover:bg-white/90 font-medium px-6 py-2.5 rounded-xl flex items-center gap-2 transition-all">
                <Download className="size-4" />
                Resume
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-16 text-white/40 max-w-96 text-xs md:text-sm">
          Developed by Teeraphat Saengkum. Designed by Alex Rosales on
          (https://dribbble.com/shots/25389068-Web-Developer-Portfolio-UI-Design)
        </div>
      </div>
    </Section>
  );
}
