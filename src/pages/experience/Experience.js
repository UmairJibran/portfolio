import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
// import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import ExperienceTimeline from "../../containers/experienceTimeline/ExperienceTimeline.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Zoom } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

class Experience extends Component {
  render() {
    const theme = this.props.theme;

    const experiences = [];
    experience["sections"].forEach((v) => {
      experiences.push(...v.experiences);
    });
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Zoom duration={1000}>
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text mb-4"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text mb-6"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Zoom>
        </div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            {/* <ExperienceAccordion sections={experience["sections"]} theme={theme} /> */}
            {experiences.map((experience, index) => {
              return (
                <ExperienceTimeline
                  theme={theme}
                  experience={experience}
                  key={index}
                  lastExperience={index + 1 === experiences.length}
                />
              );
            })}
          </div>
        </section>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
