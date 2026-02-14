"use client";

import { useLang } from "@/context/LangContext";
import { caseStudies } from "@/lib/siteData";

function Tag({ text }: { text: string }) {
  return (
    <span className="text-[11px] font-bold text-white/90 px-2 py-1 border border-white/15 rounded bg-white/[0.03]">
      {text}
    </span>
  );
}

function Cover() {
  // Cover "premium" sin depender de imágenes externas
  return (
    <div className="h-48 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-70 bg-gradient-to-br from-primary/35 via-purple-900/20 to-transparent" />
      <div className="absolute -top-24 -right-24 h-64 w-64 bg-primary/25 blur-[100px] rounded-full" />
      <div className="absolute bottom-6 left-6 text-xs font-bold tracking-widest text-white/70 uppercase">
        Case Study
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="px-6 py-24 bg-background-dark/50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("Proyectos Seleccionados", "Selected Projects")}
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl">
            {t(
              "Casos reales: problemas, decisiones técnicas y resultados. Sin humo.",
              "Real cases: problems, technical decisions, and outcomes. No fluff."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-primary/40 transition-all"
            >
              <Cover />

              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">{p.title}</h3>

                <div className="flex flex-wrap gap-2 mb-8 opacity-90">
                  {p.tags.map((x) => (
                    <Tag key={x} text={x} />
                  ))}
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                      {t("Problema", "Problem")}
                    </h4>
                    <p className="text-sm text-slate-400">{t(p.problem.es, p.problem.en)}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                      {t("Enfoque", "Approach")}
                    </h4>
                    <p className="text-sm text-slate-400">{t(p.approach.es, p.approach.en)}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                      {t("Resultado", "Result")}
                    </h4>
                    <p className="text-sm text-white font-medium">{t(p.result.es, p.result.en)}</p>
                  </div>
                </div>

                {/* opcional: link por proyecto */}
                {/* <a className="mt-8 inline-flex text-sm font-bold text-primary hover:underline" href="/case-studies/rag-tracker">Ver más →</a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
