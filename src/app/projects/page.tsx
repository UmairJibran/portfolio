import Link from "next/link";
import { ArrowUpRight, Code2, Briefcase } from "lucide-react";
import portfolio from "@/data/portfolio.json";
import { getCaseStudySlugs } from "@/lib/api";
import { ProjectsList } from "@/components/ProjectsList";
import type { ProjectItem } from "@/types/project";

export default function ProjectsPage() {
  const sortedPortfolio = [...(portfolio as ProjectItem[])].sort((a, b) => {
    const af = a.featured ? 1 : 0;
    const bf = b.featured ? 1 : 0;
    return bf - af;
  });

  const publishedCaseStudies = getCaseStudySlugs()
    .map((f) => f.replace(/\.md$/, ""));

  return (
    <main className="bg-background min-h-screen grain">
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="h-6 w-6 text-link" />
              <span className="text-faint text-sm uppercase tracking-wider brutal:bg-brand brutal:text-black brutal:px-1 brutal:font-bold">
                Portfolio
              </span>
            </div>
            <h1 className="text-foreground text-5xl md:text-6xl font-bold">
              Projects
            </h1>
          </div>
          <div className="text-right">
            <div className="text-faint text-sm mb-1">Total</div>
            <div className="text-link text-2xl font-bold font-mono brutal:bg-black brutal:text-white brutal:px-2">
              {String(portfolio.length).padStart(2, "0")}
            </div>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-brand via-border to-transparent brutal:bg-none brutal:bg-black brutal:h-[3px]"></div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <ProjectsList
          projects={sortedPortfolio}
          publishedCaseStudies={publishedCaseStudies}
        />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="border-t border-border brutal:border-t-[3px] brutal:border-black pt-8 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-faint">
            <Code2 className="h-4 w-4" />
            <span>Open source contributions and client work</span>
          </div>
          <Link
            href="/"
            className="text-faint hover:text-link transition-colors flex items-center gap-1"
          >
            Back to home
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </section>
    </main>
  );
}
