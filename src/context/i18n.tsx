import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Language, type TranslationDict } from "@/constants/translations";

export type { Language, TranslationDict };

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationDict;
}

const I18nContext = createContext<I18nContextType | null>(null);

const STORAGE_KEY = "portfolio_language";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === "th" || saved === "en") return saved;
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("th")) return "th";
    }
    return "th";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "th" ? "en" : "th");
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = translations[language].docTitle;
  }, [language]);

  const value: I18nContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
