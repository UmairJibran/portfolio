import { useState, useRef } from "react";

import ClickableButton from "../../components/button/ClickableButton";
import Loader from "../../components/Loader/LoaderLogo";

const FormComponent = ({ theme, closeEmailForm }) => {
  const [loading, updateLoading] = useState(false);

  const [error, updateError] = useState("");
  const [success, updateSuccess] = useState("");

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

  const emailReference = useRef(null);

  return loading ? (
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
                        <textarea id="message" placeholder="Message"></textarea>
                      </div>
                    </form>
                    {error ? (
                      <>
                        <h2 className="error-message">{error}</h2>
                      </>
                    ) : (
                      <>
                        <h2 className="success-message">{success}</h2>
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
  );
};

export default FormComponent;