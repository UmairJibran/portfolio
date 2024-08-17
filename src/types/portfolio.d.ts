export interface IPortfilioItem {
  id: string;
  name: string;
  url: string;
  description: string;
  logo: string;
  source: string | null;
  caseStudy?: string;
}
