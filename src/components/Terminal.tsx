import { cn } from "@/lib/utils";

/**
 * A line of a terminal transcript. The kind picks the glyph and colour, so a
 * transcript reads as data rather than as hand-coloured markup.
 *
 *   command — what was typed, after a green `$`
 *   output  — plain program output, dimmed
 *   success — a completed step
 *   info    — a note or result
 *   warn    — something that needed attention
 *   blank   — vertical breathing room
 */
export type TerminalLine =
  | { kind: "command"; text: string }
  | { kind: "output"; text: string }
  | { kind: "success"; text: string }
  | { kind: "info"; text: string }
  | { kind: "warn"; text: string }
  | { kind: "blank" };

const GLYPH = {
  success: "✓",
  info: "→",
  warn: "⚡",
} as const;

const TONE = {
  command: "text-foreground",
  output: "text-faint",
  success: "text-brand",
  info: "text-info",
  warn: "text-warn",
} as const;

/** Time to type one character. */
const CHAR_MS = 16;

/** Beat between a finished line and the start of the next one. */
const LINE_GAP_MS = 500;

/** The glyph that opens a line, before its text starts typing. */
function leadGlyph(line: TerminalLine): string | null {
  if (line.kind === "command") return "$";
  if (line.kind === "output" || line.kind === "blank") return null;
  return GLYPH[line.kind];
}

function lineText(line: TerminalLine): string {
  return line.kind === "blank" ? "" : line.text;
}

type ScheduledLine = { line: TerminalLine; start: number };

/**
 * Lay the transcript out on a timeline: each line starts once the line above
 * has finished typing plus a beat. Returns the lines with their start offsets
 * and the moment the whole transcript is done.
 */
function schedule(lines: TerminalLine[]): {
  scheduled: ScheduledLine[];
  done: number;
} {
  let at = 0;
  const scheduled = lines.map((line) => {
    const start = at;
    // +1 step for the leading glyph, which lands before the first character.
    at += (lineText(line).length + 1) * CHAR_MS + LINE_GAP_MS;
    return { line, start };
  });
  return { scheduled, done: at };
}

/**
 * A run of text typed one character at a time. Every character is in the DOM
 * from the first paint and only its opacity animates, so the transcript is
 * complete for crawlers, for anyone with reduced motion, and before any
 * JavaScript runs — and no character reflows the line as it appears.
 */
function Typed({ text, start }: { text: string; start: number }) {
  return (
    <>
      {Array.from(text).map((char, i) => (
        <span
          key={i}
          className="term-char"
          style={{ animationDelay: `${start + (i + 1) * CHAR_MS}ms` }}
        >
          {char}
        </span>
      ))}
    </>
  );
}

function Line({ line, start }: ScheduledLine) {
  if (line.kind === "blank") return <div className="h-3" aria-hidden />;

  const glyph = leadGlyph(line);

  return (
    <div className={cn("flex gap-2", TONE[line.kind])}>
      {glyph && (
        <span
          className={cn(
            "term-char shrink-0",
            line.kind === "command" && "text-brand",
          )}
          style={{ animationDelay: `${start}ms` }}
          aria-hidden
        >
          {glyph}
        </span>
      )}
      {/* pre-wrap keeps padded column alignment from collapsing. */}
      <span className="whitespace-pre-wrap">
        <Typed text={line.text} start={start} />
      </span>
    </div>
  );
}

/**
 * A terminal window: traffic lights, a path/shell title, and a transcript
 * that types itself out line by line. Server-rendered and CSS-driven — the
 * full text ships in the HTML and only opacity animates.
 */
export function Terminal({
  title,
  lines,
  caret = true,
  className,
}: {
  title: string;
  lines: TerminalLine[];
  /** Trailing prompt with a blinking block cursor. */
  caret?: boolean;
  className?: string;
}) {
  const { scheduled, done } = schedule(lines);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-[#0e1116]/90 shadow-2xl shadow-black/40 backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border/80 bg-secondary/40 px-3 py-2">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="flex-1 truncate text-center font-mono text-[11px] text-faint">
          {title}
        </span>
        {/* Balances the traffic lights so the title stays optically centred. */}
        <span className="w-[42px]" aria-hidden />
      </div>

      <div className="space-y-1 p-4 font-mono text-[12.5px] leading-relaxed md:text-[13px]">
        {scheduled.map(({ line, start }, index) => (
          <Line key={index} line={line} start={start} />
        ))}
        {caret && (
          <div className="flex gap-2 pt-1">
            <span
              className="term-char shrink-0 text-brand"
              style={{ animationDelay: `${done}ms` }}
              aria-hidden
            >
              $
            </span>
            <span
              className="caret"
              style={{ animationDelay: `${done}ms` }}
              aria-hidden
            />
          </div>
        )}
      </div>
    </div>
  );
}
