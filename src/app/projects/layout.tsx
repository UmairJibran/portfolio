import type { Metadata } from "next";

const description =
  "Software Umair Jibran has built — product work at PuppyDog.io, MeraID and Afterwork, open-source tools, and non-profit projects — with the Node.js, TypeScript, AWS, GCP and LLM stack behind each one.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    title: "Projects · Umair Jibran",
    description,
    url: "/projects",
  },
  twitter: {
    card: "summary",
    title: "Projects · Umair Jibran",
    description,
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
