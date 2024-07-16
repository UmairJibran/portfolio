import React, { Component } from "react";
import ProjectCard from "../../components/projectsCard/minimalProjectCard.jsx";
import Button from "../../components/button/Button";
import { projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main" id="projects">
        <div className="basic-projects">
          <>
            <div className="projects-heading-div">
              {/* <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div> */}
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text mb-10"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: `${theme.secondaryText}A0` }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </>
        </div>
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            {[...ProjectsData.major, ...ProjectsData.minor].map(
              (repo, index) => {
                return (
                  <ProjectCard
                    repo={repo}
                    key={index}
                    theme={theme}
                    right={index % 2}
                  />
                );
              }
            )}
          </div>
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/umairjibran?tab=repositories&sort=stargazers"
          newTab={true}
          theme={theme}
        />
      </div>
    );
  }
}

export default Projects;
