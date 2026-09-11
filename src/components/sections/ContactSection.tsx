import { Section } from "../Section";
import { Mail } from "lucide-react";
import { useI18n } from "@/context/i18n";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/sitepow",
    icon: "https://thesvg.org/icons/github/dark.svg",
  },
  {
    name: "Facebook",
    url: "https://web.facebook.com/teeraphat.tui",
    icon: "https://thesvg.org/icons/facebook/default.svg",
  },
];

const EMAIL_ADDRESS = "kteeraphatt@gmail.com";

export function ContactSection() {
  const { t } = useI18n();

  return (
    <Section imageFolder="contact">
      <div className="text-white flex flex-col gap-8 p-5 backdrop-blur-md">
        <div className="flex flex-col gap-2">
          <h1 className="leading-tight font-bold text-5xl md:text-7xl">
            {t.contact.title}
          </h1>
          <p className="text-white/60 text-lg">{t.contact.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors flex flex-col gap-2"
          >
            <span className="text-white/60 text-sm">
              {t.contact.emailLabel}
            </span>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <h3 className="text-xl font-bold">{EMAIL_ADDRESS}</h3>
            </div>
          </a>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex items-center justify-between">
            <span className="text-white/60">{t.contact.otherChannels}</span>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => {
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white/80 transition-colors"
                  >
                    <img src={link.icon} className="size-10" alt={link.name} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
