import { ArrowUpRight, DownloadIcon } from "lucide-react";
import { Section } from "../Section";
import { Button } from "../ui/button";
import { HighlightWording } from "../HighlightWording";
import { BUTTON_ClASS } from "@/constants/system";

export function GreetingSection() {
  return (
    <Section id="home" className="pt-40">
      <div className="z-10 space-y-5 md:min-w-3xl md:max-w-3xl">
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-2.5 sm:gap-5 text-white">
            <div className="size-24 sm:size-32 rounded-full border-4 border-white overflow-hidden">
              <img
                src="/528e200b-4f2e-408f-b1b6-3f705e46afa7.jpg"
                className="size-full object-bottom object-cover scale-[180%]"
                alt="Profile 1"
              />
            </div>
            <span className="font-homeplace">X</span>
            <div className="size-24 sm:size-32 rounded-full border-4 border-white overflow-hidden">
              <img
                src="/842916578_122110731159489577_4212715032094923571_n.jpg"
                className="size-full object-bottom object-cover"
                alt="Profile 2"
              />
            </div>
          </div>
          <div className="text-emerald-400 flex text-center flex-col gap-5 backdrop-blur-md py-2.5 sm:p-5">
            <h2 className="max-w-2xl gap-2.5 text-xl text-white/80 sm:text-2xl">
              Hi, I&apos;m{" "}
              <HighlightWording>Teeraphat Saengkum</HighlightWording>, a Web
              Developer passionate about building end-to-end digital experiences
              — from intuitive UX/UI design to robust backend servers and
              database management.
            </h2>
          </div>
        </div>
        <div className="flex gap-2.5 justify-center flex-wrap">
          <a
            href="/Resume_Full_Stack_Developer.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Button className={BUTTON_ClASS}>
              <DownloadIcon />
              Download Resume
            </Button>
          </a>
          <a href="https://github.com/sitepow" target="_blank">
            <Button className={BUTTON_ClASS}>
              <ArrowUpRight />
              GitHub Profile
            </Button>
          </a>
          <a href="https://fastwork.com/th/user/ejmfeo" target="_blank">
            <Button className={BUTTON_ClASS}>
              <ArrowUpRight />
              Hire via Fastwork.com
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
}
