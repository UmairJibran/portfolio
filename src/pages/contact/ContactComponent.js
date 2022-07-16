import React, { useState, useRef } from "react";
import Header from "../../components/header/Header";
import Loader from "../../components/Loader/LoaderLogo";
// import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import ClickableButton from "../../components/button/ClickableButton";
import { Zoom } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData, socialMediaLinks } from "../../portfolio.js";
import AddressImg from "./AddressImg";

const ContactData = contactPageData.contactSection;

export default function ({ theme }) {
  const [loading, updateLoading] = useState(false);
  const [showEmailForm, updateShowEmailForm] = useState(false);
  const [error, updateError] = useState("");
  const [success, updateSuccess] = useState("");

  const emailReference = useRef(null);

  const openEmailForm = () => {
    updateError("");
    updateShowEmailForm(true);
  };
  const closeEmailForm = () => updateShowEmailForm(false);

  const sendEmail = async () => {
    updateLoading(true);
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const apiUrl =
      "https://europe-west2-jibran-u-portfolio-analytics.cloudfunctions.net/contact";

    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        emailBody: message,
        senderEmail: email,
        senderName: name,
        emailSubject: subject,
      }),
      headers: { "Content-type": "application/json" },
    });

    if (response.status >= 200 && response.status < 300) {
      updateSuccess("Email Sent!");
      updateError("");
      updateLoading(false);
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    } else {
      const data = await response.json(response);
      updateError(data.message);
      updateLoading(false);
      document.getElementById("name").value = name || "";
      document.getElementById("email").value = email || "";
      document.getElementById("subject").value = subject || "";
      document.getElementById("message").value = message || "";
    }
  };

  return (
    <div className="contact-main">
      <Header theme={theme} />
      <div className="basic-contact">
        <Zoom duration={1000}>
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <AddressImg theme={theme} />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text mb-10"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              {showEmailForm ? (
                loading ? (
                  <>
                    <Loader isSplash={false} />
                  </>
                ) : (
                  <>
                    <div className="container">
                      <div className="login-root">
                        <div
                          className="box-root flex-flex flex-direction--column"
                          style={{ minHeight: "10vh", flexGrow: 1 }}
                        >
                          <div
                            className="box-root padding-top--24 flex-flex flex-direction--column"
                            style={{ flexGrow: 1, zIndex: 9 }}
                          >
                            <div className="formbg-outer">
                              <div className="formbg">
                                <div className="formbg-inner padding-horizontal--48">
                                  <form id="stripe-login">
                                    <div
                                      className="field padding-bottom--24"
                                      style={{
                                        display: "inline-flex",
                                        width: "100%",
                                      }}
                                    >
                                      <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        style={{
                                          marginInlineEnd: 10,
                                        }}
                                        id="email"
                                        ref={emailReference}
                                      />
                                      <input
                                        type="text"
                                        name="Name"
                                        placeholder="Name"
                                        style={{
                                          marginInlineStart: 10,
                                        }}
                                        id="name"
                                      />
                                    </div>
                                    <div className="field padding-bottom--24">
                                      <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        id="subject"
                                      />
                                    </div>
                                    <div className="field padding-bottom--24">
                                      <textarea
                                        id="message"
                                        placeholder="Message"
                                      ></textarea>
                                    </div>
                                  </form>
                                  {error ? (
                                    <>
                                      <h2 className="error-message">{error}</h2>
                                    </>
                                  ) : (
                                    <>
                                      <h2 className="success-message">
                                        {success}
                                      </h2>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="resume-btn-div">
                        <ClickableButton
                          className={"margin-end-40"}
                          text="Close Form!"
                          onClick={closeEmailForm}
                          theme={theme}
                        />{" "}
                        <div className="mx-5"></div>{" "}
                        <ClickableButton
                          className={"margin-start-40"}
                          text="Send!"
                          onClick={sendEmail}
                          theme={theme}
                        />
                      </div>
                    </div>
                  </>
                )
              ) : (
                <></>
              )}
              <div>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia
                  theme={theme}
                  socialMediaLinks={socialMediaLinks}
                />

                <div className="resume-btn-div">
                  <ClickableButton
                    text="Send me a mail!"
                    onClick={openEmailForm}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
      {/* <Footer theme={theme} /> */}
      <TopButton theme={theme} />
    </div>
  );
}
