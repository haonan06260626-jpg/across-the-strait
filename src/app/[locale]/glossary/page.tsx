import GlossaryPage from "@/components/GlossaryPage";
import { buildLocalizedMetadata, type LocalePageProps } from "@/app/[locale]/routeMetadata";

export function generateMetadata({ params }: LocalePageProps) {
  return buildLocalizedMetadata(params, "/glossary", "glossary.title", "glossary.intro");
}

export default function LocalizedGlossaryPage() {
  return <GlossaryPage />;
}
