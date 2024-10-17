import type { Metadata } from "next";
import profile from "@/data/profile.json";
import meta from "@/data/meta.json";

export const metadata: Metadata = {
  ...meta,
  metadataBase: new URL(meta.metadataBase),
  title: `Case Studies by ${profile.name.firstName} ${profile.name.lastName}`,
  description: `Case Studies authored by ${profile.name.firstName} ${profile.name.lastName}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen">{children}</div>;
}
