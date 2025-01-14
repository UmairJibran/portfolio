import markdownStyles from "@/styles/markdown-styles.module.css";
import parse from "html-react-parser";

type Props = {
  content: string;
};

export function StoryBody({ content }: Props) {
  return (
    <div className="font-inconsolata">
      <div className={markdownStyles["markdown"]}>{parse(content)}</div>
    </div>
  );
}
