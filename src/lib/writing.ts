/** Blogs and case studies are published on Ghost, not in this repo. */
export const WRITING_URL = "https://quill.umairjibran.com";

/** Ghost serves posts at /<slug>/ and the site index at /. */
export function writingUrl(slug?: string | null): string {
  return slug ? `${WRITING_URL}/${slug}/` : `${WRITING_URL}/`;
}

/** Props for links to the Ghost site. It's a different site, so it opens in a new tab. */
export const writingLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
