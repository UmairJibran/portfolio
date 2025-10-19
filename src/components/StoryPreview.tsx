'use client';

import { Author } from "@/types/author";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
  date,
  excerpt,
  slug,
  type,
  tags = [],
}: Props) {
  const root = type === "blog" ? "/blogs" : "/case-studies";
  const day = new Date(date).getDate();

  return (
    <div className="group relative flex items-start">
      {/* Left side - day number */}
      <div className="w-28 flex-shrink-0 text-right pr-8">
        <span className="text-6xl font-mono font-bold tabular-nums leading-none text-gray-700 group-hover:text-green-400 transition-colors">
          {day}
        </span>
      </div>

      {/* Timeline dot */}
      <div
        className="absolute left-32 -translate-x-1/2 w-2 h-2 rounded-full bg-green-400 mt-[12px] z-10 shadow-lg shadow-green-400/30"
      />

      {/* Right side - content */}
      <Link
        href={[root, slug].join("/")}
        className="flex-grow hover:no-underline group-hover:opacity-90 transition-opacity pl-12"
      >
        <div className="rounded-lg p-6 border border-gray-800 bg-[#1a1a1a]/30 hover:bg-[#1a1a1a]/60 hover:border-green-400/50 transition-all">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-400/20">
              {type.replace("-", " ")}
            </span>
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center rounded-md bg-gray-800/50 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-green-400 transition-colors">
                {title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {excerpt}
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-gray-600 group-hover:text-green-400 transition-colors flex-shrink-0 mt-1" />
          </div>
        </div>
      </Link>
    </div>
  );
}
