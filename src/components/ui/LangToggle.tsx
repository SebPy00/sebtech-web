// LangToggle.tsx
"use client";

import { useLang } from "@/context/LangContext";

export default function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setLang("es")}
        className={`px-3 py-1.5 text-xs font-bold transition ${
          lang === "es"
            ? "bg-blue-600 text-white"
            : "text-slate-600 hover:bg-slate-100"
        }`}
        aria-pressed={lang === "es"}
      >
        ES
      </button>

      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 text-xs font-bold transition ${
          lang === "en"
            ? "bg-blue-600 text-white"
            : "text-slate-600 hover:bg-slate-100"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}