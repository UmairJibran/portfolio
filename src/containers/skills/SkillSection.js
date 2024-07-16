import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, index) => {
          return (
            <div className="skills-main-div h-fit" key={index}>
              <div className="skills-text-div">
                <>
                  <h2
                    className="skills-heading mx-auto text-center"
                    style={{ color: theme.text, marginBottom: "2rem" }}
                  >
                    {skill.title}
                  </h2>
                </>
                <>
                  <div className="mx-auto ml-4">
                    <SoftwareSkill logos={skill.softwareSkills} />
                  </div>
                </>
                <>
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
                </>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
