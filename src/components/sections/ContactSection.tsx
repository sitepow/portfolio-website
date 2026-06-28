import { Section } from "../Section";
import { Mail } from "lucide-react";

const CONTRACT = {
  title: "Contact",
  description:
    "สนใจร่วมงานหรือสอบถามข้อมูลเพิ่มเติม สามารถติดต่อได้ที่ช่องทางด้านล่างนี้ครับ",
  email: {
    label: "ส่งอีเมลถึงผม",
    value: "kteeraphatt@gmail.com",
  },
  socialLinks: [
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
  ],
};

export function ContactSection() {
  return (
    <Section>
      <div className="text-white flex flex-col gap-8 p-5 backdrop-blur-md">
        <div className="flex flex-col gap-2">
          <h1 className="leading-tight font-bold text-5xl md:text-7xl">
            {CONTRACT.title}
          </h1>
          <p className="text-white/60 text-lg">{CONTRACT.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href={`mailto:${CONTRACT.email.value}`}
            className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors flex flex-col gap-2"
          >
            <span className="text-white/60 text-sm">
              {CONTRACT.email.label}
            </span>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <h3 className="text-xl font-bold">{CONTRACT.email.value}</h3>
            </div>
          </a>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex items-center justify-between">
            <span className="text-white/60">ช่องทางอื่นๆ</span>
            <div className="flex gap-4">
              {CONTRACT.socialLinks.map((link) => {
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white/80 transition-colors"
                  >
                    <img src={link.icon} className="size-10" />
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
