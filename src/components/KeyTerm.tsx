"use client";

import Link from "next/link";
import { SourceButton } from "@/components/CitationProvider";
import { keyTerms } from "@/data/terms";
import { getLocalizedText } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";

export default function KeyTerm({
  term,
  children,
}: {
  term: string;
  children?: React.ReactNode;
}) {
  const { locale, localizedHref, t } = useLocale();
  const record = keyTerms.find((item) => {
    const englishTerm = getLocalizedText(item.term, "en");
    return englishTerm === term || item.aliases?.includes(term);
  });

  if (!record) {
    return <>{children ?? term}</>;
  }

  const label = children ?? getLocalizedText(record.term, locale);
  const termLabel = getLocalizedText(record.term, locale);
  const sourceIds = Array.from(new Set(record.sourceIds));

  return (
    <span className="group relative inline-flex align-baseline">
      <button
        type="button"
        className="focus-ring rounded-sm border-b border-dotted border-strait-blue/70 text-strait-blue transition hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-100"
        aria-label={`${termLabel}: ${getLocalizedText(record.definition, locale)}`}
      >
        {label}
      </button>
      <span className="pointer-events-none absolute left-0 top-full z-50 mt-2 hidden w-[min(20rem,calc(100vw-2rem))] rounded-lg border border-ink-900/10 bg-white/95 p-4 text-left text-xs leading-6 text-ink-700 shadow-2xl backdrop-blur-2xl group-hover:block group-focus-within:block dark:border-white/10 dark:bg-ink-950/95 dark:text-ink-100">
        <strong className="mb-2 block text-sm font-semibold text-ink-950 dark:text-white">
          {termLabel}
        </strong>
        <span className="block">{getLocalizedText(record.definition, locale)}</span>
        <span className="mt-2 block text-ink-600 dark:text-ink-200">
          {getLocalizedText(record.whyItMatters, locale)}
        </span>
        <Link
          href={`${localizedHref("/glossary")}#${termSlug(getLocalizedText(record.term, "en"))}`}
          className="pointer-events-auto mt-3 inline-flex rounded-full text-xs font-semibold text-strait-blue transition hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-100"
        >
          {t("glossary.title")}
        </Link>
        <span className="mt-3 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-300">
          {t("glossary.relatedSources")}
        </span>
        <span className="pointer-events-auto mt-2 flex flex-wrap gap-2">
          {sourceIds.map((id) => (
            <SourceButton key={`term-${term}-${id}`} sourceId={id} />
          ))}
        </span>
      </span>
    </span>
  );
}

function termSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
