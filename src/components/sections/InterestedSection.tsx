import { HighlightWording } from "../HighlightWording";
import { Section } from "../Section";
import { useI18n } from "@/context/i18n";

export function InterestedSection() {
  const { t } = useI18n();

  return (
    <Section imageFolder="interested">
      <div className="text-white flex flex-col gap-4 backdrop-blur-md p-5">
        <h2 className="leading-tight font-bold text-5xl md:text-7xl">
          {t.interested.title}
        </h2>

        <h2 className="-mt-3 max-w-2xl gap-2.5 text-xl font-medium text-white/60 sm:text-2xl">
          {t.interested.text1}{" "}
          <HighlightWording>{t.interested.highlight1}</HighlightWording>{" "}
          {t.interested.text2}{" "}
          <HighlightWording>{t.interested.highlight2}</HighlightWording>{" "}
          {t.interested.text3}{" "}
          <HighlightWording>{t.interested.highlight3}</HighlightWording>
        </h2>
      </div>
    </Section>
  );
}
