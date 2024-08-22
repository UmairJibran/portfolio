import markdownStyles from "@/styles/markdown-styles.module.css";
import parse from "html-react-parser";

type Props = {
  content: string;
};

export function BlogBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto font-inconsolata">
      <div className={markdownStyles["markdown"]}>{parse(content)}</div>
    </div>
  );
}
