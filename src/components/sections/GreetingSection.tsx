import { ArrowUpRight, DownloadIcon } from "lucide-react";
import { Section } from "../Section";
import { Button } from "../ui/button";
import { HighlightWording } from "../HighlightWording";
import { BUTTON_ClASS } from "@/constants/system";
import { useI18n } from "@/context/i18n";

export function GreetingSection() {
  const { t } = useI18n();

  return (
    <Section id="about" imageFolder="greeting" className="pt-40">
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center gap-5 text-white">
          <div className="size-32 rounded-full border-4 border-white overflow-hidden">
            <img
              src="/528e200b-4f2e-408f-b1b6-3f705e46afa7.jpg"
              className="size-full object-bottom object-cover scale-[180%]"
            />
          </div>
          <span>X</span>
          <div className="size-32 rounded-full border-4 border-white overflow-hidden">
            <img
              src="/842916578_122110731159489577_4212715032094923571_n.jpg"
              className="size-full object-bottom object-cover"
            />
          </div>
        </div>
        <div className="text-white flex text-center flex-col gap-5 backdrop-blur-md p-5">
          <h2 className="max-w-2xl gap-2.5 text-xl font-medium text-white/60 sm:text-2xl">
            {t.greeting.introBeforeName}{" "}
            <HighlightWording>{t.greeting.name}</HighlightWording>{" "}
            {t.greeting.introAfterName}
          </h2>
        </div>
      </div>

      <div className="flex gap-2.5 justify-center flex-wrap">
        <Button className={BUTTON_ClASS}>
          <DownloadIcon />
          {t.greeting.btnResume}
        </Button>
        <Button className={BUTTON_ClASS}>
          <DownloadIcon />
          {t.greeting.btnTranscript}
        </Button>
        <Button className={BUTTON_ClASS}>
          <ArrowUpRight />
          {t.greeting.btnGithub}
        </Button>
        <Button className={BUTTON_ClASS}>
          <ArrowUpRight />
          {t.greeting.btnFastwork}
        </Button>
        <Button className={BUTTON_ClASS}>
          <ArrowUpRight />
          {t.greeting.btnJobThai}
        </Button>
      </div>
    </Section>
  );
}
