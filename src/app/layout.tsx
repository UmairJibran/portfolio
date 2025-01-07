import type { Metadata } from "next";
import { IBM_Plex_Mono, Inconsolata } from "next/font/google";
import "@/styles/globals.css";

import Copyright from "@/components/Copyright";

import meta from "@/data/meta.json";
import umamiAnalytics from "@/data/umamiAnalytics.json";
import Script from "next/script";
import Header from "@/components/Header";

const ibmPlexMono = IBM_Plex_Mono({
  weight: "400",
  variable: "--font-ibm-mono",
  preload: false,
});

const inconsolata = Inconsolata({
  weight: "400",
  variable: "--font-inconsolata",
  preload: false,
});

export const metadata: Metadata = {
  ...meta,
  metadataBase: new URL(meta.metadataBase),
  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
      </head>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={umamiAnalytics.dataWebsiteId}
      />
      <body
        className={`${ibmPlexMono.variable} ${inconsolata.variable} font-mono`}
      >
        <Header />
        {children}
        <Copyright />
      </body>
    </html>
  );
}
