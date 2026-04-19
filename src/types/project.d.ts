export type ProjectItem = {
  id: string;
  name: string;
  url: string | null;
  description: string;
  logo: string;
  source: string | null;
  caseStudySlug?: string;
  featured?: boolean;
  tech?: string[];
};
