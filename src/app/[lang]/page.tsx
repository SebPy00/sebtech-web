import { content } from "@/lib/content";
import { normalizeLocale } from "@/lib/i18n";
import LangSwitch from "@/components/LangSwitch";
import ThemeToggle from "@/components/ThemeToggle";

type Props = {
  params: Promise<{ lang: string }>;
};

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="chip">{children}</span>;
}

function StatusBadge({ value }: { value: string }) {
  return (
    <span className="chip whitespace-nowrap">
      <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--fg))]/60" />
      {value}
    </span>
  );
}

function Section({
  id,
  kicker,
  title,
  desc,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border bdr surface2 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--fg))]/40" />
          <p className="text-xs font-semibold tracking-[0.2em] t-muted2">
            {kicker}
          </p>
        </div>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>

        {desc ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed t-muted">
            {desc}
          </p>
        ) : null}
      </div>

      {children}
    </section>
  );
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  const locale = normalizeLocale(lang);
  const t = content[locale];

  return (
    <main className="min-h-screen">
      {/* Background (se ve bien en ambos temas) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_70%_10%,rgba(255,255,255,0.10),transparent_40%),radial-gradient(900px_circle_at_20%_20%,rgba(99,102,241,0.10),transparent_35%),radial-gradient(800px_circle_at_30%_80%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(900px_circle_at_80%_80%,rgba(245,158,11,0.08),transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/20 dark:from-black/0 dark:via-black/35 dark:to-black/70" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b bdr bg-[rgb(var(--bg))]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl border bdr surface2 text-sm font-semibold">
              S
            </div>
            <span className="text-sm font-semibold tracking-tight">SebTech</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm t-muted md:flex">
            <a className="hover:opacity-90" href="#about">
              {t.nav.about}
            </a>
            <a className="hover:opacity-90" href="#work">
              {t.nav.work}
            </a>
            <a className="hover:opacity-90" href="#stack">
              {t.nav.stack}
            </a>
            <a className="hover:opacity-90" href="#contact">
              {t.nav.contact}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <LangSwitch />
            <ThemeToggle />

            <a
              className="btn-ghost"
              href="https://github.com/SebPy00"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="btn-primary"
              href="https://www.linkedin.com/in/sebastian-peralta-249781178"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href={t.hero.cvHref} className="btn-ghost" download>
              {t.hero.ctas.cv}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:items-start md:py-24">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Chip>{t.hero.badge}</Chip>
            <Chip>{t.hero.location}</Chip>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl border bdr surface2 grid place-items-center text-sm font-semibold">
              SP
            </div>

            <div>
              <p className="text-sm font-medium">{t.hero.name}</p>
              <p className="text-xs t-muted2">{t.hero.location}</p>
            </div>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {t.hero.title}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed t-muted">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary">
              {t.hero.ctas.work}
            </a>

            <a href="#contact" className="btn-ghost">
              {t.hero.ctas.contact}
            </a>

            <a
              href="https://github.com/SebPy00"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              {t.hero.ctas.github}
            </a>
          </div>
        </div>

        {/* Quick links panel */}
        <aside className="rounded-3xl border bdr surface p-6 shadow-sm dark:shadow-none">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">{t.hero.quick.title}</h3>
            <span className="text-xs t-muted2">{t.hero.quick.domain}</span>
          </div>

          <div className="mt-4 space-y-3">
            {t.hero.quick.items.map((it: any) => (
              <a
                key={it.title}
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel={it.href.startsWith("http") ? "noreferrer" : undefined}
                className="block rounded-2xl border bdr surface2 p-4 hover:opacity-95"
              >
                <div className="text-sm font-semibold">{it.title}</div>
                <div className="mt-1 text-xs t-muted2">{it.desc}</div>
              </a>
            ))}
          </div>
        </aside>
      </section>

      {/* About */}
      <Section
        id="about"
        kicker={t.about.kicker}
        title={t.about.title}
        desc={t.about.desc}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border bdr bg-indigo-500/10 p-5">
            <h3 className="text-sm font-semibold">{t.about.cards[0].title}</h3>
            <p className="mt-2 text-sm leading-relaxed t-muted">
              {t.about.cards[0].desc}
            </p>
          </div>

          <div className="rounded-2xl border bdr bg-emerald-500/10 p-5">
            <h3 className="text-sm font-semibold">{t.about.cards[1].title}</h3>
            <p className="mt-2 text-sm leading-relaxed t-muted">
              {t.about.cards[1].desc}
            </p>
          </div>

          <div className="rounded-2xl border bdr bg-amber-500/10 p-5">
            <h3 className="text-sm font-semibold">{t.about.cards[2].title}</h3>
            <p className="mt-2 text-sm leading-relaxed t-muted">
              {t.about.cards[2].desc}
            </p>
          </div>
        </div>
      </Section>

      {/* Work */}
      <Section id="work" kicker={t.work.kicker} title={t.work.title} desc={t.work.desc}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.work.items.map((p: any) => (
            <article key={p.title} className="rounded-3xl border bdr surface p-6 shadow-sm dark:shadow-none">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed t-muted">{p.summary}</p>
                </div>
                <StatusBadge value={p.status} />
              </div>

              <div className="mt-5 rounded-2xl border bdr surface2 p-4">
                <p className="text-xs tracking-[0.2em] t-muted2">{p.impactTitle}</p>
                <p className="mt-2 text-sm leading-relaxed t-muted">{p.impact}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border bdr bg-indigo-500/10 px-3 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Stack */}
      <Section id="stack" kicker={t.stack.kicker} title={t.stack.title} desc={t.stack.desc}>
        <div className="flex flex-wrap gap-2">
          {t.stack.tags.map((s: string) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" kicker={t.contact.kicker} title={t.contact.title} desc={t.contact.desc}>
        <div className="flex flex-wrap gap-3">
          {t.contact.links.map((l: any) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              {l.label}
            </a>
          ))}
        </div>
        <p className="mt-10 text-xs t-muted2">{t.contact.footer}</p>
      </Section>
    </main>
  );
}
