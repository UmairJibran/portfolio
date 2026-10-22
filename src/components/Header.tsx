"use client";

import { launchExternalUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import profile from "@/data/profile.json";
import Link from "next/link";
import { WRITING_URL, writingLinkProps } from "@/lib/writing";
import { ArrowRight, ExternalLink } from "react-feather";

export default function Header() {
  const navComponents = [];

  navComponents.push(
    <Link href="/" key="home">
      <span className="mr-5 cursor-pointer hover:text-link transition-colors brutal:hover:bg-accent brutal:hover:text-accent-foreground brutal:px-1 brutal:font-bold">
        Home
      </span>
    </Link>,
  );

  navComponents.push(
    <Link href="/projects" key="projects">
      <span className="mr-5 cursor-pointer hover:text-link transition-colors brutal:hover:bg-accent brutal:hover:text-accent-foreground brutal:px-1 brutal:font-bold">
        Projects
      </span>
    </Link>,
  );

  navComponents.push(
    <Link href={WRITING_URL} key="writing" {...writingLinkProps}>
      <span className="mr-5 cursor-pointer inline-flex items-center gap-1 hover:text-link transition-colors brutal:hover:bg-accent brutal:hover:text-accent-foreground brutal:px-1 brutal:font-bold">
        Writing
        <ExternalLink className="h-3 w-3" aria-hidden />
        <span className="sr-only"> (opens in a new tab)</span>
      </span>
    </Link>,
  );

  return (
    <header className="text-muted-foreground body-font sticky z-50 top-0 bg-background/95 backdrop-blur-sm border-b border-border brutal:bg-background brutal:backdrop-blur-none brutal:border-b-[3px]">
      <div className="container mx-auto flex flex-wrap p-1 lg:p-4 flex-col lg:flex-row items-center">
        <nav className="lg:w-1/5 flex-wrap items-center text-base lg:ml-auto flex">
          {navComponents}
        </nav>
        <div className="w-full lg:w-2/5 p-2 order-first lg:order-none"></div>
        <div className="lg:w-2/5 inline-flex items-center gap-3 lg:justify-end lg:ml-0">
          <ThemeSwitcher />
          <Button
            onClick={() => launchExternalUrl(profile.resume)}
            variant="ghost"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground hover:bg-card brutal:hover:bg-accent brutal:hover:text-accent-foreground brutal:font-bold"
            data-umami-event="resume-button-clicked"
          >
            Resume
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
