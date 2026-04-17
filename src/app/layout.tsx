import type { Metadata } from "next";
import { IBM_Plex_Mono, Inconsolata } from "next/font/google";
import "@/styles/globals.css";

import meta from "@/data/meta.json";
import profile from "@/data/profile.json";
import umamiAnalytics from "@/data/umamiAnalytics.json";
import Script from "next/script";
import Header from "@/components/Header";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: `${profile.name.firstName} ${profile.name.lastName}`,
  url: meta.metadataBase,
  image: `${meta.metadataBase}${profile.image}`,
  jobTitle: "Full-Stack Software Engineer",
  description:
    "Full-stack engineer specializing in Node.js, serverless, AWS, and LLM-powered workflows.",
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Peshawar",
    addressCountry: "PK",
  },
  sameAs: profile.social
    .filter((s) => s.icon !== "Mail")
    .map((s) => s.link),
  knowsAbout: [
    "Node.js",
    "TypeScript",
    "Serverless",
    "AWS",
    "GCP",
    "Microservices",
    "LLM workflows",
    "Grafana",
    "Prometheus",
  ],
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={umamiAnalytics.dataWebsiteId}
      />
      <body
        className={`${ibmPlexMono.variable} ${inconsolata.variable} font-mono bg-[#0d0d0d]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
