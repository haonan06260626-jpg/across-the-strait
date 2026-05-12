"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";

export default function SiteFooter() {
  const { localizedHref, t } = useLocale();
  const footerLinks = [
    { href: "/documents", label: t("documents.title") },
    { href: "/glossary", label: t("glossary.title") },
    { href: "/methodology", label: t("methodology.eyebrow") },
    { href: "/presentation", label: t("presentation.title") },
  ];

  return (
    <footer className="border-t border-ink-900/10 px-5 py-8 dark:border-white/10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-3">
        <nav className="mb-2 flex flex-wrap gap-x-4 gap-y-2" aria-label={t("common.mainNavigation")}>
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={localizedHref(link.href)}
              className="focus-ring rounded-full text-xs font-semibold text-ink-600 transition hover:text-strait-blue dark:text-ink-200 dark:hover:text-blue-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs font-medium tracking-[0.08em] text-ink-500 dark:text-ink-300">
          {t("common.footerCredit")}
        </p>
        <p className="text-xs font-medium tracking-[0.06em] text-ink-500 dark:text-ink-300">
          {t("common.researchDesignCredit")}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs leading-5 text-ink-500 dark:text-ink-300">
          <span>{t("common.contentReviewed")}</span>
          <span>{t("common.academicDisclaimer")}</span>
        </div>
      </div>
    </footer>
  );
}
