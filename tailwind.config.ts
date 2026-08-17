import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--popover) / <alpha-value>)",
          foreground: "rgb(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
          hover: "rgb(var(--primary-hover) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "rgb(var(--border) / <alpha-value>)",
        edge: "rgb(var(--edge) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
        faint: "rgb(var(--faint) / <alpha-value>)",
        brand: {
          DEFAULT: "rgb(var(--brand) / <alpha-value>)",
          foreground: "rgb(var(--brand-foreground) / <alpha-value>)",
        },
        link: {
          DEFAULT: "rgb(var(--link) / <alpha-value>)",
          hover: "rgb(var(--link-hover) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        "hard-sm": "2px 2px 0 0 rgb(var(--shadow-color))",
        hard: "4px 4px 0 0 rgb(var(--shadow-color))",
        "hard-lg": "6px 6px 0 0 rgb(var(--shadow-color))",
        // Accent-coloured variants, for the pieces that get a brand-yellow drop.
        "hard-brand": "6px 6px 0 0 rgb(var(--brand))",
        "hard-brand-lg": "8px 8px 0 0 rgb(var(--brand))",
      },
    },
    fontFamily: {
      mono: ["var(--font-ibm-mono)"],
      inconsolata: ["var(--font-inconsolata)"],
      heading: ["var(--font-heading)"],
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addVariant }) => {
      // Theme-scoped utilities: brutal:shadow-hard, noir:bg-card/50, etc.
      addVariant("brutal", '[data-theme="brutal"] &');
      addVariant("noir", '[data-theme="noir"] &');
    }),
  ],
};
export default config;
