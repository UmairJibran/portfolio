"use client";

import { useEffect, useState } from "react";

type Contribution = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ApiResponse = {
  total: Record<string, number>;
  contributions: Contribution[];
};

const LEVEL_BG = [
  "bg-[#161b22]",
  "bg-[#0e4429]",
  "bg-[#006d32]",
  "bg-[#26a641]",
  "bg-[#39d353]",
];

const API_BASE = "https://github-contributions-api.jogruber.de/v4";

async function fetchContributions(username: string): Promise<ApiResponse> {
  try {
    const res = await fetch(`${API_BASE}/${username}`);
    if (!res.ok) throw new Error(`Primary ${res.status}`);
    return (await res.json()) as ApiResponse;
  } catch {
    const res = await fetch(`${API_BASE}/${username}?y=last`);
    if (!res.ok) throw new Error(`Fallback ${res.status}`);
    return (await res.json()) as ApiResponse;
  }
}

export function ContributionGraph({ username }: { username: string }) {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetchContributions(username)
      .then((json) => {
        if (mounted) setData(json);
      })
      .catch(() => {
        if (mounted) setError(true);
      });
    return () => {
      mounted = false;
    };
  }, [username]);

  if (error) return null;

  // Normalize to the last 365 days regardless of which endpoint responded
  // (the all-time endpoint returns every day since account creation).
  const lastYear = data ? data.contributions.slice(-365) : [];
  const lastYearTotal = data
    ? lastYear.reduce((sum, c) => sum + c.count, 0)
    : null;

  const weeks: Contribution[][] = [];
  if (lastYear.length) {
    // Use UTC weekday so the padding is identical regardless of the viewer's
    // timezone (otherwise far-east/far-west browsers shift the first column).
    const first = new Date(`${lastYear[0].date}T00:00:00Z`);
    const padStart = first.getUTCDay();
    // Array.from avoids the Array(n).fill(obj) shared-reference trap.
    let week: Contribution[] = Array.from({ length: padStart }, () => ({
      date: "",
      count: 0,
      level: 0 as const,
    }));
    for (const c of lastYear) {
      week.push(c);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }
    if (week.length) weeks.push(week);
  }

  return (
    <div className="mb-16">
      <h2 className="text-white text-xl font-semibold mb-4">
        Contribution Graph
      </h2>
      <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-400 text-sm">
            {lastYearTotal !== null
              ? `${lastYearTotal.toLocaleString()} contributions in the last year`
              : "Loading contributions…"}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Less</span>
            <div className="flex gap-1">
              {LEVEL_BG.slice(1).map((c, i) => (
                <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
              ))}
            </div>
            <span className="text-xs text-gray-500">More</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-[3px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day, di) => (
                  <div
                    key={di}
                    className={`w-[10px] h-[10px] rounded-sm ${
                      day.date ? LEVEL_BG[day.level] : "bg-transparent"
                    }`}
                    title={
                      day.date
                        ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`
                        : undefined
                    }
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
