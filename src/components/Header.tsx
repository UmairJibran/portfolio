"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import profile from "@/data/profile.json";
import { WRITING_URL, writingLinkProps } from "@/lib/writing";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "home", href: "/" },
  { label: "projects", href: "/projects" },
  { label: "writing", href: WRITING_URL, external: true },
] as const;

/**
 * Terminal-style top bar: a shell prompt as the wordmark, lowercase mono nav,
 * and the resume as the one outlined action. Transparent over the hero, then
 * it picks up a background and hairline once the page scrolls under it.
 */
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      {/* Below sm the bar wraps to two rows — wordmark and resume on the
          first, the nav links on the second — so nothing is pushed off the
          edge on a phone. */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 px-6 py-3">
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-sm"
          aria-label="Home"
        >
          <span className="text-brand" aria-hidden>
            &gt;_
          </span>
          <span className="text-foreground transition-colors group-hover:text-brand">
            umair jibran
          </span>
        </Link>

        <nav className="order-last flex w-full items-center gap-1 font-mono text-[13px] sm:order-none sm:ml-auto sm:w-auto">
          {NAV.map((item) => {
            const active = !("external" in item) && pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                {...("external" in item ? writingLinkProps : {})}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 transition-colors",
                  active
                    ? "text-brand"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active && (
                  <span className="text-brand" aria-hidden>
                    ./
                  </span>
                )}
                {item.label}
                {"external" in item && (
                  <>
                    <ExternalLink className="h-3 w-3" aria-hidden />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </>
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          data-umami-event="resume-button-clicked"
          className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-md border border-brand/40 bg-brand/5 px-3 py-1.5 font-mono text-[13px] text-brand transition-colors hover:border-brand hover:bg-brand/10 sm:ml-0"
        >
          resume
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          <span className="sr-only"> (PDF, opens in a new tab)</span>
        </Link>
      </div>
    </header>
  );
}
