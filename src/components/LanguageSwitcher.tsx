"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const { locale, switchLocale, t } = useLocale();
  const options: Array<{ locale: Locale; label: string }> = [
    { locale: "en", label: "EN" },
    { locale: "zh-CN", label: "简" },
  ];

  if (mobile) {
    return (
      <div className="grid grid-cols-2 gap-2" aria-label={t("common.switchLanguage")}>
        {options.map((option) => (
          <button
            key={option.locale}
            type="button"
            className={cn(
              "focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition",
              locale === option.locale
                ? "border-strait-blue bg-strait-blue text-white"
                : "border-ink-900/10 text-ink-700 hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:text-ink-100",
            )}
            onClick={() => switchLocale(option.locale)}
            aria-pressed={locale === option.locale}
          >
            {option.locale === "en" ? t("common.english") : t("common.simplifiedChinese")}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div
      className="hidden items-center rounded-full border border-white/[0.16] bg-white/[0.08] p-1 text-xs font-semibold text-white backdrop-blur lg:inline-flex"
      aria-label={t("common.switchLanguage")}
    >
      {options.map((option) => (
        <button
          key={option.locale}
          type="button"
          className={cn(
            "focus-ring rounded-full px-2.5 py-1.5 transition",
            locale === option.locale ? "bg-white text-ink-950" : "text-white/70 hover:text-white",
          )}
          onClick={() => switchLocale(option.locale)}
          aria-pressed={locale === option.locale}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
