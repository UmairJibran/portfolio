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
        <span className="text-6xl font-mono font-black tabular-nums leading-none text-black border-4 border-black px-3 py-2 inline-block bg-brutalist-yellow transform rotate-3 group-hover:rotate-0 transition-transform">
          {day}
        </span>
      </div>

      {/* Timeline dot */}
      <div
        className="absolute left-32 -translate-x-1/2 w-4 h-4 bg-black border-4 border-white mt-[12px] z-10"
      />

      {/* Right side - content */}
      <Link
        href={[root, slug].join("/")}
        className="flex-grow hover:no-underline group-hover:opacity-90 transition-opacity pl-12"
      >
        <div className="p-6 border-4 border-black bg-white hover:bg-brutalist-yellow transition-all brutalist-shadow">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center bg-black px-3 py-1 text-xs font-black text-white uppercase">
              {type.replace("-", " ")}
            </span>
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center bg-white px-2 py-1 text-xs font-bold text-black border-2 border-black uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-black mb-2 text-black uppercase">
                {title}
              </h3>
              <p className="text-black leading-relaxed font-medium">
                {excerpt}
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-black flex-shrink-0 mt-1" />
          </div>
        </div>
      </Link>
    </div>
  );
}
