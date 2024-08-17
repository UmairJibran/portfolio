export interface IPortfilioItem {
  id: string;
  name: string;
  url: string;
  description: string;
  logo: string;
  category: string;
  source?: string;
  caseStudy?: string;
  technologies: Technology[];
}

export interface ITechnology {
  skillName: string;
  simpleIcon: string;
  style: Style;
}

export interface IStyle {
  color: string;
  background: string;
}
