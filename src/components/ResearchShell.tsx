"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import { CitationProvider } from "@/components/CitationProvider";
import GuidedTour from "@/components/GuidedTour";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import PageTransition, { ReadingProgress } from "@/components/PageTransition";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function ResearchShell({
  children,
  breadcrumb,
  readingProgress = false,
}: {
  children: React.ReactNode;
  breadcrumb?: string;
  readingProgress?: boolean;
}) {
  return (
    <LocaleProvider>
      <CitationProvider>
        {readingProgress ? <ReadingProgress /> : null}
        <SiteHeader />
        {breadcrumb ? <Breadcrumbs current={breadcrumb} /> : null}
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
        <GuidedTour />
      </CitationProvider>
    </LocaleProvider>
  );
}
