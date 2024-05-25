import * as React from "react";

import "./ProjectCards.css";

const UnifiedProjectsCard = ({ repo, theme }) => {
  return (
    <a
      className="inline-flex items-center cursor-pointer m-4 w-full"
      style={{
        color: theme.alternateText,
      }}
      href={repo.url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="w-full unified-projects-card">
        <div className="h-full border-2 border-black bg-opacity-75 px-8 py-4 rounded-lg">
          <h1
            className="title-font sm:text-2xl text-xl font-bold"
            style={{ color: `${theme.text}D0` }}
          >
            {repo.name}{" "}
            <span
              className="text-xs title-font font-semibold"
              style={{
                color: `${theme.text}7F`,
              }}
            >
              {repo.category?.toUpperCase()}
            </span>
          </h1>

          <p
            className="leading-relaxed mb-3"
            style={{ color: `${theme.text}A0` }}
          >
            {repo.description}
          </p>
          <div className="mt-2 leading-none bottom-0 left-0 w-full py-4">
            <div className="flex flex-wrap">
              {repo.technologies.map((tech) => {
                return (
                  <span
                    className="mx-1 my-2 leading-none text-xs rounded-full px-2 py-1"
                    key={tech.skillName}
                    style={tech.style}
                  >
                    {tech.skillName}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default UnifiedProjectsCard;
