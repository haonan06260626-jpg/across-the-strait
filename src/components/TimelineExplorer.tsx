"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { SectionSources, SourceButton, useCitations } from "@/components/CitationProvider";
import ResearchShell from "@/components/ResearchShell";
import WhyThisMattersCard from "@/components/WhyThisMattersCard";
import { getSources } from "@/data/sources";
import { useLocale } from "@/i18n/LocaleProvider";
import { localizeSource, localizeTimelineEvent, timelineCategoryLabels, timelineTagLabels } from "@/i18n/localizedData";
import {
  timelineCategories,
  timelineEvents,
  type TimelineCategory,
  type TimelineEvent,
  type TimelineTag,
} from "@/data/timeline";
import { cn } from "@/lib/utils";

const timelineTags: TimelineTag[] = ["law", "diplomacy", "military", "election", "economy", "identity"];

export default function TimelineExplorer() {
  return (
    <ResearchShell breadcrumb="Timeline" readingProgress>
      <TimelineExplorerBody />
    </ResearchShell>
  );
}

function TimelineExplorerBody() {
  const { locale, t } = useLocale();
  const [period, setPeriod] = useState<TimelineCategory | "All">("All");
  const [domain, setDomain] = useState<TimelineTag | "All">("All");
  const [activeEvent, setActiveEvent] = useState<TimelineEvent | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(timelineEvents[0]?.id ?? null);
  const { compareNarratives, setCompareNarratives } = useCitations();

  const filteredEvents = useMemo(
    () =>
      timelineEvents.filter((event) => {
        const periodMatch = period === "All" || event.category === period;
        const domainMatch = domain === "All" || event.tag === domain;
        return periodMatch && domainMatch;
      }),
    [domain, period],
  );

  return (
    <main className="px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_0.28fr]">
            <section aria-labelledby="timeline-heading">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-strait-blue dark:text-blue-300">
                {t("timeline.eyebrow")}
              </p>
              <h1 id="timeline-heading" className="text-5xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-6xl">
                {t("timeline.title")}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-700 dark:text-ink-100">
                {t("timeline.intro")}
              </p>
            </section>
            <aside className="glass rounded-lg p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 dark:text-ink-300">
                    {t("timeline.narrativeMode")}
                  </p>
                  <p className="mt-2 text-sm text-ink-700 dark:text-ink-100">
                    {t("timeline.narrativeModeText")}
                  </p>
                </div>
                <button
                  type="button"
                  className={cn(
                    "focus-ring rounded-full border px-3 py-2 text-xs font-semibold",
                    compareNarratives
                      ? "border-strait-red bg-strait-red text-white"
                      : "border-ink-900/10 text-ink-700 dark:border-white/10 dark:text-ink-100",
                  )}
                  onClick={() => setCompareNarratives(!compareNarratives)}
                  aria-pressed={compareNarratives}
                >
                  {t("timeline.compareInterpretations")}
                </button>
              </div>
            </aside>
          </div>

          <WhyThisMattersCard
            titleKey="whyCards.timelineTitle"
            textKey="whyCards.timelineText"
            sourceIds={["taiwan-gov-history", "state-taiwan-crises", "crs-one-china-policy"]}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[13rem_1fr]">
            <aside className="lg:sticky lg:top-24 lg:h-fit">
              <div className="glass rounded-lg p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">
                  {t("timeline.period")}
                </p>
                <FilterGroup
                  items={[
                    { id: "All", label: t("timeline.all") },
                    ...timelineCategories.map((category) => ({
                      id: category,
                      label: timelineCategoryLabels[category][locale],
                    })),
                  ]}
                  value={period}
                  onChange={(value) => setPeriod(value as TimelineCategory | "All")}
                />
                <p className="mb-3 mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">
                  {t("timeline.domain")}
                </p>
                <FilterGroup
                  items={[
                    { id: "All", label: t("timeline.all") },
                    ...timelineTags.map((tag) => ({ id: tag, label: timelineTagLabels[tag][locale] })),
                  ]}
                  value={domain}
                  onChange={(value) => setDomain(value as TimelineTag | "All")}
                />
              </div>

              <div className="mt-4 hidden rounded-lg border border-ink-900/10 bg-white/58 p-4 backdrop-blur dark:border-white/10 dark:bg-white/[0.05] lg:block">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">
                  {t("timeline.progressRail")}
                </p>
                <div className="space-y-2">
                  {filteredEvents.map((event) => (
                    <button
                      key={event.id}
                      type="button"
                      className={cn(
                        "focus-ring block w-full rounded px-2 py-1 text-left text-xs transition",
                        activeEvent?.id === event.id
                          ? "bg-strait-blue text-white"
                          : "text-ink-600 hover:bg-ink-900/5 dark:text-ink-200 dark:hover:bg-white/10",
                      )}
                      onClick={() => {
                        setActiveEvent(event);
                        setExpandedId(event.id);
                      }}
                    >
                      {event.year} · {localizeTimelineEvent(event, locale).titleText}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <section className="grid gap-4" aria-label={t("timeline.filteredEvents")}>
              {filteredEvents.map((event) => {
                const expanded = expandedId === event.id;
                const localizedEvent = localizeTimelineEvent(event, locale);

                return (
                  <article
                    key={event.id}
                    className="rounded-lg border border-ink-900/10 bg-white/66 p-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]"
                  >
                    <button
                      type="button"
                      className="focus-ring block w-full text-left"
                      onClick={() => {
                        setExpandedId(expanded ? null : event.id);
                        setActiveEvent(event);
                      }}
                    >
                      <span className="text-sm font-semibold text-strait-blue dark:text-blue-300">{localizedEvent.dateText}</span>
                      <span className="mt-2 flex flex-wrap items-center justify-between gap-3">
                        <span className="text-2xl font-semibold tracking-normal text-ink-950 dark:text-white">
                          {localizedEvent.titleText}
                        </span>
                        <span className="rounded-full bg-ink-900/5 px-3 py-1 text-xs font-medium text-ink-600 dark:bg-white/10 dark:text-ink-100">
                          {localizedEvent.tagText}
                        </span>
                      </span>
                    </button>
                    {expanded ? (
                      <div className="mt-5 border-t border-ink-900/10 pt-5 dark:border-white/10">
                        <p className="text-sm leading-7 text-ink-700 dark:text-ink-100">{localizedEvent.explanationText}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          <button
                            type="button"
                            className="focus-ring rounded-full bg-ink-950 px-3 py-1 text-xs font-semibold text-white transition hover:bg-strait-blue dark:bg-white dark:text-ink-950"
                            onClick={() => setActiveEvent(event)}
                          >
                            {t("timeline.openDetailDrawer")}
                          </button>
                          {Array.from(new Set(event.sourceIds)).map((id) => (
                            <SourceButton key={id} sourceId={id} />
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </section>
          </div>

          <SectionSources sourceIds={Array.from(new Set(timelineEvents.flatMap((event) => event.sourceIds)))} />
        </div>
        <TimelineDrawer event={activeEvent} onClose={() => setActiveEvent(null)} compare={compareNarratives} />
      </main>
  );
}

function FilterGroup({
  items,
  value,
  onChange,
}: {
  items: readonly { id: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-2">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={cn(
            "focus-ring rounded-full border px-3 py-2 text-left text-xs font-medium transition",
            value === item.id
              ? "border-strait-blue bg-strait-blue text-white"
              : "border-ink-900/10 text-ink-600 hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:text-ink-200",
          )}
          onClick={() => onChange(item.id)}
          aria-pressed={value === item.id}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

function TimelineDrawer({
  event,
  onClose,
  compare,
}: {
  event: TimelineEvent | null;
  onClose: () => void;
  compare: boolean;
}) {
  const { locale, t } = useLocale();
  const sources = event ? getSources(event.sourceIds).map((source) => localizeSource(source, locale)) : [];
  const localizedEvent = event ? localizeTimelineEvent(event, locale) : null;

  useEffect(() => {
    if (!event) {
      return undefined;
    }

    function onKeyDown(keyEvent: KeyboardEvent) {
      if (keyEvent.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [event, onClose]);

  if (!event || !localizedEvent) {
    return null;
  }

  return (
    <aside
      className="fixed inset-y-0 right-0 z-[85] w-full max-w-xl translate-x-0 transform overflow-y-auto border-l border-ink-900/10 bg-white/94 p-6 shadow-2xl backdrop-blur-2xl transition dark:border-white/10 dark:bg-ink-950/94"
      aria-label={t("timeline.detail")}
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-strait-blue dark:text-blue-300">
            {t("timeline.detail")}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink-950 dark:text-white">{localizedEvent.titleText}</h2>
          <p className="mt-2 text-sm font-medium text-ink-500 dark:text-ink-300">{localizedEvent.dateText}</p>
        </div>
        <button
          type="button"
          className="focus-ring rounded-full border border-ink-900/10 p-2 text-ink-700 transition hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:text-ink-100"
          onClick={onClose}
          aria-label={t("timeline.closeTimelineDrawer")}
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-8 grid gap-6 text-sm leading-7 text-ink-700 dark:text-ink-100">
          <DetailBlock title={t("timeline.eventSummary")} text={localizedEvent.explanationText} />
          <DetailBlock title={t("timeline.whyItMatters")} text={localizedEvent.whyItMattersText} />
          {compare ? (
            <DetailBlock
              title={t("timeline.competingInterpretations")}
              text={localizedEvent.narrativeNoteText ?? t("timeline.fallbackInterpretation")}
            />
          ) : null}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">
              {t("timeline.relatedDocuments")}
            </p>
            <div className="mt-3 grid gap-3">
              {sources.map((source) => (
                <div key={source.id} className="rounded-lg border border-ink-900/10 p-4 dark:border-white/10">
                  <p className="font-semibold text-ink-950 dark:text-white">{source.titleText}</p>
                  <p className="mt-1 text-xs text-ink-500 dark:text-ink-300">{source.institutionText}</p>
                  <div className="mt-3">
                    <SourceButton sourceId={source.id}>{t("common.viewSource")}</SourceButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </aside>
  );
}

function DetailBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">{title}</p>
      <p className="mt-2">{text}</p>
    </div>
  );
}
