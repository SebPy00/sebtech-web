export type CaseStudy = {
  title: string;
  cover: { type: "gradient" | "image"; src?: string }; // por ahora gradient para no depender de imágenes externas
  tags: string[];
  problem: { es: string; en: string };
  approach: { es: string; en: string };
  result: { es: string; en: string };
};

export const caseStudies: CaseStudy[] = [
  {
    title: "RAG Tracker",
    cover: { type: "gradient" },
    tags: ["RAG", "FastAPI/Django", "PostgreSQL", "Evaluación"],
    problem: {
      es: "Necesidad de medir calidad de recuperación y respuestas (RAG) con trazabilidad por consulta, dataset y versión de prompts/modelos.",
      en: "Need to measure retrieval and answer quality (RAG) with traceability across queries, datasets, and prompt/model versions.",
    },
    approach: {
      es: "Diseñé un flujo de tracking (inputs, chunks, scores, outputs) con almacenamiento en PostgreSQL y endpoints para comparar runs, prompts y cambios.",
      en: "Designed a tracking flow (inputs, chunks, scores, outputs) stored in PostgreSQL, with endpoints to compare runs, prompts, and changes.",
    },
    result: {
      es: "Base sólida para iterar con métricas y evidencias, reduciendo decisiones 'a ojo' y acelerando el ciclo de mejoras.",
      en: "Created a solid foundation to iterate with metrics and evidence, reducing guesswork and speeding up improvement cycles.",
    },
  },
  {
    title: "SIGESAWEB",
    cover: { type: "gradient" },
    tags: ["CRM", "Cobranzas", "Integraciones", "CI/CD"],
    problem: {
      es: "Operación diaria de cobranzas requiere estabilidad, control de accesos, auditoría y releases predecibles en un sistema crítico.",
      en: "Daily collections operations require stability, access control, auditing, and predictable releases in a critical system.",
    },
    approach: {
      es: "Lideré mejoras de arquitectura y delivery: estándares de code review, pipelines con Jenkins, entorno de test previo a producción y refactors por módulos.",
      en: "Led architecture and delivery improvements: code review standards, Jenkins pipelines, staging before production, and modular refactors.",
    },
    result: {
      es: "Menos fricción en releases, mayor confiabilidad en producción y capacidad de iterar sin romper la operación.",
      en: "Less friction in releases, higher production reliability, and ability to iterate without breaking operations.",
    },
  },
  {
    title: "Parceador / ETL de archivos",
    cover: { type: "gradient" },
    tags: ["ETL", "CSV", "Validación", "Automatización"],
    problem: {
      es: "Ingreso de datos desde múltiples formatos (CSV/variantes) con inconsistencias y riesgo de errores al cargar a base de datos.",
      en: "Data ingestion from multiple formats (CSV/variants) with inconsistencies and risk of errors when loading into the database.",
    },
    approach: {
      es: "Construí un pipeline de parseo/limpieza: normalización de campos, reglas por cliente, validaciones y generación de salidas controladas para inserción.",
      en: "Built a parsing/cleaning pipeline: field normalization, per-client rules, validations, and controlled outputs ready for insertion.",
    },
    result: {
      es: "Carga más confiable y repetible, con menos errores manuales y mayor velocidad para incorporar nuevos clientes/formats.",
      en: "More reliable and repeatable ingestion, fewer manual errors, and faster onboarding of new clients/formats.",
    },
  },
];
