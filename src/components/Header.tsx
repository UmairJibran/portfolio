"use client";

import { launchExternalUrl, swrFetcher } from "@/utils";
import { Button } from "antd";

import "@/styles/header.scss";

import profile from "@/data/profile.json";
import Link from "next/link";

export default function Header() {
  const navComponents = [];

  navComponents.push(
    <Link href="/">
      <span className="mr-5 cursor-pointer">Home</span>
    </Link>,
  );

  navComponents.push(
    <Link href="/writing">
      <span className="mr-5 cursor-pointer">Writing</span>
    </Link>,
  );

  return (
    <header className="text-gray-600 body-font sticky z-50 top-0 blurred-bg">
      <div className="container mx-auto flex flex-wrap p-1 lg:p-4 flex-col lg:flex-row items-center">
        <nav className="lg:w-1/5 flex-wrap items-center text-base lg:ml-auto flex">
          {navComponents}
        </nav>
        <div className="w-full lg:w-3/5 p-2 order-first lg:order-none"></div>
        <div className="lg:w-1/5 inline-flex lg:justify-end lg:ml-0">
          <Button
            onClick={() => launchExternalUrl(profile.resume)}
            type="text"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-1"
            data-umami-event="resume-button-clicked"
          >
            Resume
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
