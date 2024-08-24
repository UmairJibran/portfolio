"use client";

import portfolio from "@/data/portfolio.json";
import PortfolioDetail from "@/components/PortfolioDetail";

export default function Portfolio() {
  return (
    <>
      <div
        id="portfolio"
        className="w-full min-h-screen justify-center items-center my-4"
      >
        <h1 className="text-3xl font-bold text-center my-10">
          Things I&apos;ve Built
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolio.map((item) => (
            <PortfolioDetail key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
