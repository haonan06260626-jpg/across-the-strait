import PolicyArchitectureMap from "@/components/PolicyArchitectureMap";
import { buildLocalizedMetadata, type LocalePageProps } from "@/app/[locale]/routeMetadata";

export function generateMetadata({ params }: LocalePageProps) {
  return buildLocalizedMetadata(params, "/us-policy", "policy.title", "policy.intro");
}

export default function LocalizedUsPolicyPage() {
  return <PolicyArchitectureMap />;
}
