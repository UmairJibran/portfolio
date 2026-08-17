"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Github,
  Star,
  BookOpen,
} from "lucide-react";
import type { ProjectItem } from "@/types/project";

export function ProjectsList({
  projects,
  publishedCaseStudies,
}: {
  projects: ProjectItem[];
  publishedCaseStudies: string[];
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const publishedSet = new Set(publishedCaseStudies);

  return (
    <div className="space-y-0">
      {projects.map((project, index) => {
        const hasCaseStudy =
          project.caseStudySlug && publishedSet.has(project.caseStudySlug);

        return (
          <div
            key={project.id}
            className="group relative border-b border-border last:border-b-0 hover:bg-card/30 transition-all duration-300 brutal-card brutal:bg-card brutal:mb-4"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center gap-6 md:gap-8 py-6 px-4">
              <div className="hidden md:block text-faint/80 group-hover:text-link font-mono text-sm w-12 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative flex-shrink-0">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-lg flex items-center justify-center overflow-hidden border transition-all duration-300 brutal:border-2 brutal:border-edge ${
                    hoveredIndex === index
                      ? "border-brand shadow-lg shadow-brand/20 brutal:border-edge brutal:shadow-none"
                      : "border-border"
                  }`}
                >
                  <Image
                    src={`/assets/logos/${project.logo}.webp`}
                    alt={project.name}
                    width={60}
                    height={60}
                    className={`object-contain p-2 transition-transform duration-300 ${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>
                {hoveredIndex === index && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-brand"></div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <h3 className="text-foreground font-semibold text-lg md:text-xl group-hover:text-link transition-colors">
                    {project.name}
                  </h3>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-brand/10 text-link border border-brand/30 brutal:bg-brand brutal:text-foreground brutal:border brutal:border-edge brutal:font-bold">
                      <Star className="h-3 w-3" />
                      Featured
                    </span>
                  )}
                  {!project.url && !project.source && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-faint border border-edge brutal:border brutal:border-edge brutal:bg-card brutal:text-foreground brutal:font-bold">
                      Private
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm md:text-base line-clamp-1 md:line-clamp-2 mb-2">
                  {project.description}
                </p>
                {project.tech && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-md bg-secondary/80 px-2 py-0.5 text-[11px] font-medium text-muted-foreground ring-1 ring-inset ring-edge/50 brutal:border brutal:border-edge brutal:bg-card brutal:text-foreground brutal:ring-0 brutal:font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                {hasCaseStudy && (
                  <Link
                    href={`/projects/${project.caseStudySlug}`}
                    className="flex items-center gap-2 px-3 md:px-4 py-2 border border-brand/30 bg-brand/5 hover:bg-brand/10 text-link rounded-md transition-all text-sm font-medium brutal:bg-card brutal-btn"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span className="hidden sm:inline">Case study</span>
                  </Link>
                )}
                {project.url && (
                  <Link
                    href={project.url}
                    target="_blank"
                    className="flex items-center gap-2 px-3 md:px-4 py-2 bg-primary hover:bg-primary-hover text-primary-foreground rounded-md transition-all text-sm font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 brutal-btn"
                  >
                    <span className="hidden sm:inline">Visit</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
                {project.source && (
                  <Link
                    href={project.source}
                    target="_blank"
                    className="p-2 border border-edge hover:border-brand hover:bg-brand/10 text-muted-foreground hover:text-link rounded-md transition-all brutal:bg-card brutal-btn"
                    title="View Source Code"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>

            <div
              className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-brand via-brand/50 to-transparent brutal:bg-none brutal:bg-foreground brutal:h-[3px] transition-all duration-500 ${
                hoveredIndex === index ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
