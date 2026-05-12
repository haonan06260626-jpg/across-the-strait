import DocumentLibrary from "@/components/DocumentLibrary";
import { buildLocalizedMetadata, type LocalePageProps } from "@/app/[locale]/routeMetadata";

export function generateMetadata({ params }: LocalePageProps) {
  return buildLocalizedMetadata(params, "/documents", "documents.title", "documents.intro");
}

export default function LocalizedDocumentsPage() {
  return <DocumentLibrary />;
}
