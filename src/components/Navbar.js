import React from "react";
import { COLORS } from "./../styles.js";
import "./../styles/navbar.css";

// Styles
const header = { display: "flex", justifyContent: "flex-end" };
const logo = { cursor: "pointer", marginRight: "auto" };
const linkList = { listStyle: "none" };
const linkItem = {};
const linkItemLink = {};
const buttons = {};

export default class Navbar extends React.Component {
  render() {
    return (
      <header class="navbarHeader">
        <h3 class="navbarLogo">Henry Quach</h3>
        <nav>
          <ul class="navbarUL">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
          </ul>
        </nav>
        <a href="#">
          <button class="navbarButton">Get in touch!</button>
        </a>
      </header>
    );
  }
}
