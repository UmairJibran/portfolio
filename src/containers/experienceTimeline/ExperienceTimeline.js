import React from "react";
import "./ExperienceTimeline.css";

const ExperienceTimeline = ({ theme, experience, lastExperience }) => {
  // console.log(experience);

  function handleOpen(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }

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
        <svg
          fill="none"
          stroke={theme.body}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      </div>
      <div className="flex-grow pl-4">
        <h2
          className="text-base mb-1 tracking-wider"
          style={{ color: theme.text }}
        >
          <span className="font-medium">{experience.title}</span>{" "}
          <small>at</small>{" "}
          <span
            className="font-bold cursor-pointer hover:underline underline-offset-4"
            onClick={() => handleOpen(experience.company_url)}
          >
            {experience.company}
          </span>
        </h2>
        <h2
          className="text-sm text-gray-900 mb-1 tracking-wider"
          style={{ color: theme.text }}
        >
          <small>{experience.location}</small>{" "}
          {experience.duration ?? (
            <span className="font-bold cursor-pointer">
              {experience.duration}
            </span>
          )}
        </h2>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
