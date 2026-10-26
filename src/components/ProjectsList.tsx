import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Github,
  Star,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import type { ProjectItem } from "@/types/project";
import { writingLinkProps } from "@/lib/writing";

/**
 * Projects as rows in a listing: an index column, the logo, the detail, then
 * the actions. Hover lifts the row's tint and accent rule rather than moving
 * it, so a long list stays still as the pointer travels down it.
 */
export function ProjectsList({ projects }: { projects: ProjectItem[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="group relative transition-colors duration-300 hover:bg-card/40"
        >
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 w-px bg-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          <div className="flex items-center gap-4 px-4 py-6 md:gap-8">
            <div className="hidden w-10 shrink-0 font-mono text-sm text-faint transition-colors group-hover:text-brand md:block">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="logo-tile h-14 w-14 group-hover:bg-white md:h-16 md:w-16">
              <Image
                src={`/assets/logos/${project.logo}.webp`}
                alt=""
                width={64}
                height={64}
                className="h-full w-full object-contain p-1.5 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-link md:text-lg">
                  {project.name}
                </h3>
                {project.featured && (
                  <span className="inline-flex items-center gap-1 rounded border border-brand/30 bg-brand/5 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-brand">
                    <Star className="h-2.5 w-2.5" aria-hidden />
                    featured
                  </span>
                )}
                {!project.url && !project.source && (
                  <span className="rounded border border-edge/60 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-faint">
                    private
                  </span>
                )}
              </div>
              <p className="mb-2 line-clamp-2 text-sm text-muted-foreground">
                {project.description}
              </p>
              {project.tech && (
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded bg-secondary/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground ring-1 ring-inset ring-edge/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              {project.caseStudies && (
                <div className="hidden flex-col gap-2 sm:flex">
                  {project.caseStudies.map((caseStudy) => (
                    <Link
                      key={caseStudy.url}
                      href={caseStudy.url}
                      {...writingLinkProps}
                      aria-label={`${caseStudy.label} case study (opens in a new tab)`}
                      className="inline-flex items-center gap-2 rounded-md border border-brand/30 bg-brand/5 px-3 py-1.5 font-mono text-xs text-link transition-colors hover:border-brand/60 hover:bg-brand/10"
                    >
                      <BookOpen className="h-3.5 w-3.5" aria-hidden />
                      {caseStudy.label}
                      <ExternalLink className="h-3 w-3" aria-hidden />
                    </Link>
                  ))}
                </div>
              )}
              {project.url && (
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-edge px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-brand/60 hover:bg-brand/10 hover:text-link"
                >
                  <span className="hidden sm:inline">visit</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  <span className="sr-only">
                    {project.name} website (opens in a new tab)
                  </span>
                </Link>
              )}
              {project.source && (
                <Link
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} source code (opens in a new tab)`}
                  className="rounded-md border border-edge p-2 text-muted-foreground transition-colors hover:border-brand/60 hover:bg-brand/10 hover:text-link"
                >
                  <Github className="h-4 w-4" aria-hidden />
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
