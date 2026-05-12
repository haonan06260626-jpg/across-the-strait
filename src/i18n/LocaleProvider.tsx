"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  defaultLocale,
  getLocaleFromPath,
  localeCookieName,
  localizedHref,
  oppositeLocale,
  stripLocale,
  type Locale,
} from "@/i18n/config";
import { t as translate } from "@/i18n/translations";

type LocaleContextValue = {
  locale: Locale;
  t: (key: string) => string;
  localizedHref: (href: string) => string;
  switchLocale: (nextLocale: Locale) => void;
  oppositeLocale: Locale;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = getLocaleFromPath(pathname ?? `/${defaultLocale}`);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(localeCookieName, locale);
    document.cookie = `${localeCookieName}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      t: (key: string) => translate(locale, key),
      localizedHref: (href: string) => localizedHref(href, locale),
      switchLocale: (nextLocale: Locale) => {
        const barePath = stripLocale(pathname ?? "/");
        const nextHref = localizedHref(barePath, nextLocale);
        window.localStorage.setItem(localeCookieName, nextLocale);
        document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
        router.push(nextHref);
      },
      oppositeLocale: oppositeLocale(locale),
    }),
    [locale, pathname, router],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }
  return context;
}
