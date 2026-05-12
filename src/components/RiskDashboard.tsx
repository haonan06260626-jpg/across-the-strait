"use client";

import { useState } from "react";
import { AlertTriangle, Globe2, Grid2X2, Shield } from "lucide-react";
import { SourceButton } from "@/components/CitationProvider";
import ResearchShell from "@/components/ResearchShell";
import WhyThisMattersCard from "@/components/WhyThisMattersCard";
import { securityScenarios, type SecurityScenario } from "@/data/securityScenarios";
import { useLocale } from "@/i18n/LocaleProvider";
import { localizeRisk } from "@/i18n/localizedData";
import { cn } from "@/lib/utils";

type Tab = "Risk cards" | "Matrix view" | "Regional implications";

const tabs: Tab[] = ["Risk cards", "Matrix view", "Regional implications"];

export default function RiskDashboard() {
  return (
    <ResearchShell breadcrumb="Security & Deterrence" readingProgress>
      <RiskDashboardBody />
    </ResearchShell>
  );
}

function RiskDashboardBody() {
  const { t } = useLocale();
  const [tab, setTab] = useState<Tab>("Risk cards");
  const [active, setActive] = useState<SecurityScenario>(securityScenarios[0]);

  return (
      <main className="px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]" aria-labelledby="security-heading">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-strait-blue dark:text-blue-300">
                {t("security.eyebrow")}
              </p>
              <h1 id="security-heading" className="text-5xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-6xl">
                {t("security.title")}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-700 dark:text-ink-100">
                {t("security.intro")}
              </p>
            </div>
            <div className="glass rounded-lg p-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-strait-red" aria-hidden="true" />
                <p className="font-semibold text-ink-950 dark:text-white">{t("security.disclaimer")}</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-ink-700 dark:text-ink-100">
                {t("security.disclaimerText")}
              </p>
            </div>
          </section>

          <WhyThisMattersCard
            titleKey="whyCards.securityTitle"
            textKey="whyCards.securityText"
            sourceIds={["csis-blockade", "rand-gray-zone"]}
          />

          <div className="mt-10 flex flex-wrap gap-2">
            {tabs.map((item) => (
              <button
                key={item}
                type="button"
                className={cn(
                  "focus-ring inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition",
                  tab === item
                    ? "border-strait-blue bg-strait-blue text-white"
                    : "border-ink-900/10 text-ink-600 hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:text-ink-200",
                )}
                onClick={() => setTab(item)}
                aria-pressed={tab === item}
              >
                {item === "Risk cards" ? <Shield className="h-4 w-4" /> : item === "Matrix view" ? <Grid2X2 className="h-4 w-4" /> : <Globe2 className="h-4 w-4" />}
                {tabLabel(item, t)}
              </button>
            ))}
          </div>

          {tab === "Risk cards" ? <RiskCards active={active} setActive={setActive} /> : null}
          {tab === "Matrix view" ? <MatrixView /> : null}
          {tab === "Regional implications" ? <RegionalImplications /> : null}
        </div>
      </main>
  );
}

function RiskCards({
  active,
  setActive,
}: {
  active: SecurityScenario;
  setActive: (scenario: SecurityScenario) => void;
}) {
  const { locale, t } = useLocale();
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="grid gap-4" aria-label={t("security.riskCategories")}>
        {securityScenarios.map((scenario) => (
          <button
            key={scenario.scenario}
            type="button"
            className={cn(
              "focus-ring rounded-lg border p-5 text-left transition hover:-translate-y-1",
              active.scenario === scenario.scenario
                ? "border-strait-blue bg-strait-blue text-white shadow-glow"
                : "border-ink-900/10 bg-white/66 text-ink-950 backdrop-blur hover:border-strait-blue/60 dark:border-white/10 dark:bg-white/[0.06] dark:text-white",
            )}
            onClick={() => setActive(scenario)}
          >
            <p className="text-xl font-semibold tracking-normal">{localizeRisk(scenario, locale).scenarioText}</p>
            <p className={cn("mt-3 text-sm", active.scenario === scenario.scenario ? "text-white/78" : "text-ink-600 dark:text-ink-200")}>
              {localizeRisk(scenario, locale).probabilityText} · {localizeRisk(scenario, locale).impactText}
            </p>
          </button>
        ))}
      </section>
      <ScenarioPanel scenario={active} />
    </div>
  );
}

function ScenarioPanel({ scenario }: { scenario: SecurityScenario }) {
  const { locale, t } = useLocale();
  const localizedScenario = localizeRisk(scenario, locale);

  return (
    <aside className="glass rounded-lg p-6" aria-live="polite">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-strait-blue dark:text-blue-300">
        {t("security.selectedScenario")}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink-950 dark:text-white">{localizedScenario.scenarioText}</h2>
      <dl className="mt-6 grid gap-5 text-sm leading-7 text-ink-700 dark:text-ink-100">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">{t("security.probability")}</dt>
          <dd className="mt-2">{localizedScenario.probabilityText}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">{t("security.impact")}</dt>
          <dd className="mt-2">{localizedScenario.impactText}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">{t("security.warningIndicators")}</dt>
          <dd className="mt-2">{localizedScenario.indicatorsText}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">{t("security.confidence")}</dt>
          <dd className="mt-2">{localizedScenario.confidenceText}</dd>
        </div>
      </dl>
      <div className="mt-6 flex flex-wrap gap-2">
        {Array.from(new Set(scenario.sourceIds)).map((id) => (
          <SourceButton key={id} sourceId={id} />
        ))}
      </div>
    </aside>
  );
}

function MatrixView() {
  const { locale, t } = useLocale();
  const impactClass: Record<SecurityScenario["impact"], string> = {
    Contained: "bg-ink-900/5 text-ink-700 dark:bg-white/10 dark:text-ink-100",
    Serious: "bg-strait-blue/10 text-strait-blue dark:bg-blue-300/10 dark:text-blue-200",
    Severe: "bg-strait-red/10 text-strait-red dark:bg-red-300/10 dark:text-red-200",
    Extreme: "bg-ink-950 text-white dark:bg-white dark:text-ink-950",
  };

  return (
    <div className="mt-8 overflow-x-auto rounded-lg border border-ink-900/10 bg-white/66 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
      <table className="min-w-[860px] w-full border-collapse text-left text-sm">
        <caption className="sr-only">{t("security.optionalMatrix")}</caption>
        <thead className="border-b border-ink-900/10 text-xs uppercase tracking-[0.16em] text-ink-500 dark:border-white/10 dark:text-ink-300">
          <tr>
            <th className="px-4 py-4" scope="col">{t("security.scenario")}</th>
            <th className="px-4 py-4" scope="col">{t("security.probability")}</th>
            <th className="px-4 py-4" scope="col">{t("security.impact")}</th>
            <th className="px-4 py-4" scope="col">{t("security.warningIndicators")}</th>
            <th className="px-4 py-4" scope="col">{t("security.confidence")}</th>
          </tr>
        </thead>
        <tbody>
          {securityScenarios.map((scenario) => (
            <tr key={scenario.scenario} className="border-b border-ink-900/5 last:border-0 dark:border-white/5">
              <th className="px-4 py-5 font-semibold text-ink-950 dark:text-white" scope="row">{localizeRisk(scenario, locale).scenarioText}</th>
              <td className="px-4 py-5 text-ink-700 dark:text-ink-100">{localizeRisk(scenario, locale).probabilityText}</td>
              <td className="px-4 py-5">
                <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", impactClass[scenario.impact])}>
                  {localizeRisk(scenario, locale).impactText}
                </span>
              </td>
              <td className="px-4 py-5 leading-6 text-ink-700 dark:text-ink-100">{localizeRisk(scenario, locale).indicatorsText}</td>
              <td className="px-4 py-5 text-ink-700 dark:text-ink-100">{localizeRisk(scenario, locale).confidenceText}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RegionalImplications() {
  const { locale } = useLocale();
  const regions = [
    {
      title: locale === "zh-CN" ? "日本" : "Japan",
      text: locale === "zh-CN" ? "台海危机将影响邻近海上通道、美国兵力态势与日本安全规划，但并不意味着日本必然介入。" : "A Taiwan Strait crisis would implicate nearby sea lanes, U.S. force posture, and Japanese security planning, without making Japanese involvement automatic.",
      sourceIds: ["crs-background-us-relations", "csis-blockade"],
    },
    {
      title: locale === "zh-CN" ? "菲律宾" : "Philippines",
      text: locale === "zh-CN" ? "地理位置、联盟准入和海上通道使菲律宾与地区应急规划和升级管理相关。" : "Geography, alliance access, and maritime routes make the Philippines relevant to regional contingency planning and escalation management.",
      sourceIds: ["crs-background-us-relations", "csis-blockade"],
    },
    {
      title: locale === "zh-CN" ? "印太地区" : "Indo-Pacific",
      text: locale === "zh-CN" ? "更广泛地区的重要性在于威慑、制裁、供应链扰动和联盟信号都会超出台海本身。" : "The wider region matters because deterrence, sanctions, supply-chain disruption, and alliance signaling would extend beyond the Strait.",
      sourceIds: ["rand-gray-zone", "crs-semiconductor"],
    },
  ];

  return (
    <section className="mt-8 grid gap-5 lg:grid-cols-3" aria-label={locale === "zh-CN" ? "地区影响" : "Regional implications"}>
      {regions.map((region) => (
        <article key={region.title} className="rounded-lg border border-ink-900/10 bg-white/66 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
          <h2 className="text-2xl font-semibold tracking-normal text-ink-950 dark:text-white">{region.title}</h2>
          <p className="mt-4 text-sm leading-7 text-ink-700 dark:text-ink-100">{region.text}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {Array.from(new Set(region.sourceIds)).map((id) => (
              <SourceButton key={id} sourceId={id} />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

function tabLabel(tab: Tab, t: (key: string) => string) {
  if (tab === "Risk cards") return t("security.riskCards");
  if (tab === "Matrix view") return t("security.matrixView");
  return t("security.regionalImplications");
}
