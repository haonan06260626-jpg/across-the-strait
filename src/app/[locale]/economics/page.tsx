import EconomicsPage from "@/components/EconomicsPage";
import { buildLocalizedMetadata, type LocalePageProps } from "@/app/[locale]/routeMetadata";

export function generateMetadata({ params }: LocalePageProps) {
  return buildLocalizedMetadata(params, "/economics", "economics.title", "economics.intro");
}

export default function LocalizedEconomicsPage() {
  return <EconomicsPage />;
}
