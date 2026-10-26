import { ImageResponse } from "next/og";
import hiring from "@/data/hiring.json";

export const alt =
  "Umair Jibran — backend, DevOps and AI/LLM engineer, open to remote roles";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Mirrors the site theme from globals.css. Satori renders a subset of CSS, so
   everything here is flexbox and plain colours — no CSS variables, no grid. */
const BACKGROUND = "#0b0d10";
const FOREGROUND = "#fafafa";
const BRAND = "#4ade80";
const MUTED = "#9ca3af";
const CARD = "#16191e";
const EDGE = "#2b323c";

const STACK = [
  "Node.js",
  "TypeScript",
  "Python",
  "AWS",
  "GCP",
  "LLM workflows",
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BACKGROUND,
          padding: "72px 80px",
          borderBottom: `12px solid ${BRAND}`,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: BRAND,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            umairjibran.com
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 700,
              color: FOREGROUND,
              marginTop: 18,
              lineHeight: 1.05,
            }}
          >
            Umair Jibran
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 42,
              color: MUTED,
              marginTop: 14,
            }}
          >
            Backend · DevOps · AI/LLM Engineer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            {STACK.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  background: CARD,
                  border: `2px solid ${EDGE}`,
                  borderRadius: 10,
                  padding: "10px 20px",
                  fontSize: 28,
                  color: FOREGROUND,
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 30, color: BRAND }}>
            {hiring.availability} · {hiring.preferredRegions.join(" / ")}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
