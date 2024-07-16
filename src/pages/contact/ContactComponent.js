import React, { useState } from "react";

import DescriptiveComponent from "./DescriptiveComponent";
import FormComponent from "./FormComponent";

import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";
// import AddressImg from "./AddressImg";

const ContactData = contactPageData.contactSection;

const ContactComponent = ({ theme }) => {
  const [showEmailForm, updateShowEmailForm] = useState(false);

  const openEmailForm = () => {
    updateShowEmailForm(true);
  };
  const closeEmailForm = () => updateShowEmailForm(false);

  return (
    <div
      className={`contact-main pb-10 ${showEmailForm ? "-mb-20 -pb-5" : ""} bg-slate-100 min-h-screen text-center items-center justify-center flex`}
      id="contact"
    >
      <div className="basic-contact">
        < >
          <div className="contact-heading-div">
            {/* <div className="contact-heading-img-div">
              <AddressImg theme={theme} />
            </div> */}
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text mb-10"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              {showEmailForm ? (
                <FormComponent theme={theme} closeEmailForm={closeEmailForm} />
              ) : (
                <DescriptiveComponent
                  theme={theme}
                  ContactData={ContactData}
                  openEmailForm={openEmailForm}
                />
              )}
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default ContactComponent;
