import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import "@/styles/globals.css";

import meta from "@/data/meta.json";
import umamiAnalytics from "@/data/umamiAnalytics.json";
import Script from "next/script";
import Header from "@/components/Header";
import { toJsonLdScript } from "@/lib/jsonLd";
import { personNode, websiteNode } from "@/lib/structuredData";
import { WRITING_URL } from "@/lib/writing";

/* Site-wide identity. Page-specific nodes (ProfilePage, FAQPage, the project
   collection) are emitted by the pages themselves and reference these by @id. */
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [websiteNode(), personNode()],
};

/* One superfamily, three voices: Sans carries prose, Mono is the terminal
   language (nav, prompts, labels, chips), Serif italic is reserved for the
   one or two emphasised words in a heading. */
const plexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

const plexSerif = IBM_Plex_Serif({
  weight: ["400"],
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-plex-serif",
  display: "swap",
});

export const metadata: Metadata = {
  ...meta,
  metadataBase: new URL(meta.metadataBase),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": `${WRITING_URL}/rss/`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} ${plexSerif.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLdScript(siteJsonLd) }}
        />
      </head>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={umamiAnalytics.dataWebsiteId}
      />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
