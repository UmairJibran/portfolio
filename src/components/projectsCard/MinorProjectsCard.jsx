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
      class="py-8 px-4 lg:w-1/3 cursor-pointer bg-semi-grey"
      onClick={() => handleOpen(repo.url)}
    >
      <div class="h-full flex items-start">
        <div class="flex-grow">
          {/* <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1"></h2> */}
          <h1 class="title-font text-xl font-medium text-gray-900">
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
