import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LogoBrand } from "@/components/LogoBrand";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const navItems = [
    { id: "home", title: "Home", href: "#home" },
    {
      id: "projects",
      title: "Projects",
      href: "#projects",
    },
    { id: "experience", title: "Experience", href: "#experience" },
    { id: "about-me", title: "About Me", href: "#about-me" },
    { id: "contact", title: "Contact", href: "#contact" },
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
              className="text-xs lg:text-sm font-medium transition-colors text-white/70 hover:text-emerald-400"
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:hidden">
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
              className="text-base font-semibold py-2.5 border-b border-white/10 transition-colors text-white/80 hover:text-white"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
