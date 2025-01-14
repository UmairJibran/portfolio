import { MoreStories } from "@/components/MoreStories";
import { getAllCaseStudies } from "@/lib/api";

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
    <main className="container mx-auto">
      <MoreStories stories={allCaseStudies} />
    </main>
  );
}
