import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { StoryBody } from "@/components/StoryBody";
import { StoryHeader } from "@/components/StoryHeader";

import profile from "@/data/profile.json";

export default async function CaseStudy({ params }: Params) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    return notFound();
  }

  const content = await markdownToHtml(caseStudy.content || "");

  return (
    <main>
      <article className="container mx-auto">
        <StoryHeader
          title={caseStudy.title}
          coverImage={caseStudy.coverImage}
          date={caseStudy.date}
          author={caseStudy.author}
        />
        <StoryBody content={content} />
      </article>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const CaseStudy = getCaseStudyBySlug(params.slug);

  if (!CaseStudy) {
    return notFound();
  }

  const title = `${CaseStudy.title} | Case Study | ${profile.name.firstName} ${profile.name.lastName}`;

  return {
    title,
    openGraph: {
      title,
      images: [CaseStudy.ogImage.url],
    },
    twitter: {
      card: "summary_large_image",
    },
    description: CaseStudy.excerpt,
    authors: [CaseStudy.author],
    keywords: CaseStudy.tags,
  };
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();

  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}
