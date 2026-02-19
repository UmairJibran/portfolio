import { getAllBlog, getAllCaseStudies } from "@/lib/api";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import { StoryBody } from "@/components/StoryBody";
import { RelatedStories } from "@/components/RelatedStories";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

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
        <main className="bg-white min-h-screen">
            {/* Header */}
            <div className="border-b-4 border-black">
                <article className="max-w-5xl mx-auto px-6 py-16">
                    <Link 
                        href="/writing" 
                        className="inline-flex items-center gap-2 text-black hover:bg-brutalist-yellow transition-colors mb-8 text-sm font-bold uppercase border-4 border-black px-4 py-2"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to all posts
                    </Link>
                    
                    <header>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="inline-flex items-center bg-black px-3 py-1 text-sm font-black text-white uppercase border-4 border-black">
                                {story.type.replace("-", " ")}
                            </span>
                            {story.tags?.map((tag) => (
                                <span 
                                    key={tag}
                                    className="inline-flex items-center bg-white px-2 py-1 text-xs font-bold text-black border-2 border-black uppercase"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl font-black mb-6 text-black leading-none uppercase border-l-8 border-brutalist-yellow pl-6">
                            {story.title}
                        </h1>
                        
                        <p className="text-xl text-black leading-relaxed mb-6 font-bold border-l-4 border-black pl-6">
                            {story.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-2 text-black text-sm font-bold uppercase">
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