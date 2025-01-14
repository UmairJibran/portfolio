const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { format } = require("date-fns");

const xmlFormat = require("xml-formatter");

const BLOGS_DIR = path.join(process.cwd(), "_blogs");
const CASE_STUDIES_DIR = path.join(process.cwd(), "_case-studies");
const OUTPUT_FILE = path.join(process.cwd(), "public", "rss.xml");

function escapeXML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");
}

function generateRSS() {
  const blogFiles = fs.readdirSync(BLOGS_DIR);
  const caseStudyFiles = fs.readdirSync(CASE_STUDIES_DIR);

  const posts = blogFiles.map((file) => {
    const filePath = path.join(BLOGS_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(content);
    return {
      title: data.title,
      description: data.excerpt,
      link: `https://umairjibran.com/blogs/${file.replace(/\.md$/, "")}`,
      pubDate: data.date,
    };
  });

  const caseStudies = caseStudyFiles.map((file) => {
    const filePath = path.join(CASE_STUDIES_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(content);
    return {
      title: data.title,
      description: data.excerpt,
      link: `https://umairjibran.com/case-studies/${file.replace(/\.md$/, "")}`,
      pubDate: data.date,
    };
  });

  const rssItems = [...posts, ...caseStudies]
    .map(
      (post) =>
        `<item><title>${escapeXML(post.title)}</title><link>${escapeXML(post.link)}</link><description>${escapeXML(post.description)}</description><pubDate>${new Date(post.pubDate).toUTCString()}</pubDate><guid>${post.link}</guid></item>`,
    )
    .join("");

  const rssFeed =
    `<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Umair Jibran's Writings</title><link>https://umairjibran.com/writings</link><description>Latest articles from Umair Jibran's writings.</description><atom:link rel="self" href="https://umairjibran.com/rss.xml" /><language>en-us</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${rssItems}</channel></rss>`.trim();

  fs.writeFileSync(OUTPUT_FILE, xmlFormat(rssFeed), "utf-8");
  console.log(`RSS feed generated at ${OUTPUT_FILE}`);
}

generateRSS();
