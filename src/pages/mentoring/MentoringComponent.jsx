import { Zoom } from "react-reveal";

import DescriptiveComponent from "./DescriptiveComponent";

const ContactComponent = ({ theme }) => {
  return (
    <div
      className="contact-main py-5 bg-slate-100 min-h-screen text-center items-center justify-center flex"
      id="market"
    >
      <div className="basic-contact">
        <Zoom duration={500}>
          <div className="contact-heading-div">
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text mb-10"
                style={{ color: theme.text }}
              >
                Require Mentoring?
              </h1>
              <DescriptiveComponent theme={theme} />
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default ContactComponent;
