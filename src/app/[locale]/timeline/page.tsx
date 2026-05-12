import TimelineExplorer from "@/components/TimelineExplorer";
import { buildLocalizedMetadata, type LocalePageProps } from "@/app/[locale]/routeMetadata";

export function generateMetadata({ params }: LocalePageProps) {
  return buildLocalizedMetadata(params, "/timeline", "timeline.title", "timeline.intro");
}

export default function LocalizedTimelinePage() {
  return <TimelineExplorer />;
}
