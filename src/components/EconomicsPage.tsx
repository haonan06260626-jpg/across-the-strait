"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { SourceButton } from "@/components/CitationProvider";
import ResearchShell from "@/components/ResearchShell";
import WhyThisMattersCard from "@/components/WhyThisMattersCard";
import { economicsCards } from "@/data/economics";
import { getLocalizedText } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

const SupplyChainNetwork = dynamic(() => import("@/components/SupplyChainNetwork"), {
  ssr: false,
  loading: () => <NetworkLoading />,
});

export default function EconomicsPage() {
  return (
    <ResearchShell breadcrumb="Economics & Technology" readingProgress>
      <EconomicsPageBody />
    </ResearchShell>
  );
}

function NetworkLoading() {
  const { t } = useLocale();

  return (
    <section className="glass min-h-[32rem] rounded-lg p-6" aria-label={t("economics.networkTitle")}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-strait-blue dark:text-blue-300">
        {t("economics.networkTitle")}
      </p>
      <div className="mt-6 h-[24rem] animate-pulse rounded-lg bg-ink-900/[0.04] dark:bg-white/[0.06]" />
    </section>
  );
}

function EconomicsPageBody() {
  const [active, setActive] = useState(economicsCards[1]);
  const { locale, t } = useLocale();

  return (
      <main className="px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <section aria-labelledby="economics-heading">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-strait-blue dark:text-blue-300">
              {t("economics.eyebrow")}
            </p>
            <h1 id="economics-heading" className="text-5xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-6xl">
              {t("economics.title")}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-700 dark:text-ink-100">
              {t("economics.intro")}
            </p>
          </section>

          <WhyThisMattersCard
            titleKey="whyCards.economicsTitle"
            textKey="whyCards.economicsText"
            sourceIds={["crs-semiconductor", "csis-silicon-island", "nist-tsmc-arizona"]}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <SupplyChainNetwork />
            <aside className="grid gap-4">
              {economicsCards.map((card) => (
                <button
                  key={card.title.en}
                  type="button"
                  className={cn(
                    "focus-ring rounded-lg border p-5 text-left transition hover:-translate-y-1",
                    active.title.en === card.title.en
                      ? "border-strait-blue bg-strait-blue text-white shadow-glow"
                      : "border-ink-900/10 bg-white/66 text-ink-950 backdrop-blur hover:border-strait-blue/60 dark:border-white/10 dark:bg-white/[0.06] dark:text-white",
                  )}
                  onClick={() => setActive(card)}
                >
                  <span className="text-xl font-semibold tracking-normal">{getLocalizedText(card.title, locale)}</span>
                </button>
              ))}
            </aside>
          </div>

          <section className="mt-6 rounded-lg border border-ink-900/10 bg-white/66 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]" aria-live="polite">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-strait-blue dark:text-blue-300">
              {t("economics.selected")}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink-950 dark:text-white">{getLocalizedText(active.title, locale)}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-ink-700 dark:text-ink-100">{getLocalizedText(active.summary, locale)}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {Array.from(new Set(active.sourceIds)).map((id) => (
                <SourceButton key={id} sourceId={id} />
              ))}
            </div>
          </section>
        </div>
      </main>
  );
}
