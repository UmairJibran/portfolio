import { HeroBlog } from "@/components/HeroBlog";
import { MoreStories } from "@/components/MoreStories";
import { getAllBlog } from "@/lib/api";

export default function Index() {
  const allBlog = getAllBlog();
  const heroBlog = allBlog[0];
  const moreBlog = allBlog.slice(1);

  return (
    <main className="container mx-auto">
      <HeroBlog
        title={heroBlog.title}
        coverImage={heroBlog.coverImage}
        date={heroBlog.date}
        author={heroBlog.author}
        slug={heroBlog.slug}
        excerpt={heroBlog.excerpt}
      />
      {moreBlog.length > 0 && <MoreStories blogs={moreBlog} />}
    </main>
  );
}
