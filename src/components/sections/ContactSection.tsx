import { Section } from "../Section";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "kteeraphatt@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section imageFolder="contact">
      <div className="text-white flex flex-col gap-8 p-5 backdrop-blur-md">
        <div className="flex flex-col gap-2">
          <h1 className="leading-tight font-bold text-5xl md:text-7xl">
            Contact
          </h1>
          <p className="text-white/60 text-lg">
            สนใจร่วมงานหรือสอบถามข้อมูลเพิ่มเติม
            สามารถติดต่อผมได้ที่ช่องทางด้านล่างนี้ครับ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col gap-4">
            <span className="text-white/60">ส่งอีเมลถึงผม</span>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{email}</h3>
              <button
                onClick={copyEmail}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                {copied ? (
                  <Check className="text-green-400" />
                ) : (
                  <Copy size={20} />
                )}
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/sitepow"
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-primary/20 transition-all"
            >
              <ArrowUpRight />
              <span className="text-sm font-bold">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
