import type { Locale } from "./i18n";

export const content: Record<Locale, any> = {
  en: {
    nav: { about: "About", work: "Work", stack: "Stack", contact: "Contact" },
    hero: {
      badge: "Available for opportunities",
      location: "Asunción, Paraguay",
      name: "Sebastián Peralta",
      title: "Software Engineer / Tech Lead",
      subtitle:
        "Backend systems, APIs, and pragmatic delivery. Mostly Python (Django/FastAPI), PHP, PostgreSQL, and modern web tooling.",
      cvHref: "/cv-sebastian-peralta-en.pdf",
      ctas: { work: "View work", contact: "Contact", github: "GitHub", linkedin: "LinkedIn", cv: "Download CV" },
      focus: { label: "Focus", value: "Reliable systems that survive production." },
      style: { label: "Style", value: "Clean architecture, pragmatic delivery." },
      quick: {
        title: "Quick links",
        items: [
          { title: "LinkedIn", desc: "Profile & experience", href: "https://www.linkedin.com/in/sebastian-peralta-249781178" },
          { title: "GitHub", desc: "Projects & code", href: "https://github.com/SebPy00" },
          { title: "Selected work", desc: "What I’m building", href: "#work" },
        ],
        direction: "Current direction: Next.js web presence, Python backends.",
      },
    },
    about: {
      kicker: "ABOUT",
      title: "I build software that’s easy to run, easy to trust, and easy to evolve.",
      desc:
        "I lead development teams and ship systems used in real operations. I care about clean boundaries, observability, and delivery pipelines that don’t break at 2 AM.",
      cards: [
        { title: "Backend & APIs", desc: "REST services, auth, integrations, and data workflows with reliability in mind." },
        { title: "Data & PostgreSQL", desc: "Modeling, ETL tooling, and pragmatic performance improvements." },
        { title: "Delivery & DevOps", desc: "CI/CD pipelines, environments, and deployments that stay boring." },
      ],
    },
    work: {
      kicker: "SELECTED WORK",
      title: "A few things I’m building and leading.",
      desc: "Short summaries for now. Later we can expand each one into a proper case study.",
      items: [
        {
          title: "Antro Project",
          status: "In Progress",
          summary:
            "Platform designed to digitalize bars and pubs, enabling a more modern connection between venues and their customers through digital experiences.",
          impactTitle: "IMPACT / FOCUS",
          impact:
            "Modernization of Paraguay’s nightlife and hospitality sector: improved visibility for venues, digital interaction with customers, and a scalable technological foundation.",
          tags: ["Django", "PostgreSQL", "Tailwind"],
        },
        {
          title: "MockApp",
          status: "Active",
          summary: "Marketplace concept connecting people with local professionals and micro-businesses.",
          impactTitle: "IMPACT / FOCUS",
          impact: "Fast discovery, profile quality, and trust signals (reviews) with location-aware search.",
          tags: ["Product", "Maps", "Reviews"],
        },
        {
          title: "SIGESAWEB",
          status: "Delivered",
          summary: "ERP system where I lead development and delivery pipelines.",
          impactTitle: "IMPACT / FOCUS",
          impact: "Shipping features safely with CI/CD, clean DB practices, and pragmatic refactors.",
          tags: ["PHP", "PostgreSQL", "Jenkins"],
        },
        {
          title: "Data Import/Export",
          status: "Stable",
          summary: "ETL-style tooling for CSV ingestion/export with validations and client-specific formats.",
          impactTitle: "IMPACT / FOCUS",
          impact: "Reducing manual work via automation, repeatable pipelines, and reliable outputs.",
          tags: ["PHP", "PostgreSQL", "Automation"],
        },
      ],
    },
    stack: {
      kicker: "STACK",
      title: "Tools I use often",
      desc: "I optimize for reliability, maintainability, and shipping.",
      tags: ["Python", "Django", "FastAPI", "PHP", "PostgreSQL", "Docker", "Linux", "Git", "CI/CD", "Tailwind", "Next.js"],
    },
    contact: {
      kicker: "CONTACT",
      title: "Let’s build something solid.",
      desc: "If you want to talk about a role, a project, or collaboration, reach me here:",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/sebastian-peralta-249781178" },
        { label: "GitHub", href: "https://github.com/SebPy00" },
        { label: "Email", href: "mailto:contact@sebtech.dev" },
      ],
      footer: "© 2026 SebTech — contact@sebtech.dev",
    },
  },

  es: {
    nav: { about: "Sobre mí", work: "Proyectos", stack: "Stack", contact: "Contacto" },
    hero: {
      badge: "Disponible para oportunidades",
      location: "Asunción, Paraguay",
      name: "Sebastián Peralta",
      title: "Software Engineer / Tech Lead",
      subtitle:
        "Backends, APIs y delivery pragmático. Principalmente Python (Django/FastAPI), PHP, PostgreSQL y tooling web moderno.",
      cvHref: "/cv-sebastian-peralta-es.pdf",
      ctas: { work: "Ver proyectos", contact: "Contacto", github: "GitHub", linkedin: "LinkedIn", cv: "Descargar CV" },
      focus: { label: "Enfoque", value: "Sistemas confiables que sobreviven producción." },
      style: { label: "Estilo", value: "Arquitectura limpia, delivery pragmático." },
      quick: {
        title: "Links rápidos",
        items: [
          { title: "LinkedIn", desc: "Perfil y experiencia", href: "https://www.linkedin.com/in/sebastian-peralta-249781178" },
          { title: "GitHub", desc: "Proyectos y código", href: "https://github.com/SebPy00" },
          { title: "Proyectos", desc: "Lo que estoy construyendo", href: "#work" },
        ],
        direction: "Dirección actual: presencia web con Next.js, backends en Python.",
      },
    },
    about: {
      kicker: "SOBRE MÍ",
      title: "Construyo software fácil de correr, fácil de confiar y fácil de evolucionar.",
      desc:
        "Lidero equipos y entrego sistemas usados en operaciones reales. Me importan los límites claros, la observabilidad y pipelines que no se rompen a las 2 AM.",
      cards: [
        { title: "Backend & APIs", desc: "Servicios REST, auth, integraciones y flujos de datos con foco en confiabilidad." },
        { title: "Datos & PostgreSQL", desc: "Modelado, ETL y mejoras de performance con pragmatismo." },
        { title: "Delivery & DevOps", desc: "CI/CD, entornos y despliegues que se mantienen aburridos (eso es bueno)." },
      ],
    },
    work: {
      kicker: "PROYECTOS",
      title: "Algunas cosas que estoy construyendo y liderando.",
      desc: "Resumen corto por ahora. Luego podemos expandir cada uno a un case study.",
      items: [
        {
          title: "Antro Project",
          status: "En progreso",
          summary:
            "Plataforma para digitalizar bares y pubs, facilitando un vínculo más moderno entre los establecimientos y sus clientes mediante experiencias digitales.",
          impactTitle: "IMPACTO / FOCO",
          impact:
            "Modernización del sector gastronómico nocturno en Paraguay: mejor visibilidad para los locales, interacción digital con los clientes y base tecnológica escalable.",
          tags: ["Django", "PostgreSQL", "Tailwind"],
        },
        {
          title: "MockApp",
          status: "Activo",
          summary: "Marketplace conectando personas con profesionales locales y micro-emprendimientos.",
          impactTitle: "IMPACTO / FOCO",
          impact: "Búsqueda rápida, perfiles de calidad y confianza mediante reseñas + ubicación.",
          tags: ["Producto", "Mapas", "Reseñas"],
        },
        {
          title: "SIGESAWEB",
          status: "Entregado",
          summary: "Sistema ERP donde lidero desarrollo y pipelines de entrega.",
          impactTitle: "IMPACTO / FOCO",
          impact: "Entregar features con seguridad: CI/CD, buenas prácticas DB y refactors pragmáticos.",
          tags: ["PHP", "PostgreSQL", "Jenkins"],
        },
        {
          title: "Import/Export",
          status: "Estable",
          summary: "Tooling tipo ETL para importar/exportar CSV con validaciones y formatos por cliente.",
          impactTitle: "IMPACTO / FOCO",
          impact: "Reducir trabajo manual con automatización, pipelines repetibles y outputs confiables.",
          tags: ["PHP", "PostgreSQL", "Automatización"],
        },
      ],
    },
    stack: {
      kicker: "STACK",
      title: "Herramientas que uso seguido",
      desc: "Optimizo por confiabilidad, mantenibilidad y entrega.",
      tags: ["Python", "Django", "FastAPI", "PHP", "PostgreSQL", "Docker", "Linux", "Git", "CI/CD", "Tailwind", "Next.js"],
    },
    contact: {
      kicker: "CONTACTO",
      title: "Hagamos algo sólido.",
      desc: "Si querés hablar de un rol, un proyecto o colaboración, acá están mis links:",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/sebastian-peralta-249781178" },
        { label: "GitHub", href: "https://github.com/SebPy00" },
        { label: "Correo", href: "mailto:contact@sebtech.dev" },
      ],
      footer: "© 2026 SebTech — contact@sebtech.dev",
    },
  },
};
