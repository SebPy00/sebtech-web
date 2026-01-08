import Script from "next/script";
import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

const themeInit = `
(function() {
  try {
    var stored = localStorage.getItem('theme'); // 'dark' | 'light' | null
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored ? stored : (prefersDark ? 'dark' : 'light');
    var root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inicialización temprana del tema */}
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
      </head>

      <body>
        {children}

        {/* Vercel Analytics (App Router) */}
        <Analytics />
      </body>
    </html>
  );
}
