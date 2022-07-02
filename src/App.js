import React from "react";
import {useEffect} from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  useEffect(() => {
    const referrer = document.referrer;

    const apiUrl = "https://europe-west2-jibran-u-portfolio-analytics.cloudfunctions.net/greetings";

    const greetUser = async () => {
      await fetch(apiUrl, {
        method: 'POST',
        body: { referrer },
        headers: { 'Content-type': "application/json" }
      })
    }

    greetUser();

  } ,[])
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
