import * as React from "react";
import { Fade } from "react-reveal";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

import "./ProjectCards.css";

export default function MajorProjectsCard({ repo, right }) {
  function handleOpen(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }
  return right ? (
    <section
      onClick={() => handleOpen(repo.url)}
      class="rounded-lg mx-auto md:mx-32 my-8 text-gray-600 body-font cursor-pointer bg-semi-grey"
    >
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div class="w-full sm:p-4 px-4 mb-6">
            <h1 class="title-font font-bold text-2xl mb-2 text-gray-900">
              {repo.name}
            </h1>
            {/* <div class="leading-relaxed">{repo.description}</div> */}
          </div>
          <Fade right duration={1500}>
            <SoftwareSkill logos={repo.technologies} />
          </Fade>
          {/* <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
            <p class="leading-relaxed">Users</p>
          </div> */}
        </div>
        <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            class="object-cover object-center w-full h-full"
            src={require(`../../assets/projects/logos/${repo.logo}.png`)}
            alt="stats"
          />
        </div>
      </div>
    </section>
  ) : (
    <section
      onClick={() => handleOpen(repo.url)}
      class="rounded-lg -mx-4  md:mx-32 my-8 text-gray-600 body-font cursor-pointer bg-semi-grey"
    >
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 sm:w-1/3 w-full overflow-hidden mt-6 sm:mt-0 sm:pr-10">
          <img
            class="object-cover object-center w-full h-full rounded-lg"
            src={require(`../../assets/projects/logos/${repo.logo}.png`)}
            alt="stats"
          />
        </div>
        <div class="flex flex-wrap mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start">
          <div class="w-full sm:p-4 px-4 mb-6">
            <h1 class="title-font font-bold text-2xl mb-2 text-gray-900">
              {repo.name}
            </h1>
            {/* <div class="leading-relaxed">{repo.description}</div> */}
          </div>
          <Fade left duration={1500}>
            <SoftwareSkill logos={repo.technologies} />
          </Fade>
          {/* <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
            <p class="leading-relaxed">Users</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
