"use client";

import Link from "next/link";
import { Activity, Archive, ArrowRight, Scale } from "lucide-react";
import { Citation } from "@/components/CitationProvider";
import { GuidedTourStartButton } from "@/components/GuidedTour";
import ResearchShell from "@/components/ResearchShell";
import StraitMap from "@/components/StraitMap";
import TopicCard from "@/components/TopicCard";
import { navigationItems } from "@/data/navigation";
import { useLocale } from "@/i18n/LocaleProvider";

export default function HomePage() {
  return (
    <ResearchShell>
      <HomePageBody />
    </ResearchShell>
  );
}

function HomePageBody() {
  const { localizedHref, t } = useLocale();

  return (
      <main>
        <section className="relative flex min-h-[88vh] items-center overflow-hidden px-5 py-20 lg:px-8" aria-labelledby="home-heading">
          <div className="absolute inset-0 -z-10">
            <StraitMap className="h-full w-full opacity-90" />
          </div>
          <div className="mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-strait-blue dark:text-blue-300">
                {t("home.eyebrow")}
              </p>
              <h1 id="home-heading" className="text-6xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-7xl lg:text-8xl">
                {t("home.title")}
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-ink-600 dark:text-ink-100 sm:text-2xl">
                {t("home.subtitle")}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <HeroLink href={localizedHref("/timeline")} icon={<Activity className="h-4 w-4" />}>
                  {t("home.timelineCta")}
                </HeroLink>
                <HeroLink href={localizedHref("/positions")} icon={<Scale className="h-4 w-4" />} secondary>
                  {t("home.positionsCta")}
                </HeroLink>
                <HeroLink href={localizedHref("/documents")} icon={<Archive className="h-4 w-4" />} secondary>
                  {t("home.documentsCta")}
                </HeroLink>
              </div>
            </div>

            <div className="glass rounded-lg p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-strait-blue dark:text-blue-300">
                {t("home.howTo")}
              </p>
              <div className="mt-5 grid gap-4 text-sm leading-7 text-ink-700 dark:text-ink-100">
                <p>{t("home.howTo1")}</p>
                <p>{t("home.howTo2")}</p>
                <p>{t("home.howTo3")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-8" aria-labelledby="key-question-heading">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-lg border border-ink-900/10 bg-white/70 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] sm:p-8">
              <p className="text-sm font-medium tracking-[0.04em] text-ink-500 dark:text-ink-300">
                {t("home.authorCredit")}
              </p>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-strait-blue dark:text-blue-300">
                {t("home.keyQuestionLabel")}
              </p>
              <h2 id="key-question-heading" className="mt-4 text-3xl font-semibold leading-tight tracking-normal text-ink-950 dark:text-white sm:text-5xl">
                {t("home.keyQuestion")}
              </h2>
            </div>
            <div className="rounded-lg border border-ink-900/10 bg-ink-950 p-6 text-white shadow-2xl dark:border-white/10 dark:bg-white/[0.08] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
                {t("home.takeawayLabel")}
              </p>
              <p className="mt-4 text-lg leading-8 text-white/86">
                {t("home.takeaway")}
                <Citation sourceId="crs-one-china-policy" />
                <Citation sourceId="prc-2022-white-paper" />
                <Citation sourceId="taiwan-mac-policy" />
                <Citation sourceId="crs-semiconductor" />
              </p>
              <div className="mt-7">
                <GuidedTourStartButton className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-blue-100 dark:border-white/20" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 lg:px-8" aria-labelledby="topics-heading">
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-strait-blue dark:text-blue-300">
                {t("home.choosePathway")}
              </p>
              <h2 id="topics-heading" className="text-4xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-5xl">
                {t("home.exploreAtlas")}
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {navigationItems
                .filter((item) => item.href !== "/bibliography" && item.href !== "/presentation")
                .map((item) => (
                  <TopicCard key={item.href} item={item} />
                ))}
            </div>
            <p className="mt-8 max-w-3xl text-sm leading-7 text-ink-600 dark:text-ink-200">
              {t("home.sourceTransparency")}
            </p>
          </div>
        </section>
      </main>
  );
}

function HeroLink({
  href,
  icon,
  children,
  secondary = false,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        secondary
          ? "focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/10 bg-white/55 px-5 py-3 text-sm font-semibold text-ink-950 backdrop-blur transition hover:border-strait-blue hover:text-strait-blue dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-blue-300 dark:hover:text-blue-200"
          : "focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-strait-blue dark:bg-white dark:text-ink-950 dark:hover:bg-blue-100"
      }
    >
      {icon}
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
