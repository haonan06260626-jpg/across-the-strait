import PositionComparator from "@/components/PositionComparator";
import { buildLocalizedMetadata, type LocalePageProps } from "@/app/[locale]/routeMetadata";

export function generateMetadata({ params }: LocalePageProps) {
  return buildLocalizedMetadata(params, "/positions", "positions.title", "positions.intro");
}

export default function LocalizedPositionsPage() {
  return <PositionComparator />;
}
