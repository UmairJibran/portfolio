/**
 * Generates src/styles/hljs-themes.css from highlight.js' bundled stylesheets.
 *
 * rehype-highlight emits `.hljs-*` class names, but we ship two designs on one
 * page, so a single hljs stylesheet won't do. This scopes each upstream theme
 * under its `[data-theme]` attribute so both can coexist and the switcher can
 * flip between them with no JS.
 *
 * Run after bumping highlight.js:
 *   node scripts/generate-hljs-themes.js
 */

const fs = require("fs");
const path = require("path");

const THEMES = [
  { attr: "noir", source: "github-dark.css" },
  { attr: "brutal", source: "github.css" },
];

const STYLES_DIR = path.join(
  __dirname,
  "..",
  "node_modules",
  "highlight.js",
  "styles",
);
const OUT_FILE = path.join(__dirname, "..", "src", "styles", "hljs-themes.css");

/**
 * Splits a flat stylesheet (no at-rules, no nesting — true of every
 * highlight.js theme) into { selector, declarations } pairs. Comments are
 * dropped; upstream uses them as documentation only. Rules whose body is
 * nothing but a comment are dropped too, since an empty block is invalid to
 * stylelint (block-no-empty) and has no effect.
 */
function parseRules(css) {
  const withoutComments = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const rules = [];

  for (const match of withoutComments.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const selectors = match[1]
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const declarations = match[2]
      .split(";")
      .map((d) => d.trim())
      .filter(Boolean);

    if (selectors.length === 0 || declarations.length === 0) continue;
    rules.push({ selectors, declarations });
  }

  return rules;
}

function render(attr, rules) {
  return rules
    .map(({ selectors, declarations }) => {
      const scoped = selectors
        .map((s) => `[data-theme="${attr}"] ${s}`)
        .join(",\n");
      const body = declarations.map((d) => `  ${d};`).join("\n");
      return `${scoped} {\n${body}\n}`;
    })
    .join("\n\n");
}

const banner = `/* GENERATED FILE — do not edit by hand.
   Source: highlight.js ${
     require("highlight.js/package.json").version
   } (${THEMES.map((t) => t.source).join(", ")}).
   Regenerate with: node scripts/generate-hljs-themes.js */\n`;

const blocks = THEMES.map(({ attr, source }) => {
  const css = fs.readFileSync(path.join(STYLES_DIR, source), "utf8");
  return `/* ${source} -> [data-theme="${attr}"] */\n${render(
    attr,
    parseRules(css),
  )}`;
});

fs.writeFileSync(OUT_FILE, `${banner}\n${blocks.join("\n\n")}\n`, "utf8");

console.log(
  `Wrote ${path.relative(path.join(__dirname, ".."), OUT_FILE)} (${
    THEMES.length
  } themes)`,
);
