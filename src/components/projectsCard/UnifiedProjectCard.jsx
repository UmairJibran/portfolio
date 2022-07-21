import * as React from "react";
// import { Fade } from "react-reveal";
// import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

import "./ProjectCards.css";

const UnifiedProjectsCard = ({ repo }) => {
  return (
    <div class="p-4 lg:w-1/3  unified-projects-card">
      <div class="h-full border border-gray-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          {repo.category?.toUpperCase()}
        </h2>
        <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          {repo.name}
        </h1>
        <p class="leading-relaxed mb-3">{repo.description}</p>
        <a
          class="text-indigo-500 inline-flex items-center"
          href={repo.url}
          target="_blank"
          rel="noreferrer"
        >
          Visit Project Page
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
        <div class="text-center mt-2 leading-none justify-center absolute bottom-0 left-0 w-full py-4">
          {repo.technologies.map((tech, index) => {
            return (
              <span key={index}>
                <span class="text-gray-400 mr-3 items-center leading-none text-xs px-1">
                  {tech.skillName}
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
