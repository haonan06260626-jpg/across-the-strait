import MethodologyPage from "@/components/MethodologyPage";
import { buildLocalizedMetadata, type LocalePageProps } from "@/app/[locale]/routeMetadata";

export function generateMetadata({ params }: LocalePageProps) {
  return buildLocalizedMetadata(params, "/methodology", "methodology.title", "methodology.intro");
}

export default function LocalizedMethodologyPage() {
  return <MethodologyPage />;
}
