"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Citation, SectionSources } from "@/components/CitationProvider";
import ResearchShell from "@/components/ResearchShell";
import { navigationItems } from "@/data/navigation";
import { useLocale } from "@/i18n/LocaleProvider";
import { localizeNavigationItem } from "@/i18n/localizedData";

const issueNodes = [
  { title: "History", href: "/timeline", x: 86, y: 118, sourceIds: ["taiwan-gov-history"] },
  { title: "Law", href: "/us-policy", x: 260, y: 70, sourceIds: ["ait-tra", "crs-one-china-policy"] },
  { title: "Diplomacy", href: "/positions", x: 430, y: 118, sourceIds: ["ait-shanghai-communique"] },
  { title: "Security", href: "/security", x: 132, y: 260, sourceIds: ["taiwan-mnd-joint-sword-2024a"] },
  { title: "Economics", href: "/economics", x: 318, y: 286, sourceIds: ["crs-semiconductor"] },
  { title: "Identity", href: "/positions", x: 505, y: 258, sourceIds: ["president-martial-law"] },
  { title: "U.S. Policy", href: "/us-policy", x: 300, y: 180, sourceIds: ["crs-one-china-policy"] },
];

export default function OverviewPage() {
  return (
    <ResearchShell breadcrumb="Overview">
      <OverviewPageBody />
    </ResearchShell>
  );
}

function OverviewPageBody() {
  const { locale, localizedHref, t } = useLocale();

  return (
      <main className="px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]" aria-labelledby="overview-heading">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-strait-blue dark:text-blue-300">
                {t("overview.eyebrow")}
              </p>
              <h1 id="overview-heading" className="text-5xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-6xl">
                {t("overview.title")}
              </h1>
              <p className="mt-6 text-lg leading-8 text-ink-700 dark:text-ink-100">
                {t("overview.intro")}
                <Citation sourceId="taiwan-gov-history" />
                <Citation sourceId="prc-2022-white-paper" />
                <Citation sourceId="crs-one-china-policy" />
              </p>
            </div>
              <IssueMap />
          </section>

          <section className="mt-16" aria-labelledby="deeper-heading">
            <div className="mb-7 max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-strait-blue dark:text-blue-300">
                {t("overview.deeper")}
              </p>
              <h2 id="deeper-heading" className="text-4xl font-semibold tracking-normal text-ink-950 dark:text-white">
                {t("overview.moveEvidence")}
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {navigationItems
                .filter((item) => item.href !== "/overview" && item.href !== "/bibliography")
                .slice(0, 6)
                .map((item) => {
                  const localizedItem = localizeNavigationItem(item, locale);
                  return (
                  <Link
                    key={item.href}
                    href={localizedHref(item.href)}
                    className="focus-ring group rounded-lg border border-ink-900/10 bg-white/66 p-5 backdrop-blur transition hover:border-strait-blue/70 dark:border-white/10 dark:bg-white/[0.06]"
                  >
                    <h3 className="text-xl font-semibold tracking-normal text-ink-950 dark:text-white">{localizedItem.titleText}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink-600 dark:text-ink-200">{localizedItem.descriptionText}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-strait-blue dark:text-blue-300">
                      {t("common.open")}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                  );
                })}
            </div>
          </section>

          <SectionSources
            sourceIds={[
              "taiwan-gov-history",
              "prc-2022-white-paper",
              "crs-one-china-policy",
              "ait-tra",
              "president-martial-law",
              "crs-semiconductor",
            ]}
          />
        </div>
      </main>
  );
}

function IssueMap() {
  const { localizedHref, t } = useLocale();
  const uniqueIssueSourceIds = Array.from(
    new Set(issueNodes.flatMap((node) => node.sourceIds ?? [])),
  );

  return (
    <div className="glass rounded-lg p-5">
      <h2 className="mb-4 text-xl font-semibold tracking-normal text-ink-950 dark:text-white">{t("overview.issueMap")}</h2>
      <svg className="h-auto w-full" viewBox="0 0 610 360" role="img" aria-label={t("overview.issueMapAria")}>
        {issueNodes
          .filter((node) => node.title !== "U.S. Policy")
          .map((node) => (
            <line
              key={node.title}
              x1={300}
              y1={180}
              x2={node.x}
              y2={node.y}
              stroke="#647084"
              strokeOpacity="0.28"
              strokeWidth="2"
            />
          ))}
        {issueNodes.map((node) => (
          <a key={node.title} href={localizedHref(node.href)} className="focus-ring">
            <circle cx={node.x} cy={node.y} r={node.title === "U.S. Policy" ? 58 : 44} fill={node.title === "U.S. Policy" ? "#275e92" : "#303846"} opacity="0.9" />
            <text x={node.x} y={node.y + 5} textAnchor="middle" className="fill-white text-[14px] font-semibold">
              {getIssueNodeTitle(node.title, t)}
            </text>
          </a>
        ))}
      </svg>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-ink-600 dark:text-ink-200">
        {uniqueIssueSourceIds.map((id) => (
          <Citation key={`overview-issue-source-${id}`} sourceId={id} />
        ))}
      </div>
    </div>
  );
}

function getIssueNodeTitle(title: string, t: (key: string) => string) {
  const labels: Record<string, string> = {
    History: t("timeline.period"),
    Law: t("timelineTag.law"),
    Diplomacy: t("timelineTag.diplomacy"),
    Security: t("security.title"),
    Economics: t("economics.title"),
    Identity: t("timelineTag.identity"),
    "U.S. Policy": t("policy.title"),
  };

  return labels[title] ?? title;
}
