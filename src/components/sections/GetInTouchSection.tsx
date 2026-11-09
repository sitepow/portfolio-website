import { Section } from "../Section";
import { Button } from "../ui/button";
import { Mail, FileText } from "lucide-react";
// import { useI18n } from "@/context/i18n";

export function GetInTouchSection() {
  //   const { t } = useI18n();

  return (
    <Section id="contact" imageFolder="contact">
      <div className="text-white flex flex-col items-center text-center justify-between min-h-[400px] backdrop-blur-md p-5 md:p-10 py-16">
        <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Get In Touch
          </h2>

          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Focused On{" "}
            <span className="text-emerald-400 font-medium">
              Front-End Development
            </span>
            .<br />
            Let&apos;s Connect And Bring Your Project To Life!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a
              href="mailto:teeraphat@sitepow.store"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="bg-white text-black hover:bg-white/90 font-medium px-6 py-2.5 rounded-xl flex items-center gap-2 transition-all">
                <Mail className="w-4 h-4" />
                Email
              </Button>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Button className="bg-white text-black hover:bg-white/90 font-medium px-6 py-2.5 rounded-xl flex items-center gap-2 transition-all">
                {/* <Linkedin className="w-4 h-4" /> */}
                Linkedin
              </Button>
            </a>

            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <Button className="bg-white text-black hover:bg-white/90 font-medium px-6 py-2.5 rounded-xl flex items-center gap-2 transition-all">
                <FileText className="w-4 h-4" />
                Resume
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-16 text-white/40 text-xs md:text-sm">
          Designed and Developed by Teeraphat Saengkum.
        </div>
      </div>
    </Section>
  );
}
