"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Archive, Check, Copy, ExternalLink, Map, Search } from "lucide-react";
import { SourceButton, useCitations } from "@/components/CitationProvider";
import ResearchShell from "@/components/ResearchShell";
import WhyThisMattersCard from "@/components/WhyThisMattersCard";
import { sources, type SourceCategory, type SourceRecord } from "@/data/sources";
import type { Locale } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";
import { categoryLabels, localizeSource } from "@/i18n/localizedData";
import { cn } from "@/lib/utils";

type SortKey = "Year" | "Institution" | "Source type" | "Viewpoint category";
type ViewMode = "Cards" | "Source map";

const sourceCategories: SourceCategory[] = [
  "Official U.S. sources",
  "Official PRC sources",
  "Official Taiwan / ROC sources",
  "Congressional / legal documents",
  "Think tank analysis",
  "Academic articles",
  "News / current events",
];

const sectionRouteMap: Record<string, string> = {
  Overview: "/overview",
  Timeline: "/timeline",
  "Competing Positions": "/positions",
  "U.S. Policy": "/us-policy",
  "Security & Economics": "/security",
  Documents: "/documents",
  Bibliography: "/bibliography",
  Methodology: "/methodology",
};

export default function DocumentLibrary() {
  return (
    <ResearchShell breadcrumb="Documents" readingProgress>
      <DocumentLibraryBody />
    </ResearchShell>
  );
}

function DocumentLibraryBody() {
  const { locale, localizedHref, t } = useLocale();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<SourceCategory | "All">("All");
  const [sort, setSort] = useState<SortKey>("Year");
  const [view, setView] = useState<ViewMode>("Cards");
  const [copiedAction, setCopiedAction] = useState<string | null>(null);
  const { openSource } = useCitations();

  const filteredSources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return sources
      .filter((source) => {
        const matchesCategory = category === "All" || source.category === category;
        const haystack = [
          source.title,
          source.institution,
          source.author,
          source.viewpoint,
          source.category,
          source.reliability,
          localizeSource(source, locale).titleText,
          localizeSource(source, locale).institutionText,
          localizeSource(source, locale).categoryText,
          localizeSource(source, locale).viewpointText,
          localizeSource(source, locale).previewText,
          ...source.sections,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return matchesCategory && (!normalizedQuery || haystack.includes(normalizedQuery));
      })
      .sort((a, b) => compareSources(a, b, sort));
  }, [category, locale, query, sort]);

  async function copyCitation(source: SourceRecord) {
    await navigator.clipboard.writeText(formatCitation(source, locale));
    setCopiedAction(`${source.id}:citation`);
    window.setTimeout(() => setCopiedAction(null), 1400);
  }

  async function copyLink(source: SourceRecord) {
    await navigator.clipboard.writeText(source.url);
    setCopiedAction(`${source.id}:link`);
    window.setTimeout(() => setCopiedAction(null), 1400);
  }

  return (
    <main className="px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <section aria-labelledby="documents-heading">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-strait-blue dark:text-blue-300">
              {t("documents.eyebrow")}
            </p>
            <h1 id="documents-heading" className="text-5xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-6xl">
              {t("documents.title")}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-700 dark:text-ink-100">
              {t("documents.intro")}
            </p>
          </section>

          <WhyThisMattersCard
            titleKey="whyCards.documentsTitle"
            textKey="whyCards.documentsText"
            sourceIds={["crs-one-china-policy", "ait-policy-docs"]}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[16rem_1fr]">
            <aside className="lg:sticky lg:top-24 lg:h-fit">
              <div className="glass rounded-lg p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">
                  {t("documents.filters")}
                </p>
                <div className="grid gap-2">
                  {(["All", ...sourceCategories] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={cn(
                        "focus-ring rounded-full border px-3 py-2 text-left text-xs font-medium transition",
                        category === item
                          ? "border-strait-blue bg-strait-blue text-white"
                          : "border-ink-900/10 text-ink-600 hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:text-ink-200",
                      )}
                      onClick={() => setCategory(item)}
                      aria-pressed={category === item}
                    >
                      {item === "All" ? t("timeline.all") : categoryLabels[item][locale]}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <section>
              <div className="mb-6 grid gap-3 lg:grid-cols-[1fr_auto_auto]">
                <label className="relative block">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" aria-hidden="true" />
                  <span className="sr-only">{t("documents.searchPlaceholder")}</span>
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onInput={(event) => setQuery(event.currentTarget.value)}
                    placeholder={t("documents.searchPlaceholder")}
                    className="focus-ring w-full rounded-full border border-ink-900/10 bg-white/70 py-3 pl-11 pr-4 text-sm text-ink-950 backdrop-blur placeholder:text-ink-500 dark:border-white/10 dark:bg-white/10 dark:text-white"
                  />
                </label>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value as SortKey)}
                  className="focus-ring rounded-full border border-ink-900/10 bg-white/70 px-4 py-3 text-sm text-ink-950 dark:border-white/10 dark:bg-ink-900 dark:text-white"
                  aria-label={t("documents.sortDocuments")}
                >
                  <option value="Year">{t("common.year")}</option>
                  <option value="Institution">{t("common.institution")}</option>
                  <option value="Source type">{t("common.sourceType")}</option>
                  <option value="Viewpoint category">{t("common.viewpointCategory")}</option>
                </select>
                <div className="flex gap-2">
                  {(["Cards", "Source map"] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={cn(
                        "focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition",
                        view === item
                          ? "border-ink-950 bg-ink-950 text-white dark:border-white dark:bg-white dark:text-ink-950"
                          : "border-ink-900/10 text-ink-600 hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:text-ink-200",
                      )}
                      onClick={() => setView(item)}
                    >
                      {item === "Cards" ? t("documents.cards") : t("documents.sourceMap")}
                    </button>
                  ))}
                </div>
              </div>

              {view === "Cards" ? (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {filteredSources.map((source) => {
                    const localizedSource = localizeSource(source, locale);
                    return (
                    <article key={source.id} className="rounded-lg border border-ink-900/10 bg-white/66 p-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <Archive className="mt-1 h-5 w-5 shrink-0 text-strait-blue dark:text-blue-300" aria-hidden="true" />
                        <span className="rounded-full bg-ink-900/5 px-3 py-1 text-xs text-ink-600 dark:bg-white/10 dark:text-ink-100">
                          {source.year}
                        </span>
                      </div>
                      <h2 className="text-lg font-semibold tracking-normal text-ink-950 dark:text-white">{localizedSource.titleText}</h2>
                      <p className="mt-2 text-sm font-medium text-ink-600 dark:text-ink-200">{localizedSource.institutionText}</p>
                      <dl className="mt-4 grid gap-3 text-xs text-ink-600 dark:text-ink-200">
                        <div>
                          <dt className="font-semibold text-ink-900 dark:text-white">{t("common.sourceType")}</dt>
                          <dd>{localizedSource.categoryText}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-ink-900 dark:text-white">{t("common.viewpointCategory")}</dt>
                          <dd>{localizedSource.viewpointText}</dd>
                        </div>
                      </dl>
                      <p className="mt-4 text-sm leading-6 text-ink-700 dark:text-ink-100">{localizedSource.previewText}</p>
                      <div className="mt-4 rounded-md border border-ink-900/10 bg-ink-50/70 p-3 text-xs leading-6 text-ink-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-ink-100">
                        <p className="mb-1 font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-300">
                          {t("documents.whySourceMatters")}
                        </p>
                        {localizedSource.reliabilityText}
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {source.sections.map((section) => (
                          <Link
                            key={section}
                            href={localizedHref(sectionRouteMap[section] ?? "/overview")}
                            className="focus-ring rounded-full bg-ink-900/5 px-3 py-1 text-xs text-ink-600 transition hover:text-strait-blue dark:bg-white/10 dark:text-ink-100"
                          >
                            {sectionLabel(section, t)}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <button
                          type="button"
                          className="focus-ring rounded-full bg-ink-950 px-3 py-1 text-xs font-semibold text-white transition hover:bg-strait-blue dark:bg-white dark:text-ink-950"
                          onClick={() => openSource(source.id)}
                        >
                          {t("documents.detailDrawer")}
                        </button>
                        <button
                          type="button"
                          className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink-900/10 px-3 py-1 text-xs font-medium text-ink-700 transition hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:text-ink-100"
                          onClick={() => copyCitation(source)}
                        >
                          {copiedAction === `${source.id}:citation` ? (
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                          )}
                          {copiedAction === `${source.id}:citation` ? t("documents.copied") : t("documents.copyCitation")}
                        </button>
                        <button
                          type="button"
                          className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink-900/10 px-3 py-1 text-xs font-medium text-ink-700 transition hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:text-ink-100"
                          onClick={() => copyLink(source)}
                        >
                          {copiedAction === `${source.id}:link` ? (
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                          )}
                          {copiedAction === `${source.id}:link` ? t("documents.copied") : t("documents.copyLink")}
                        </button>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noreferrer"
                          className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink-900/10 px-3 py-1 text-xs font-medium text-ink-700 transition hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:text-ink-100"
                        >
                          {t("documents.openSource")}
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      </div>
                    </article>
                    );
                  })}
                </div>
              ) : (
                <SourceMap sources={filteredSources} />
              )}
            </section>
          </div>
        </div>
      </main>
  );
}

function SourceMap({ sources: mappedSources }: { sources: SourceRecord[] }) {
  const { locale, t } = useLocale();
  const topics = Array.from(new Set(mappedSources.flatMap((source) => source.sections))).sort();

  return (
    <div className="rounded-lg border border-ink-900/10 bg-white/66 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
      <div className="mb-5 flex items-center gap-3">
        <Map className="h-5 w-5 text-strait-blue dark:text-blue-300" aria-hidden="true" />
        <h2 className="text-2xl font-semibold tracking-normal text-ink-950 dark:text-white">{t("documents.sourceMap")}</h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {topics.map((topic) => {
          const topicSources = mappedSources.filter((source) => source.sections.includes(topic));

          return (
            <section key={topic} className="rounded-lg border border-ink-900/10 p-4 dark:border-white/10">
              <h3 className="font-semibold text-ink-950 dark:text-white">{sectionLabel(topic, t)}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {topicSources.map((source) => (
                  <SourceButton key={source.id} sourceId={source.id}>
                    {localizeSource(source, locale).titleText}
                  </SourceButton>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function sectionLabel(section: string, t: (key: string) => string) {
  const labels: Record<string, string> = {
    Overview: t("overview.eyebrow"),
    Timeline: t("timeline.title"),
    "Competing Positions": t("positions.title"),
    "U.S. Policy": t("policy.title"),
    "Security & Economics": t("security.title"),
    Documents: t("documents.title"),
    Bibliography: t("bibliography.eyebrow"),
    Methodology: t("methodology.eyebrow"),
  };

  return labels[section] ?? section;
}

function compareSources(a: SourceRecord, b: SourceRecord, sort: SortKey) {
  if (sort === "Institution") {
    return a.institution.localeCompare(b.institution);
  }
  if (sort === "Source type") {
    return a.category.localeCompare(b.category);
  }
  if (sort === "Viewpoint category") {
    return a.viewpoint.localeCompare(b.viewpoint);
  }

  return b.year.localeCompare(a.year);
}

function formatCitation(source: SourceRecord, locale: Locale) {
  const localizedSource = localizeSource(source, locale);
  const author = source.author ?? localizedSource.institutionText;
  return `${author}. "${localizedSource.titleText}." ${localizedSource.institutionText}, ${source.year}. ${source.url}`;
}
