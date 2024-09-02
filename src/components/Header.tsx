"use client";

import { usePathname } from "next/navigation";

import { launchExternalUrl, swrFetcher } from "@/utils";
import { Button, Popover } from "antd";
import useSWR from "swr";

import "@/styles/header.scss";

import profile from "@/data/profile.json";
import { useState, useEffect } from "react";
import { IGazaStats } from "@/types/gazaStats";
import Link from "next/link";

export default function Header() {
  const path = usePathname().split("/")[1];
  const [rotationDays, setRotationDays] = useState(0);
  const [rotationKilled, setRotationKilled] = useState(0);
  const [killedInGaza, setKilledInGaza] = useState(0);
  const [daysReported, setDatsReported] = useState(0);

  const { data, isLoading } = useSWR(
    "https://data.techforpalestine.org/api/v2/summary.min.json",
    swrFetcher,
    {
      revalidateOnFocus: false,
    },
  );

  useEffect(() => {
    if (killedInGaza > 0 && daysReported > 0) return;
    const intervalId = setInterval(() => {
      const newKilled = Math.floor(Math.random() * 40000) + 1;
      const days = Math.floor(Math.random() * 400) + 1;
      setRotationKilled(Math.floor(newKilled / 1) % 10000);
      setRotationDays(Math.floor(days / 1) % 1000);
    }, 50);

    return () => clearInterval(intervalId);
  }, [rotationDays, rotationKilled, killedInGaza, daysReported]);

  if (!isLoading && data) {
    const gazaStats: IGazaStats = data;
    if (!killedInGaza && !daysReported) {
      setKilledInGaza(gazaStats.killed.total);
      setDatsReported(gazaStats.dailyReportCount);
    }
  }

  const navComponents = [];

  if (path !== "") {
    navComponents.push(
      <Link href="/">
        <span className="mr-5 cursor-pointer">Home</span>
      </Link>,
    );
  }

  if (path !== "blogs") {
    navComponents.push(
      <Link href="/blogs">
        <span className="mr-5 cursor-pointer">Blogs</span>
      </Link>,
    );
  }

  if (path !== "case-studies") {
    navComponents.push(
      <Popover content="Launching Soon">
        <span className="mr-5 cursor-pointer">Case Studies</span>
      </Popover>,
    );
  }

  return (
    <header className="text-gray-600 body-font sticky z-50 top-0 blurred-bg">
      <div className="container mx-auto flex flex-wrap p-1 lg:p-4 flex-col lg:flex-row items-center">
        <nav className="lg:w-1/5 flex-wrap items-center text-base lg:ml-auto flex">
          {navComponents}
        </nav>
        <div className="text-xs lg:text-md w-full lg:w-3/5 bg-red-500 text-white p-2 text-center order-first lg:order-none">
          <span
            style={{
              transform: `rotate(${rotationKilled}deg)`,
              transition: "transform 0.1s ease-in-out",
            }}
          >
            {killedInGaza > 0 ? killedInGaza : rotationKilled}
          </span>{" "}
          murdered in{" "}
          <span
            style={{
              transform: `rotate(${rotationDays}deg)`,
              transition: "transform 0.1s ease-in-out",
            }}
          >
            {daysReported > 0 ? daysReported : rotationDays}
          </span>{" "}
          days. Ceasefire now 🇵🇸
        </div>
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
