import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { Toaster } from "react-hot-toast";
import Banner from "./containers/global/PalestinianBanner";
import Modal from "./containers/global/InfoModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const referrer = document.referrer;

    const portfolioIdeasLinks = [
      "https://github.com/Evavic44/portfolio-ideas",
      "https://portfolio-ideas.vercel.app/portfolio.html",
    ];

    const apiUrl =
      "https://europe-west2-jibran-u-portfolio-analytics.cloudfunctions.net/greetings";

    const greetUser = async () => {
      if (portfolioIdeasLinks.includes(referrer)) return;
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
      <div>
        <Banner setShowModal={setShowModal} />
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <Toaster />
        <GlobalStyles />
        <Main theme={chosenTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
