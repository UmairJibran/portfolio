import { MoreStories } from "@/components/MoreStories";
import { getAllCaseStudies } from "@/lib/api";
import Link from "next/link";

export default function Index() {
  const allCaseStudies = getAllCaseStudies();

  if (allCaseStudies.length === 0) {
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
          <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-lg text-gray-300">
            Deep dives into technical challenges and solutions. Subscribe via{" "}
            <Link href="/feed.xml" className="text-blue-400 hover:text-blue-300">
              RSS
            </Link>
            {" "}to get notified about new case studies.
          </p>
        </div>
      </div>

      {/* Case studies */}
      <div className="bg-white">
        <MoreStories stories={allCaseStudies} />
      </div>
    </main>
  );
}
