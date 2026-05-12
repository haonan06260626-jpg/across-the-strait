"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { getSource, sourceNumberById, sources, type SourceRecord } from "@/data/sources";
import { localizeSource } from "@/i18n/localizedData";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

type CitationContextValue = {
  activeSource: SourceRecord | null;
  openSource: (id: string) => void;
  closeSource: () => void;
  showEvidence: boolean;
  setShowEvidence: (value: boolean) => void;
  compareNarratives: boolean;
  setCompareNarratives: (value: boolean) => void;
};

const CitationContext = createContext<CitationContextValue | null>(null);

export function CitationProvider({ children }: { children: React.ReactNode }) {
  const [activeSourceId, setActiveSourceId] = useState<string | null>(null);
  const [showEvidence, setShowEvidence] = useState(true);
  const [compareNarratives, setCompareNarratives] = useState(true);

  const value = useMemo<CitationContextValue>(
    () => ({
      activeSource: activeSourceId ? getSource(activeSourceId) ?? null : null,
      openSource: setActiveSourceId,
      closeSource: () => setActiveSourceId(null),
      showEvidence,
      setShowEvidence,
      compareNarratives,
      setCompareNarratives,
    }),
    [activeSourceId, compareNarratives, showEvidence],
  );

  return (
    <CitationContext.Provider value={value}>
      {children}
      <SourceDrawer />
    </CitationContext.Provider>
  );
}

export function useCitations() {
  const context = useContext(CitationContext);

  if (!context) {
    throw new Error("useCitations must be used inside CitationProvider");
  }

  return context;
}

export function Citation({ sourceId, className }: { sourceId: string; className?: string }) {
  const { openSource, showEvidence } = useCitations();
  const { locale } = useLocale();
  const source = getSource(sourceId);

  if (!source || !showEvidence) {
    return null;
  }

  const localizedSource = localizeSource(source, locale);

  return (
    <span className={cn("relative inline-flex align-super text-[0.68em]", className)}>
      <button
        type="button"
        className="focus-ring group ml-1 rounded-full px-1.5 py-0.5 text-strait-blue transition hover:bg-strait-blue/10 dark:text-blue-300"
        aria-label={`Open citation ${sourceNumberById[sourceId]}: ${localizedSource.titleText}`}
        onClick={() => openSource(sourceId)}
      >
        [{sourceNumberById[sourceId]}]
        <span className="pointer-events-none absolute left-1/2 top-6 z-40 hidden w-72 -translate-x-1/2 rounded-md border border-ink-900/10 bg-white p-3 text-left text-xs leading-relaxed text-ink-700 shadow-2xl group-hover:block group-focus-visible:block dark:border-white/10 dark:bg-ink-900 dark:text-ink-100">
          <strong className="mb-1 block text-ink-900 dark:text-white">{localizedSource.titleText}</strong>
          {localizedSource.previewText}
        </span>
      </button>
    </span>
  );
}

export function SourceButton({
  sourceId,
  children,
  className,
}: {
  sourceId: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const { openSource } = useCitations();
  const { locale } = useLocale();
  const source = getSource(sourceId);

  if (!source) {
    return null;
  }

  const localizedSource = localizeSource(source, locale);

  return (
    <button
      type="button"
      className={cn(
        "focus-ring rounded-full border border-ink-900/10 px-3 py-1 text-xs font-medium text-ink-700 transition hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:text-ink-100 dark:hover:border-blue-300 dark:hover:text-blue-200",
        className,
      )}
      onClick={() => openSource(sourceId)}
    >
      {children ?? `[${sourceNumberById[sourceId]}] ${localizedSource.titleText}`}
    </button>
  );
}

export function SectionSources({ sourceIds }: { sourceIds: string[] }) {
  const { t } = useLocale();
  const uniqueIds = Array.from(new Set(sourceIds));

  return (
    <div className="mt-10 border-t border-ink-900/10 pt-5 dark:border-white/10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-200">
        {t("common.sourcesUsed")}
      </p>
      <div className="flex flex-wrap gap-2">
        {uniqueIds.map((id) => (
          <SourceButton key={id} sourceId={id} />
        ))}
      </div>
    </div>
  );
}

function SourceDrawer() {
  const { activeSource, closeSource } = useCitations();
  const { locale, t } = useLocale();
  const localizedSource = activeSource ? localizeSource(activeSource, locale) : null;

  useEffect(() => {
    if (!activeSource) {
      return undefined;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeSource();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeSource, closeSource]);

  if (!activeSource || !localizedSource) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[95]"
      role="dialog"
      aria-modal="true"
      aria-label={t("common.sourceDetails")}
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink-950/28 backdrop-blur-sm dark:bg-black/45"
        onClick={closeSource}
        aria-label={t("common.closeSourceDrawer")}
      />
      <aside className="absolute inset-y-0 right-0 w-full max-w-md overflow-y-auto border-l border-ink-900/10 bg-white/94 p-6 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-ink-950/94">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-strait-blue dark:text-blue-300">
              {t("common.source")}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal text-ink-950 dark:text-white">
              {localizedSource.titleText}
            </h2>
          </div>
          <button
            type="button"
            className="focus-ring rounded-full border border-ink-900/10 p-2 text-ink-700 transition hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:text-ink-100"
            onClick={closeSource}
            aria-label={t("common.closeSourceDrawer")}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-700 dark:text-ink-100">
          <div className="rounded-lg border border-ink-900/10 bg-ink-50 p-4 dark:border-white/10 dark:bg-white/5">
            <p>{localizedSource.previewText}</p>
          </div>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-ink-500 dark:text-ink-300">
                {t("common.institution")}
              </dt>
              <dd className="mt-1 font-medium text-ink-950 dark:text-white">{localizedSource.institutionText}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-ink-500 dark:text-ink-300">
                {t("common.year")}
              </dt>
              <dd className="mt-1 font-medium text-ink-950 dark:text-white">{activeSource.year}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-ink-500 dark:text-ink-300">
                {t("common.type")}
              </dt>
              <dd className="mt-1 font-medium text-ink-950 dark:text-white">{localizedSource.categoryText}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-ink-500 dark:text-ink-300">
                {t("common.viewpoint")}
              </dt>
              <dd className="mt-1 font-medium text-ink-950 dark:text-white">{localizedSource.viewpointText}</dd>
            </div>
          </dl>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-ink-500 dark:text-ink-300">
              {t("documents.whySourceMatters")}
            </p>
            <p className="mt-2">{localizedSource.reliabilityText}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-ink-500 dark:text-ink-300">
              {t("documents.copyCitation")}
            </p>
            <p className="mt-2 rounded-lg border border-ink-900/10 bg-ink-50 p-3 text-xs leading-6 dark:border-white/10 dark:bg-white/5">
              {formatCitation(activeSource, localizedSource)}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-ink-500 dark:text-ink-300">
              {t("common.relatedSections")}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {activeSource.sections.map((section) => (
                <span
                  key={section}
                  className="rounded-full bg-ink-900/5 px-3 py-1 text-xs text-ink-700 dark:bg-white/10 dark:text-ink-100"
                >
                  {sectionLabel(section, t)}
                </span>
              ))}
            </div>
          </div>
          <a
            href={activeSource.url}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-strait-blue dark:bg-white dark:text-ink-950 dark:hover:bg-blue-100"
          >
            {t("common.directSourceLink")}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </aside>
    </div>
  );
}

export { sources };

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

function formatCitation(source: SourceRecord, localizedSource: ReturnType<typeof localizeSource>) {
  const author = source.author ?? localizedSource.institutionText;
  return `${author}. "${localizedSource.titleText}." ${localizedSource.institutionText}, ${source.year}. ${source.url}`;
}
