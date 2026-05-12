import PresentationMode from "@/components/PresentationMode";
import { buildLocalizedMetadata, type LocalePageProps } from "@/app/[locale]/routeMetadata";

export function generateMetadata({ params }: LocalePageProps) {
  return buildLocalizedMetadata(params, "/presentation", "presentation.title", "presentation.intro");
}

export default function LocalizedPresentationPage() {
  return <PresentationMode />;
}
