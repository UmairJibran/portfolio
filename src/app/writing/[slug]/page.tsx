import { getAllBlog, getAllCaseStudies } from "@/lib/api";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import { StoryBody } from "@/components/StoryBody";
import { RelatedStories } from "@/components/RelatedStories";

export default async function StoryPage({ params }: { params: { slug: string } }) {
    const allStories = [
        ...getAllBlog(),
        ...getAllCaseStudies()
    ];

    // Find the story in either blogs or case studies
    const story = allStories.find(story => story.slug === params.slug);

    if (!story) {
        notFound();
    }

    const content = await markdownToHtml(story.content || "");

    return (
        <main>
            {/* Header with gradient */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 mb-4">
                <article className="max-w-4xl mx-auto px-4">
                    <header>
                        <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
                            <span className="inline-flex items-center rounded-md bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
                                {story.type.replace("-", " ")}
                            </span>
                            <time dateTime={story.date}>{new Date(story.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</time>
                        </div>
                        <h1 className="text-4xl font-bold mb-4">{story.title}</h1>
                        <p className="text-xl text-gray-300">{story.excerpt}</p>
                    </header>
                </article>
            </div>

            {/* Content with sidebar */}
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main content */}
                    <div className="flex-grow">
                        <StoryBody content={content} />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-80 flex-shrink-0">
                        <div className="sticky top-8">
                            <RelatedStories currentStory={story} allStories={allStories} />
                        </div>
                    </div>
                </div>
            </div>
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