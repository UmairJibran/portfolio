/** A post from the Ghost RSS feed. */
export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  url: string;
  date: string;
  tags: string[];
  type: "blog" | "case-study";
};
