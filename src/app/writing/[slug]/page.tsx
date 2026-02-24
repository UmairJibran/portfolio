import { getAllBlog, getAllCaseStudies } from "@/lib/api";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import { StoryBody } from "@/components/StoryBody";
import { RelatedStories } from "@/components/RelatedStories";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const allStories = [
        ...getAllBlog(),
        ...getAllCaseStudies()
    ];

    const story = allStories.find(story => story.slug === params.slug);

    if (!story) {
        notFound();
    }

    return {
        title: story.title,
        description: story.excerpt,
        authors: story.author ? [{ name: story.author.name }] : undefined,
        openGraph: {
            type: "article",
            title: story.title,
            description: story.excerpt,
            url: `/writing/${story.slug}`,
            publishedTime: story.date,
            authors: story.author ? [story.author.name] : undefined,
            tags: story.tags,
            images: story.ogImage?.url ? [
                {
                    url: story.ogImage.url,
                    width: 1200,
                    height: 630,
                    alt: story.title,
                }
            ] : story.coverImage ? [
                {
                    url: story.coverImage,
                    width: 1200,
                    height: 630,
                    alt: story.title,
                }
            ] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: story.title,
            description: story.excerpt,
            images: story.ogImage?.url || story.coverImage,
        },
    };
}

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
        <main className="bg-[#0d0d0d] min-h-screen grain">
            {/* Header */}
            <div className="border-b border-gray-800">
                <article className="max-w-5xl mx-auto px-6 py-16">
                    <Link 
                        href="/writing" 
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-green-400 transition-colors mb-8 text-sm"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to all posts
                    </Link>
                    
                    <header>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="inline-flex items-center rounded-md bg-green-400/10 px-3 py-1 text-sm font-medium text-green-400 ring-1 ring-inset ring-green-400/20">
                                {story.type.replace("-", " ")}
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
                        
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Calendar className="h-4 w-4" />
                            <time dateTime={story.date}>
                                {new Date(story.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </time>
                        </div>
                    </header>
                </article>
            </div>

            {/* Content with sidebar */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main content */}
                    <div className="flex-grow max-w-4xl">
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