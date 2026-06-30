import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const navItems = [
    { title: "หน้าแรก", href: "/" },
    { title: "เกี่ยวกับฉัน", href: "/about" },
    { title: "ดาว์นโหลดเรซูเม่", href: "/download-resume" },
  ];

  return (
    <header className="backdrop-blur text-white fixed bg-neutral-900 top-0 z-50 w-full">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/navbar/premium_photo-1689246621798-4e9cc4d07b13.jpeg"
          className="size-full object-cover opacity-40"
        />
      </div>

      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold">
          พอร์ตโฟลิโอ
        </Link>

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
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
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
