import React, { Component } from "react";
import "./Resume.css";

class Resume extends Component {
  render() {
    return (
      <div className="div-resume">
        <embed
          src={require(`../../assets/documents/umair_jibran_cv.pdf`)}
          type="application/pdf"
          className="embed-resume"
        />
      </div>
    );
  }
}

export default Resume;
