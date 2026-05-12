import HomePage from "@/components/HomePage";
import { buildLocalizedMetadata, type LocalePageProps } from "@/app/[locale]/routeMetadata";

export function generateMetadata({ params }: LocalePageProps) {
  return buildLocalizedMetadata(params, "/", "metadata.title", "metadata.description");
}

export default function LocalizedHomePage() {
  return <HomePage />;
}
