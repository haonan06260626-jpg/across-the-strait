"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Breadcrumbs({ current }: { current: string }) {
  const { localizedHref, t } = useLocale();
  const currentLabel = breadcrumbLabel(current, t);

  return (
    <nav className="mx-auto max-w-7xl px-5 pt-8 lg:px-8" aria-label={t("common.breadcrumb")}>
      <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-500 dark:text-ink-300">
        <li>
          <Link
            href={localizedHref("/")}
            className="focus-ring inline-flex items-center gap-2 rounded-full px-2 py-1 transition hover:text-strait-blue dark:hover:text-blue-200"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            {t("common.home")}
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="h-3.5 w-3.5" />
        </li>
        <li className="font-medium text-ink-800 dark:text-white" aria-current="page">
          {currentLabel}
        </li>
      </ol>
    </nav>
  );
}

function breadcrumbLabel(current: string, t: (key: string) => string) {
  const labels: Record<string, string> = {
    Overview: t("overview.eyebrow"),
    Timeline: t("timeline.title"),
    "Competing Positions": t("positions.title"),
    "U.S. Policy Architecture": t("policy.title"),
    "Security & Deterrence": t("security.title"),
    "Economics & Technology": t("economics.title"),
    Documents: t("documents.title"),
    Bibliography: t("bibliography.eyebrow"),
    Glossary: t("glossary.title"),
    Methodology: t("methodology.eyebrow"),
    Presentation: t("presentation.title"),
  };

  return labels[current] ?? current;
}
