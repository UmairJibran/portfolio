import { MoreStories } from "@/components/MoreStories";
import { getAllBlog, getAllCaseStudies } from "@/lib/api";
import Link from "next/link";

export default function Index() {
  // Combine and sort all content
  const allContent = [
    ...getAllBlog(),
    ...getAllCaseStudies()
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (allContent.length === 0) {
    return (
      <main className="container mx-auto flex justify-center">
        <div>oops... I should write some up</div>
      </main>
    );
  }

  return (
    <main>
      {/* Header section with gradient background */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Writing</h1>
          <div className="text-lg text-gray-300 space-y-4">
            <p>
              I write about software engineering, web development, and the technical challenges I encounter. 
              Here you will find in-depth case studies, technical articles, and development stories.
            </p>
            <p>
              Subscribe via{" "}
              <Link href="/rss.xml" className="text-blue-400 hover:text-blue-300 underline">
                RSS
              </Link>
              {" "}or follow me on{" "}
              <Link href="https://linkedin.com/in/umairjibran" className="text-blue-400 hover:text-blue-300 underline">
                LinkedIn
              </Link>
              {" "}to stay updated.
            </p>
          </div>
        </div>
      </div>

      {/* All content */}
      <div className="bg-white">
        <MoreStories stories={allContent} />
      </div>
    </main>
  );
} 