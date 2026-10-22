export type ProjectItem = {
  id: string;
  name: string;
  url: string | null;
  description: string;
  logo: string;
  source: string | null;
  caseStudies?: { label: string; url: string }[];
  featured?: boolean;
  category: "work" | "open-source" | "charity";
  tech?: string[];
};
