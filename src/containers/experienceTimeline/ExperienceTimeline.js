import React from "react";
import "./ExperienceTimeline.css";

const ExperienceTimeline = ({ theme, experience, lastExperience }) => {
  function handleOpen(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }

  const { duration, period } = getExperienceString(experience);

  return (
    <div className="experience-timeline-main flex relative pb-12">
      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
        <div
          style={{ backgroundColor: lastExperience ? "" : `${theme.text}88` }}
          className={`h-full w-1 pointer-events-none`}
        ></div>
      </div>
      {!experience.continued && (
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
      )}
      <div
        className={experience.continued ? "flex-grow pl-20" : "flex-grow pl-4"}
      >
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
          <small>{experience.location}</small> {period}{" "}
          <span className="font-bold cursor-pointer">· {duration}</span>
        </h2>
      </div>
    </div>
  );
};

export default ExperienceTimeline;

const getExperienceString = (exp) => {
  const startedAt = new Date();
  const endedAt = new Date();

  startedAt.setDate(exp.startedAt.day);
  startedAt.setMonth(getMonthId(exp.startedAt.month));
  startedAt.setFullYear(exp.startedAt.year);
  if (exp.endedAt) {
    endedAt.setDate(exp.endedAt.day);
    endedAt.setMonth(getMonthId(exp.endedAt.month));
    endedAt.setFullYear(exp.endedAt.year);
  }

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

  return { period: Object.values(formattedAnswer).join(" — "), duration };
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

const getMonthId = (monthName) => {
  const monthsIds = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  return monthsIds[monthName];
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
