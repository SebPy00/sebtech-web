import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

export const metadata: Metadata = {
  title: "SebTech",
  description: "Tech Lead & Software Architect",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sebtech.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
