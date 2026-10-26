import { Story } from "@/types/story";
import Link from "next/link";
import { Calendar, ExternalLink } from "lucide-react";
import { writingLinkProps } from "@/lib/writing";

type Props = {
  story: Story;
  // A slimmer, low-key row for when something else on the page is the focus
  compact?: boolean;
};

function StoryKind({ type }: { type: Story["type"] }) {
  return (
    <span className="rounded border border-brand/30 bg-brand/5 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-brand">
      {type === "blog" ? "post" : "case study"}
    </span>
  );
}

export function RecentWriting({ story, compact = false }: Props) {
  const formattedDate = new Date(story.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (compact) {
    return (
      <Link
        href={story.url}
        {...writingLinkProps}
        className="panel panel-hover group flex items-center justify-between gap-4 px-5 py-4"
      >
        <div className="min-w-0">
          <div className="mb-1.5 flex items-center gap-2">
            <StoryKind type={story.type} />
            <span className="font-mono text-[11px] text-faint">
              {formattedDate}
            </span>
          </div>
          <h3 className="truncate text-sm font-medium text-foreground transition-colors group-hover:text-link md:text-base">
            {story.title}
          </h3>
        </div>
        <ExternalLink
          className="h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-link"
          aria-hidden
        />
        <span className="sr-only"> (opens in a new tab)</span>
      </Link>
    );
  }

  return (
    <Link
      href={story.url}
      {...writingLinkProps}
      className="panel panel-hover group block p-6"
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <StoryKind type={story.type} />
        {story.tags?.slice(0, 3).map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-link">
        {story.title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {story.excerpt}
      </p>
      <div className="flex items-center gap-2 font-mono text-[11px] text-faint">
        <Calendar className="h-3.5 w-3.5" aria-hidden />
        {formattedDate}
      </div>
    </Link>
  );
}
