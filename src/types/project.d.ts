export type ProjectItem = {
  id: string;
  name: string;
  url: string | null;
  description: string;
  logo: string;
  source: string | null;
  caseStudyUrl?: string;
  featured?: boolean;
  tech?: string[];
};
