import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  // remark-gfm adds GitHub-flavored markdown support (tables, strikethrough,
  // task lists, autolinks). Must run before remark-html so the extra node
  // types end up in the HTML output.
  const result = await remark().use(gfm).use(html).process(markdown);
  return result.toString();
}
