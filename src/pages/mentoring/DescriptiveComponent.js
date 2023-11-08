const DescriptiveComponent = ({ theme }) => {
  return (
    <div>
      <p
        className="contact-header-detail-text subTitle"
        style={{ color: theme.secondaryText }}
      >
        Are you a new grad or final stage student feeling lost about your career
        path? Don't worry, I'm here to help! As an experienced professional in
        the tech industry, I've seen my fair share of resumes and LinkedIn
        profiles. Let me guide you in streamlining your CV, optimizing your
        LinkedIn profile, and finding your ideal career path. My goal is to help
        you land your dream job by showcasing your skills and experience
        effectively. If you're interested in career mentoring, don't hesitate to
        reach out to me at{" "}
        <a
          href="mailto:mentoring@umairjibran.com"
          className="custom-underline"
          style={{
            color: theme.alternateText
          }}
        >
          mentoring@umairjibran.com
        </a>
        . I can't wait to help you achieve your goals! Did I forget to mention?
        My career mentoring services are completely free of cost!
      </p>
    </div>
  );
};

export default DescriptiveComponent;
