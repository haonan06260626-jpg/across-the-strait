"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LocaleProvider, useLocale } from "@/i18n/LocaleProvider";

type PresentationSlide = {
  titleKey: string;
  textKey: string;
  href: string;
};

const slides: PresentationSlide[] = [
  { titleKey: "presentation.slides.homeTitle", textKey: "presentation.slides.homeText", href: "/" },
  { titleKey: "presentation.slides.questionTitle", textKey: "presentation.slides.questionText", href: "/" },
  { titleKey: "presentation.slides.takeawayTitle", textKey: "presentation.slides.takeawayText", href: "/" },
  { titleKey: "presentation.slides.timelineTitle", textKey: "presentation.slides.timelineText", href: "/timeline" },
  { titleKey: "presentation.slides.positionsTitle", textKey: "presentation.slides.positionsText", href: "/positions" },
  { titleKey: "presentation.slides.policyTitle", textKey: "presentation.slides.policyText", href: "/us-policy" },
  { titleKey: "presentation.slides.securityTitle", textKey: "presentation.slides.securityText", href: "/security" },
  { titleKey: "presentation.slides.methodologyTitle", textKey: "presentation.slides.methodologyText", href: "/methodology" },
  { titleKey: "presentation.slides.conclusionTitle", textKey: "presentation.slides.conclusionText", href: "/documents" },
];

export default function PresentationMode() {
  return (
    <LocaleProvider>
      <PresentationBody />
    </LocaleProvider>
  );
}

function PresentationBody() {
  const router = useRouter();
  const { localizedHref, t } = useLocale();
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeSlide = slides[index];
  const progress = useMemo(() => ((index + 1) / slides.length) * 100, [index]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        router.push(localizedHref("/"));
      }
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        setIndex((value) => Math.min(slides.length - 1, value + 1));
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((value) => Math.max(0, value - 1));
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [localizedHref, router]);

  return (
    <main className="min-h-screen overflow-hidden bg-ink-950 px-5 py-5 text-white lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-7xl flex-col rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-2xl backdrop-blur-2xl sm:p-8" aria-labelledby="presentation-heading">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">
              {t("presentation.eyebrow")}
            </p>
            <h1 id="presentation-heading" className="mt-3 text-xl font-semibold tracking-normal text-white sm:text-2xl">
              {t("presentation.title")}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white/74">
              {t("presentation.slideLabel")} {index + 1} / {slides.length}
            </div>
            <button
              type="button"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-white/78 transition hover:border-blue-300 hover:text-white"
              onClick={() => router.push(localizedHref("/"))}
              aria-label={t("presentation.exit")}
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
              {t("presentation.exit")}
            </button>
          </div>
        </div>

        <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
          <div className="h-full rounded-full bg-blue-300 transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>

        <div className="grid flex-1 items-center gap-8 py-10 lg:grid-cols-[1fr_16rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.titleKey}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.28 }}
              aria-live="polite"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-tight tracking-normal text-white sm:text-7xl lg:text-8xl">
                {t(activeSlide.titleKey)}
              </h2>
              <p className="mt-8 max-w-4xl text-xl leading-9 text-white/78 sm:text-2xl">
                {t(activeSlide.textKey)}
              </p>
              <Link
                href={localizedHref(activeSlide.href)}
                className="focus-ring mt-10 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-blue-100"
              >
                {t("presentation.openModule")}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </AnimatePresence>

          <nav aria-label={t("presentation.title")} className="grid gap-2">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.titleKey}
                type="button"
                className={`focus-ring rounded-md border px-4 py-3 text-left text-sm transition ${
                  slideIndex === index
                    ? "border-blue-300 bg-blue-300 text-ink-950"
                    : "border-white/10 text-white/72 hover:border-blue-300 hover:text-white"
                }`}
                onClick={() => setIndex(slideIndex)}
                aria-current={slideIndex === index ? "step" : undefined}
              >
                {t(slide.titleKey)}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
          <button
            type="button"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/78 transition hover:border-blue-300 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            onClick={() => setIndex((value) => Math.max(0, value - 1))}
            disabled={index === 0}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t("presentation.previous")}
          </button>
          <button
            type="button"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40"
            onClick={() => setIndex((value) => Math.min(slides.length - 1, value + 1))}
            disabled={index === slides.length - 1}
          >
            {t("presentation.next")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </section>
    </main>
  );
}
