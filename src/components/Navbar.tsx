import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LogoBrand } from "@/components/LogoBrand";
import { useI18n } from "@/context/i18n";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useI18n();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const navItems = [
    { title: t.nav.home, href: "/" },
    { title: t.nav.about, href: "/about" },
    { title: t.nav.resume, href: "/download-resume" },
  ];

  return (
    <header className="backdrop-blur text-white fixed bg-neutral-900/90 top-0 z-50 w-full border-b border-white/5">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/navbar/premium_photo-1689246621798-4e9cc4d07b13.jpeg"
          className="size-full object-cover opacity-40"
          alt=""
        />
      </div>

      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <LogoBrand />

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          ))}

          <div className="flex items-center rounded-full bg-white/10 p-1 border border-white/10 text-xs">
            <button
              type="button"
              onClick={() => setLanguage("th")}
              className={cn(
                "px-2.5 py-0.5 rounded-full font-medium transition-colors cursor-pointer",
                language === "th"
                  ? "bg-primary text-white"
                  : "text-white/60 hover:text-white",
              )}
            >
              TH
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={cn(
                "px-2.5 py-0.5 rounded-full font-medium transition-colors cursor-pointer",
                language === "en"
                  ? "bg-primary text-white"
                  : "text-white/60 hover:text-white",
              )}
            >
              EN
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <div className="flex items-center rounded-full bg-white/10 p-0.5 border border-white/10 text-xs">
            <button
              type="button"
              onClick={() => setLanguage("th")}
              className={cn(
                "px-2 py-0.5 rounded-full font-medium transition-colors",
                language === "th"
                  ? "bg-primary text-white"
                  : "text-white/60 hover:text-white",
              )}
            >
              TH
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={cn(
                "px-2 py-0.5 rounded-full font-medium transition-colors",
                language === "en"
                  ? "bg-primary text-white"
                  : "text-white/60 hover:text-white",
              )}
            >
              EN
            </button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      <div
        className={cn(
          "bg-background absolute text-foreground left-0 top-full w-full border-b transition-all duration-300 md:hidden",
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden",
        )}
      >
        <div className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-semibold py-2 border-b"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
