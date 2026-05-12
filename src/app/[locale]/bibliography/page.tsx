import BibliographyPage from "@/components/BibliographyPage";
import { buildLocalizedMetadata, type LocalePageProps } from "@/app/[locale]/routeMetadata";

export function generateMetadata({ params }: LocalePageProps) {
  return buildLocalizedMetadata(params, "/bibliography", "bibliography.title", "bibliography.intro");
}

export default function LocalizedBibliographyPage() {
  return <BibliographyPage />;
}
