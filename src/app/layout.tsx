import "./globals.css";
import { Inter } from "next/font/google";
import { LangProvider } from "@/context/LangContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: {
    default: "SebTech - Software Factory",
    template: "%s | SebTech",
  },

  description:
    "SebTech es una software factory especializada en plataformas, APIs, automatización de procesos y sistemas empresariales.",

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
    title: "SebTech - Software Factory",
    description:
      "Construimos plataformas, APIs y automatización para operaciones reales.",
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
    title: "SebTech - Software Factory",
    description:
      "Custom software, APIs y automatización para empresas.",
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
      </body>
    </html>
  );
}
