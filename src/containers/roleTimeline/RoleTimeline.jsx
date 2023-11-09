import React from "react";
import "./RoleTimeline.css";

const RoleTimeline = ({ theme, role, getExperienceString }) => {
  const { duration, period } = getExperienceString({
    start: role.startedAt,
    end: role.endedAt,
  });

  return (
    <div className="role-timeline-main flex relative">
      <div className="ml-9 my-2">
        <h3 className="text-base font-semibold" style={{ color: theme.text }}>
          ⭐ {role.title}
        </h3>
        <span className="text-sm" style={{ color: `${theme.text}D0` }}>
          {period} · {duration}
        </span>
        {/* <br />
        <div className="text-justify">
          <small
            className="text-sm text-ellipsis text-justify"
            style={{ color: `${theme.secondaryText}A0` }}
          >
            {role.description}
          </small>
        </div> */}
      </div>
    </div>
  );
};

export default RoleTimeline;
