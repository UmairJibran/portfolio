import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
// import FullStackImg from "./FullStackImg";
// import CloudInfraImg from "./CloudInfraImg";
// import DesignImg from "./DesignImg";

// function GetSkillSvg(props) {
//   if (props.fileName === "FullStackImg")
//     return <FullStackImg theme={props.theme} />;
//   else if (props.fileName === "CloudInfraImg")
//     return <CloudInfraImg theme={props.theme} />;
//   return <DesignImg theme={props.theme} />;
// }

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, index) => {
          return (
            <div className="skills-main-div h-fit" key={index}>
              {/* <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade> */}

              <div className="skills-text-div">
                <Fade left duration={500}>
                  <h1
                    className="skills-heading mx-auto text-center"
                    style={{ color: theme.text }}
                  >
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade left duration={1000}>
                  <div>
                    {skill.skills.map((skillSentence, key) => {
                      return (
                        <p
                          className="subTitle skills-text mt-1"
                          style={{ color: `${theme.secondaryText}D0` }}
                          key={key}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
