import * as Icon from 'react-feather';

export interface SocialLinkProps {
  icon: keyof typeof Icon;
  link: string;
  name: string;
}

export default function SocialLink(props: SocialLinkProps) {
  const IconComponent = Icon[props.icon] || Icon['ExternalLink'];
  return (
    <>
      <a href={props.link} target="_blank" title={props.name}>
        <IconComponent strokeWidth={0.75} size={32} />
      </a>
    </>
  );
}
