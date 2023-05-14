import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Splash from "../pages/splash/Splash";
import Resume from "../pages/resume/ResumeComponent";
import { Suspense } from "react";
import Loader from "../components/Loader/Loader";
const Home = React.lazy(() => import("../pages/home/HomeComponent"));

export default class Main extends Component {
  render() {
    return (
      <Suspense fallback={<Loader theme={this.props.theme} />}>
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
