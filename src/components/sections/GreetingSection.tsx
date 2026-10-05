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
      <div className="text-white flex flex-col gap-5 backdrop-blur-md p-5">
        <h1 className="leading-tight font-bold text-5xl md:text-7xl">
          {t.greeting.role}
        </h1>

        <h2 className="-mt-3 max-w-2xl gap-2.5 text-xl font-medium text-white/60 sm:text-2xl">
          {t.greeting.introBeforeName}{" "}
          <HighlightWording>{t.greeting.name}</HighlightWording>{" "}
          {t.greeting.introAfterName}
          <br />
          .
          <br />
          {t.greeting.platformIntro}{" "}
          <HighlightWording url="https://sitepow.store">
            {t.greeting.platformName}
          </HighlightWording>{" "}
          {t.greeting.platformAfter}
        </h2>
      </div>

      <div className="flex gap-2.5 flex-wrap">
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
