import { Story } from "@/types/story";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const blogsDirectory = join(process.cwd(), "_blogs");
const caseStudiesDirectory = join(process.cwd(), "_case-studies");

export function getCaseStudySlugs() {
  try {
    return fs.readdirSync(caseStudiesDirectory);
  } catch (error) {
    return [];
  }
}

export function getBlogSlugs() {
  try {
    return fs.readdirSync(blogsDirectory);
  } catch (error) {
    return [];
  }
}

export function getBlogBySlug(slug: string): Story | null {
  try {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(blogsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content } as Story;
  } catch (error) {
    return null;
  }
}

export function getAllBlog(): Story[] {
  const slugs = getBlogSlugs();
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug))
    .filter((blog) => blog !== null) as Story[];
  const sortedBlogs = blogs.sort((blog1, blog2) =>
    blog1.date > blog2.date ? -1 : 1,
  );
  return sortedBlogs.map((blog) => ({ ...blog, type: "blog" }));
}

export function getCaseStudyBySlug(slug: string): Story | null {
  try {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(caseStudiesDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content } as Story;
  } catch (error) {
    return null;
  }
}

export function getAllCaseStudies(): Story[] {
  const slugs = getCaseStudySlugs();
  if (!slugs) {
    return [];
  }
  const caseStudies = slugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((caseStudy) => caseStudy !== null) as Story[];
  const sortedCaseStudies = caseStudies.sort((caseStudy1, caseStudy2) =>
    caseStudy1.date > caseStudy2.date ? -1 : 1,
  );
  return sortedCaseStudies.map((caseStudy) => ({
    ...caseStudy,
    type: "case-study",
  }));
}
