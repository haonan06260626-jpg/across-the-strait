import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, localeCookieName } from "@/i18n/config";

const legacyRoutes = new Set([
  "/",
  "/overview",
  "/timeline",
  "/positions",
  "/us-policy",
  "/security",
  "/economics",
  "/documents",
  "/bibliography",
  "/glossary",
  "/methodology",
  "/presentation",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/").filter(Boolean)[0];

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  if (isLocale(firstSegment)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-atlas-locale", firstSegment);
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  if (legacyRoutes.has(pathname)) {
    const savedLocale = request.cookies.get(localeCookieName)?.value;
    const locale = isLocale(savedLocale) ? savedLocale : defaultLocale;
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
