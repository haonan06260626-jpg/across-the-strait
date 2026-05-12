import OverviewPage from "@/components/OverviewPage";
import { buildLocalizedMetadata, type LocalePageProps } from "@/app/[locale]/routeMetadata";

export function generateMetadata({ params }: LocalePageProps) {
  return buildLocalizedMetadata(params, "/overview", "overview.eyebrow", "overview.intro");
}

export default function LocalizedOverviewPage() {
  return <OverviewPage />;
}
