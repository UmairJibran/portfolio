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

  // Filter to exactly the last 365 days ending today (UTC). Upper bound is
  // required because the all-time endpoint pads the current year out to Dec 31
  // with zero-count entries — without the cap those future dates render as
  // empty cells past today.
  const lastYear = data ? (() => {
    const today = new Date();
    const todayISO = today.toISOString().slice(0, 10);
    const cutoff = new Date();
    cutoff.setUTCDate(cutoff.getUTCDate() - 364);
    const cutoffISO = cutoff.toISOString().slice(0, 10);
    return data.contributions
      .filter((c) => c.date >= cutoffISO && c.date <= todayISO)
      .sort((a, b) => a.date.localeCompare(b.date));
  })() : [];
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

  // Month labels: for each week column, emit a short month name the first time
  // we see a new month in that column's real (non-pad) days. This matches the
  // GitHub convention and lets the viewer read the time axis at a glance.
  const MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const monthLabels: string[] = weeks.map((week) => {
    const firstReal = week.find((d) => d.date);
    if (!firstReal) return "";
    const day = new Date(`${firstReal.date}T00:00:00Z`).getUTCDate();
    // Only label if this column contains the first week of the month.
    return day <= 7 ? MONTHS[new Date(`${firstReal.date}T00:00:00Z`).getUTCMonth()] : "";
  });

  return (
    <div className="mb-16">
      <h2 className="text-white text-xl font-semibold mb-4">
        Contribution Graph
      </h2>
      <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-400 text-sm">
            {lastYearTotal !== null
              ? `${lastYearTotal.toLocaleString()} contributions in the last 365 days`
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
        <div className="flex flex-col gap-1 w-full">
          {/* Month axis */}
          <div className="flex gap-[3px] w-full">
            {monthLabels.map((label, wi) => (
              <div
                key={wi}
                className="flex-1 min-w-0 text-[10px] text-gray-500 leading-none"
              >
                {label}
              </div>
            ))}
          </div>
          {/* Contribution cells */}
          <div className="flex gap-[3px] w-full">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px] flex-1 min-w-0">
                {week.map((day, di) => (
                  <div
                    key={di}
                    className={`aspect-square rounded-sm ring-1 ring-inset ring-gray-700/30 ${
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
