import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

/**
 * Markdown → HTML pipeline:
 *   remark-parse  — parse markdown to MDAST
 *   remark-gfm    — GitHub-flavored extensions (tables, strikethrough, task lists, autolinks)
 *   remark-rehype — MDAST → HAST (HTML AST)
 *   rehype-highlight — syntax-highlight fenced code blocks via highlight.js
 *   rehype-stringify — HAST → HTML string
 *
 * Pair the HTML output with a highlight.js theme (imported in globals.css) so
 * the emitted <span class="hljs-*"> tokens pick up colors.
 */
export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight, { detect: true })
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
