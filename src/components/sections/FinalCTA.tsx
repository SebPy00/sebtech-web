"use client";

import { useLang } from "@/context/LangContext";
import { ArrowRight, CalendarDays } from "lucide-react";
import { BOOKING_URL } from "@/lib/config";

export default function FinalCTA() {
  const { t } = useLang();

  return (
    <section id="finalcta" className="border-t border-slate-100 bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 px-8 py-16 text-center shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.28),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.18),transparent_24%)]" />
          <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-300">
              {t("Siguiente paso", "Next step")}
            </div>

            <h2 className="mb-6 text-4xl font-black tracking-tight text-white md:text-5xl">
              {t(
                "¿Listo para construir algo sólido?",
                "Ready to build something solid?"
              )}
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-300">
              {t(
                "Si estás evaluando una plataforma, automatización o integración, podemos revisar tu caso y definir el mejor camino para llevarlo a producción.",
                "If you are evaluating a platform, automation or integration, we can review your case and define the best path to take it into production."
              )}
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700"
              >
                {t("Iniciar conversación", "Start a conversation")}
                <ArrowRight size={16} />
              </a>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 font-semibold text-white transition-all hover:bg-white/10"
              >
                <CalendarDays size={16} />
                {t("Agendar llamada estratégica", "Book a strategy call")}
              </a>
            </div>

            <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {t("Plataformas", "Platforms")}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {t(
                    "Sistemas internos, productos digitales y marketplaces.",
                    "Internal systems, digital products and marketplaces."
                  )}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {t("Automatización", "Automation")}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {t(
                    "Procesos más rápidos, menos fricción y menos trabajo manual.",
                    "Faster processes, less friction and less manual work."
                  )}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {t("Integraciones", "Integrations")}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {t(
                    "Conexión entre herramientas, datos y operaciones existentes.",
                    "Connection across existing tools, data and operations."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}