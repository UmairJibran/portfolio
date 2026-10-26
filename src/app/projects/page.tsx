import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import portfolio from "@/data/portfolio.json";
import { ProjectsList } from "@/components/ProjectsList";
import { SectionHeading, Em } from "@/components/SectionHeading";
import { Terminal, type TerminalLine } from "@/components/Terminal";
import type { ProjectItem } from "@/types/project";
import { toJsonLdScript } from "@/lib/jsonLd";
import { projectsGraph } from "@/lib/structuredData";

const categories: {
  key: ProjectItem["category"];
  title: string;
  command: string;
}[] = [
  { key: "work", title: "Work", command: "ls ./work" },
  { key: "open-source", title: "Open source", command: "ls ./open-source" },
  { key: "charity", title: "Charity", command: "ls ./charity" },
];

export default function ProjectsPage() {
  const sortedPortfolio = [...(portfolio as ProjectItem[])].sort((a, b) => {
    const af = a.featured ? 1 : 0;
    const bf = b.featured ? 1 : 0;
    return bf - af;
  });

  const sections = categories
    .map((category) => ({
      ...category,
      projects: sortedPortfolio.filter((p) => p.category === category.key),
    }))
    .filter((section) => section.projects.length > 0);

  const intro: TerminalLine[] = [
    { kind: "command", text: "ls -la ./projects" },
    { kind: "output", text: `total ${portfolio.length}` },
    ...sections.map(
      (section): TerminalLine => ({
        kind: "info",
        text: `${section.key.padEnd(12)} ${String(section.projects.length).padStart(2, "0")} ${
          section.projects.length === 1 ? "project" : "projects"
        }`,
      }),
    ),
    {
      kind: "success",
      text: `${sortedPortfolio.filter((p) => p.featured).length} featured · ${
        sortedPortfolio.filter((p) => p.source).length
      } with public source`,
    },
  ];

  return (
    <main className="grain min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLdScript(projectsGraph()) }}
      />

      <section className="mx-auto max-w-6xl px-6 pb-10 pt-14 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:items-center lg:gap-12">
          <div>
            <SectionHeading
              as="h1"
              command="cd ~/projects"
              title={
                <>
                  Things I&apos;ve <Em>shipped</Em>
                </>
              }
              description="Product work, open-source tools, and a few non-profit builds — with the stack behind each one and links to the source or the live site where they exist."
            />
          </div>
          <Terminal title="~/projects — zsh" lines={intro} />
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.key} className="mx-auto max-w-6xl px-6 py-10">
          <SectionHeading
            command={section.command}
            title={section.title}
            action={
              <span className="font-mono text-xs text-faint">
                {String(section.projects.length).padStart(2, "0")}{" "}
                {section.projects.length === 1 ? "entry" : "entries"}
              </span>
            }
          />
          <ProjectsList projects={section.projects} />
        </section>
      ))}

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-faint transition-colors hover:text-link"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          cd ..
        </Link>
      </section>
    </main>
  );
}
