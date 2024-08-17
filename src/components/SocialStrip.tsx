"use client";

import SocialLink from "@/components/SocialLink";

import { social } from "@/data/profile.json";
import { ISocialLinkProps } from "@/types/social";

export default function SocialStrip() {
  return (
    <>
      <div className="flex flex-row gap-4 mt-4">
        {social.map((socialLink: ISocialLinkProps) => {
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
