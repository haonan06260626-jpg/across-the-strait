export const locales = ["en", "zh-CN"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeCookieName = "atlas_locale";

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "zh-CN";
}

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return isLocale(segment) ? segment : defaultLocale;
}

export function stripLocale(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (isLocale(segments[0])) {
    const stripped = `/${segments.slice(1).join("/")}`;
    return stripped === "/" ? "/" : stripped.replace(/\/$/, "") || "/";
  }
  return pathname || "/";
}

export function localizedHref(href: string, locale: Locale) {
  if (href.startsWith("http") || href.startsWith("#")) {
    return href;
  }

  const bareHref = stripLocale(href);
  return bareHref === "/" ? `/${locale}` : `/${locale}${bareHref}`;
}

export function oppositeLocale(locale: Locale): Locale {
  return locale === "en" ? "zh-CN" : "en";
}

export type LocalizedText = string | Partial<Record<Locale, string>>;

export function getLocalizedText(value: LocalizedText | undefined, locale: Locale): string {
  if (!value) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  return value[locale] ?? value.en ?? "";
}
