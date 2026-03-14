// Footer.tsx
"use client";

import { useLang } from "@/context/LangContext";
import { Building2, Linkedin, Github, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const { t, lang } = useLang();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Building2 size={18} />
              </div>

              <div className="leading-tight">
                <p className="text-lg font-extrabold tracking-tight">SebTech</p>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  {t("Software Factory", "Software Factory")}
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-400">
              {t(
                "Construimos plataformas digitales, automatizaciones e integraciones para empresas que necesitan tecnología confiable para operar y crecer.",
                "We build digital platforms, automations and integrations for companies that need reliable technology to operate and grow."
              )}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-slate-300">
              {t("Contacto", "Contact")}
            </h3>

            <div className="space-y-3 text-sm text-slate-400">
              <a
                href="mailto:contact@sebtech.dev"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Mail size={16} />
                contact@sebtech.dev
              </a>

              <p className="flex items-center gap-2">
                <MapPin size={16} />
                Asunción, Paraguay
              </p>

              <a
                href={`/${lang}#contact`}
                className="inline-flex items-center rounded-lg border border-slate-800 px-3 py-2 font-semibold text-slate-300 transition hover:border-slate-700 hover:bg-slate-900 hover:text-white"
              >
                {t("Solicitar reunión", "Request a meeting")}
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-slate-300">
              {t("Enlaces", "Links")}
            </h3>

            <div className="space-y-3 text-sm text-slate-400">
              <a
                href="https://www.linkedin.com/in/sebastian-peralta-249781178"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>

              <a
                href="https://github.com/SebPy00"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Github size={16} />
                GitHub
              </a>

              <a
                href={`/${lang}#solutions`}
                className="transition hover:text-white"
              >
                {t("Ver soluciones", "View solutions")}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SebTech. {t("Todos los derechos reservados.", "All rights reserved.")}</p>
          <p>{t("Software factory liderada por Sebastián.", "Software factory led by Sebastián.")}</p>
        </div>
      </div>
    </footer>
  );
}