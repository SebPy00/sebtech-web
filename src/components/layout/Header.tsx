"use client";

import LangToggle from "@/components/ui/LangToggle";
import { useLang } from "@/context/LangContext";
import { Terminal, Github, Linkedin } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const LINKEDIN_URL = "https://www.linkedin.com/in/sebastian-peralta-249781178";
const GITHUB_URL = "https://github.com/SebPy00";

export default function Header() {
  const { t, lang } = useLang(); // asumimos que tu LangContext expone `lang: "es" | "en"`
  const router = useRouter();
  const pathname = usePathname(); // ej: /es o /en o /es/loquesea

  // Construye href con el idioma actual y ancla (sirve si más adelante tenés subrutas)
  const hrefWithHash = (hash: string) => {
    // si pathname es null raro, fallback
    const base = pathname || `/${lang}`;
    // asegura que si estás en /es/... mantenga eso
    return `${base.split("#")[0]}${hash}`;
  };

  // Si querés que el toggle cambie URL sí o sí:
  const setLangInUrl = (nextLang: "es" | "en") => {
    // cambia solo el primer segmento
    const parts = (pathname || "/es").split("/");
    // ["", "es", ...]
    parts[1] = nextLang;
    const nextPath = parts.join("/") || `/${nextLang}`;

    // mantener hash actual si existe
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(`${nextPath}${hash}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        <a href={`/${lang}`} className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
            <Terminal size={18} />
          </div>
          <span className="text-lg font-bold tracking-tight text-white uppercase tracking-wider">
            {t("Tech Lead", "Tech Lead")}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            href={hrefWithHash("#expertise")}
          >
            {t("Experiencia", "Expertise")}
          </a>
          <a
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            href={hrefWithHash("#projects")}
          >
            {t("Proyectos", "Projects")}
          </a>
          <a
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            href={hrefWithHash("#contact")}
          >
            {t("Contacto", "Contact")}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {/* Social */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 transition"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 transition"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={18} />
            </a>
          </div>

          {/* Lang toggle: ideal que llame a setLangInUrl internamente.
              Si tu LangToggle hoy solo cambia contexto, podés pasarle props. */}
          <LangToggle />

          <a
            className="hidden sm:flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-xs font-bold text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95"
            href={hrefWithHash("#contact")}
          >
            {t("Agendar Llamada", "Book a Call")}
          </a>
        </div>
      </div>
    </header>
  );
}
