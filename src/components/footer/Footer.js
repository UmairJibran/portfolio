import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
// import ToggleSwitch from "../../components/footer/ToggleSwitch";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div" style={{ backgroundColor: props.theme.experienceBubble }}>
      <Fade>
        <p className="footer-text" style={{ color: `${props.theme.body}` }}>
          {new Date().getFullYear().toString()}&copy; Made with{" "}
          <span role="img">🤍</span> by
          <a
            href="https://www.linkedin.com/in/umairjibran/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Umair Jibran
          </a>
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle} /> */}
      </Fade>
    </div>
  );
}
