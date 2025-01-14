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
      <div className="w-28 flex-shrink-0 text-gray-900 text-right -rotate-90 pr-8">
        <span className="text-6xl font-mono font-bold tabular-nums">{day}</span>
      </div>

      {/* Timeline dot */}
      <div
        className="absolute left-32 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500 mt-[12px] z-10"
      />

      {/* Right side - content */}
      <Link
        href={[root, slug].join("/")}
        className="flex-grow hover:no-underline group-hover:opacity-75 transition-opacity pl-12"
      >
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 transition-colors">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500 mb-3">
            <span className="capitalize">{type.replace("-", " ")}</span>
            {tags.length > 0 && (
              <>
                <span>•</span>
                {tags.map((tag, index) => (
                  <span key={tag} className="text-gray-400">
                    {tag}
                    {index < tags.length - 1 && ", "}
                  </span>
                ))}
              </>
            )}
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            {title}
          </h3>
          <p className="text-gray-600">
            {excerpt}
          </p>
        </div>
      </Link>
    </div>
  );
}
