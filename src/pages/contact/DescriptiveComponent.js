import { socialMediaLinks } from "../../portfolio.js";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import ClickableButton from "../../components/button/ClickableButton";

const DescriptiveComponent = ({ theme, ContactData, openEmailForm }) => {
  return (
    <div>
      <p
        className="contact-header-detail-text subTitle"
        style={{ color: theme.secondaryText }}
      >
        {ContactData["description"]}
      </p>
      <SocialMedia theme={theme} socialMediaLinks={socialMediaLinks} />

      <div className="resume-btn-div">
        <ClickableButton
          text="Send me a mail!"
          onClick={openEmailForm}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default DescriptiveComponent;
