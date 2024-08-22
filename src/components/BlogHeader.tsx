import Avatar from "@/components/Avatar";
import CoverImage from "@/components/CoverImage";
import DateFormatter from "@/components/DateFormatter";
import { BlogTitle } from "@/components/BlogTitle";
import { Author } from "@/types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function BlogHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <BlogTitle>{title}</BlogTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl px-4 mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
