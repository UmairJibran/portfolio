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
        <span className="text-6xl font-mono font-bold tabular-nums leading-none text-edge group-hover:text-link transition-colors">
          {day}
        </span>
      </div>

      {/* Timeline dot */}
      <div
        className="absolute left-32 -translate-x-1/2 w-2 h-2 rounded-full bg-brand mt-[12px] z-10 shadow-lg shadow-brand/30 brutal:border brutal:border-edge brutal:shadow-none"
      />

      {/* Right side - content */}
      <Link
        href={[root, slug].join("/")}
        className="flex-grow hover:no-underline group-hover:opacity-90 transition-opacity pl-12"
      >
        <div className="rounded-lg p-6 border border-border bg-card/30 hover:bg-card/60 hover:border-brand/50 transition-all brutal:bg-card brutal:hover:bg-card brutal-card">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center rounded-md bg-brand/10 px-2 py-1 text-xs font-medium text-link ring-1 ring-inset ring-brand/20 brutal:border brutal:border-edge brutal:bg-brand brutal:text-foreground brutal:font-bold">
              {type.replace("-", " ")}
            </span>
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center rounded-md bg-border/50 px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-edge/50 brutal:border brutal:border-edge brutal:bg-card brutal:text-foreground brutal:font-bold"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-link transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {excerpt}
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-faint/80 group-hover:text-link transition-colors flex-shrink-0 mt-1" />
          </div>
        </div>
      </Link>
    </div>
  );
}
