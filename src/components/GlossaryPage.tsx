"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { SourceButton } from "@/components/CitationProvider";
import KeyTerm from "@/components/KeyTerm";
import ResearchShell from "@/components/ResearchShell";
import { keyTerms } from "@/data/terms";
import { getLocalizedText } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";

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

export default function GlossaryPage() {
  return (
    <ResearchShell breadcrumb="Glossary" readingProgress>
      <GlossaryBody />
    </ResearchShell>
  );
}

function GlossaryBody() {
  const { locale, localizedHref, t } = useLocale();

  return (
    <main className="px-5 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section aria-labelledby="glossary-heading">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-strait-blue dark:text-blue-300">
            {t("glossary.eyebrow")}
          </p>
          <h1 id="glossary-heading" className="text-5xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-6xl">
            {t("glossary.title")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-700 dark:text-ink-100">
            {t("glossary.intro")}
          </p>
        </section>

        <section className="mt-10 rounded-lg border border-ink-900/10 bg-white/62 p-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]" aria-label={t("glossary.title")}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 dark:text-ink-300">
            {t("glossary.openSources")}
          </p>
          <p className="max-w-4xl text-sm leading-7 text-ink-700 dark:text-ink-100">
            {locale === "zh-CN" ? (
              <>
                <KeyTerm term="U.S. One China policy" /> 与 <KeyTerm term="PRC One China principle" /> 并不等同。本术语表也区分 <KeyTerm term="Taiwan Relations Act" />、<KeyTerm term="Three Communiqués" /> 等法律或外交文本，以及 <KeyTerm term="Strategic ambiguity" />、<KeyTerm term="Gray-zone tactics" />、<KeyTerm term="Deterrence" /> 等分析性概念。
              </>
            ) : (
              <>
                <KeyTerm term="U.S. One China policy" /> and <KeyTerm term="PRC One China principle" /> are not interchangeable. The glossary also separates legal instruments such as <KeyTerm term="Taiwan Relations Act" /> and <KeyTerm term="Three Communiqués" /> from analytical concepts such as <KeyTerm term="Strategic ambiguity" />, <KeyTerm term="Gray-zone tactics" />, and <KeyTerm term="Deterrence" />.
              </>
            )}
          </p>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-ink-600 dark:text-ink-200">
            {keyTerms.map((record) => (
              <KeyTerm key={getLocalizedText(record.term, "en")} term={getLocalizedText(record.term, "en")} />
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {keyTerms.map((record) => {
            const englishTerm = getLocalizedText(record.term, "en");
            const sourceIds = Array.from(new Set(record.sourceIds));
            return (
              <article
                key={englishTerm}
                id={termSlug(englishTerm)}
                className="scroll-mt-28 rounded-lg border border-ink-900/10 bg-white/66 p-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-950 text-white dark:bg-white dark:text-ink-950">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold tracking-normal text-ink-950 dark:text-white">
                  {getLocalizedText(record.term, locale)}
                </h2>
                <dl className="mt-4 grid gap-4 text-sm leading-7 text-ink-700 dark:text-ink-100">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-300">
                      {locale === "zh-CN" ? "定义" : "Definition"}
                    </dt>
                    <dd className="mt-1">{getLocalizedText(record.definition, locale)}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-300">
                      {locale === "zh-CN" ? "为什么重要" : "Why it matters"}
                    </dt>
                    <dd className="mt-1">{getLocalizedText(record.whyItMatters, locale)}</dd>
                  </div>
                </dl>
                <div className="mt-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-300">
                    {t("common.relatedSections")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {record.relatedSections.map((section) => (
                      <Link
                        key={`${englishTerm}-${section}`}
                        href={localizedHref(sectionRouteMap[section] ?? "/overview")}
                        className="focus-ring rounded-full bg-ink-900/5 px-3 py-1 text-xs text-ink-600 transition hover:text-strait-blue dark:bg-white/10 dark:text-ink-100"
                      >
                        {sectionLabel(section, t)}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {sourceIds.map((id) => (
                    <SourceButton key={`${englishTerm}-${id}`} sourceId={id} />
                  ))}
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
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

function termSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
