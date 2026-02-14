"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "es" | "en";

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (es: string, en: string) => string;
};

const Ctx = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const saved = (localStorage.getItem("lang") as Lang | null) ?? null;
    if (saved === "es" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const value = useMemo<LangCtx>(
    () => ({
      lang,
      setLang: setLangState,
      t: (es, en) => (lang === "es" ? es : en),
    }),
    [lang]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useLang must be used inside <LangProvider>");
  return v;
}
