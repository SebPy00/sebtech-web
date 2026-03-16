// Header.tsx
"use client";

import { useEffect, useState } from "react";
import LangToggle from "@/components/ui/LangToggle";
import { useLang } from "@/context/LangContext";
import { Building2, Linkedin, CalendarDays } from "lucide-react";
import { usePathname } from "next/navigation";

const LINKEDIN_URL = "https://www.linkedin.com/in/sebastian-peralta-249781178";
const CALENDLY_URL = "#contact";

export default function Header() {
  const { t, lang } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hrefWithHash = (hash: string) => {
    const base = pathname || `/`;
    return `${base.split("#")[0]}${hash}`;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/85 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        <a href={`/`} className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
            <img
              src="/icon.svg"
              alt="SebTech"
              className="h-9"
            />
          </div>

          <div className="leading-tight">
            <span className="block text-base font-extrabold tracking-tight text-slate-900">
              SebTech
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:block">
              {t("Software Factory", "Software Factory")}
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
            href={hrefWithHash("#systems")}
          >
            {t("Sistemas", "Systems")}
          </a>
          <a
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
            href={hrefWithHash("#solutions")}
          >
            {t("Soluciones", "Solutions")}
          </a>
          <a
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
            href={hrefWithHash("#process")}
          >
            {t("Proceso", "Process")}
          </a>
          <a
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
            href={hrefWithHash("#company")}
          >
            {t("Nosotros", "About us")}
          </a>
          <a
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
            href={hrefWithHash("#contact")}
          >
            {t("Contacto", "Contact")}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-blue-200 hover:text-blue-600 sm:inline-flex"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          <LangToggle />

          <a
            className="hidden h-10 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 sm:inline-flex"
            href={CALENDLY_URL}
          >
            <CalendarDays size={16} />
            {t("Agendar llamada estratégica", "Book a strategy call")}
          </a>
        </div>
      </div>
    </header>
  );
}