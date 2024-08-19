import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Copyright from "@/components/Copyright";

import meta from "@/data/meta.json";
import umamiAnalytics from "@/data/umamiAnalytics.json";
import Script from "next/script";

const ibmPlexMono = IBM_Plex_Mono({
  weight: "400",
  variable: "--font-ibm-mono",
  preload: false,
});

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={umamiAnalytics.dataWebsiteId}
      />
      <body className={`${ibmPlexMono.variable} font-mono`}>
        <Header />
        {children}
        <Copyright />
      </body>
    </html>
  );
}
