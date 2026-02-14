"use client";

import { useLang } from "@/context/LangContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start lg:items-center lg:text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-8">
            {t("Disponible para Proyectos Q3/Q4", "Available for Q3/Q4 Projects")}
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {t(
              "Sistemas robustos que ",
              "Production systems "
            )}
            <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              {t("soportan la operación.", "built for reliability.")}
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            {t(
              "Tech Lead y Arquitecto de Software con base en Paraguay. Especializado en backend escalable, PostgreSQL y liderazgo de equipos técnicos en entornos de alta disponibilidad.",
              "Tech Lead and Software Architect based in Paraguay. Specializing in scalable backends, PostgreSQL, and technical team leadership for high-availability environments."
            )}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="flex h-14 min-w-[220px] items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-white hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 active:scale-95"
            >
              {t("Hablemos de tu proyecto", "Discuss Your Project")}
            </a>

            <a
              href="#projects"
              className="flex h-14 min-w-[220px] items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 text-base font-bold text-white hover:bg-white/10 transition-all active:scale-95"
            >
              {t("Ver Casos de Éxito", "View Case Studies")}
            </a>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-white/5 pt-16">
            {/* Domains */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                {t("Dominios de Aplicación", "Domain Expertise")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Collections & Debt", "CRM Systems", "Third-party Integrations"].map((x) => (
                  <span key={x} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">
                    {x}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcomes (ojo: placeholders) */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                {t("Resultados Medibles", "Measurable Outcomes")}
              </h4>
              <ul className="space-y-2">
                {[
                  t("Sistemas productivos con foco en estabilidad y trazabilidad.", "Production systems focused on stability and traceability."),
                  t("Automatización de despliegues (Jenkins) y entornos de test.", "Deployment automation (Jenkins) and staging environments."),
                ].map((x) => (
                  <li key={x} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-primary">✓</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                {t("Stack Tecnológico", "Tech Stack")}
              </h4>
              <div className="flex flex-wrap gap-3 opacity-80">
                {["GO / PYTHON", "POSTGRESQL", "DOCKER/K8S", "REDIS"].map((x) => (
                  <span key={x} className="text-xs font-bold text-white px-2 py-1 border border-white/20 rounded">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Nota: estos outcomes deberían ser reales; si no lo son, los cambiamos */}
        </div>
      </div>
    </section>
  );
}
