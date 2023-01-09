import React from "react";
import { useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    const referrer = document.referrer;

    const apiUrl =
      "https://europe-west2-jibran-u-portfolio-analytics.cloudfunctions.net/greetings";

    const greetUser = async () => {
      if (referrer === 'https://github.com/Evavic44/portfolio-ideas') return
      await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({ referrer }),
        headers: { "Content-type": "application/json" },
      });
    };

    greetUser();
  }, []);
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <Toaster />
        <GlobalStyles />
        <Main theme={chosenTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
