import React, { Component } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { greeting } from "../../portfolio.js";

class Header extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <header className="header">
          <NavLink to="/home" tag={Link} className="logo">
            <span style={{ color: theme.text }}> &lt;</span>
            <span className="logo-name" style={{ color: "#010101" }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu" style={{ backgroundColor: theme.body }}>
            <li>
              <NavLink
                to="/home"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}
export default Header;
