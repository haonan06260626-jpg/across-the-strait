"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { navigationCategories, navigationItems } from "@/data/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocale } from "@/i18n/LocaleProvider";
import { localizeNavigationItem, navigationCategoryLabels } from "@/i18n/localizedData";

export default function MobileMenu({
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
      className="fixed inset-0 z-[80] bg-ink-950/58 opacity-100 backdrop-blur-md transition lg:hidden"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t("common.menu")}
    >
      <div
        className="ml-auto h-full w-full max-w-md translate-x-0 transform overflow-y-auto border-l border-white/10 bg-white p-5 shadow-2xl transition dark:bg-ink-950"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-ink-950 dark:text-white">{t("common.menu")}</p>
            <p className="mt-1 text-xs text-ink-500 dark:text-ink-300">{t("common.siteTitle")}</p>
          </div>
          <button
            type="button"
            className="focus-ring rounded-full border border-ink-900/10 p-2 dark:border-white/10"
            aria-label={t("common.closeMenu")}
            onClick={onClose}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-7 grid gap-7">
          {navigationCategories.map((category) => (
            <section key={category} aria-labelledby={`mobile-${category}`}>
              <h2 id={`mobile-${category}`} className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 dark:text-ink-300">
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
                        className="focus-ring rounded-md border border-ink-900/10 p-4 dark:border-white/10"
                      >
                        <span className="flex items-center gap-3 text-sm font-semibold text-ink-950 dark:text-white">
                          <Icon className="h-4 w-4 text-strait-blue dark:text-blue-300" aria-hidden="true" />
                          {localizedItem.titleText}
                        </span>
                        <span className="mt-2 block text-sm leading-6 text-ink-600 dark:text-ink-200">
                          {localizedItem.descriptionText}
                        </span>
                      </Link>
                    );
                  })}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-7 border-t border-ink-900/10 pt-5 dark:border-white/10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 dark:text-ink-300">
            {t("common.language")}
          </p>
          <LanguageSwitcher mobile />
        </div>
      </div>
    </div>
  );
}
