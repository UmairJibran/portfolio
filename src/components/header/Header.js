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
        <header className="header sticky top-0 z-50">
          <div>
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
              className="mx-2 cursor-pointer"
              onClick={() => scrollIntoView("projects")}
              activeStyle={{ fontWeight: "normal" }}
              style={{ color: theme.text }}
            >
              Projects
            </li>
            <li
              className="mx-2 cursor-pointer"
              onClick={() => scrollIntoView("experience")}
              activeStyle={{ fontWeight: "normal" }}
              style={{ color: theme.text }}
            >
              Experience
            </li>
            <li
              className="mx-2 cursor-pointer"
              onClick={() => scrollIntoView("contact")}
              activeStyle={{ fontWeight: "normal" }}
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
