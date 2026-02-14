"use client";

import { useLang } from "@/context/LangContext";
import { Terminal, Globe, Activity } from "lucide-react";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-white/5 bg-background-dark px-6 py-12">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-primary/20 text-primary">
            <Terminal size={14} />
          </div>
          <span className="text-sm font-bold tracking-tight text-white">Tech Lead Architect</span>
        </div>

        <p className="text-xs text-slate-500">
          © 2024. Asunción, Paraguay. {t("Ingeniería pragmática.", "Pragmatic engineering.")}
        </p>

        <div className="flex gap-6">
          <a className="text-slate-500 hover:text-white transition-colors" href="https://sebtech.dev" aria-label="Website">
            <Globe size={18} />
          </a>
          <a className="text-slate-500 hover:text-white transition-colors" href="#contact" aria-label="Contact">
            <Activity size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
