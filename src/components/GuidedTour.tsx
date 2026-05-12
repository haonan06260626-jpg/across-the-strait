"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";

const tourStorageKey = "atlas_guided_tour";

type TourStep = {
  titleKey: string;
  textKey: string;
  href: string;
  hash?: string;
};

const tourSteps: TourStep[] = [
  { titleKey: "guidedTour.steps.homeTitle", textKey: "guidedTour.steps.homeText", href: "/" },
  { titleKey: "guidedTour.steps.questionTitle", textKey: "guidedTour.steps.questionText", href: "/", hash: "key-question-heading" },
  { titleKey: "guidedTour.steps.timelineTitle", textKey: "guidedTour.steps.timelineText", href: "/timeline" },
  { titleKey: "guidedTour.steps.positionsTitle", textKey: "guidedTour.steps.positionsText", href: "/positions" },
  { titleKey: "guidedTour.steps.policyTitle", textKey: "guidedTour.steps.policyText", href: "/us-policy" },
  { titleKey: "guidedTour.steps.securityTitle", textKey: "guidedTour.steps.securityText", href: "/security" },
  { titleKey: "guidedTour.steps.economicsTitle", textKey: "guidedTour.steps.economicsText", href: "/economics" },
  { titleKey: "guidedTour.steps.documentsTitle", textKey: "guidedTour.steps.documentsText", href: "/documents" },
  { titleKey: "guidedTour.steps.methodologyTitle", textKey: "guidedTour.steps.methodologyText", href: "/methodology" },
];

export function startGuidedTour() {
  window.dispatchEvent(new CustomEvent("atlas:start-guided-tour"));
}

export function GuidedTourStartButton({ className }: { className?: string }) {
  const { t } = useLocale();

  return (
    <button
      type="button"
      className={className}
      onClick={startGuidedTour}
      aria-label={t("home.guidedTourCta")}
    >
      {t("home.guidedTourCta")}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}

export default function GuidedTour() {
  const { localizedHref, t } = useLocale();
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const activeStep = tourSteps[index];
  const progress = useMemo(() => ((index + 1) / tourSteps.length) * 100, [index]);

  useEffect(() => {
    try {
      const stored = JSON.parse(window.localStorage.getItem(tourStorageKey) ?? "{}") as {
        active?: boolean;
        step?: number;
      };
      if (stored.active) {
        setOpen(true);
        setIndex(clampStep(stored.step ?? 0));
      }
    } catch {
      window.localStorage.removeItem(tourStorageKey);
    }

    function onStart() {
      setIndex(0);
      setOpen(true);
      window.localStorage.setItem(tourStorageKey, JSON.stringify({ active: true, step: 0 }));
    }

    window.addEventListener("atlas:start-guided-tour", onStart);
    return () => window.removeEventListener("atlas:start-guided-tour", onStart);
  }, []);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeTour("skipped");
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextStep();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previousStep();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  function persistStep(nextIndex: number) {
    window.localStorage.setItem(tourStorageKey, JSON.stringify({ active: true, step: nextIndex }));
  }

  function closeTour(status: "completed" | "skipped") {
    setOpen(false);
    window.localStorage.setItem(tourStorageKey, JSON.stringify({ active: false, status }));
  }

  function nextStep() {
    if (index === tourSteps.length - 1) {
      closeTour("completed");
      return;
    }
    const nextIndex = index + 1;
    setIndex(nextIndex);
    persistStep(nextIndex);
  }

  function previousStep() {
    const nextIndex = Math.max(0, index - 1);
    setIndex(nextIndex);
    persistStep(nextIndex);
  }

  function openRelevantPage() {
    const href = `${localizedHref(activeStep.href)}${activeStep.hash ? `#${activeStep.hash}` : ""}`;
    router.push(href);
    persistStep(index);
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.aside
          key="guided-tour"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
          className="fixed bottom-4 left-4 right-4 z-[88] mx-auto max-w-md rounded-lg border border-white/12 bg-ink-950/92 p-5 text-white shadow-2xl backdrop-blur-2xl sm:left-auto sm:mx-0"
          role="dialog"
          aria-live="polite"
          aria-label={t("guidedTour.label")}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                {t("guidedTour.step")} {index + 1} / {tourSteps.length}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-normal text-white">
                {t(activeStep.titleKey)}
              </h2>
            </div>
            <button
              type="button"
              className="focus-ring rounded-full border border-white/12 p-2 text-white/80 transition hover:border-blue-300 hover:text-white"
              onClick={() => closeTour("skipped")}
              aria-label={t("guidedTour.skip")}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
            <div className="h-full rounded-full bg-blue-300 transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-4 text-sm leading-7 text-white/80">
            {t(activeStep.textKey)}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/14 px-3 py-2 text-xs font-semibold text-white/86 transition hover:border-blue-300 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              onClick={previousStep}
              disabled={index === 0}
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              {t("guidedTour.previous")}
            </button>
            <button
              type="button"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-ink-950 transition hover:bg-blue-100"
              onClick={nextStep}
            >
              {index === tourSteps.length - 1 ? t("guidedTour.finish") : t("guidedTour.next")}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/14 px-3 py-2 text-xs font-semibold text-white/86 transition hover:border-blue-300 hover:text-white"
              onClick={openRelevantPage}
            >
              {t("guidedTour.openPage")}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="focus-ring rounded-full px-3 py-2 text-xs font-semibold text-white/60 transition hover:text-white"
              onClick={() => closeTour("skipped")}
            >
              {t("guidedTour.skip")}
            </button>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}

function clampStep(value: number) {
  if (!Number.isFinite(value)) {
    return 0;
  }
  return Math.max(0, Math.min(tourSteps.length - 1, value));
}
