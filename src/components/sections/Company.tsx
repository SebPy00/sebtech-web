"use client";

import { useLang } from "@/context/LangContext";
import { Building2, ShieldCheck, Cpu, MapPin } from "lucide-react";

export default function Company() {
  const { t } = useLang();

  return (
    <section
      id="company"
      className="border-t border-slate-100 bg-gradient-to-b from-white to-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
              {t("SebTech", "SebTech")}
            </div>

            <h2 className="max-w-3xl text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              {t(
                "Una software factory boutique para sistemas que necesitan vivir en operación real.",
                "A boutique software factory for systems that need to live in real operations."
              )}
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {t(
                "SebTech diseña y construye plataformas, automatizaciones e integraciones para empresas que necesitan software confiable, criterio técnico y ejecución pragmática.",
                "SebTech designs and builds platforms, automations and integrations for companies that need reliable software, technical judgment and pragmatic execution."
              )}
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              {t(
                "Liderada por Sebastián Peralta, SebTech combina visión de arquitectura, experiencia en desarrollo y enfoque en procesos reales para convertir necesidades complejas en sistemas claros y escalables.",
                "Led by Sebastián Peralta, SebTech combines architectural vision, development experience and a focus on real processes to turn complex needs into clear and scalable systems."
              )}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Building2 size={20} />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {t("Posicionamiento", "Positioning")}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {t(
                    "No solo desarrollamos software. Diseñamos sistemas pensados para sostener operación, orden y crecimiento.",
                    "We do not just build software. We design systems meant to support operations, order and growth."
                  )}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <ShieldCheck size={20} />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {t("Enfoque", "Approach")}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {t(
                    "Arquitectura clara, entregas iterativas, foco en mantenibilidad y software que sobreviva producción.",
                    "Clear architecture, iterative delivery, maintainability focus and software that survives production."
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                <Cpu size={20} />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
                  {t("Software Factory", "Software Factory")}
                </p>
                <p className="text-lg font-bold text-white">SebTech</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {t("Qué construimos", "What we build")}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {t(
                    "Plataformas internas, ERPs, CRMs operativos, marketplaces, automatización de procesos e integración entre sistemas.",
                    "Internal platforms, ERPs, operational CRMs, marketplaces, process automation and system integrations."
                  )}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {t("Cómo trabajamos", "How we work")}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {t(
                    "Con criterio técnico, comunicación directa y foco en resolver la operación antes que perseguir complejidad innecesaria.",
                    "With technical judgment, direct communication and a focus on solving operations before chasing unnecessary complexity."
                  )}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {t("Base", "Base")}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm leading-7 text-slate-300">
                  <MapPin size={16} className="text-blue-300" />
                  {t(
                    "Paraguay, trabajando en productos y sistemas para operación real.",
                    "Paraguay, building products and systems for real operations."
                  )}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  {t("Fortaleza", "Strength")}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {t("Desarrollo y arquitectura", "Development and architecture")}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  {t("Estilo", "Style")}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {t("Pragmático y escalable", "Pragmatic and scalable")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}