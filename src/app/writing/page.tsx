import { MoreStories } from "@/components/MoreStories";
import { getAllBlog } from "@/lib/api";
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
    card: "summary",
    title: "Writing - Umair Jibran",
    description: "Technical articles, blog posts, and case studies about software engineering, web development, and the technical challenges I encounter.",
  },
};

export default function Index() {
  // Writing hub = blog posts only. Case studies live under /projects/<slug>.
  const allContent = getAllBlog().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  if (allContent.length === 0) {
    return (
      <main className="bg-background min-h-screen grain flex items-center justify-center">
        <div className="text-faint">oops... I should write some up</div>
      </main>
    );
  }

  return (
    <main className="bg-background min-h-screen grain">
      {/* Header section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <PenTool className="h-6 w-6 text-link" />
              <span className="text-faint text-sm uppercase tracking-wider brutal:bg-brand brutal:text-foreground brutal:px-1 brutal:font-bold">Blog & Case Studies</span>
            </div>
            <h1 className="text-foreground text-5xl md:text-6xl font-bold mb-6">
              Writing
            </h1>
          </div>
          <div className="text-right">
            <div className="text-faint text-sm mb-1">Articles</div>
            <div className="text-link text-2xl font-bold font-mono brutal:bg-foreground brutal:text-background brutal:px-2">
              {String(allContent.length).padStart(2, '0')}
            </div>
          </div>
        </div>
        
        <div className="text-base text-muted-foreground space-y-3 max-w-3xl mb-6">
          <p>
            I write about software engineering, web development, and the technical challenges I encounter. 
            Here you will find in-depth case studies, technical articles, and development stories.
          </p>
          <div className="flex items-center gap-6 pt-2">
            <Link 
              href="/rss.xml"
              className="flex items-center gap-2 text-faint hover:text-link transition-colors text-sm"
            >
              <Rss className="h-4 w-4" />
              RSS Feed
            </Link>
            <Link 
              href="https://linkedin.com/in/umairjibran" 
              target="_blank"
              className="flex items-center gap-2 text-faint hover:text-link transition-colors text-sm"
            >
              <Linkedin className="h-4 w-4" />
              Follow on LinkedIn
            </Link>
          </div>
        </div>
        
        <div className="h-px bg-gradient-to-r from-brand via-border to-transparent brutal:bg-none brutal:bg-foreground brutal:h-[3px]"></div>
      </section>

      {/* All content */}
      <MoreStories stories={allContent} />
    </main>
  );
} 