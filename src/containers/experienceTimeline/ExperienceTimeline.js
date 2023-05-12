import React from "react";
import "./ExperienceTimeline.css";

const ExperienceTimeline = ({ theme, experience, lastExperience }) => {
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
          <span className="font-bold cursor-pointer">
            {getExperienceString(experience)}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default ExperienceTimeline;

const getExperienceString = (exp) => {
  const startedAt = new Date(Object.values(exp.startedAt).join("-"));
  const endedAt = exp.endedAt
    ? new Date(Object.values(exp.endedAt).join("-"))
    : new Date();

  const formattedAnswer = {
    startedAt: [
      getMonthName(startedAt.getMonth()),
      startedAt.getFullYear(),
    ].join(" "),
    endedAt: exp.endedAt
      ? [getMonthName(endedAt.getMonth()), endedAt.getFullYear()].join(" ")
      : "present",
  };

  let duration = calculateDateDifference(startedAt, endedAt);

  return Object.values(formattedAnswer).join(" — ") + ` · ${duration}`;
};

const getMonthName = (monthId) => {
  const monthsName = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };

  return monthsName[monthId];
};

const calculateDateDifference = (startDate, endDate) => {
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let days = endDate.getDate() - startDate.getDate();

  const response = [];

  // Adjust for negative differences
  if (days < 0) {
    const daysInLastMonth = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      0
    ).getDate();
    months--;
    days += daysInLastMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years > 1) {
    response.push(`${years} years`);
  } else if (years === 1) {
    response.push(`${years} year`);
  }

  if (months > 1) {
    response.push(`${months} months`);
  } else if (months === 1) {
    response.push(`${months} month`);
  }

  return response.join(", ");
};
