import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "ar" | "en";

type LanguageContextValue = {
  isArabic: boolean;
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LANGUAGE_STORAGE_KEY = "language";

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const getInitialLanguage = (): Language => {
  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (savedLanguage === "ar" || savedLanguage === "en") {
    return savedLanguage;
  }

  return document.documentElement.lang === "en" ? "en" : "ar";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      isArabic: language === "ar",
      language,
      setLanguage,
      toggleLanguage: () => {
        setLanguage((currentLanguage) => (currentLanguage === "ar" ? "en" : "ar"));
      },
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
