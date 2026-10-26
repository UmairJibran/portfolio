import { HomeContent } from "@/components/HomeContent";
import { toJsonLdScript } from "@/lib/jsonLd";
import { homeGraph } from "@/lib/structuredData";
import { fetchStories, STORIES_REVALIDATE } from "@/lib/stories";

export const revalidate = STORIES_REVALIDATE;

/**
 * Server shell for the home page. The Ghost feed is read here rather than in
 * the browser so the featured case study and latest post are in the HTML that
 * crawlers and LLMs receive, not just in what hydration adds afterwards.
 */
export default async function Home() {
  const stories = await fetchStories();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLdScript(homeGraph()) }}
      />
      <HomeContent stories={stories} />
    </>
  );
}
