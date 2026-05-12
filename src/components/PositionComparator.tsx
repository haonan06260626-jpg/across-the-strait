"use client";

import { useState } from "react";
import { Landmark, Scale, X } from "lucide-react";
import { SectionSources, SourceButton, useCitations } from "@/components/CitationProvider";
import ResearchShell from "@/components/ResearchShell";
import WhyThisMattersCard from "@/components/WhyThisMattersCard";
import { positions, type PositionColumn } from "@/data/positions";
import { useLocale } from "@/i18n/LocaleProvider";
import { localizePosition } from "@/i18n/localizedData";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type IssueKey =
  | "Sovereignty"
  | "International recognition"
  | "Use of force"
  | "Democracy and consent"
  | "U.S. role"
  | "Status quo";

const issues: IssueKey[] = [
  "Sovereignty",
  "International recognition",
  "Use of force",
  "Democracy and consent",
  "U.S. role",
  "Status quo",
];

const issueComparisons: Record<IssueKey, Record<PositionColumn["id"], { claim: string; sourceIds: string[] }>> = {
  Sovereignty: {
    prc: {
      claim:
        "The PRC government states that Taiwan is part of China and that the PRC represents China internationally.",
      sourceIds: ["prc-2022-white-paper", "prc-anti-secession-law"],
    },
    taiwan: {
      claim:
        "Taiwan authorities emphasize effective self-government under the ROC constitutional system and reject PRC jurisdiction.",
      sourceIds: ["taiwan-gov-history", "taiwan-mac-policy"],
    },
    us: {
      claim:
        "The United States describes its position through a One China policy that is distinct from the PRC One China principle.",
      sourceIds: ["crs-one-china-policy"],
    },
  },
  "International recognition": {
    prc: {
      claim:
        "Beijing treats recognition of the PRC and the One China principle as a condition for official diplomatic relations.",
      sourceIds: ["prc-2022-white-paper", "ait-shanghai-communique"],
    },
    taiwan: {
      claim:
        "Taiwan seeks meaningful international participation despite formal diplomatic constraints and contested representation.",
      sourceIds: ["taiwan-mac-policy", "taiwan-gov-history"],
    },
    us: {
      claim:
        "Washington maintains diplomatic relations with Beijing and unofficial relations with Taiwan through the TRA and AIT.",
      sourceIds: ["ait-tra", "crs-one-china-policy"],
    },
  },
  "Use of force": {
    prc: {
      claim:
        "The PRC Anti-Secession Law reserves non-peaceful means under specified conditions, while Beijing states a preference for peaceful reunification.",
      sourceIds: ["prc-anti-secession-law", "prc-2022-white-paper"],
    },
    taiwan: {
      claim:
        "Taiwan frames PLA pressure as destabilizing and emphasizes defense, democratic resilience, and maintenance of peace.",
      sourceIds: ["taiwan-mnd-joint-sword-2024a", "taiwan-mac-policy"],
    },
    us: {
      claim:
        "The TRA states U.S. policy to provide defense articles and maintain capacity to resist coercive threats to Taiwan.",
      sourceIds: ["ait-tra", "crs-background-us-relations"],
    },
  },
  "Democracy and consent": {
    prc: {
      claim:
        "PRC documents frame the issue primarily through sovereignty, national reunification, and opposition to separatism.",
      sourceIds: ["prc-2022-white-paper"],
    },
    taiwan: {
      claim:
        "Taiwan official statements emphasize democratic procedures, public consent, and elected leadership as core political facts.",
      sourceIds: ["president-tsai-profile", "president-lai-profile", "taiwan-cec-2024"],
    },
    us: {
      claim:
        "U.S. materials describe Taiwan as a self-governing democracy while maintaining the formal architecture of the One China policy.",
      sourceIds: ["crs-background-us-relations", "crs-one-china-policy"],
    },
  },
  "U.S. role": {
    prc: {
      claim:
        "Beijing objects to U.S. arms sales and high-level contacts, treating them as interference in an internal matter.",
      sourceIds: ["prc-2022-white-paper", "ait-1982-communique"],
    },
    taiwan: {
      claim:
        "Taiwan values U.S. support, unofficial relations, and defensive assistance while preserving its own elected decision-making.",
      sourceIds: ["taiwan-mac-policy", "president-tsai-profile"],
    },
    us: {
      claim:
        "The United States describes a policy role grounded in peace and stability, unofficial relations, and defensive support under U.S. law.",
      sourceIds: ["ait-tra", "crs-one-china-policy"],
    },
  },
  "Status quo": {
    prc: {
      claim:
        "PRC sources treat the status quo as subordinate to the goal of reunification and opposition to Taiwan independence.",
      sourceIds: ["prc-2022-white-paper"],
    },
    taiwan: {
      claim:
        "Taiwan authorities frequently frame status quo maintenance as peace, democratic autonomy, and no unilateral coercive change.",
      sourceIds: ["taiwan-mac-policy", "president-lai-profile"],
    },
    us: {
      claim:
        "U.S. policy emphasizes peaceful resolution and opposes unilateral changes to the status quo by either side.",
      sourceIds: ["crs-one-china-policy", "crs-background-us-relations"],
    },
  },
};

export default function PositionComparator() {
  return (
    <ResearchShell breadcrumb="Competing Positions" readingProgress>
      <PositionComparatorBody />
    </ResearchShell>
  );
}

function PositionComparatorBody() {
  const { locale, t } = useLocale();
  const [activeActor, setActiveActor] = useState<PositionColumn | null>(null);
  const [issue, setIssue] = useState<IssueKey>("Sovereignty");
  const { compareNarratives } = useCitations();

  return (
    <main className="px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <section aria-labelledby="positions-heading">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-strait-blue dark:text-blue-300">
              {t("positions.eyebrow")}
            </p>
            <h1 id="positions-heading" className="text-5xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-6xl">
              {t("positions.title")}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-700 dark:text-ink-100">
              {t("positions.intro")}
            </p>
          </section>

          <WhyThisMattersCard
            titleKey="whyCards.positionsTitle"
            textKey="whyCards.positionsText"
            sourceIds={["prc-2022-white-paper", "taiwan-mac-policy", "crs-one-china-policy"]}
          />

          <section className="mt-10 grid gap-5 lg:grid-cols-3" aria-label={t("positions.officialCards")}>
            {positions.map((position) => (
              <PositionCard
                key={position.id}
                position={position}
                active={activeActor?.id === position.id}
                onClick={() => setActiveActor(position)}
                locale={locale}
              />
            ))}
          </section>

          {activeActor ? (
            <ExpandedPosition
              position={activeActor}
              onClose={() => setActiveActor(null)}
              locale={locale}
              showNarrative={compareNarratives}
            />
          ) : null}

          <section className="mt-16" aria-labelledby="issue-heading">
            <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-strait-blue dark:text-blue-300">
                  {t("positions.compareByIssue")}
                </p>
                <h2 id="issue-heading" className="text-4xl font-semibold tracking-normal text-ink-950 dark:text-white">
                  {t("positions.selectQuestion")}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {issues.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={cn(
                      "focus-ring rounded-full border px-3 py-2 text-xs font-semibold transition",
                      issue === item
                        ? "border-strait-blue bg-strait-blue text-white"
                        : "border-ink-900/10 text-ink-600 hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:text-ink-200",
                    )}
                    onClick={() => setIssue(item)}
                    aria-pressed={issue === item}
                  >
                    {issueLabel(item, t)}
                  </button>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto rounded-lg border border-ink-900/10 bg-white/66 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
              <table className="min-w-[760px] w-full text-left text-sm">
                <caption className="sr-only">{t("positions.compareByIssue")} {issueLabel(issue, t)}</caption>
                <thead className="border-b border-ink-900/10 text-xs uppercase tracking-[0.18em] text-ink-500 dark:border-white/10 dark:text-ink-300">
                  <tr>
                    <th className="px-5 py-4" scope="col">{t("positions.actor")}</th>
                    <th className="px-5 py-4" scope="col">{t("positions.attributedClaim")}</th>
                    <th className="px-5 py-4" scope="col">{t("common.sources")}</th>
                  </tr>
                </thead>
                <tbody>
                  {positions.map((position) => {
                    const row = issueComparisons[issue][position.id];
                    const localizedPosition = localizePosition(position, locale);

                    return (
                      <tr key={position.id} className="border-b border-ink-900/5 last:border-0 dark:border-white/5">
                        <th scope="row" className="px-5 py-5 font-semibold text-ink-950 dark:text-white">
                          {localizedPosition.headingText}
                        </th>
                        <td className="px-5 py-5 leading-7 text-ink-700 dark:text-ink-100">{localizeIssueClaim(issue, position.id, row.claim, locale)}</td>
                        <td className="px-5 py-5">
                          <div className="flex flex-wrap gap-2">
                            {Array.from(new Set(row.sourceIds)).map((id) => (
                              <SourceButton key={id} sourceId={id} />
                            ))}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          <SectionSources sourceIds={Array.from(new Set(positions.flatMap((position) => position.sourceIds)))} />
        </div>
      </main>
  );
}

function PositionCard({
  position,
  active,
  onClick,
  locale,
}: {
  position: PositionColumn;
  active: boolean;
  onClick: () => void;
  locale: Locale;
}) {
  const localizedPosition = localizePosition(position, locale);

  return (
              <button
                type="button"
                className={cn(
                  "focus-ring min-h-[19rem] rounded-lg border p-6 text-left transition hover:-translate-y-1",
                  active
                    ? "border-strait-blue bg-strait-blue text-white shadow-glow"
                    : "border-ink-900/10 bg-white/66 text-ink-950 backdrop-blur hover:border-strait-blue/60 dark:border-white/10 dark:bg-white/[0.06] dark:text-white",
                )}
                onClick={onClick}
              >
                <div className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink-950 text-white dark:bg-white dark:text-ink-950">
                  {position.id === "us" ? <Scale className="h-5 w-5" /> : <Landmark className="h-5 w-5" />}
                </div>
                <h2 className="text-2xl font-semibold tracking-normal">{localizedPosition.headingText}</h2>
                <p className={cn("mt-4 text-sm leading-7", active ? "text-white/82" : "text-ink-600 dark:text-ink-200")}>
                  {localizedPosition.summaryText}
                </p>
              </button>
  );
}

function ExpandedPosition({
  position,
  onClose,
  locale,
  showNarrative,
}: {
  position: PositionColumn;
  onClose: () => void;
  locale: Locale;
  showNarrative: boolean;
}) {
  const { t } = useLocale();
  const localizedPosition = localizePosition(position, locale);

  return (
            <section className="mt-6 rounded-lg border border-ink-900/10 bg-white/66 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]" aria-live="polite">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-strait-blue dark:text-blue-300">
                    {t("positions.expanded")}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink-950 dark:text-white">
                    {localizedPosition.headingText}
                  </h2>
                </div>
                <button
                  type="button"
                  className="focus-ring rounded-full border border-ink-900/10 p-2 text-ink-700 transition hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:text-ink-100"
                  onClick={onClose}
                  aria-label={t("common.closeMenu")}
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                <PositionList title={t("positions.coreDocuments")} items={localizedPosition.coreDocumentsText} />
                <PositionList title={t("positions.keyPhrases")} items={localizedPosition.keyPhrasesText} />
                <PositionList title={t("positions.policyImplications")} items={localizedPosition.implicationsText} />
              </div>
              {showNarrative ? (
                <p className="mt-6 rounded-lg bg-strait-red/[0.1] p-4 text-sm leading-7 text-ink-700 dark:text-ink-100">
                  {localizedPosition.caveatText}
                </p>
              ) : null}
              <div className="mt-5 flex flex-wrap gap-2">
                {Array.from(new Set(position.sourceIds)).map((id) => (
                  <SourceButton key={id} sourceId={id} />
                ))}
              </div>
            </section>
  );
}

function PositionList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">{title}</p>
      <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink-700 dark:text-ink-100">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function issueLabel(issue: IssueKey, t: (key: string) => string) {
  const labels: Record<IssueKey, string> = {
    Sovereignty: t("positions.issues.sovereignty"),
    "International recognition": t("positions.issues.recognition"),
    "Use of force": t("positions.issues.force"),
    "Democracy and consent": t("positions.issues.democracy"),
    "U.S. role": t("positions.issues.usRole"),
    "Status quo": t("positions.issues.statusQuo"),
  };

  return labels[issue];
}

const issueClaimZh: Record<IssueKey, Record<PositionColumn["id"], string>> = {
  Sovereignty: {
    prc: "中国大陆政府称台湾是中国的一部分，中华人民共和国在国际上代表中国。",
    taiwan: "台湾当局强调在中华民国宪政体系下的有效自治，并拒绝中华人民共和国对台湾的管辖。",
    us: "美国通过其“一个中国”政策表述立场，并明确该政策不同于中国大陆的“一个中国原则”。",
  },
  "International recognition": {
    prc: "北京将承认中华人民共和国和“一个中国原则”视为建立官方外交关系的条件。",
    taiwan: "台湾在正式外交空间受限且代表权存在争议的情况下，寻求有意义的国际参与。",
    us: "华盛顿与北京保持外交关系，并通过《台湾关系法》和美国在台协会维持与台湾的非官方关系。",
  },
  "Use of force": {
    prc: "《反分裂国家法》在特定条件下保留非和平方式，同时北京也表示偏好和平统一。",
    taiwan: "台湾将解放军压力描述为破坏稳定，并强调防卫、民主韧性与和平维护。",
    us: "《台湾关系法》规定美国提供防卫物资，并保持抵抗胁迫台湾的能力。",
  },
  "Democracy and consent": {
    prc: "中国大陆文件主要通过主权、国家统一和反对分裂来框定问题。",
    taiwan: "台湾官方声明强调民主程序、公共同意和选举产生的领导权是核心政治事实。",
    us: "美国资料将台湾描述为自治民主政体，同时维持“一个中国”政策的正式架构。",
  },
  "U.S. role": {
    prc: "北京反对美国军售和高层接触，认为这些行为干涉内部事务。",
    taiwan: "台湾重视美国支持、非官方关系和防卫协助，同时保留自身民选决策。",
    us: "美国将其政策角色建立在和平稳定、非官方关系和美国法律下的防卫支持之上。",
  },
  "Status quo": {
    prc: "中国大陆来源将现状置于统一目标和反对台湾独立的框架之下。",
    taiwan: "台湾当局常把维持现状表述为和平、民主自治以及反对单方面胁迫性改变。",
    us: "美国政策强调和平解决，并反对任何一方单方面改变现状。",
  },
};

function localizeIssueClaim(issue: IssueKey, actor: PositionColumn["id"], fallback: string, locale: Locale) {
  return locale === "zh-CN" ? issueClaimZh[issue][actor] : fallback;
}
