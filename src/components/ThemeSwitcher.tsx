"use client";

import { useEffect, useState } from "react";

type Theme = "noir" | "brutal";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme =
    theme === "brutal" ? "light" : "dark";
}

/* Named theme toggle. Shows both design names so it reads as a full
   design switch, not a light/dark toggle. The inactive name is the
   click target ("switch to that theme"). */
export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // The inline head script has already resolved the theme before paint.
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "brutal" ? "brutal" : "noir");

    // Follow system changes only while the user has no explicit choice.
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem("theme")) return;
      } catch {
        return;
      }
      const next: Theme = e.matches ? "brutal" : "noir";
      applyTheme(next);
      setTheme(next);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const switchTo = (next: Theme) => {
    applyTheme(next);
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // private mode etc. — theme still applies for this page view
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label="Design theme"
      className="inline-flex items-stretch overflow-hidden rounded-md border border-edge brutal:border-2 brutal:shadow-hard-sm"
    >
      {(
        [
          { value: "noir", label: "NOIR", swatch: "#0d0d0d" },
          { value: "brutal", label: "BRUTAL", swatch: "#ffd400" },
        ] as const
      ).map(({ value, label, swatch }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            role="radio"
            aria-checked={active}
            onClick={() => switchTo(value)}
            data-umami-event={`theme-switch-${value}`}
            className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap px-2.5 py-1.5 text-xs font-bold tracking-wide transition-colors ${
              active
                ? "bg-foreground text-background"
                : "bg-transparent text-muted-foreground hover:text-foreground brutal:hover:bg-accent brutal:hover:text-accent-foreground"
            }`}
            title={
              value === "noir"
                ? "Noir — dark terminal design"
                : "Brutal — light brutalist design"
            }
          >
            <span
              aria-hidden
              className="h-2.5 w-2.5 rounded-full border border-edge brutal:border-black"
              style={{ backgroundColor: swatch }}
            />
            {label}
          </button>
        );
      })}
    </div>
  );
}
