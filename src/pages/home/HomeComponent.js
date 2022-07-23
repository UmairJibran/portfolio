import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Testimonials from "../../components/testimonials/Testimonials";
import Projects from "../projects/Projects";
import Contact from "../contact/ContactComponent";
import Experience from "../experience/Experience";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Projects theme={this.props.theme} />
        <Testimonials theme={this.props.theme} />
        <Experience theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Contact theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
