"use client";

import React, { createContext, useContext, useEffect, useMemo } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";

export type Lang = "es" | "en";

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (es: string, en: string) => string;
};

const Ctx = createContext<LangCtx | null>(null);

function normalizeLang(x: unknown): Lang {
  return x === "en" ? "en" : "es";
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const params = useParams(); // { lang: "es" | "en" }
  const router = useRouter();
  const pathname = usePathname();

  const lang = normalizeLang(params?.lang);

  // Mantener <html lang="..."> correcto
  useEffect(() => {
    document.documentElement.lang = lang;
    // opcional: persistencia de preferencia
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const setLang = (next: Lang) => {
    if (!pathname) return;

    const parts = pathname.split("/");
    // ["", "es", ...]
    parts[1] = next;
    const nextPath = parts.join("/") || `/${next}`;

    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(`${nextPath}${hash}`);
  };

  const value = useMemo<LangCtx>(
    () => ({
      lang,
      setLang,
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
