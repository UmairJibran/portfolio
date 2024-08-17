import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: "400",
  variable: "--font-ibm-mono",
  preload: false,
});

export const metadata: Metadata = {
  title: "Umair Jibran - FullStack Developer & AWS Expert",
  description:
    "Explore the world of Umair Jibran - a highly skilled full-stack developer with expertise in Node.js, JavaScript, and AWS. Discover his impressive portfolio and passion for open-source technologies. Connect with him to discuss your next project or exchange thoughts on the latest tech trends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} font-mono`}>{children}</body>
    </html>
  );
}
