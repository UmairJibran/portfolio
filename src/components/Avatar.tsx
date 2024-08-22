import { Author } from "@/types/author";
import AntdAvatar from "antd/es/avatar/avatar";
import { AvatarSize } from "antd/es/avatar/AvatarContext";
import cn from "classnames";
import Image from "next/image";

interface Props {
  size?: AvatarSize | undefined;
  author: Author;
  className?: string;
}

export default function Avatar({ author, size, className }: Props) {
  return (
    <>
      <span className={cn(className, "flex flex-row gap-2")}>
        <AntdAvatar
          size={size}
          icon={
            <Image
              src={author.picture}
              alt={author.name}
              width={48}
              height={48}
            />
          }
        />
        <span className="flex items-center">{author.name}</span>
      </span>
    </>
  );
}
