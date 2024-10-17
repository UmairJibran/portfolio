import { type Author } from "./author";

export type Story = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
  tags: string[];
  type: "blog" | "case-study";
};
