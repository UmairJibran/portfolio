import * as React from "react";
// import { Fade } from "react-reveal";
// import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

import "./ProjectCards.css";

const UnifiedProjectsCard = ({ repo }) => {
  return (
    <div className="p-4 lg:w-1/3  unified-projects-card">
      <div className="h-full border border-gray-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          {repo.category?.toUpperCase()}
        </h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          {repo.name}
        </h1>
        <p className="leading-relaxed mb-3">{repo.description}</p>
        <a
          className="text-indigo-500 inline-flex items-center"
          href={repo.url}
          target="_blank"
          rel="noreferrer"
        >
          Visit Project Page
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
        <div className="text-center mt-2 leading-none justify-center absolute bottom-0 left-0 w-full py-4">
          {repo.technologies.map((tech, index) => {
            return (
              <span key={index}>
                <span className="text-gray-400 mx-1 items-center leading-none text-xs">
                  {tech.skillName}{" "}
                  {index !== repo.technologies.length - 1 ? "-" : ""}
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UnifiedProjectsCard;
