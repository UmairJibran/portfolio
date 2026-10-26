import { WRITING_URL } from "@/lib/writing";
import type { Story } from "@/types/story";

/** Re-read the Ghost feed at most once an hour. */
export const STORIES_REVALIDATE = 3600;

/** Ghost tag that marks a post as a case study rather than a blog post. */
const CASE_STUDY_TAG = "Case Study";

function decode(value: string): string {
  return value
    .replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/, "$1")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCodePoint(parseInt(code, 16)),
    )
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .trim();
}

function readTags(item: string, name: string): string[] {
  const pattern = new RegExp(
    `<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`,
    "g",
  );
  return Array.from(item.matchAll(pattern), (match) => decode(match[1]));
}

export function parseFeed(xml: string): Story[] {
  // Drop full post bodies first so their HTML can't confuse the item matching
  const feed = xml.replace(/<content:encoded>[\s\S]*?<\/content:encoded>/g, "");

  return (feed.match(/<item>[\s\S]*?<\/item>/g) ?? []).map((item) => {
    const url = readTags(item, "link")[0] ?? "";
    const categories = readTags(item, "category");
    return {
      slug: new URL(url).pathname.split("/").filter(Boolean).pop() ?? "",
      title: readTags(item, "title")[0] ?? "",
      excerpt: readTags(item, "description")[0] ?? "",
      url,
      date: new Date(readTags(item, "pubDate")[0] ?? "").toISOString(),
      tags: categories.filter((tag) => tag !== CASE_STUDY_TAG),
      type: categories.includes(CASE_STUDY_TAG) ? "case-study" : "blog",
    };
  });
}

/**
 * Blog posts and case studies from Ghost, newest first. Resolves to an empty
 * list rather than throwing: the feed lives on another host, and a page that
 * renders without it is better than a page that fails to render.
 */
export async function fetchStories(): Promise<Story[]> {
  try {
    const res = await fetch(`${WRITING_URL}/rss/`, {
      next: { revalidate: STORIES_REVALIDATE },
    });
    if (!res.ok) throw new Error(`RSS responded ${res.status}`);
    return parseFeed(await res.text()).sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  } catch {
    return [];
  }
}
