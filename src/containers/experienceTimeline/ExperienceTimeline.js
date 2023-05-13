import React from "react";
import "./ExperienceTimeline.css";

import RoleTimeline from "../roleTimeline/RoleTimeline";

const ExperienceTimeline = ({
  theme,
  experience,
  lastExperience,
  getExperienceString,
}) => {
  function handleOpen(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }

  const { duration, period } = getExperienceString({
    start: experience.startingDate,
    end: experience.endingDate,
  });

  return (
    <div className="experience-timeline-main flex relative pb-12">
      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
        <div
          style={{ backgroundColor: lastExperience ? "" : `${theme.text}88` }}
          className={`h-full w-1 pointer-events-none`}
        ></div>
      </div>
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10"
        style={{ backgroundColor: `${theme.text}F0` }}
      >
        <img
          src={require(`../../assets/images/${experience.logo_path}`)}
          className="w-5 h-5"
          alt={experience.company}
        />
      </div>
      <div className={"flex-grow pl-4"}>
        <h2
          className="text-base mb-1 tracking-wider"
          style={{ color: theme.text }}
        >
          <span
            className="font-bold cursor-pointer hover:underline underline-offset-4"
            onClick={() => handleOpen(experience.companyUrl)}
          >
            {experience.company}
          </span>
        </h2>
        <h2
          className="text-sm text-gray-900 mb-1 tracking-wider"
          style={{ color: theme.text }}
        >
          <small>{experience.location}</small> {period}{" "}
          <span className="font-bold">· {duration}</span>
        </h2>
        {experience.roles.map((role, index) => {
          return (
            <RoleTimeline
              role={role}
              theme={theme}
              key={index}
              getExperienceString={getExperienceString}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
