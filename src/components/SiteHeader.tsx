"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useCitations } from "@/components/CitationProvider";
import CommandPalette from "@/components/CommandPalette";
import MegaMenu from "@/components/MegaMenu";
import MobileMenu from "@/components/MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { showEvidence, setShowEvidence, compareNarratives, setCompareNarratives } = useCitations();
  const { localizedHref, t } = useLocale();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[rgba(8,10,14,0.72)] shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-[20px]">
      <nav className="relative mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8" aria-label={t("common.mainNavigation")}>
        <Link href={localizedHref("/")} className="focus-ring text-sm font-semibold tracking-normal text-white">
          {t("common.siteTitle")}
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            className={cn(
              "focus-ring rounded-full border px-4 py-2.5 text-sm font-semibold transition",
              megaOpen
                ? "border-strait-blue bg-strait-blue text-white"
                : "border-white/[0.16] bg-white/[0.08] text-white hover:border-blue-300 hover:bg-white/[0.12]",
            )}
            onClick={() => setMegaOpen((value) => !value)}
            aria-expanded={megaOpen}
          >
            {t("common.menu")}
          </button>
          <CommandPalette />
          <button
            type="button"
            className={cn(
              "focus-ring rounded-full border px-3 py-2.5 text-xs font-medium transition",
              showEvidence
                ? "border-strait-blue bg-strait-blue text-white"
                : "border-white/[0.16] bg-white/[0.06] text-white/75 hover:border-blue-300 hover:text-white",
            )}
            onClick={() => setShowEvidence(!showEvidence)}
            aria-pressed={showEvidence}
          >
            {t("common.evidence")}
          </button>
          <button
            type="button"
            className={cn(
              "focus-ring rounded-full border px-3 py-2.5 text-xs font-medium transition",
              compareNarratives
                ? "border-strait-red bg-strait-red text-white"
                : "border-white/[0.16] bg-white/[0.06] text-white/75 hover:border-blue-300 hover:text-white",
            )}
            onClick={() => setCompareNarratives(!compareNarratives)}
            aria-pressed={compareNarratives}
          >
            {t("common.narratives")}
          </button>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <CommandPalette trigger="mobile" enableShortcut={false} />
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.16] bg-white/[0.08] text-white backdrop-blur transition hover:border-blue-300 hover:bg-white/[0.12]"
            onClick={() => setMobileOpen(true)}
            aria-label={t("common.menu")}
          >
            <Menu className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <MegaMenu open={megaOpen} onClose={() => setMegaOpen(false)} />
      </nav>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
