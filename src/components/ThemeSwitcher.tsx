"use client";

import { useEffect, useState } from "react";

type Theme = "noir" | "brutal";

const THEMES = [
  {
    value: "noir",
    label: "NOIR",
    swatch: "#0d0d0d",
    title: "Noir — dark terminal design",
    /* Active styling is driven by the ancestor [data-theme] attribute rather
       than React state, so the highlight is already correct on the first
       paint — the inline head script sets the attribute before we hydrate. */
    active: "noir:bg-foreground noir:text-background",
    inactive: "brutal:hover:bg-accent brutal:hover:text-accent-foreground",
  },
  {
    value: "brutal",
    label: "BRUTAL",
    swatch: "#ffd400",
    title: "Brutal — light brutalist design",
    active: "brutal:bg-foreground brutal:text-background",
    inactive: "noir:hover:text-foreground",
  },
] as const;

function isTheme(value: string | null): value is Theme {
  return value === "noir" || value === "brutal";
}

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem("theme");
    return isTheme(stored) ? stored : null;
  } catch {
    return null;
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme =
    theme === "brutal" ? "light" : "dark";
}

/* Named theme toggle. Shows both design names so it reads as a full design
   switch, not a light/dark toggle. Two independent toggle buttons rather than
   a radiogroup: a radiogroup owes the user arrow-key navigation and a roving
   tabindex, which a two-item switch does not need. */
export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // The inline head script has already resolved the theme before paint.
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(isTheme(current) ? current : "noir");

    // Follow system changes only while the user has no explicit choice.
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (e: MediaQueryListEvent) => {
      if (readStoredTheme()) return;
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
      role="group"
      aria-label="Design theme"
      className="inline-flex items-stretch overflow-hidden rounded-md border border-edge brutal:border-2 brutal:shadow-hard-sm"
    >
      {THEMES.map(({ value, label, swatch, title, active, inactive }) => (
        <button
          key={value}
          type="button"
          aria-pressed={theme === value}
          onClick={() => switchTo(value)}
          data-umami-event={`theme-switch-${value}`}
          className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap bg-transparent px-2.5 py-1.5 text-xs font-bold tracking-wide text-muted-foreground transition-colors ${active} ${inactive}`}
          title={title}
        >
          <span
            aria-hidden
            className="h-2.5 w-2.5 rounded-full border border-edge"
            style={{ backgroundColor: swatch }}
          />
          {label}
        </button>
      ))}
    </div>
  );
}
