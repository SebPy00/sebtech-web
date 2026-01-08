"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

function setLangCookie(lang: "es" | "en") {
  document.cookie = `lang=${lang}; path=/; max-age=31536000; samesite=lax`;
}

export default function LangSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const [lang, setLang] = useState<"es" | "en">("en");

  useEffect(() => {
    const seg = pathname.split("/")[1]?.toLowerCase();
    setLang(seg === "es" ? "es" : "en");

    // evitar scroll restore raro entre idiomas
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, [pathname]);

  const go = (next: "es" | "en") => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length === 0) {
      setLangCookie(next);
      router.push(`/${next}`);
    } else {
      parts[0] = next;
      setLangCookie(next);
      router.push(`/${parts.join("/")}`);
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
    });
  };

  const base =
    "inline-flex items-center gap-1 rounded-xl border bdr surface2 p-1";

  const tab = (active: boolean) =>
    [
      "rounded-lg px-2.5 py-1 text-xs font-semibold transition",
      active
        ? "bg-[rgb(var(--fg))] text-[rgb(var(--bg))]"
        : "text-[rgb(var(--fg))] opacity-70 hover:opacity-100",
    ].join(" ");

  return (
    <div className={base} aria-label="Language switch">
      <button
        type="button"
        onClick={() => go("es")}
        className={tab(lang === "es")}
        aria-pressed={lang === "es"}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => go("en")}
        className={tab(lang === "en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
