"use client";

import SocialLink, { SocialLinkProps } from "@/components/SocialLink";

import { social } from "@/data/profile.json";

export default function SocialStrip() {
  return (
    <>
      <div className="flex flex-row gap-4 mt-4">
        {social.map((socialLink: SocialLinkProps) => {
          return (
            <SocialLink
              key={socialLink.link}
              icon={socialLink.icon}
              link={socialLink.link}
              name={socialLink.name}
            />
          );
        })}
      </div>
    </>
  );
}
