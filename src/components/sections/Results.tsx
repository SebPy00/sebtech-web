"use client";

import { useLang } from "@/context/LangContext";
import { ArrowUpRight } from "lucide-react";

export default function Results() {
  const { t } = useLang();

  return (
    <section
      id="results"
      className="border-t border-slate-100 bg-gradient-to-b from-white to-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
            {t("Sistemas", "Systems")}
          </div>

          <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            {t(
              "Tipos de sistemas que construimos",
              "Types of systems we build"
            )}
          </h2>

          <p className="text-lg leading-8 text-slate-600">
            {t(
              "Construimos plataformas pensadas para resolver operación real: procesos, trazabilidad, gestión interna, transacciones y crecimiento digital.",
              "We build platforms designed for real operations: processes, traceability, internal management, transactions and digital growth."
            )}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* ERP / CRM */}
          <article className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
              alt={t(
                "Dashboard de gestión empresarial",
                "Business management dashboard"
              )}
              className="h-[340px] w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/10" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                  {t("Gestión interna", "Internal management")}
                </p>
                <ArrowUpRight className="h-4 w-4 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </div>

              <h3 className="mb-4 text-3xl font-black tracking-tight text-white">
                {t("ERP / CRM Operativo", "Operational ERP / CRM")}
              </h3>

              <p className="max-w-xl text-base leading-8 text-slate-300">
                {t(
                  "Sistemas para centralizar gestión, seguimiento, trazabilidad y operación diaria en equipos con alto volumen de datos y procesos repetitivos.",
                  "Systems to centralize management, tracking, traceability and daily operations for teams handling high data volume and repetitive processes."
                )}
              </p>
            </div>
          </article>

          {/* Traceability */}
          <article className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
              alt={t(
                "Sistema de trazabilidad operativa",
                "Operational traceability system"
              )}
              className="h-[340px] w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/10" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                  {t("Monitoreo", "Monitoring")}
                </p>
                <ArrowUpRight className="h-4 w-4 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </div>

              <h3 className="mb-4 text-3xl font-black tracking-tight text-white">
                {t("Trazabilidad Operativa", "Operational Traceability")}
              </h3>

              <p className="max-w-xl text-base leading-8 text-slate-300">
                {t(
                  "Plataformas para seguimiento, control y visibilidad en tiempo real sobre procesos, estados, registros y flujos críticos del negocio.",
                  "Platforms for real-time tracking, control and visibility across business-critical processes, statuses, records and workflows."
                )}
              </p>
            </div>
          </article>

          {/* Process Automation */}
          <article className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
              alt={t(
                "Automatización de procesos empresariales",
                "Business process automation"
              )}
              className="h-[340px] w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/10" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                  {t("Digitalización", "Digitalization")}
                </p>
                <ArrowUpRight className="h-4 w-4 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </div>

              <h3 className="mb-4 text-3xl font-black tracking-tight text-white">
                {t(
                  "Automatización de Procesos",
                  "Business Process Automation"
                )}
              </h3>

              <p className="max-w-xl text-base leading-8 text-slate-300">
                {t(
                  "Sistemas orientados a reemplazar pasos manuales, reducir errores y acelerar operaciones que hoy dependen de intervención repetitiva.",
                  "Systems designed to replace manual steps, reduce errors and accelerate operations that still depend on repetitive human intervention."
                )}
              </p>
            </div>
          </article>

          {/* Marketplaces / Ecommerce */}
          <article className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80"
              alt={t(
                "Marketplace y plataformas transaccionales",
                "Marketplace and transactional platforms"
              )}
              className="h-[340px] w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/10" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                  {t("Plataformas digitales", "Digital platforms")}
                </p>
                <ArrowUpRight className="h-4 w-4 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </div>

              <h3 className="mb-4 text-3xl font-black tracking-tight text-white">
                {t(
                  "Marketplaces y E-commerce",
                  "Marketplaces & E-commerce"
                )}
              </h3>

              <p className="max-w-xl text-base leading-8 text-slate-300">
                {t(
                  "Productos digitales orientados a transacción, descubrimiento, interacción entre usuarios y crecimiento comercial sobre una base escalable.",
                  "Digital products built for transactions, discovery, user interaction and commercial growth on top of a scalable foundation."
                )}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}