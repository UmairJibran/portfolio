import type { MetadataRoute } from "next";
import { getAllBlog, getAllCaseStudies } from "@/lib/api";
import meta from "@/data/meta.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = meta.metadataBase.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/writing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = getAllBlog().map((story) => ({
    url: `${base}/writing/${story.slug}`,
    lastModified: new Date(story.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = getAllCaseStudies().map(
    (story) => ({
      url: `${base}/projects/${story.slug}`,
      lastModified: new Date(story.date),
      changeFrequency: "yearly",
      priority: 0.8,
    }),
  );

  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes];
}
