import * as Icon from "react-feather";

export interface SocialLinkProps {
  icon: string;
  link: string;
  name: string;
}

export default function SocialLink(props: SocialLinkProps) {
  let featherIcon: keyof typeof Icon = "ExternalLink";

  if (Object.keys(Icon).includes(props.icon)) {
    featherIcon = props.icon as keyof typeof Icon;
  }
  const IconComponent = Icon[featherIcon];
  return (
    <>
      <a href={props.link} target="_blank" title={props.name}>
        <IconComponent strokeWidth={1} size={32} />
      </a>
    </>
  );
}
