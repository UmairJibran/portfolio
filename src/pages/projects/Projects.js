import React, { Component } from "react";
import MajorProjectsCard from "../../components/projectsCard/MajorProjectsCard.jsx";
import MinorProjectsCard from "../../components/projectsCard/MinorProjectsCard.jsx";
import Button from "../../components/button/Button";
import { Zoom } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main py-10">
        <div className="basic-projects">
          <Zoom duration={1000}>
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text mb-10"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Zoom>
        </div>
        <>
          {ProjectsData.major.map((repo, index) => {
            return (
              <MajorProjectsCard repo={repo} theme={theme} right={index % 2} />
            );
          })}
        </>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -mx-4 -my-8">
              {ProjectsData.minor.map((repo) => {
                return <MinorProjectsCard repo={repo} />;
              })}
            </div>
          </div>
        </section>
        <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/umairjibran"
          newTab={true}
          theme={theme}
        />
      </div>
    );
  }
}

export default Projects;
