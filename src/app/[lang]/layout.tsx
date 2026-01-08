import type { Metadata } from "next";
import { normalizeLocale } from "@/lib/i18n";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = normalizeLocale(lang);

  const isEs = locale === "es";

  const title = isEs
    ? "Sebastián Peralta · Software Engineer / Tech Lead"
    : "Sebastian Peralta · Software Engineer / Tech Lead";

  const description = isEs
    ? "Ingeniero de software y Tech Lead. Backends, APIs, Python (Django/FastAPI), PostgreSQL y sistemas confiables en producción."
    : "Software Engineer and Tech Lead. Backends, APIs, Python (Django/FastAPI), PostgreSQL and production-ready systems.";

  const url = `https://sebtech.dev/${locale}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: "https://sebtech.dev/es",
        en: "https://sebtech.dev/en",
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "SebTech",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const locale = normalizeLocale(lang);

  return <div data-lang={locale}>{children}</div>;
}
