"use client";

import { useMemo, useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { SourceButton } from "@/components/CitationProvider";
import ResearchShell from "@/components/ResearchShell";
import { sources, type SourceCategory, type SourceRecord } from "@/data/sources";
import { useLocale } from "@/i18n/LocaleProvider";
import { categoryLabels, localizeSource } from "@/i18n/localizedData";
import type { Locale } from "@/i18n/config";

export default function BibliographyPage() {
  return (
    <ResearchShell breadcrumb="Bibliography" readingProgress>
      <BibliographyBody />
    </ResearchShell>
  );
}

function BibliographyBody() {
  const { locale, t } = useLocale();
  const groupedSources = useMemo(() => {
    return sources.reduce<Record<SourceCategory, SourceRecord[]>>((acc, source) => {
      acc[source.category] = acc[source.category] ? [...acc[source.category], source] : [source];
      return acc;
    }, {} as Record<SourceCategory, SourceRecord[]>);
  }, []);

  return (
    <main className="px-5 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section aria-labelledby="bibliography-heading">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-strait-blue dark:text-blue-300">
            {t("bibliography.eyebrow")}
          </p>
          <h1 id="bibliography-heading" className="text-5xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-6xl">
            {t("bibliography.title")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-700 dark:text-ink-100">
            {t("bibliography.intro")}
          </p>
        </section>

        <div className="mt-12 grid gap-10">
          {Object.entries(groupedSources).map(([category, categorySources]) => (
            <section key={category} aria-labelledby={`bibliography-${category}`}>
              <h2 id={`bibliography-${category}`} className="mb-4 text-2xl font-semibold tracking-normal text-ink-950 dark:text-white">
                {categoryLabels[category as SourceCategory][locale]}
              </h2>
              <div className="grid gap-4">
                {categorySources.map((source) => (
                  <BibliographyEntry key={source.id} source={source} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

function BibliographyEntry({ source }: { source: SourceRecord }) {
  const { locale, t } = useLocale();
  const [copied, setCopied] = useState<"citation" | "link" | null>(null);
  const localizedSource = localizeSource(source, locale);
  const citation = formatCitation(source, locale);

  async function copy(value: string, kind: "citation" | "link") {
    await navigator.clipboard.writeText(value);
    setCopied(kind);
    window.setTimeout(() => setCopied(null), 1400);
  }

  return (
    <article className="rounded-lg border border-ink-900/10 bg-white/66 p-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
      <p className="text-sm leading-7 text-ink-800 dark:text-ink-100">{citation}</p>
      <dl className="mt-4 grid gap-3 text-sm text-ink-700 dark:text-ink-100 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="font-semibold">{t("bibliography.institutionAuthor")}</dt>
          <dd>{source.author ? `${source.author}; ${localizedSource.institutionText}` : localizedSource.institutionText}</dd>
        </div>
        <div>
          <dt className="font-semibold">{t("common.year")}</dt>
          <dd>{source.year}</dd>
        </div>
        <div>
          <dt className="font-semibold">{t("common.type")}</dt>
          <dd>{localizedSource.categoryText}</dd>
        </div>
        <div>
          <dt className="font-semibold">{t("common.reliabilityNote")}</dt>
          <dd>{localizedSource.reliabilityText}</dd>
        </div>
      </dl>
      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink-900/10 px-3 py-1 text-xs font-semibold text-ink-700 transition hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:text-ink-100"
          onClick={() => copy(citation, "citation")}
        >
          {copied === "citation" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {t("bibliography.copyCitation")}
        </button>
        <button
          type="button"
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink-900/10 px-3 py-1 text-xs font-semibold text-ink-700 transition hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:text-ink-100"
          onClick={() => copy(source.url, "link")}
        >
          {copied === "link" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {t("bibliography.copyLink")}
        </button>
        <SourceButton sourceId={source.id}>{t("common.viewDetails")}</SourceButton>
        <a
          href={source.url}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink-950 px-3 py-1 text-xs font-semibold text-white transition hover:bg-strait-blue dark:bg-white dark:text-ink-950"
        >
          {t("bibliography.viewSource")}
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function formatCitation(source: SourceRecord, locale: Locale) {
  const localizedSource = localizeSource(source, locale);
  const author = source.author ?? localizedSource.institutionText;
  return `${author}. "${localizedSource.titleText}." ${localizedSource.institutionText}, ${source.year}. ${source.url}`;
}
