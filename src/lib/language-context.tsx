"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "ar";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  isAr: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  isAr: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("sang-e-taj-lang") as Lang | null;
    if (stored === "ar" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("sang-e-taj-lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang: setLangState, isAr: lang === "ar" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
