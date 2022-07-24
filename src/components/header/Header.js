import React, { Component } from "react";
import "./Header.css";
import { greeting } from "../../portfolio.js";

class Header extends Component {
  render() {
    const theme = this.props.theme;

    const scrollIntoView = (view) => {
      document.getElementById(view).scrollIntoView();
    };

    return (
      <div>
        <header className="header">
          <div className="hidden md:block">
            <span style={{ color: theme.text }}> &lt;</span>
            <span
              className="logo-name cursor-pointer"
              style={{ color: "#010101" }}
            >
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </div>

          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu" style={{ backgroundColor: theme.body }}>
            <li
              className="mx-3 my-1 cursor-pointer font-light text-slate-500 hover:font-bold hover:text-cyan-900"
              onClick={() => scrollIntoView("projects")}
            >
              Projects
            </li>
            {/* <li
              className="mx-3 my-1 cursor-pointer font-light text-slate-500 hover:font-bold hover:text-cyan-900"
              onClick={() => scrollIntoView("testimonials")}
            >
              References
            </li> */}
            <li
              className="mx-3 my-1 cursor-pointer font-light text-slate-500 hover:font-bold hover:text-cyan-900"
              onClick={() => scrollIntoView("experience")}
            >
              Experience
            </li>
            <li
              className="mx-3 my-1 cursor-pointer font-light text-slate-500 hover:font-bold hover:text-cyan-900"
              onClick={() => scrollIntoView("skills")}
            >
              Skills
            </li>
            {/* <li
              className="mx-3 my-1 cursor-pointer font-light text-slate-500 hover:font-bold hover:text-cyan-900"
              onClick={() => scrollIntoView("Stats")}
            >
              Stats
            </li> */}
            <li
              className="mx-3 my-1 cursor-pointer font-light text-slate-500 hover:font-bold hover:text-cyan-900"
              onClick={() => scrollIntoView("contact")}
            >
              Contact
            </li>
          </ul>
        </header>
      </div>
    );
  }
}
export default Header;
