import { getAllBlog, getAllCaseStudies } from "@/lib/api";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import { StoryHeader } from "@/components/StoryHeader";
import { StoryBody } from "@/components/StoryBody";

export default async function StoryPage({ params }: { params: { slug: string } }) {
    // Find the story in either blogs or case studies
    const story = [
        ...getAllBlog(),
        ...getAllCaseStudies()
    ].find(story => story.slug === params.slug);

    if (!story) {
        notFound();
    }

    const content = await markdownToHtml(story.content || "");

    return (
        <main>
            {/* Content */}

            <article className="container mx-auto">
                <StoryHeader
                    title={story.title}
                    coverImage={story.coverImage}
                    date={story.date}
                    author={story.author}
                />
                <StoryBody content={content} />
            </article>

        </main>
    );
}

export async function generateStaticParams() {
    const allContent = [
        ...getAllBlog(),
        ...getAllCaseStudies()
    ];

    return allContent.map((story) => ({
        slug: story.slug,
    }));
} 