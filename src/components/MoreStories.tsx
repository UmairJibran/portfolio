'use client';

import { Story } from "@/types/story";
import { StoryPreview } from "@/components/StoryPreview";

type Props = {
  stories: Story[];
};

type GroupedStories = {
  [key: string]: {
    month: string;
    year: string;
    stories: Story[];
  };
};

export function MoreStories({ stories }: Props) {
  // Group stories by month and year
  const groupedStories = stories.reduce((acc: GroupedStories, story) => {
    const date = new Date(story.date);
    const key = `${date.getFullYear()}-${String(date.getMonth()).padStart(2, '0')}`;
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear().toString();

    if (!acc[key]) {
      acc[key] = {
        month,
        year,
        stories: []
      };
    }
    acc[key].stories.push(story);
    return acc;
  }, {});

  // Sort stories within each month by date (newest first)
  Object.values(groupedStories).forEach(group => {
    group.stories.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  });

  // Sort keys in reverse chronological order
  const sortedKeys = Object.keys(groupedStories).sort().reverse();

  // Calculate the height for the last section (last month's stories)
  const lastMonthKey = sortedKeys[sortedKeys.length - 1];
  const lastMonthStoriesCount = groupedStories[lastMonthKey]?.stories.length || 0;
  const lastSectionHeight = lastMonthStoriesCount * 96 + 24; // height per story + padding

  return (
    <section className="py-12 max-w-5xl mx-auto">
      <div className="relative">
        {/* Main continuous timeline */}
        <div
          className="absolute left-32 w-px bg-gray-200"
          style={{
            top: '12px',
            height: `calc(100% - ${lastSectionHeight}px - 42px)`
          }}
        />

        <div className="space-y-20">
          {sortedKeys.map((key, groupIndex) => (
            <div key={key} className="relative">
              {/* Month marker */}
              <div className="relative flex items-center mb-12">
                <div className="w-28 flex-shrink-0" />
                {/* Month bullet */}
                <div className="absolute left-32 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 z-10" />
                {/* Month label */}
                <div className="pl-12">
                  <h3 className="text-4xl font-mono">
                    {groupedStories[key].month} {groupedStories[key].year}
                  </h3>
                </div>
              </div>

              <div className="space-y-16">
                {groupedStories[key].stories.map((story) => (
                  <div key={story.slug} className="relative">
                    <StoryPreview
                      title={story.title}
                      coverImage={story.coverImage}
                      date={story.date}
                      author={story.author}
                      slug={story.slug}
                      excerpt={story.excerpt}
                      type={story.type}
                      tags={story.tags}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
