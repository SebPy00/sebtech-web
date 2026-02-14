"use client";

import { useLang } from "@/context/LangContext";

export default function LangToggle() {
  const { lang, setLang } = useLang();

  const base =
    "px-3 py-1 text-[10px] font-bold rounded-full transition-all hover:text-white";
  const active = "bg-primary text-white";
  const inactive = "text-slate-500";

  return (
    <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
      <button
        type="button"
        className={`${base} ${lang === "es" ? active : inactive}`}
        onClick={() => setLang("es")}
      >
        ES
      </button>
      <button
        type="button"
        className={`${base} ${lang === "en" ? active : inactive}`}
        onClick={() => setLang("en")}
      >
        EN
      </button>
    </div>
  );
}
