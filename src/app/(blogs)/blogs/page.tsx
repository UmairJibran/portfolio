import { MoreStories } from "@/components/MoreStories";
import { getAllBlog } from "@/lib/api";

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
    <main className="container mx-auto">
      <MoreStories stories={allBlogs} />
    </main>
  );
}
