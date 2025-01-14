import { MoreStories } from "@/components/MoreStories";
import { getAllBlog } from "@/lib/api";
import Link from "next/link";

export default function Index() {
  const allBlogs = getAllBlog();

  if (allBlogs.length === 0) {
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
          <h1 className="text-5xl font-bold mb-6">Blog</h1>
          <p className="text-lg text-gray-300">
            Subscribe to all blog posts via{" "}
            <Link href="/rss.xml" className="text-blue-400 hover:text-blue-300">
              RSS
            </Link>
            {" "}or follow me on{" "}
            <Link href="https://linkedin.com/in/umairjibran" className="text-blue-400 hover:text-blue-300">
              LinkedIn
            </Link>
            {" "}to stay updated on everything I write.
          </p>
        </div>
      </div>

      {/* Blog posts */}
      <div className="bg-white">
        <MoreStories stories={allBlogs} />
      </div>
    </main>
  );
}
