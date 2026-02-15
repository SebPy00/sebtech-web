import "./globals.css";
import { Inter } from "next/font/google";
import { LangProvider } from "@/context/LangContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Tech Lead & Software Architect | Systems for Production",
  description: "Tech Lead y Arquitecto de Software. Backend escalable, PostgreSQL, DevOps y liderazgo técnico.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/30`}
      >
        {/* Background */}
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
