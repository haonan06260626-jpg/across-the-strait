"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { economicsCards } from "@/data/economics";
import { keyTerms } from "@/data/terms";
import { navigationItems } from "@/data/navigation";
import { policyDocuments } from "@/data/policyStack";
import { securityScenarios } from "@/data/securityScenarios";
import { sources } from "@/data/sources";
import { timelineEvents } from "@/data/timeline";
import { useCitations } from "@/components/CitationProvider";
import { getLocalizedText } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";
import {
  localizeNavigationItem,
  localizePolicyDocument,
  localizeRisk,
  localizeSource,
  localizeTimelineEvent,
} from "@/i18n/localizedData";

type CommandResult =
  | {
      kind: "page";
      id: string;
      title: string;
      description: string;
      href: string;
    }
  | {
      kind: "source";
      id: string;
      title: string;
      description: string;
      sourceId: string;
    };

export default function CommandPalette({
  trigger = "desktop",
  enableShortcut = true,
}: {
  trigger?: "desktop" | "mobile";
  enableShortcut?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { openSource } = useCitations();
  const { locale, localizedHref, t } = useLocale();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (!enableShortcut) {
        return;
      }

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [enableShortcut]);

  useEffect(() => {
    if (open) {
      window.setTimeout(() => inputRef.current?.focus(), 30);
    } else {
      setQuery("");
    }
  }, [open]);

  const results = useMemo<CommandResult[]>(() => {
    const pageResults: CommandResult[] = navigationItems.map((item) => {
      const localizedItem = localizeNavigationItem(item, locale);
      return {
        kind: "page",
        id: `page-${item.href}`,
        title: localizedItem.titleText,
        description: `${localizedItem.descriptionText} ${getLocalizedText(item.title, "en")} ${getLocalizedText(item.description, "en")}`,
        href: item.href,
      };
    });
    const glossaryResults: CommandResult[] = keyTerms.map((term) => {
      const englishTerm = getLocalizedText(term.term, "en");
      return {
        kind: "page",
        id: `term-${englishTerm}`,
        title: getLocalizedText(term.term, locale),
        description: `${getLocalizedText(term.definition, locale)} ${getLocalizedText(term.whyItMatters, locale)} ${englishTerm} ${getLocalizedText(term.definition, "en")} ${term.aliases?.join(" ") ?? ""}`,
        href: `/glossary#${termSlug(englishTerm)}`,
      };
    });
    const timelineResults: CommandResult[] = timelineEvents.map((event) => {
      const localizedEvent = localizeTimelineEvent(event, locale);
      return {
        kind: "page",
        id: `timeline-${event.id}`,
        title: localizedEvent.titleText,
        description: `${localizedEvent.dateText} ${localizedEvent.explanationText} ${event.title} ${event.explanation}`,
        href: "/timeline",
      };
    });
    const policyResults: CommandResult[] = policyDocuments.map((document) => {
      const localizedDocument = localizePolicyDocument(document, locale);
      return {
        kind: "page",
        id: `policy-${document.id}`,
        title: localizedDocument.titleText,
        description: `${localizedDocument.summaryText} ${localizedDocument.whyItMattersText} ${document.title} ${document.summary}`,
        href: "/us-policy",
      };
    });
    const securityResults: CommandResult[] = securityScenarios.map((scenario) => {
      const localizedScenario = localizeRisk(scenario, locale);
      return {
        kind: "page",
        id: `security-${scenario.scenario}`,
        title: localizedScenario.scenarioText,
        description: `${localizedScenario.indicatorsText} ${scenario.scenario} ${scenario.indicators}`,
        href: "/security",
      };
    });
    const economicsResults: CommandResult[] = economicsCards.map((card) => ({
      kind: "page",
      id: `economics-${card.title.en}`,
      title: getLocalizedText(card.title, locale),
      description: `${getLocalizedText(card.summary, locale)} ${getLocalizedText(card.title, "en")} ${getLocalizedText(card.summary, "en")}`,
      href: "/economics",
    }));
    const sourceResults: CommandResult[] = sources.map((source) => {
      const localizedSource = localizeSource(source, locale);
      return {
        kind: "source",
        id: `source-${source.id}`,
        title: localizedSource.titleText,
        description: `${localizedSource.institutionText} - ${localizedSource.categoryText} - ${localizedSource.previewText} - ${source.title} ${source.institution} ${source.viewpoint}`,
        sourceId: source.id,
      };
    });
    const allResults = [
      ...pageResults,
      ...glossaryResults,
      ...timelineResults,
      ...policyResults,
      ...securityResults,
      ...economicsResults,
      ...sourceResults,
    ];
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return allResults.slice(0, 10);
    }

    return allResults
      .filter((result) => `${result.title} ${result.description}`.toLowerCase().includes(normalizedQuery))
      .slice(0, 12);
  }, [locale, query]);

  function selectResult(result: CommandResult) {
    setOpen(false);
    if (result.kind === "page") {
      router.push(localizedHref(result.href));
    } else {
      openSource(result.sourceId);
    }
  }

  const palette = open ? (
    <div
      className="fixed inset-0 z-[90] bg-ink-950/58 p-4 opacity-100 backdrop-blur-md transition"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label={t("common.openCommandPalette")}
    >
      <div
        className="mx-auto mt-[12vh] max-w-2xl overflow-hidden rounded-lg border border-white/10 bg-white shadow-2xl dark:bg-ink-950"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-ink-900/10 px-4 py-3 dark:border-white/10">
          <Search className="h-4 w-4 text-ink-500 dark:text-ink-300" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onInput={(event) => setQuery(event.currentTarget.value)}
            placeholder={t("common.searchPagesSources")}
            aria-label={t("common.searchPagesSources")}
            className="w-full bg-transparent py-2 text-sm text-ink-950 outline-none placeholder:text-ink-500 dark:text-white"
          />
          <button
            type="button"
            className="focus-ring rounded-full p-2 text-ink-500 transition hover:text-ink-950 dark:text-ink-300 dark:hover:text-white"
            onClick={() => setOpen(false)}
            aria-label={t("common.closeSearch")}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <div className="max-h-[26rem] overflow-y-auto p-2">
          {results.map((result) => (
            <button
              key={result.id}
              type="button"
              className="focus-ring block w-full rounded-md p-3 text-left transition hover:bg-ink-900/[0.04] dark:hover:bg-white/[0.07]"
              onClick={() => selectResult(result)}
            >
              <span className="text-sm font-semibold text-ink-950 dark:text-white">{result.title}</span>
              <span className="mt-1 block text-xs leading-5 text-ink-600 dark:text-ink-200">
                {result.description}
              </span>
            </button>
          ))}
          {results.length === 0 ? (
            <p className="px-3 py-8 text-center text-sm text-ink-500 dark:text-ink-300">{t("common.noResults")}</p>
          ) : null}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {trigger === "desktop" ? (
        <div className="hidden h-11 w-[280px] items-center gap-3 rounded-full border border-white/[0.16] bg-white/[0.08] px-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur transition hover:border-blue-300 hover:bg-white/[0.12] focus-within:border-blue-400 focus-within:shadow-[0_0_0_4px_rgba(96,165,250,0.18),inset_0_1px_0_rgba(255,255,255,0.1)] xl:w-[320px] lg:flex">
          <Search className="h-4 w-4 shrink-0 text-white/70" aria-hidden="true" />
          <input
            readOnly
            value=""
            placeholder={t("common.searchPagesSources")}
            className="h-full min-w-0 flex-1 cursor-pointer bg-transparent text-sm font-medium text-white outline-none placeholder:text-white/[0.55]"
            onFocus={() => setOpen(true)}
            onClick={() => setOpen(true)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setOpen(true);
              }
            }}
            aria-label={t("common.openCommandPalette")}
          />
          <span className="shrink-0 rounded bg-white/[0.08] px-1.5 py-0.5 text-[0.68rem] font-semibold text-white/65">
            {t("common.searchShortcut")}
          </span>
        </div>
      ) : (
        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.16] bg-white/[0.08] text-white backdrop-blur transition hover:border-blue-300 hover:bg-white/[0.12] focus-visible:border-blue-400 focus-visible:shadow-[0_0_0_4px_rgba(96,165,250,0.18)] lg:hidden"
          onClick={() => setOpen(true)}
          aria-label={t("common.openCommandPalette")}
        >
          <Search className="h-4 w-4" aria-hidden="true" />
        </button>
      )}

      {palette}
    </>
  );
}

function termSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
