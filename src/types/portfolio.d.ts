export interface IPortfilioItem {
  id: string;
  name: string;
  url: string | null;
  description: string;
  logo: string;
  source: string | null;
  caseStudy?: string;
}
