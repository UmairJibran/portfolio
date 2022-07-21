import * as React from "react";
import { Fade } from "react-reveal";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

import "./ProjectCards.css";

const MinorProjectsCard = ({ repo }) => {
  function handleOpen(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      className="m-2 py-8 px-4 lg:w-1/4 cursor-pointer bg-semi-grey minor-projects-card"
      onClick={() => handleOpen(repo.url)}
    >
      <div className="h-full flex items-start">
        <div className="flex-grow">
          {/* <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1"></h2> */}
          <h1 className="title-font text-xl font-medium text-gray-900">
            {repo.name}
          </h1>
          <Fade right duration={1500}>
            <SoftwareSkill logos={repo.technologies} />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default MinorProjectsCard;
