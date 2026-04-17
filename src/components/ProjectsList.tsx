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

export type ProjectItem = {
  id: string;
  name: string;
  url: string | null;
  description: string;
  logo: string;
  source: string | null;
  caseStudySlug?: string;
  featured?: boolean;
  tech?: string[];
};

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
            className="group relative border-b border-gray-800 last:border-b-0 hover:bg-[#1a1a1a]/30 transition-all duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center gap-6 md:gap-8 py-6 px-4">
              <div className="hidden md:block text-gray-600 group-hover:text-green-400 font-mono text-sm w-12 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative flex-shrink-0">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-lg flex items-center justify-center overflow-hidden border transition-all duration-300 ${
                    hoveredIndex === index
                      ? "border-green-400 shadow-lg shadow-green-400/20"
                      : "border-gray-800"
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
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-green-400"></div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <h3 className="text-white font-semibold text-lg md:text-xl group-hover:text-green-400 transition-colors">
                    {project.name}
                  </h3>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-green-400/10 text-green-400 border border-green-400/30">
                      <Star className="h-3 w-3" />
                      Featured
                    </span>
                  )}
                  {!project.url && !project.source && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-500 border border-gray-700">
                      Private
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm md:text-base line-clamp-1 md:line-clamp-2 mb-2">
                  {project.description}
                </p>
                {project.tech && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-md bg-gray-800/60 px-2 py-0.5 text-[11px] font-medium text-gray-400 ring-1 ring-inset ring-gray-700/50"
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
                    className="flex items-center gap-2 px-3 md:px-4 py-2 border border-green-400/30 bg-green-400/5 hover:bg-green-400/10 text-green-400 rounded-md transition-all text-sm font-medium"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span className="hidden sm:inline">Case study</span>
                  </Link>
                )}
                {project.url && (
                  <Link
                    href={project.url}
                    target="_blank"
                    className="flex items-center gap-2 px-3 md:px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-all text-sm font-medium shadow-lg shadow-green-600/20 hover:shadow-green-600/40"
                  >
                    <span className="hidden sm:inline">Visit</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
                {project.source && (
                  <Link
                    href={project.source}
                    target="_blank"
                    className="p-2 border border-gray-700 hover:border-green-400 hover:bg-green-400/10 text-gray-400 hover:text-green-400 rounded-md transition-all"
                    title="View Source Code"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>

            <div
              className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-green-400 via-green-400/50 to-transparent transition-all duration-500 ${
                hoveredIndex === index ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
