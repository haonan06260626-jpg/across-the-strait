import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { t } from "@/i18n/translations";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const title = t(locale, "metadata.title");
  const description = t(locale, "metadata.description");

  return {
    title,
    description,
    alternates: {
      languages: {
        en: "/en",
        "zh-CN": "/zh-CN",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "zh-CN" ? "zh_CN" : "en_US",
      siteName: t(locale, "common.siteTitle"),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children }: LocaleLayoutProps) {
  return children;
}
