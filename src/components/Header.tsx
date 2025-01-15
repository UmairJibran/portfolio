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
      <span className="mr-5 cursor-pointer hover:text-gray-900 transition-colors">Home</span>
    </Link>,
  );

  navComponents.push(
    <Link href="/writing" key="writing">
      <span className="mr-5 cursor-pointer hover:text-gray-900 transition-colors">Writing</span>
    </Link>,
  );

  return (
    <header className="text-gray-600 body-font sticky z-50 top-0 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex flex-wrap p-1 lg:p-4 flex-col lg:flex-row items-center">
        <nav className="lg:w-1/5 flex-wrap items-center text-base lg:ml-auto flex">
          {navComponents}
        </nav>
        <div className="w-full lg:w-3/5 p-2 order-first lg:order-none"></div>
        <div className="lg:w-1/5 inline-flex lg:justify-end lg:ml-0">
          <Button
            onClick={() => launchExternalUrl(profile.resume)}
            variant="ghost"
            className="inline-flex items-center gap-2"
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
