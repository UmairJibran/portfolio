import { Author } from "@/types/author";
import Link from "next/link";
import CoverImage from "@/components/CoverImage";
import DateFormatter from "@/components/DateFormatter";
import Avatar from "@/components/Avatar";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  type: "blog" | "case-study";
};

export function StoryPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  type,
}: Props) {
  const root = type === "blog" ? "/blogs" : "/case-studies";
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug mx-4">
        <Link href={[root, slug].join("/")} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4 mx-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4 font-inconsolata mx-4">
        {excerpt}
      </p>
      <Avatar author={author} size="large" />
    </div>
  );
}
