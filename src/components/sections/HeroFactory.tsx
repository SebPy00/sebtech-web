"use client";

import { useLang } from "@/context/LangContext";
import {
  ArrowRight,
  CalendarDays,
  Sparkles,
  ShieldCheck,
  Layers3,
} from "lucide-react";

export default function HeroFactory() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-white via-slate-50/60 to-white pb-24 pt-16 lg:pb-32 lg:pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_28%),radial-gradient(circle_at_left_center,rgba(56,189,248,0.10),transparent_24%)]" />
      <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-sky-100/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        {/* LEFT */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm backdrop-blur">
            <Sparkles size={14} />
            {t("Software Factory en Paraguay", "Software Factory in Paraguay")}
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-slate-950 md:text-6xl lg:text-7xl xl:text-[5.2rem]">
            {t("Software para", "Software for")}{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 bg-clip-text text-transparent">
              {t("operaciones reales", "real operations")}
            </span>
            .
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            {t(
              "Diseñamos y construimos plataformas, automatizaciones e integraciones para empresas que necesitan operar mejor, escalar procesos y convertir ideas en sistemas digitales confiables.",
              "We design and build platforms, automations and integrations for companies that need to operate better, scale processes and turn ideas into reliable digital systems."
            )}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              t("ERP / CRM", "ERP / CRM"),
              t("Automatización", "Automation"),
              t("Integraciones", "Integrations"),
              t("Marketplaces", "Marketplaces"),
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-base font-bold text-white shadow-[0_16px_40px_rgba(37,99,235,0.28)] transition-all hover:-translate-y-0.5 hover:bg-blue-700"
            >
              <CalendarDays size={18} />
              {t("Agendar llamada estratégica", "Book a strategy call")}
            </a>

            <a
              href="#results"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 text-base font-bold text-slate-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-slate-50"
            >
              {t("Ver sistemas que construimos", "See systems we build")}
              <ArrowRight size={18} />
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            {t(
              "Enfoque en plataformas internas, automatización e integración de sistemas.",
              "Focused on internal platforms, automation and system integrations."
            )}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Layers3 size={18} />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                {t("Problemas que resolvemos", "Problems we solve")}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {t(
                  "Procesos manuales, sistemas desconectados, operaciones lentas y productos digitales que todavía no existen.",
                  "Manual processes, disconnected systems, slow operations and digital products that still do not exist."
                )}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <ShieldCheck size={18} />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                {t("Cómo aportamos valor", "How we add value")}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {t(
                  "Con criterio técnico, enfoque pragmático y software pensado para vivir en producción.",
                  "With technical judgment, pragmatic execution and software designed to live in production."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="absolute -right-8 -top-10 h-44 w-44 rounded-full bg-blue-100/80 blur-3xl" />
          <div className="absolute -bottom-10 -left-8 h-44 w-44 rounded-full bg-sky-100/80 blur-3xl" />

          <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 shadow-[0_30px_90px_rgba(15,23,42,0.16)]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
              alt={t(
                "Equipo analizando resultados y soluciones digitales",
                "Team reviewing digital solutions and business results"
              )}
              className="h-[500px] w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />

            <div className="absolute left-6 right-6 top-6 flex items-start justify-between gap-4">
              <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur">
                {t("SebTech Studio", "SebTech Studio")}
              </div>

              <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-200 backdrop-blur">
                {t("Operación real", "Real operations")}
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur-md">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-white md:text-base">
                      {t(
                        "Resultados visibles para operaciones reales",
                        "Visible results for real operations"
                      )}
                    </p>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-slate-300">
                      {t(
                        "Plataformas, automatizaciones e integraciones diseñadas para generar orden, trazabilidad y crecimiento.",
                        "Platforms, automations and integrations designed to create order, traceability and growth."
                      )}
                    </p>
                  </div>

                  <div className="hidden rounded-full bg-blue-500/15 px-3 py-1 text-xs font-bold text-blue-200 sm:block">
                    {t("SebTech", "SebTech")}
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="flex min-h-[84px] flex-col justify-center rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur transition-all hover:bg-white/[0.08]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      {t("Plataformas", "Platforms")}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-snug text-white">
                      {t(
                        "Internas y transaccionales",
                        "Internal & transactional"
                      )}
                    </p>
                  </div>

                  <div className="flex min-h-[84px] flex-col justify-center rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur transition-all hover:bg-white/[0.08]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      {t("Automatización", "Automation")}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-snug text-white">
                      {t("Procesos y operación", "Processes & operations")}
                    </p>
                  </div>

                  <div className="flex min-h-[84px] flex-col justify-center rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur transition-all hover:bg-white/[0.08]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      {t("Integraciones", "Integrations")}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-snug text-white">
                      {t("Datos y sistemas", "Data & systems")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
              {t("ERP / CRM", "ERP / CRM")}
            </div>
            <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
              {t("Automatización", "Automation")}
            </div>
            <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
              {t("Integraciones", "Integrations")}
            </div>
            <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
              {t("Marketplaces", "Marketplaces")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}