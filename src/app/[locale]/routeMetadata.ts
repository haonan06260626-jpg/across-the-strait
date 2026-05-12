import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { t } from "@/i18n/translations";

export type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function buildLocalizedMetadata(
  params: LocalePageProps["params"],
  path: string,
  titleKey: string,
  descriptionKey = "metadata.description",
): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const siteTitle = t(locale, "metadata.title");
  const sectionTitle = t(locale, titleKey);
  const description = t(locale, descriptionKey);
  const localizedPath = path === "/" ? `/${locale}` : `/${locale}${path}`;
  const title = titleKey === "metadata.title" ? siteTitle : `${sectionTitle} | ${siteTitle}`;

  return {
    title,
    description,
    alternates: {
      canonical: localizedPath,
      languages: {
        en: path === "/" ? "/en" : `/en${path}`,
        "zh-CN": path === "/" ? "/zh-CN" : `/zh-CN${path}`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "zh-CN" ? "zh_CN" : "en_US",
      siteName: t(locale, "common.siteTitle"),
      url: localizedPath,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
