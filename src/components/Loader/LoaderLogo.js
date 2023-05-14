import "./LoaderLogo.css";

const LogoLoader = ({ theme, isSplash }) => {
  // const theme = this.props.theme;
  // const isSplash = this.props.isSplash || true;
  return (
    <>
      <img
        src={require("../../assets/splash/umair-jibran-strokes-only_animated.svg").default}
        alt="Jibran!"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%",
          color: theme.imageHighlight,
        }}
      />
    </>
  );
};

export default LogoLoader;
