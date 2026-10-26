import { cn } from "@/lib/utils";

/**
 * Section header in the site's terminal language: the shell command that would
 * produce this section, then the heading itself, then a fading rule.
 */
export function SectionHeading({
  command,
  title,
  description,
  as: Tag = "h2",
  id,
  action,
  className,
}: {
  /** Shown after a green `$`, e.g. "ls ./integrations". */
  command: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  as?: "h1" | "h2";
  id?: string;
  /** Optional trailing control, e.g. a "view all" link. */
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-6", className)}>
      <div className="mb-2 font-mono text-xs">
        <span className="text-brand" aria-hidden>
          ${" "}
        </span>
        <span className="text-faint">{command}</span>
      </div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <Tag
          id={id}
          className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
        >
          {title}
        </Tag>
        {action}
      </div>
      <div className="rule-fade mt-3" />
      {description && (
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

/** Serif-italic emphasis, for the one or two words a heading turns on. */
export function Em({ children }: { children: React.ReactNode }) {
  return <em className="font-serif italic text-brand">{children}</em>;
}
