import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div
      className="footer-div"
      style={{ backgroundColor: props.theme.experienceBubble }}
    >
      <>
        <p className="footer-text" style={{ color: `${props.theme.body}` }}>
          Umair Jibran {new Date().getFullYear().toString()}&copy;
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle} /> */}
      </>
    </div>
  );
}
