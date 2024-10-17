import { HeroStory } from "@/components/HeroStory";
import { MoreStories } from "@/components/MoreStories";
import { getAllBlog } from "@/lib/api";

export default function Index() {
  const allBlogs = getAllBlog();
  const heroBlog = allBlogs[0];
  const moreBlogs = allBlogs.slice(1);

  if (allBlogs.length === 0) {
    return (
      <main className="container mx-auto flex justify-center">
        <div>oops... I should write some up</div>
      </main>
    );
  }

  return (
    <main className="container mx-auto">
      <HeroStory
        title={heroBlog.title}
        coverImage={heroBlog.coverImage}
        date={heroBlog.date}
        author={heroBlog.author}
        slug={heroBlog.slug}
        excerpt={heroBlog.excerpt}
        type={heroBlog.type}
      />
      {moreBlogs.length > 0 && <MoreStories stories={moreBlogs} />}
    </main>
  );
}
