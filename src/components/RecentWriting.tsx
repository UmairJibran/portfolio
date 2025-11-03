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
      className="group block bg-white border-4 border-black p-6 hover:bg-brutalist-yellow transition-all duration-300 brutalist-shadow"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {/* Type Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center bg-black px-3 py-1 text-xs font-black text-white uppercase border-2 border-black">
              {story.type === "blog" ? "blog" : "case study"}
            </span>
            {story.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center bg-white px-2 py-1 text-xs font-bold text-black border-2 border-black uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-black mb-3 text-black uppercase">
            {story.title}
          </h3>

          {/* Excerpt */}
          <p className="text-black leading-relaxed mb-4 font-medium">{story.excerpt}</p>

          {/* Date */}
          <div className="flex items-center gap-2 text-black text-sm font-bold uppercase">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Arrow Icon */}
        <ArrowUpRight className="h-6 w-6 text-black flex-shrink-0" />
      </div>
    </Link>
  );
}
