"use client";

import { Info } from "lucide-react";
import { SourceButton } from "@/components/CitationProvider";
import { useLocale } from "@/i18n/LocaleProvider";

export default function WhyThisMattersCard({
  titleKey,
  textKey,
  sourceIds = [],
}: {
  titleKey: string;
  textKey: string;
  sourceIds?: string[];
}) {
  const { t } = useLocale();

  return (
    <aside className="mt-8 rounded-lg border border-ink-900/10 bg-white/68 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
      <div className="flex items-start gap-4">
        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-950 text-white dark:bg-white dark:text-ink-950">
          <Info className="h-4 w-4" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-xl font-semibold tracking-normal text-ink-950 dark:text-white">
            {t(titleKey)}
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-7 text-ink-700 dark:text-ink-100">
            {t(textKey)}
          </p>
          {sourceIds.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {Array.from(new Set(sourceIds)).map((id) => (
                <SourceButton key={`${titleKey}-${id}`} sourceId={id} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
