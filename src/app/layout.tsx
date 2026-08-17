import type { Metadata } from "next";
import { IBM_Plex_Mono, Inconsolata, Archivo_Black } from "next/font/google";
import "@/styles/globals.css";

import meta from "@/data/meta.json";
import profile from "@/data/profile.json";
import umamiAnalytics from "@/data/umamiAnalytics.json";
import Script from "next/script";
import Header from "@/components/Header";
import { toJsonLdScript } from "@/lib/jsonLd";

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

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo",
  preload: false,
});

/* Runs before paint: resolves theme from localStorage, else system
   preference (dark -> noir, light -> brutal). Prevents theme flash. */
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="noir"&&t!=="brutal"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"brutal":"noir";}document.documentElement.setAttribute("data-theme",t);document.documentElement.style.colorScheme=t==="brutal"?"light":"dark";}catch(e){}})();`;

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
  /* The font variables go on <html>, not <body>: globals.css resolves
     --font-heading: var(--font-archivo) on :root, and a var() inside a custom
     property is substituted against the element it is declared on — so the
     variables have to be in scope there or --font-heading resolves to nothing. */
  return (
    <html
      lang="en"
      data-theme="noir"
      className={`${ibmPlexMono.variable} ${inconsolata.variable} ${archivoBlack.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLdScript(personJsonLd) }}
        />
      </head>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={umamiAnalytics.dataWebsiteId}
      />
      <body className="font-mono bg-background">
        <Header />
        {children}
      </body>
    </html>
  );
}
