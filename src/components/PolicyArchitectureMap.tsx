"use client";

import { useMemo, useState } from "react";
import { SourceButton } from "@/components/CitationProvider";
import ResearchShell from "@/components/ResearchShell";
import WhyThisMattersCard from "@/components/WhyThisMattersCard";
import { policyDocuments, type PolicyDocument } from "@/data/policyStack";
import { useLocale } from "@/i18n/LocaleProvider";
import { localizePolicyDocument } from "@/i18n/localizedData";
import { cn } from "@/lib/utils";

type Mode = "Legal documents" | "Diplomatic practice" | "Strategic interpretation";

const modes: Mode[] = ["Legal documents", "Diplomatic practice", "Strategic interpretation"];

const modeMap: Record<Mode, string[]> = {
  "Legal documents": ["tra"],
  "Diplomatic practice": ["communiques", "six-assurances", "ait-relations"],
  "Strategic interpretation": ["strategic-ambiguity", "arms-deterrence"],
};

const nodePositions: Record<string, { x: number; y: number }> = {
  tra: { x: 145, y: 200 },
  communiques: { x: 340, y: 108 },
  "six-assurances": { x: 548, y: 108 },
  "strategic-ambiguity": { x: 340, y: 296 },
  "arms-deterrence": { x: 548, y: 296 },
  "ait-relations": { x: 744, y: 200 },
};

const connections = [
  ["tra", "arms-deterrence"],
  ["tra", "ait-relations"],
  ["communiques", "six-assurances"],
  ["communiques", "strategic-ambiguity"],
  ["six-assurances", "arms-deterrence"],
  ["strategic-ambiguity", "arms-deterrence"],
  ["ait-relations", "communiques"],
];

export default function PolicyArchitectureMap() {
  return (
    <ResearchShell breadcrumb="U.S. Policy Architecture" readingProgress>
      <PolicyArchitectureMapBody />
    </ResearchShell>
  );
}

function PolicyArchitectureMapBody() {
  const { locale, t } = useLocale();
  const [mode, setMode] = useState<Mode>("Legal documents");
  const [active, setActive] = useState<PolicyDocument>(policyDocuments[0]);
  const activeIds = useMemo(() => new Set(modeMap[mode]), [mode]);

  return (
      <main className="px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <section aria-labelledby="policy-heading">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-strait-blue dark:text-blue-300">
              {t("policy.eyebrow")}
            </p>
            <h1 id="policy-heading" className="text-5xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-6xl">
              {t("policy.title")}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-700 dark:text-ink-100">
              {t("policy.intro")}
            </p>
          </section>

          <WhyThisMattersCard
            titleKey="whyCards.policyTitle"
            textKey="whyCards.policyText"
            sourceIds={["ait-tra", "ait-policy-docs", "ait-six-assurances"]}
          />

          <div className="mt-10 flex flex-wrap gap-2">
            {modes.map((item) => (
              <button
                key={item}
                type="button"
                className={cn(
                  "focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition",
                  mode === item
                    ? "border-strait-blue bg-strait-blue text-white"
                    : "border-ink-900/10 text-ink-600 hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:text-ink-200",
                )}
                onClick={() => setMode(item)}
                aria-pressed={mode === item}
              >
                {modeLabel(item, t)}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <section className="glass rounded-lg p-5" aria-label={t("policy.diagram")}>
              <svg className="h-auto w-full" viewBox="0 0 900 420" role="img" aria-label={t("policy.diagram")}>
                {connections.map(([sourceId, targetId]) => {
                  const source = nodePositions[sourceId];
                  const target = nodePositions[targetId];
                  const highlighted = activeIds.has(sourceId) || activeIds.has(targetId) || active.id === sourceId || active.id === targetId;

                  return (
                    <line
                      key={`${sourceId}-${targetId}`}
                      x1={source.x}
                      y1={source.y}
                      x2={target.x}
                      y2={target.y}
                      stroke={highlighted ? "#275e92" : "#647084"}
                      strokeOpacity={highlighted ? 0.72 : 0.18}
                      strokeWidth={highlighted ? 3 : 1.5}
                    />
                  );
                })}
                {policyDocuments.map((document) => {
                  const point = nodePositions[document.id];
                  const highlighted = activeIds.has(document.id) || active.id === document.id;
                  const localizedDocument = localizePolicyDocument(document, locale);

                  return (
                    <g
                      key={document.id}
                      transform={`translate(${point.x} ${point.y})`}
                      onClick={() => setActive(document)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setActive(document);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`${t("common.open")} ${localizedDocument.titleText}`}
                      className="focus-ring cursor-pointer"
                    >
                      <circle r="54" fill={highlighted ? "#275e92" : "#303846"} opacity={highlighted ? 0.96 : 0.74} />
                      <circle
                        r="58"
                        fill="none"
                        stroke={highlighted ? "#9a3a3a" : "#ffffff"}
                        strokeOpacity={highlighted ? 0.7 : 0.24}
                      >
                      </circle>
                      <text y="84" textAnchor="middle" className="fill-ink-900 text-[14px] font-semibold dark:fill-white">
                        {localizedDocument.titleText.length > 22 ? `${localizedDocument.titleText.slice(0, 22)}...` : localizedDocument.titleText}
                      </text>
                    </g>
                  );
                })}
              </svg>
              <p className="mt-4 text-sm leading-7 text-ink-700 dark:text-ink-100">
                {t("policy.conceptualNote")}
              </p>
            </section>

            <PolicyPanel document={active} />
          </div>

          <section className="mt-10 rounded-lg border border-ink-900/10 bg-white/62 p-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]" aria-labelledby="policy-strip">
            <p id="policy-strip" className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">
              {t("policy.strip")}
            </p>
            <div className="grid gap-3 md:grid-cols-4">
              {[
                ["1972", locale === "zh-CN" ? "《上海公报》" : "Shanghai Communique"],
                ["1979", locale === "zh-CN" ? "关系正常化与《台湾关系法》" : "Normalization and TRA"],
                ["1982", locale === "zh-CN" ? "《八一七公报》与六项保证" : "August 17 Communique and Six Assurances"],
                [locale === "zh-CN" ? "持续" : "Ongoing", locale === "zh-CN" ? "AIT 实践、军售与战略模糊" : "AIT practice, arms sales, and strategic ambiguity"],
              ].map(([year, label]) => (
                <div key={label} className="rounded-lg bg-ink-900/[0.035] p-4 dark:bg-white/[0.06]">
                  <p className="text-sm font-semibold text-strait-blue dark:text-blue-300">{year}</p>
                  <p className="mt-2 text-sm leading-6 text-ink-700 dark:text-ink-100">{label}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
  );
}

function PolicyPanel({ document }: { document: PolicyDocument }) {
  const { locale, t } = useLocale();
  const localizedDocument = localizePolicyDocument(document, locale);

  return (
    <aside className="glass rounded-lg p-6" aria-live="polite">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-strait-blue dark:text-blue-300">
        {t("policy.selectedNode")}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink-950 dark:text-white">{localizedDocument.titleText}</h2>
      <div className="mt-6 grid gap-5 text-sm leading-7 text-ink-700 dark:text-ink-100">
        <Detail title={t("policy.summary")} text={localizedDocument.summaryText} />
        <Detail title={t("policy.historicalContext")} text={localizedDocument.historicalContextText} />
        <Detail title={t("policy.status")} text={localizedDocument.labelText} />
        <Detail title={t("policy.whyItMatters")} text={localizedDocument.whyItMattersText} />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">
            {t("policy.relatedDebates")}
          </p>
          <ul className="mt-2 grid gap-2">
            {localizedDocument.relatedDebatesText.map((debate) => (
              <li key={debate}>{debate}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">
            {t("common.sources")}
          </p>
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(document.sourceIds)).map((id) => (
              <SourceButton key={id} sourceId={id} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function Detail({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">{title}</p>
      <p className="mt-2">{text}</p>
    </div>
  );
}

function modeLabel(mode: Mode, t: (key: string) => string) {
  if (mode === "Legal documents") return t("policy.legal");
  if (mode === "Diplomatic practice") return t("policy.diplomatic");
  return t("policy.strategic");
}
