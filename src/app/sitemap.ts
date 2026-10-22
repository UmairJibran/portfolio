import type { MetadataRoute } from "next";
import meta from "@/data/meta.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = meta.metadataBase.replace(/\/$/, "");
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
