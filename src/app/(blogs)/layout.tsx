import type { Metadata } from "next";
import profile from "@/data/profile.json";
import meta from "@/data/meta.json";

export const metadata: Metadata = meta;
metadata.title = `Thoughts and blogs by ${profile.name.firstName} ${profile.name.lastName}`;
metadata.description = `Blogs authored by ${profile.name.firstName} ${profile.name.lastName}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen">{children}</div>;
}
