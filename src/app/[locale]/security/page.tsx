import RiskDashboard from "@/components/RiskDashboard";
import { buildLocalizedMetadata, type LocalePageProps } from "@/app/[locale]/routeMetadata";

export function generateMetadata({ params }: LocalePageProps) {
  return buildLocalizedMetadata(params, "/security", "security.title", "security.intro");
}

export default function LocalizedSecurityPage() {
  return <RiskDashboard />;
}
