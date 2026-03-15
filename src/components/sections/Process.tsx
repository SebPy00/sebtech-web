"use client";

import { useLang } from "@/context/LangContext";

export default function Process() {
  const { t } = useLang();

  return (
    <section
      id="process"
      className="border-t border-slate-100 bg-gradient-to-b from-slate-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
            {t("Proceso", "Process")}
          </div>

          <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            {t("Nuestro proceso de trabajo", "Our working process")}
          </h2>

          <p className="text-lg leading-8 text-slate-600">
            {t(
              "Un proceso pragmático para transformar ideas, procesos o sistemas existentes en software funcional, claro y preparado para producción.",
              "A pragmatic process to transform ideas, processes or existing systems into functional, clear software ready for production."
            )}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-sm font-black tracking-[0.12em] text-blue-700">
              01
            </div>

            <h3 className="mb-3 text-xl font-bold text-slate-900">
              {t("Descubrimiento", "Discovery")}
            </h3>

            <p className="text-sm leading-7 text-slate-600">
              {t(
                "Entendemos el problema operativo, los objetivos del negocio y las restricciones técnicas antes de proponer una solución.",
                "We understand the operational problem, business goals and technical constraints before proposing a solution."
              )}
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-sm font-black tracking-[0.12em] text-blue-700">
              02
            </div>

            <h3 className="mb-3 text-xl font-bold text-slate-900">
              {t("Arquitectura", "Architecture")}
            </h3>

            <p className="text-sm leading-7 text-slate-600">
              {t(
                "Diseñamos la arquitectura del sistema, el modelo de datos y la estructura técnica para construir con claridad desde el inicio.",
                "We design the system architecture, data model and technical structure so we can build with clarity from the start."
              )}
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-sm font-black tracking-[0.12em] text-blue-700">
              03
            </div>

            <h3 className="mb-3 text-xl font-bold text-slate-900">
              {t("Desarrollo", "Development")}
            </h3>

            <p className="text-sm leading-7 text-slate-600">
              {t(
                "Construimos el sistema mediante ciclos cortos y entregas iterativas para validar avance, reducir riesgo y ajustar rápido.",
                "We build the system in short cycles with iterative delivery to validate progress, reduce risk and adjust quickly."
              )}
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-sm font-black tracking-[0.12em] text-blue-700">
              04
            </div>

            <h3 className="mb-3 text-xl font-bold text-slate-900">
              {t("Lanzamiento", "Launch")}
            </h3>

            <p className="text-sm leading-7 text-slate-600">
              {t(
                "Desplegamos la plataforma, acompañamos la salida a producción y aseguramos estabilidad para que el sistema viva en operación real.",
                "We deploy the platform, support the production rollout and ensure stability so the system can live in real operations."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}