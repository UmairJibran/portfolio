import { Story } from "@/types/story";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  currentStory: Story;
  allStories: Story[];
};

type RelatedStoryResult = {
  story: Story;
  matchingTag?: string;
};

function findRelatedStory(stories: Story[], currentStory: Story, type: "blog" | "case-study"): RelatedStoryResult | null {
  // Filter stories by type and exclude current story
  const typeStories = stories.filter(s => s.type === type && s.slug !== currentStory.slug);
  if (typeStories.length === 0) return null;

  // Try to find a story with matching tags
  if (currentStory.tags && currentStory.tags.length > 0) {
    const relatedByTags = typeStories.map(story => {
      const matchingTags = story.tags?.filter(tag => currentStory.tags.includes(tag)) || [];
      return {
        story,
        matchingTags,
        matchingCount: matchingTags.length
      };
    })
    .sort((a, b) => b.matchingCount - a.matchingCount);

    if (relatedByTags[0].matchingCount > 0) {
      return {
        story: relatedByTags[0].story,
        matchingTag: relatedByTags[0].matchingTags[0]
      };
    }
  }

  // If no matching tags, return the latest story
  return { story: typeStories[0] };
}

export function RelatedStories({ currentStory, allStories }: Props) {
  const relatedBlog = findRelatedStory(allStories, currentStory, "blog");
  const relatedCaseStudy = findRelatedStory(allStories, currentStory, "case-study");

  if (!relatedBlog && !relatedCaseStudy) return null;

  return (
    <aside className="space-y-8">
      <h2 className="text-lg font-semibold text-white mb-6">Related Stories</h2>
      
      {relatedBlog && (
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">From the Blog</h3>
          <Link href={`/writing/${relatedBlog.story.slug}`} className="block group">
            <div className="rounded-lg p-4 bg-[#1a1a1a] border border-gray-800 hover:border-green-400/50 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-400/20">
                  blog
                </span>
                {relatedBlog.matchingTag && (
                  <span className="inline-flex items-center rounded-md bg-gray-800/50 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-700/50">
                    {relatedBlog.matchingTag}
                  </span>
                )}
              </div>
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h4 className="text-base font-medium text-white group-hover:text-green-400 transition-colors mb-1">
                    {relatedBlog.story.title}
                  </h4>
                  <p className="text-sm text-gray-400 line-clamp-2">{relatedBlog.story.excerpt}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-gray-600 group-hover:text-green-400 transition-colors flex-shrink-0 mt-1" />
              </div>
            </div>
          </Link>
        </div>
      )}

      {relatedCaseStudy && (
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">From Case Studies</h3>
          <Link href={`/writing/${relatedCaseStudy.story.slug}`} className="block group">
            <div className="rounded-lg p-4 bg-[#1a1a1a] border border-gray-800 hover:border-green-400/50 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-400/20">
                  case study
                </span>
                {relatedCaseStudy.matchingTag && (
                  <span className="inline-flex items-center rounded-md bg-gray-800/50 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-700/50">
                    {relatedCaseStudy.matchingTag}
                  </span>
                )}
              </div>
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h4 className="text-base font-medium text-white group-hover:text-green-400 transition-colors mb-1">
                    {relatedCaseStudy.story.title}
                  </h4>
                  <p className="text-sm text-gray-400 line-clamp-2">{relatedCaseStudy.story.excerpt}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-gray-600 group-hover:text-green-400 transition-colors flex-shrink-0 mt-1" />
              </div>
            </div>
          </Link>
        </div>
      )}
    </aside>
  );
} 