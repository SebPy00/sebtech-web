"use client";

import { useLang } from "@/context/LangContext";
import { AtSign, Github, FileText } from "lucide-react";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="px-6 py-24 bg-background-dark">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              {t("Trabajemos juntos", "Let's work together")}
            </h2>

            <p className="text-lg text-slate-400 mb-10 max-w-md">
              {t(
                "¿Buscas escalar tu equipo o resolver un cuello de botella crítico? Escríbeme y analicemos tu situación.",
                "Looking to scale your team or solve a critical technical bottleneck? Reach out and let's analyze your situation."
              )}
            </p>

            <div className="flex flex-col gap-6">

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/sebastian-peralta-249781178"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-white transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50">
                  <AtSign size={18} />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/SebPy00"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-white transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50">
                  <Github size={18} />
                </div>
                <span className="font-medium">GitHub</span>
              </a>

              {/* CV */}
              <a
                href="/cv.pdf"
                className="flex items-center gap-4 text-slate-300 hover:text-white transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50">
                  <FileText size={18} />
                </div>
                <span className="font-medium font-bold text-primary">
                  {t("Descargar CV (PDF)", "Download Curriculum Vitae (PDF)")}
                </span>
              </a>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5">
            <form className="space-y-5" onSubmit={(e)=>e.preventDefault()}>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {t("Nombre", "Name")}
                </label>
                <input
                  className="w-full bg-white/5 border-white/10 rounded-lg text-white focus:ring-primary focus:border-primary px-4 py-3"
                  placeholder={t("Tu nombre", "Your name")}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {t("Correo Electrónico", "Email")}
                </label>
                <input
                  type="email"
                  className="w-full bg-white/5 border-white/10 rounded-lg text-white focus:ring-primary focus:border-primary px-4 py-3"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {t("Mensaje", "Message")}
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border-white/10 rounded-lg text-white focus:ring-primary focus:border-primary px-4 py-3"
                  placeholder={t(
                    "Contame qué necesitás y en qué plazo.",
                    "Tell me what you need and your timeline."
                  )}
                />
              </div>

              <button
                className="w-full h-12 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                type="submit"
              >
                {t("Enviar Mensaje", "Send Message")}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
