import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LogoBrand } from "@/components/LogoBrand";
import { useI18n } from "@/context/i18n";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const { language, setLanguage, t } = useI18n();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const navItems = [
    { id: "about", title: t.nav.about, href: "#about" },
    { id: "interests", title: t.nav.interests, href: "#interests" },
    { id: "skills", title: t.nav.skills, href: "#skills" },
    {
      id: "featured-projects",
      title: t.nav.featuredProjects,
      href: "#featured-projects",
    },
    {
      id: "other-projects",
      title: t.nav.otherProjects,
      href: "#other-projects",
    },
    { id: "contact", title: t.nav.contact, href: "#contact" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", href);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
      },
    );

    const sectionIds = [
      "about",
      "interests",
      "skills",
      "featured-projects",
      "other-projects",
      "contact",
    ];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="backdrop-blur text-white fixed bg-neutral-900/90 top-0 z-50 w-full border-b border-white/5">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <LogoBrand
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.replaceState(null, "", " ");
            setIsMenuOpen(false);
          }}
        />

        <div className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "text-xs lg:text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.id
                  ? "text-primary font-bold"
                  : "text-white/70",
              )}
            >
              {item.title}
            </a>
          ))}

          <div className="flex items-center rounded-full bg-white/10 p-1 border border-white/10 text-xs ml-1">
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
          "bg-neutral-900/95 backdrop-blur-lg absolute text-white left-0 top-full w-full border-b border-white/10 transition-all duration-300 md:hidden",
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden",
        )}
      >
        <div className="flex flex-col p-6 gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "text-base font-semibold py-2.5 border-b border-white/10 transition-colors",
                activeSection === item.id
                  ? "text-primary"
                  : "text-white/80 hover:text-white",
              )}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
