"use client";

import { useLang } from "@/context/LangContext";
import { Database, Network, Wrench } from "lucide-react";

const cards = [
  {
    icon: Database,
    title: "Backend & APIs",
    es: "Diseño de APIs robustas y optimización de bases de datos relacionales (PostgreSQL) para manejar cargas críticas sin degradación.",
    en: "Robust API design and relational database optimization (PostgreSQL) to handle critical loads without performance degradation.",
  },
  {
    icon: Network,
    title: "System Design",
    es: "Arquitectura de sistemas distribuidos, integraciones complejas y migración de legados hacia infraestructuras modernas.",
    en: "Distributed systems architecture, complex integrations, and legacy migrations toward modern, maintainable infrastructures.",
  },
  {
    icon: Wrench,
    title: "DevOps & Delivery",
    es: 'Automatización de despliegues, observabilidad y mejora de la cultura de entrega. Foco en "Time to Market" y estabilidad.',
    en: "Deployment automation, observability, and delivery culture improvement. Focused on Time to Market and system stability.",
  },
];

export default function Expertise() {
  const { t } = useLang();

  return (
    <section id="expertise" className="border-t border-white/5 bg-background-dark/30 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t("Servicios y Enfoque", "Services & Focus")}
            </h2>
            <p className="mt-4 text-slate-400">
              {t(
                "Soluciones pragmáticas para retos técnicos complejos. Trabajo como una extensión estratégica de tu equipo de ingeniería.",
                "Pragmatic technical solutions for complex challenges. Acting as a strategic extension of your engineering leadership."
              )}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-primary/50">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{c.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{t(c.es, c.en)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
