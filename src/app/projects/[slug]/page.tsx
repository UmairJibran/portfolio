import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import { readingTimeMinutes } from "@/lib/utils";
import { StoryBody } from "@/components/StoryBody";
import { Calendar, ArrowLeft, Clock, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import meta from "@/data/meta.json";
import portfolio from "@/data/portfolio.json";
import type { ProjectItem } from "@/types/project";
import { toJsonLdScript } from "@/lib/jsonLd";

function findProjectForSlug(slug: string) {
  return (portfolio as ProjectItem[]).find((p) => p.caseStudySlug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const story = getCaseStudyBySlug(params.slug);
  if (!story) return {};

  return {
    title: `${story.title} — Case Study`,
    description: story.excerpt,
    openGraph: {
      type: "article",
      title: story.title,
      description: story.excerpt,
      url: `/projects/${params.slug}`,
      publishedTime: story.date,
      images: story.ogImage?.url
        ? [{ url: story.ogImage.url, width: 1200, height: 630, alt: story.title }]
        : story.coverImage
          ? [{ url: story.coverImage, width: 1200, height: 630, alt: story.title }]
          : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: story.title,
      description: story.excerpt,
      images: story.ogImage?.url || story.coverImage,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const story = getCaseStudyBySlug(params.slug);
  if (!story) notFound();

  const project = findProjectForSlug(params.slug);
  const content = await markdownToHtml(story.content || "");
  const readingTime = readingTimeMinutes(story.content || "");

  const base = meta.metadataBase.replace(/\/$/, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.excerpt,
    datePublished: story.date,
    dateModified: story.date,
    author: { "@type": "Person", name: "Umair Jibran", url: base },
    mainEntityOfPage: `${base}/projects/${params.slug}`,
    keywords: story.tags?.join(", "),
  };

  return (
    <main className="bg-[#0d0d0d] min-h-screen grain">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLdScript(jsonLd) }}
      />
      <div className="border-b border-gray-800">
        <article className="max-w-5xl mx-auto px-6 py-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-green-400 transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          <header>
            <div className="flex items-center gap-4 mb-6">
              {project && (
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src={`/assets/logos/${project.logo}.webp`}
                    alt={project.name}
                    width={56}
                    height={56}
                    className="object-contain p-1"
                  />
                </div>
              )}
              <span className="inline-flex items-center rounded-md bg-green-400/10 px-3 py-1 text-sm font-medium text-green-400 ring-1 ring-inset ring-green-400/20">
                Case study
              </span>
              {story.tags?.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md bg-gray-800/50 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {story.title}
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed mb-6">
              {story.excerpt}
            </p>

            {project?.tech && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-md bg-gray-800/60 px-2.5 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-gray-700/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4 text-gray-500 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={story.date}>
                  {new Date(story.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readingTime} min read</span>
              </div>
              {project?.url && (
                <Link
                  href={project.url}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-green-400 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Visit project</span>
                </Link>
              )}
              {project?.source && (
                <Link
                  href={project.source}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-green-400 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>Source</span>
                </Link>
              )}
            </div>
          </header>
        </article>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <StoryBody content={content} />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return getAllCaseStudies().map((story) => ({ slug: story.slug }));
}
