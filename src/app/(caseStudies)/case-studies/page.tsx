import { HeroStory } from "@/components/HeroStory";
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

  const heroCaseStudy = allCaseStudies[0];
  const moreCaseStudies = allCaseStudies.slice(1);

  return (
    <main className="container mx-auto">
      <HeroStory
        title={heroCaseStudy.title}
        coverImage={heroCaseStudy.coverImage}
        date={heroCaseStudy.date}
        author={heroCaseStudy.author}
        slug={heroCaseStudy.slug}
        excerpt={heroCaseStudy.excerpt}
        type={heroCaseStudy.type}
      />
      {moreCaseStudies.length > 0 && <MoreStories stories={moreCaseStudies} />}
    </main>
  );
}
