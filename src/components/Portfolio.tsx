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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolio.map((item) => (
            <PortfolioDetail key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
