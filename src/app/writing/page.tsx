import { MoreStories } from "@/components/MoreStories";
import { getAllBlog, getAllCaseStudies } from "@/lib/api";
import Link from "next/link";
import { Rss, Linkedin, PenTool } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing - Umair Jibran",
  description: "Technical articles, blog posts, and case studies about software engineering, web development, and the technical challenges I encounter.",
  openGraph: {
    type: "website",
    title: "Writing - Umair Jibran",
    description: "Technical articles, blog posts, and case studies about software engineering, web development, and the technical challenges I encounter.",
    url: "/writing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing - Umair Jibran",
    description: "Technical articles, blog posts, and case studies about software engineering, web development, and the technical challenges I encounter.",
  },
};

export default function Index() {
  // Combine and sort all content
  const allContent = [
    ...getAllBlog(),
    ...getAllCaseStudies()
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (allContent.length === 0) {
    return (
      <main className="bg-[#0d0d0d] min-h-screen grain flex items-center justify-center">
        <div className="text-gray-500">oops... I should write some up</div>
      </main>
    );
  }

  return (
    <main className="bg-[#0d0d0d] min-h-screen grain">
      {/* Header section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <PenTool className="h-6 w-6 text-green-400" />
              <span className="text-gray-500 text-sm uppercase tracking-wider">Blog & Case Studies</span>
            </div>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
              Writing
            </h1>
          </div>
          <div className="text-right">
            <div className="text-gray-500 text-sm mb-1">Articles</div>
            <div className="text-green-400 text-2xl font-bold font-mono">
              {String(allContent.length).padStart(2, '0')}
            </div>
          </div>
        </div>
        
        <div className="text-base text-gray-400 space-y-3 max-w-3xl mb-6">
          <p>
            I write about software engineering, web development, and the technical challenges I encounter. 
            Here you will find in-depth case studies, technical articles, and development stories.
          </p>
          <div className="flex items-center gap-6 pt-2">
            <Link 
              href="/rss.xml" 
              className="flex items-center gap-2 text-gray-500 hover:text-green-400 transition-colors text-sm"
            >
              <Rss className="h-4 w-4" />
              RSS Feed
            </Link>
            <Link 
              href="https://linkedin.com/in/umairjibran" 
              target="_blank"
              className="flex items-center gap-2 text-gray-500 hover:text-green-400 transition-colors text-sm"
            >
              <Linkedin className="h-4 w-4" />
              Follow on LinkedIn
            </Link>
          </div>
        </div>
        
        <div className="h-px bg-gradient-to-r from-green-400 via-gray-800 to-transparent"></div>
      </section>

      {/* All content */}
      <MoreStories stories={allContent} />
    </main>
  );
} 