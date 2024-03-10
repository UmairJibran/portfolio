import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main bg-slate-100 min-h-screen" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={1000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            What can I do for you?
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
