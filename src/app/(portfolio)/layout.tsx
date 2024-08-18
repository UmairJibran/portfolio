import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Copyright from "@/components/Copyright";

import meta from "@/data/meta.json";

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
      <body className={`${ibmPlexMono.variable} font-mono`}>
        <Header />
        {children}
        <Copyright />
      </body>
    </html>
  );
}
