import { Story } from "@/types/story";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const blogsDirectory = join(process.cwd(), "_blogs");
const caseStudiesDirectory = join(process.cwd(), "_case-studies");

export function getCaseStudySlugs() {
  return fs.readdirSync(caseStudiesDirectory);
}

export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory);
}

export function getBlogBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(blogsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Story;
}

export function getAllBlog(): Story[] {
  const slugs = getBlogSlugs();
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug))
    .sort((blog1, blog2) => (blog1.date > blog2.date ? -1 : 1));
  return blogs.map((blog) => ({ ...blog, type: "blog" }));
}

export function getCaseStudyBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(caseStudiesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Story;
}

export function getAllCaseStudies(): Story[] {
  const slugs = getCaseStudySlugs();
  const caseStudies = slugs
    .map((slug) => getCaseStudyBySlug(slug))
    .sort((caseStudy1, caseStudy2) =>
      caseStudy1.date > caseStudy2.date ? -1 : 1,
    );
  return caseStudies.map((caseStudy) => ({
    ...caseStudy,
    type: "case-study",
  }));
}
