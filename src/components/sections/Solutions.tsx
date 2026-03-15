"use client";

import { useLang } from "@/context/LangContext";
import { Workflow, Layers, Network } from "lucide-react";

export default function Solutions() {
  const { t } = useLang();

  return (
    <section
      id="solutions"
      className="border-t border-slate-100 bg-gradient-to-b from-slate-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
            {t("Soluciones", "Solutions")}
          </div>

          <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            {t(
              "Tecnología diseñada para operaciones reales",
              "Technology designed for real operations"
            )}
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
            {t(
              "Construimos sistemas para reducir fricción operativa, ordenar procesos y crear una base tecnológica sólida para el crecimiento.",
              "We build systems designed to reduce operational friction, organize processes and create a solid technology foundation for growth."
            )}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {/* Automation */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Workflow size={26} />
            </div>

            <h3 className="mb-4 text-xl font-bold text-slate-900">
              {t("Automatización de procesos", "Process automation")}
            </h3>

            <p className="text-sm leading-7 text-slate-600">
              {t(
                "Digitalizamos procesos manuales y flujos operativos para reducir errores, acelerar operaciones y eliminar trabajo repetitivo.",
                "We digitize manual processes and workflows to reduce errors, accelerate operations and eliminate repetitive work."
              )}
            </p>
          </div>

          {/* Platforms */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Layers size={26} />
            </div>

            <h3 className="mb-4 text-xl font-bold text-slate-900">
              {t("Plataformas digitales", "Digital platforms")}
            </h3>

            <p className="text-sm leading-7 text-slate-600">
              {t(
                "Diseñamos plataformas web, marketplaces y sistemas internos pensados para escalar con el crecimiento del negocio.",
                "We design web platforms, marketplaces and internal systems built to scale with business growth."
              )}
            </p>
          </div>

          {/* Integrations */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Network size={26} />
            </div>

            <h3 className="mb-4 text-xl font-bold text-slate-900">
              {t("Integración de sistemas", "System integrations")}
            </h3>

            <p className="text-sm leading-7 text-slate-600">
              {t(
                "Conectamos APIs, bases de datos y herramientas existentes para construir ecosistemas tecnológicos coherentes.",
                "We connect APIs, databases and existing tools to build coherent technology ecosystems."
              )}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}