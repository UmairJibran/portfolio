import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Testimonials from "../../components/testimonials/Testimonials";
import Projects from "../projects/Projects";
import Contact from "../contact/ContactComponent";
import Experience from "../experience/Experience";
// import GithubStats from "../github/Stats";

const HomeComponent = ({ theme }) => {
  return (
    <>
      <Header theme={theme} />
      <Greeting theme={theme} />
      <Projects theme={theme} />
      <Testimonials theme={theme} />
      <Experience theme={theme} />
      <Skills theme={theme} />
      {/* <GithubStats theme={theme} /> */}
      <Contact theme={theme} />
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </>
  );
};

export default HomeComponent;
