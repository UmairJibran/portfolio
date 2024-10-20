import { Story } from "@/types/story";
import { StoryPreview } from "@/components/StoryPreview";

type Props = {
  stories: Story[];
};

export function MoreStories({ stories }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {stories.map((story) => (
          <StoryPreview
            key={story.slug}
            title={story.title}
            coverImage={story.coverImage}
            date={story.date}
            author={story.author}
            slug={story.slug}
            excerpt={story.excerpt}
            type={story.type}
          />
        ))}
      </div>
    </section>
  );
}
