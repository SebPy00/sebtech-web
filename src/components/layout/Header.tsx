"use client";

import LangToggle from "@/components/ui/LangToggle";
import { useLang } from "@/context/LangContext";
import { Terminal } from "lucide-react";

export default function Header() {
  const { t } = useLang();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
            <Terminal size={18} />
          </div>
          <span className="text-lg font-bold tracking-tight text-white uppercase tracking-wider">
            {t("Tech Lead", "Tech Lead")}
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            href="#expertise"
          >
            {t("Experiencia", "Expertise")}
          </a>
          <a
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            href="#projects"
          >
            {t("Proyectos", "Projects")}
          </a>
          <a
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            href="#contact"
          >
            {t("Contacto", "Contact")}
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <LangToggle />

          <a
            className="hidden sm:flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-xs font-bold text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95"
            href="#contact"
          >
            {t("Agendar Llamada", "Book a Call")}
          </a>
        </div>
      </div>
    </header>
  );
}
