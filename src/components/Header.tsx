"use client";

import { launchExternalUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import profile from "@/data/profile.json";
import Link from "next/link";
import { ArrowRight } from "react-feather";

export default function Header() {
  const navComponents = [];

  navComponents.push(
    <Link href="/" key="home">
      <span className="mr-5 cursor-pointer hover:bg-brutalist-yellow hover:text-black transition-colors px-3 py-2 border-4 border-black font-bold uppercase">
        Home
      </span>
    </Link>,
  );

  navComponents.push(
    <Link href="/projects" key="projects">
      <span className="mr-5 cursor-pointer hover:bg-brutalist-yellow hover:text-black transition-colors px-3 py-2 border-4 border-black font-bold uppercase">
        Projects
      </span>
    </Link>,
  );

  navComponents.push(
    <Link href="/writing" key="writing">
      <span className="mr-5 cursor-pointer hover:bg-brutalist-yellow hover:text-black transition-colors px-3 py-2 border-4 border-black font-bold uppercase">
        Writing
      </span>
    </Link>,
  );

  return (
    <header className="text-black body-font sticky z-50 top-0 bg-white border-b-8 border-black">
      <div className="container mx-auto flex flex-wrap p-4 lg:p-6 flex-col lg:flex-row items-center justify-between">
        <nav className="flex-wrap items-center text-base flex gap-2">
          {navComponents}
        </nav>
        <div className="inline-flex">
          <Button
            onClick={() => launchExternalUrl(profile.resume)}
            className="inline-flex items-center gap-2 text-black bg-brutalist-yellow hover:bg-black hover:text-brutalist-yellow border-4 border-black font-bold uppercase px-6 py-3 transition-colors"
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
