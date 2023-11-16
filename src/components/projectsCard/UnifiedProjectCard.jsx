import * as React from "react";
// import { Fade } from "react-reveal";
// import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

import "./ProjectCards.css";

const UnifiedProjectsCard = ({ repo, theme }) => {
  return (
    <div className="p-4 lg:w-1/3 w-full unified-projects-card">
      <div className="h-full border border-slate-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative glass-effect">
        <h2
          className="tracking-widest text-xs title-font font-semibold mb-1 -mt-8"
          style={{
            color: `${theme.text}53`,
          }}
        >
          {repo.category?.toUpperCase()}
        </h2>
        <h1
          className="title-font sm:text-2xl text-xl font-bold  mb-3"
          style={{ color: `${theme.text}D0` }}
        >
          {repo.name}
        </h1>
        <p
          className="leading-relaxed mb-3"
          style={{ color: `${theme.text}A0` }}
        >
          {repo.description}
        </p>
        <a
          className="inline-flex items-center custom-underline cursor-pointer"
          style={{
            color: theme.alternateText,
          }}
          href={repo.url}
          target="_blank"
          rel="noreferrer"
        >
          Learn more.
        </a>
        <div className="text-center mt-2 leading-none justify-center absolute bottom-0 left-0 w-full py-4">
          {repo.technologies.map((tech, index) => {
            return (
              <span
                className="mx-1 items-center leading-none text-xs"
                key={index}
                style={{
                  color: `${theme.text}41`,
                }}
              >
                {tech.skillName}{" "}
                {index !== repo.technologies.length - 1 ? "-" : ""}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UnifiedProjectsCard;
