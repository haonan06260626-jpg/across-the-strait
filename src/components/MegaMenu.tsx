"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { navigationCategories, navigationItems } from "@/data/navigation";
import { useLocale } from "@/i18n/LocaleProvider";
import { localizeNavigationItem, navigationCategoryLabels } from "@/i18n/localizedData";

export default function MegaMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { locale, localizedHref, t } = useLocale();

  if (!open) {
    return null;
  }

  return (
    <div
      className="absolute left-1/2 top-full z-[75] mt-3 w-[min(72rem,calc(100vw-2rem))] -translate-x-1/2 opacity-100"
      role="dialog"
      aria-modal="false"
      aria-label={t("common.menu")}
    >
      <div className="rounded-lg border border-white/10 bg-white/92 p-5 shadow-2xl backdrop-blur-2xl dark:bg-ink-950/92">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-strait-blue dark:text-blue-300">
            {t("common.siteTitle")}
            </p>
            <p className="mt-1 text-sm text-ink-600 dark:text-ink-200">
              {t("home.choosePathway")}
            </p>
          </div>
          <button
            type="button"
            className="focus-ring rounded-full border border-ink-900/10 p-2 text-ink-700 transition hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:text-ink-100"
            onClick={onClose}
            aria-label={t("common.closeMenu")}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {navigationCategories.map((category) => (
            <section key={category} aria-labelledby={`mega-${category}`}>
              <h2 id={`mega-${category}`} className="mb-3 text-sm font-semibold text-ink-950 dark:text-white">
                {navigationCategoryLabels[category][locale]}
              </h2>
              <div className="grid gap-2">
                {navigationItems
                  .filter((item) => item.category === category)
                  .map((item) => {
                    const Icon = item.icon;
                    const localizedItem = localizeNavigationItem(item, locale);

                    return (
                      <Link
                        key={item.href}
                        href={localizedHref(item.href)}
                        onClick={onClose}
                        className="focus-ring rounded-md border border-transparent p-3 transition hover:border-strait-blue/50 hover:bg-ink-900/[0.035] dark:hover:bg-white/[0.06]"
                      >
                        <span className="flex items-center gap-3 text-sm font-semibold text-ink-950 dark:text-white">
                          <Icon className="h-4 w-4 text-strait-blue dark:text-blue-300" aria-hidden="true" />
                          {localizedItem.titleText}
                        </span>
                        <span className="mt-1 block text-sm leading-6 text-ink-600 dark:text-ink-200">
                          {localizedItem.descriptionText}
                        </span>
                      </Link>
                    );
                  })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
