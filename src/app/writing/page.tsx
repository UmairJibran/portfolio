import { MoreStories } from "@/components/MoreStories";
import { getAllBlog, getAllCaseStudies } from "@/lib/api";
import Link from "next/link";
import { Rss, Linkedin, PenTool } from "lucide-react";

export default function Index() {
  // Combine and sort all content
  const allContent = [
    ...getAllBlog(),
    ...getAllCaseStudies()
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (allContent.length === 0) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-black font-black text-2xl uppercase border-8 border-black p-8 bg-brutalist-yellow">oops... I should write some up</div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Header section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <PenTool className="h-6 w-6 text-black" />
              <span className="text-black text-sm uppercase tracking-wider font-black">Blog & Case Studies</span>
            </div>
            <h1 className="text-black text-6xl md:text-7xl font-black mb-6 uppercase border-8 border-black p-6 bg-brutalist-red text-white inline-block transform -rotate-1">
              Writing
            </h1>
          </div>
          <div className="text-right">
            <div className="text-black text-sm mb-1 font-bold uppercase">Articles</div>
            <div className="text-black text-3xl font-black font-mono border-4 border-black px-4 py-2 bg-brutalist-yellow">
              {String(allContent.length).padStart(2, '0')}
            </div>
          </div>
        </div>
        
        <div className="text-base text-black space-y-3 max-w-3xl mb-6 font-medium border-l-8 border-black pl-6">
          <p>
            I write about software engineering, web development, and the technical challenges I encounter. 
            Here you will find in-depth case studies, technical articles, and development stories.
          </p>
          <div className="flex items-center gap-6 pt-2">
            <Link 
              href="/rss.xml" 
              className="flex items-center gap-2 text-black hover:bg-brutalist-yellow transition-colors text-sm font-bold uppercase border-4 border-black px-4 py-2"
            >
              <Rss className="h-4 w-4" />
              RSS Feed
            </Link>
            <Link 
              href="https://linkedin.com/in/umairjibran" 
              target="_blank"
              className="flex items-center gap-2 text-black hover:bg-brutalist-yellow transition-colors text-sm font-bold uppercase border-4 border-black px-4 py-2"
            >
              <Linkedin className="h-4 w-4" />
              Follow on LinkedIn
            </Link>
          </div>
        </div>
        
        <div className="h-2 bg-black"></div>
      </section>

      {/* All content */}
      <MoreStories stories={allContent} />
    </main>
  );
} 