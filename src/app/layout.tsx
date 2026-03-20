import "./globals.css";
import { Inter } from "next/font/google";
import { LangProvider } from "@/context/LangContext";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: {
    default: "SebTech | Desarrollo de Software, APIs y Automatización en Paraguay",
    template: "%s | SebTech",
  },

  description:
    "SebTech es una software factory especializada en desarrollo de software, APIs, automatización de procesos y plataformas empresariales en Paraguay.",

  keywords: [
    "software factory",
    "custom software",
    "desarrollo de software",
    "automatización de procesos",
    "backend development",
    "Django",
    "Next.js",
    "software Paraguay",
    "software company Paraguay",
  ],

  authors: [{ name: "Sebastián Peralta" }],

  openGraph: {
    title: "SebTech | Desarrollo de Software, APIs y Automatización en Paraguay",
    description:
      "SebTech es una software factory especializada en desarrollo de software, APIs, automatización de procesos y plataformas empresariales en Paraguay.",
    url: "https://sebtech.dev",
    siteName: "SebTech",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SebTech | Desarrollo de Software, APIs y Automatización en Paraguay",
    description:
      "SebTech es una software factory especializada en desarrollo de software, APIs, automatización de procesos y plataformas empresariales en Paraguay.",
    images: ["/og.png"],
  },

  metadataBase: new URL("https://sebtech.dev"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/30`}
      >
        <div className="fixed inset-0 pointer-events-none grid-bg z-0" />
        <div className="fixed inset-0 pointer-events-none glow-top-right z-0" />

        <LangProvider>
          <div className="relative z-10 flex min-h-screen flex-col overflow-x-hidden">
            {children}
          </div>
        </LangProvider>
        <Analytics />
      </body>
    </html>
  );
}
