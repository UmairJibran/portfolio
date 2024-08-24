import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlog, getBlogBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { BlogBody } from "@/components/BlogBody";
import { BlogHeader } from "@/components/BlogHeader";

import profile from "@/data/profile.json";

export default async function Blog({ params }: Params) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return notFound();
  }

  const content = await markdownToHtml(blog.content || "");

  return (
    <main>
      <article className="container mx-auto">
        <BlogHeader
          title={blog.title}
          coverImage={blog.coverImage}
          date={blog.date}
          author={blog.author}
        />
        <BlogBody content={content} />
      </article>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return notFound();
  }

  const title = `${blog.title} | Blog | ${profile.name.firstName} ${profile.name.lastName}`;

  return {
    title,
    openGraph: {
      title,
      images: [blog.ogImage.url],
    },
    twitter: {
      card: "summary_large_image",
    },
    description: blog.excerpt,
    authors: [blog.author],
    keywords: blog.tags,
  };
}

export async function generateStaticParams() {
  const blogs = getAllBlog();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
