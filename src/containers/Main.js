import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Resume from "../pages/resume/ResumeComponent";
import Error from "../pages/error/ErrorComponent";
import { settings } from "../portfolio.js";
import { Suspense } from "react";
const Home = React.lazy(() => import("../pages/home/HomeComponent"));

export default class Main extends Component {
  render() {
    return (
      <Suspense
        fallback={
          <div>
            <img
              src={require("../assets/images/infinity-gif.svg")}
              alt="infinity and beyond..."
            />
          </div>
        }
      >
        <div>
          <Router>
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => (
                  <Splash {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/home"
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/resume"
                exact
                render={(props) => (
                  <Resume {...props} theme={this.props.theme} />
                )}
              />
              <Route
                render={(props) => (
                  <Splash {...props} theme={this.props.theme} />
                )}
              />
            </Switch>
          </Router>
        </div>
      </Suspense>
    );
  }
}
