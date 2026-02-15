import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
