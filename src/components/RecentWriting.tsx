"use client";

import { Story } from "@/types/story";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";

type Props = {
  story: Story;
};

export function RecentWriting({ story }: Props) {
  const root = story.type === "blog" ? "/writing" : "/projects";
  const formattedDate = new Date(story.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`${root}/${story.slug}`}
      className="group block bg-card border border-border rounded-lg p-6 hover:border-brand hover:bg-card/80 transition-all duration-300 brutal:hover:bg-card brutal:border-2 brutal:border-black brutal:shadow-hard brutal:hover:shadow-hard-lg brutal:hover:-translate-x-0.5 brutal:hover:-translate-y-0.5 brutal:hover:border-black"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {/* Type Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center rounded-md bg-brand/10 px-2 py-1 text-xs font-medium text-link ring-1 ring-inset ring-brand/20 brutal:border brutal:border-black brutal:bg-brand brutal:text-black brutal:font-bold">
              {story.type === "blog" ? "blog" : "case study"}
            </span>
            {story.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-border/50 px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-edge/50 brutal:border brutal:border-black brutal:bg-card brutal:text-black brutal:font-bold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-link transition-colors">
            {story.title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground leading-relaxed mb-4">{story.excerpt}</p>

          {/* Date */}
          <div className="flex items-center gap-2 text-faint text-sm">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Arrow Icon */}
        <ArrowUpRight className="h-6 w-6 text-faint/80 group-hover:text-link transition-colors flex-shrink-0" />
      </div>
    </Link>
  );
}
