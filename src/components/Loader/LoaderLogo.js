import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    // const theme = this.props.theme;
    const isSplash = this.props.isSplash || true;
    return (
      <div>
        <img
          src={require("../../assets/images/infinity-gif.svg").default}
          alt="infinity and beyond..."
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
        />
        {isSplash ?? (
          <>
            <br />
            <p
              style={{
                color: "white",
                textAlignVertical: "center",
                textAlign: "center",
                width: "100%",
              }}
            >
              selecting secrets to reveal...{" "}
              <span role="img" aria-label="winking">
                😉
              </span>
            </p>
          </>
        )}
      </div>
    );
  }
}

export default LogoLoader;
