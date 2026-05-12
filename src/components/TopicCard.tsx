"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NavigationItem } from "@/data/navigation";
import { useLocale } from "@/i18n/LocaleProvider";
import { localizeNavigationItem } from "@/i18n/localizedData";

export default function TopicCard({ item }: { item: NavigationItem }) {
  const Icon = item.icon;
  const { locale, localizedHref, t } = useLocale();
  const localizedItem = localizeNavigationItem(item, locale);

  return (
    <Link
      href={localizedHref(item.href)}
      className="focus-ring group min-h-[16rem] rounded-lg border border-ink-900/10 bg-white/62 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-strait-blue/70 hover:shadow-glow dark:border-white/10 dark:bg-white/[0.06]"
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink-950 text-white dark:bg-white dark:text-ink-950">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-semibold tracking-normal text-ink-950 dark:text-white">{localizedItem.titleText}</h2>
          <p className="mt-3 text-sm leading-7 text-ink-600 dark:text-ink-200">{localizedItem.descriptionText}</p>
        </div>
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-strait-blue dark:text-blue-300">
          {t("home.openModule")}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
