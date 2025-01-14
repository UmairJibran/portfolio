'use client';

import { Author } from "@/types/author";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  type: "blog" | "case-study";
  tags?: string[];
};

export function StoryPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  type,
  tags = [],
}: Props) {
  const root = type === "blog" ? "/blogs" : "/case-studies";
  const day = new Date(date).getDate();

  return (
    <div className="group relative flex items-start">
      {/* Left side - metadata */}
      <div className="w-28 flex-shrink-0 text-gray-900 text-right pr-8">
        <span className="text-6xl font-mono font-bold tabular-nums leading-none">{day}</span>
      </div>

      {/* Timeline dot */}
      <div
        className="absolute left-32 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500 mt-[12px] z-10"
      />

      {/* Right side - content */}
      <Link
        href={[root, slug].join("/")}
        className="flex-grow hover:no-underline group-hover:opacity-90 transition-opacity pl-12"
      >
        <div className="rounded-lg p-6 hover:bg-gray-50/50 transition-colors">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {type.replace("-", " ")}
            </span>
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {excerpt}
          </p>
        </div>
      </Link>
    </div>
  );
}
