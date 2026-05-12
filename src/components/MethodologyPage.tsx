"use client";

import { Citation, SectionSources } from "@/components/CitationProvider";
import ResearchShell from "@/components/ResearchShell";
import WhyThisMattersCard from "@/components/WhyThisMattersCard";
import { getLocalizedText } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";

const methodologyCards = [
  {
    title: { en: "Official claims", "zh-CN": "官方主张" },
    text: {
      en: "Statements by the PRC government, Taiwan authorities, and the U.S. government are attributed to those actors rather than presented as neutral conclusions.",
      "zh-CN": "中国大陆政府、台湾当局和美国政府的表述会归属于相应行动者，而不是作为中立结论呈现。",
    },
    sourceIds: ["prc-2022-white-paper", "taiwan-mac-policy", "crs-one-china-policy"],
  },
  {
    title: { en: "Legal documents", "zh-CN": "法律文件" },
    text: {
      en: "Domestic statutes, diplomatic communiques, UN records, and official legal texts are treated as primary evidence for policy architecture and actor claims.",
      "zh-CN": "国内法、外交公报、联合国记录和官方法律文本被视为政策架构与行动者主张的一手证据。",
    },
    sourceIds: ["ait-tra", "ait-policy-docs", "un-res-2758"],
  },
  {
    title: { en: "Historical facts", "zh-CN": "历史事实" },
    text: {
      en: "Dated events are separated from interpretations about their legal meaning or political legitimacy.",
      "zh-CN": "带有日期的事件与其法律意义或政治正当性解释分开呈现。",
    },
    sourceIds: ["taiwan-gov-history", "jacar-shimonoseki", "state-taiwan-crises"],
  },
  {
    title: { en: "Scholarly interpretation", "zh-CN": "学术解释" },
    text: {
      en: "Research institutions and academic material are used for analysis, context, and scenario framing after primary sources are identified.",
      "zh-CN": "在确认一手来源后，研究机构与学术材料用于分析、背景说明和情景框架。",
    },
    sourceIds: ["csis-blockade", "rand-gray-zone", "academic-2016-election"],
  },
];

const sourceHierarchy = [
  {
    level: { en: "Primary legal and diplomatic documents", "zh-CN": "原始法律与外交文件" },
    description: {
      en: "Treaties, statutes, UN records, communiques, and official legal texts closest to the claim being evaluated.",
      "zh-CN": "条约、法律、联合国记录、公报和官方法律文本，是最接近被评估主张的材料。",
    },
    sourceIds: ["ait-tra", "ait-policy-docs", "un-res-2758"],
  },
  {
    level: { en: "Official government statements", "zh-CN": "政府官方声明" },
    description: {
      en: "Used to attribute what Beijing, Taipei, or Washington states, not to settle disputed claims.",
      "zh-CN": "用于归属北京、台北或华盛顿的表述，而不是用来终结争议性主张。",
    },
    sourceIds: ["prc-2022-white-paper", "taiwan-mac-policy", "ait-policy-docs"],
  },
  {
    level: { en: "Congressional and institutional research", "zh-CN": "国会与研究机构报告" },
    description: {
      en: "Nonpartisan U.S. research is used to clarify policy frameworks and terminology.",
      "zh-CN": "无党派的美国国会研究用于澄清政策框架和术语。",
    },
    sourceIds: ["crs-one-china-policy", "crs-background-us-relations"],
  },
  {
    level: { en: "Peer-reviewed scholarship", "zh-CN": "同行评议学术研究" },
    description: {
      en: "Peer-reviewed or scholarly material supports interpretation after primary records are identified.",
      "zh-CN": "同侪评审或学术材料用于在确认一手记录之后支持解释。",
    },
    sourceIds: ["academic-2016-election"],
  },
  {
    level: { en: "Think tank analysis", "zh-CN": "智库分析" },
    description: {
      en: "Research institutions help frame scenarios, policy debates, and risk categories.",
      "zh-CN": "研究机构用于组织情景、政策争论和风险类别。",
    },
    sourceIds: ["csis-blockade", "rand-gray-zone"],
  },
  {
    level: { en: "News sources for recent developments only", "zh-CN": "仅用于近期事件的新闻来源" },
    description: {
      en: "News is used mainly for recent developments and checked against official or primary records where possible.",
      "zh-CN": "新闻主要用于近期发展，并在可能时与官方或一手记录交叉核对。",
    },
    sourceIds: ["rti-2024-election", "taiwan-mnd-joint-sword-2024a"],
  },
];

export default function MethodologyPage() {
  return (
    <ResearchShell breadcrumb="Methodology">
      <MethodologyBody />
    </ResearchShell>
  );
}

function MethodologyBody() {
  const { locale, t } = useLocale();
  const rules = [
    {
      en: "Primary sources are prioritized, followed by congressional research, peer-reviewed scholarship, research institutions, and news for recent events.",
      "zh-CN": "优先使用一手来源，其次是国会研究、同行评议学术成果、研究机构资料，以及用于近期事件的新闻来源。",
    },
    {
      en: "Attribution rules identify whether a statement is made by Beijing, Taipei, Washington, or an independent analyst.",
      "zh-CN": "归属规则会说明某一表述来自北京、台北、华盛顿，还是独立分析者。",
    },
    {
      en: "Scenario analysis is separated from prediction: risks are categories for inquiry, not forecasts of inevitability.",
      "zh-CN": "情景分析与预测分开：风险类别用于研究，而不是必然性预言。",
    },
  ];

  return (
      <main className="px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <section aria-labelledby="methodology-heading">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-strait-blue dark:text-blue-300">
              {t("methodology.eyebrow")}
            </p>
            <h1 id="methodology-heading" className="text-5xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-6xl">
              {t("methodology.title")}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-700 dark:text-ink-100">
              {t("methodology.intro")}
              <Citation sourceId="crs-one-china-policy" />
            </p>
            <p className="mt-6 max-w-3xl rounded-lg border border-ink-900/10 bg-white/54 p-5 text-sm leading-7 text-ink-600 backdrop-blur dark:border-white/10 dark:bg-white/[0.05] dark:text-ink-200">
              {t("methodology.projectNote")}
            </p>
            <div className="mt-4 grid max-w-4xl gap-3 md:grid-cols-[0.75fr_1.25fr]">
              <p className="rounded-lg border border-ink-900/10 bg-white/54 p-4 text-sm font-medium text-ink-600 backdrop-blur dark:border-white/10 dark:bg-white/[0.05] dark:text-ink-200">
                {t("methodology.reviewed")}
              </p>
              <p className="rounded-lg border border-ink-900/10 bg-white/54 p-4 text-sm leading-7 text-ink-600 backdrop-blur dark:border-white/10 dark:bg-white/[0.05] dark:text-ink-200">
                {t("methodology.disclaimer")}
              </p>
            </div>
          </section>

          <WhyThisMattersCard
            titleKey="whyCards.methodologyTitle"
            textKey="whyCards.methodologyText"
            sourceIds={["crs-one-china-policy", "prc-2022-white-paper", "taiwan-mac-policy"]}
          />

          <section className="mt-12" aria-labelledby="source-hierarchy-heading">
            <div className="mb-5 max-w-3xl">
              <h2 id="source-hierarchy-heading" className="text-3xl font-semibold tracking-normal text-ink-950 dark:text-white">
                {t("methodology.sourceHierarchy")}
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-700 dark:text-ink-100">
                {t("methodology.sourceHierarchyIntro")}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {sourceHierarchy.map((item, index) => (
                <article key={getLocalizedText(item.level, "en")} className="rounded-lg border border-ink-900/10 bg-white/60 p-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-strait-blue dark:text-blue-300">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-ink-950 dark:text-white">
                    {getLocalizedText(item.level, locale)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink-700 dark:text-ink-100">
                    {getLocalizedText(item.description, locale)}
                  </p>
                  <div className="mt-4">
                    {Array.from(new Set(item.sourceIds)).map((id) => (
                      <Citation key={`hierarchy-${id}`} sourceId={id} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-5 md:grid-cols-2" aria-label={t("methodology.categories")}>
            {methodologyCards.map((card) => (
              <article key={getLocalizedText(card.title, "en")} className="rounded-lg border border-ink-900/10 bg-white/66 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
                <h2 className="text-2xl font-semibold tracking-normal text-ink-950 dark:text-white">{getLocalizedText(card.title, locale)}</h2>
                <p className="mt-4 text-sm leading-7 text-ink-700 dark:text-ink-100">{getLocalizedText(card.text, locale)}</p>
                <div className="mt-4">
                  {Array.from(new Set(card.sourceIds)).map((id) => (
                    <Citation key={id} sourceId={id} />
                  ))}
                </div>
              </article>
            ))}
          </section>

          <section className="mt-12 grid gap-5 lg:grid-cols-3" aria-label={t("methodology.attributionRules")}>
            {rules.map((rule) => (
              <div key={rule.en} className="glass rounded-lg p-5 text-sm leading-7 text-ink-700 dark:text-ink-100">
                {getLocalizedText(rule, locale)}
              </div>
            ))}
          </section>

          <SectionSources sourceIds={Array.from(new Set([...methodologyCards.flatMap((card) => card.sourceIds), ...sourceHierarchy.flatMap((item) => item.sourceIds)]))} />
        </div>
      </main>
  );
}
