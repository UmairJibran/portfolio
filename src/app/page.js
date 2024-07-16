'use client';

import React from "react";
import { useEffect, } from "react";

function App() {
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

        // greetUser();
    }, []);



    return (
        <h1>Hello world</h1>
    );
}

export default App;
