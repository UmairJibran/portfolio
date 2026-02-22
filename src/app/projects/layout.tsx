import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Umair Jibran",
  description: "Explore my portfolio of software projects, full-stack applications, and technical solutions.",
  openGraph: {
    type: "website",
    title: "Projects - Umair Jibran",
    description: "Explore my portfolio of software projects, full-stack applications, and technical solutions.",
    url: "/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Umair Jibran",
    description: "Explore my portfolio of software projects, full-stack applications, and technical solutions.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
