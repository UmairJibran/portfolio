import React, { Component } from "react";
import ExperienceTimeline from "../../containers/experienceTimeline/ExperienceTimeline.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Zoom } from "react-reveal";
import { getExperienceString } from "../../global/utils.js";
import Button from "../../components/button/Button.js";

// import ExperienceImg from "./ExperienceImg";

class Experience extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="experience-main min-h-screen" id="experience">
        <div className="basic-experience">
          <Zoom duration={500}>
            <div className="experience-heading-div">
              {/* <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div> */}
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text mb-4"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text mb-6"
                  style={{ color: `${theme.secondaryText}D0` }}
                >
                  {experience["subtitle"]}
                </h3>
                <div className="w-full flex">
                  <Button text="Resume 📃" href={"/resume"} theme={theme} className="mx-auto" />
                </div>
                {/* <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: `${theme.secondaryText}A0` }}
                >
                  {experience["description"]}
                </p> */}
              </div>
            </div>
          </Zoom>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto  mt-8">
            {/* <ExperienceAccordion sections={experience["sections"]} theme={theme} /> */}
            {experience.timeline.map((exp, index) => {
              return (
                <ExperienceTimeline
                  theme={theme}
                  experience={exp}
                  key={index}
                  lastExperience={index + 1 === experience.timeline.length}
                  getExperienceString={getExperienceString}
                />
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default Experience;
