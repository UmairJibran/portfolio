import React, { Component } from "react";
import "./Certifications.css";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main my-10" id="certs">
        <div className="certs-header-div">
          <>
            <h1 className="certs-header mb-10" style={{ color: theme.text }}>
              Certifications
            </h1>
          </>
        </div>
        <div className="certs-body-div">
          {certifications.certifications.map((cert) => {
            return <CertificationCard certificate={cert} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Certifications;
