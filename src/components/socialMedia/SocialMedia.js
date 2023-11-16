import React from "react";
import feather from "feather-icons";

import "./SocialMedia.css";

export default function SocialMedia({ socialMediaLinks }) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, index) => {
        return (
          <a
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: feather.icons[media.featherIcon].toSvg({
                  "stroke-width": 0.75,
                  height: 32,
                  width: 32,
                }),
              }}
            />
          </a>
        );
      })}
    </div>
  );
}
