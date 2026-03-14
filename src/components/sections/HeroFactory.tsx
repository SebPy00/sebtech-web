//HeroFactory.tsx
"use client";

import { useLang } from "@/context/LangContext";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function HeroFactory() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-16 lg:pb-28 lg:pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_30%),radial-gradient(circle_at_left_center,rgba(56,189,248,0.08),transparent_25%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-12">
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
            {t("Software Factory en Paraguay", "Software Factory in Paraguay")}
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
            {t("Soluciones digitales que impulsan", "Digital solutions that power")}{" "}
            <span className="text-blue-600">
              {t("operaciones reales", "real business")}
            </span>{" "}
            {t("de negocio.", "operations.")}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            {t(
              "Diseñamos y construimos plataformas, automatizaciones e integraciones para empresas que necesitan operar mejor, escalar procesos y convertir ideas en productos digitales sólidos.",
              "We design and build platforms, automations and integrations for companies that need to operate better, scale processes and turn ideas into solid digital products."
            )}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#results"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              {t("Ver resultados", "See results")}
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 text-base font-bold text-slate-900 transition hover:border-blue-200 hover:bg-slate-50"
            >
              <CalendarDays size={18} />
              {t("Agendar llamada estratégica", "Book a strategy call")}
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                {t("Qué resolvemos", "What we solve")}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {t(
                  "Procesos manuales, herramientas desconectadas, operaciones lentas y productos digitales que todavía no existen.",
                  "Manual processes, disconnected tools, slow operations and digital products that still do not exist."
                )}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                {t("Cómo trabajamos", "How we work")}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {t(
                  "Con enfoque boutique, criterio técnico y ejecución pragmática: menos humo, más software útil.",
                  "With a boutique approach, technical judgment and pragmatic execution: less buzz, more useful software."
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-sky-100 blur-3xl" />

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt={t(
                "Equipo analizando resultados y soluciones digitales",
                "Team reviewing digital solutions and business results"
              )}
              className="h-[420px] w-full object-cover"
            />

            <div className="border-t border-slate-200 bg-white p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {t("Resultados visibles para operaciones reales", "Visible results for real operations")}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {t(
                      "Plataformas, automatizaciones e integraciones diseñadas para generar orden, trazabilidad y crecimiento.",
                      "Platforms, automations and integrations designed to create order, traceability and growth."
                    )}
                  </p>
                </div>

                <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  {t("SebTech", "SebTech")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}