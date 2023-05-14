import React from "react";
import "./RoleTimeline.css";

const RoleTimeline = ({ theme, role, getExperienceString }) => {
  const { duration, period } = getExperienceString({
    start: role.startedAt,
    end: role.endedAt,
  });

  return (
    <div className="role-timeline-main flex relative pb-4">
      <div className="ml-9">
        <h3
          className="text-base font-semibold mb-1"
          style={{ color: theme.text }}
        >
          ⭐ {role.title}
        </h3>
        <span className="text-zinc-100 text-sm">
          {period} · {duration}
        </span>
        <br />
        <div className="text-justify">
          <small
            className="text-sm text-ellipsis text-justify"
            style={{ color: `${theme.secondaryText}A0` }}
          >
            {role.description}
          </small>
        </div>
      </div>
    </div>
  );
};

export default RoleTimeline;
