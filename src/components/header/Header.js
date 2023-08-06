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
              style={{ color: theme.text }}
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
              className="mx-3 my-1 cursor-pointer font-light hover:font-bold"
              style={{ color: theme.text }}
              onClick={() => scrollIntoView("Stats")}
            >
              Activity
            </li>
            <li
              className="mx-3 my-1 cursor-pointer font-light hover:font-bold custom-underline"
              style={{ color: theme.text }}
              onClick={() => scrollIntoView("experience")}
            >
              Experience
            </li>
            <li
              className="mx-3 my-1 cursor-pointer font-light hover:font-bold custom-underline"
              style={{ color: theme.text }}
              onClick={() => scrollIntoView("projects")}
            >
              Projects
            </li>
            <li
              className="mx-3 my-1 cursor-pointer font-light hover:font-bold custom-underline"
              style={{ color: theme.text }}
              onClick={() => scrollIntoView("skills")}
            >
              Skills
            </li>
            <li
              className="mx-3 my-1 cursor-pointer font-light hover:font-bold custom-underline"
              style={{ color: theme.text }}
              onClick={() => scrollIntoView("testimonials")}
            >
              References
            </li>
            <li
              className="mx-3 my-1 cursor-pointer font-light hover:font-bold custom-underline"
              style={{ color: theme.text }}
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
