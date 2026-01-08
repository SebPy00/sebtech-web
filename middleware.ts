import { NextRequest, NextResponse } from "next/server";

const SUPPORTED = ["es", "en"] as const;
type Lang = (typeof SUPPORTED)[number];

function detectLang(req: NextRequest): Lang {
  // 1) cookie manda
  const fromCookie = req.cookies.get("lang")?.value;
  if (fromCookie === "es" || fromCookie === "en") return fromCookie;

  // 2) Accept-Language
  const al = (req.headers.get("accept-language") || "").toLowerCase();
  if (al.includes("es")) return "es";
  return "en";
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignorar Next internals, assets, api, archivos, etc.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.match(/\.(.*)$/) // .png .jpg .css .js etc
  ) {
    return NextResponse.next();
  }

  // Si ya viene con /es o /en, guardamos cookie y seguimos
  const seg = pathname.split("/")[1];
  if (seg === "es" || seg === "en") {
    const res = NextResponse.next();
    res.cookies.set("lang", seg, { path: "/", sameSite: "lax" });
    return res;
  }

  // Si es "/", redirigimos a /es o /en
  const lang = detectLang(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  const res = NextResponse.redirect(url);
  res.cookies.set("lang", lang, { path: "/", sameSite: "lax" });
  return res;
}

export const config = {
  matcher: ["/:path*"],
};
