import React from "react";
import { Suspense } from "react";
import Loader from "../components/Loader/Loader";
import Home from "../pages/home/HomeComponent"

export default function Main(props) {
  return (
    <Suspense fallback={<Loader theme={props.theme} />}>
      <Home {...props} theme={props.theme} />
    </Suspense>
  );
}
