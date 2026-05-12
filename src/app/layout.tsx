import type { Metadata } from "next";
import { headers } from "next/headers";
import { isLocale, type Locale } from "@/i18n/config";
import "./globals.css";

export const metadata: Metadata = {
  title: "Across the Strait: China, Taiwan, and the United States",
  description:
    "An interactive academic guide to China-Taiwan relations, U.S. policy, and the documents shaping the Taiwan Strait.",
  keywords: [
    "China Taiwan relations",
    "Taiwan Strait",
    "U.S. Taiwan policy",
    "Taiwan Relations Act",
    "One China policy",
    "cross-Strait relations",
    "Three Communiques",
    "Six Assurances",
  ],
  openGraph: {
    title: "Across the Strait: China, Taiwan, and the United States",
    description:
      "An interactive academic guide to China-Taiwan relations, U.S. policy, and the documents shaping the Taiwan Strait.",
    type: "website",
    locale: "en_US",
    siteName: "Across the Strait",
  },
  twitter: {
    card: "summary_large_image",
    title: "Across the Strait: China, Taiwan, and the United States",
    description:
      "An interactive academic guide to China-Taiwan relations, U.S. policy, and the documents shaping the Taiwan Strait.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const rawLocale = headerStore.get("x-atlas-locale") ?? "en";
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
