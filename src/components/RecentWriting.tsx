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
      className="group block bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-green-400 hover:bg-[#1a1a1a]/80 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {/* Type Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-400/20">
              {story.type === "blog" ? "blog" : "case study"}
            </span>
            {story.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-gray-800/50 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
            {story.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-400 leading-relaxed mb-4">{story.excerpt}</p>

          {/* Date */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Arrow Icon */}
        <ArrowUpRight className="h-6 w-6 text-gray-600 group-hover:text-green-400 transition-colors flex-shrink-0" />
      </div>
    </Link>
  );
}
