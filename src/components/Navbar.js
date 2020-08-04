import React from "react";
import HamburgerMenu from "./HamburgerMenu.js";
import "./../styles/navbar.css";

// Styles
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos,
    });
  }
  render() {
    return (
      <header class={this.state.show ? "navbarHeader" : "navbarHeader animate"}>
        <h3 class="navbarLogo">Henry Q.</h3>
        <nav>
          <ul class="navbarUL">
            <li>
              <a href="#">Start</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">
                <button>Get in touch!</button>
              </a>
            </li>
          </ul>
        </nav>
        <HamburgerMenu />
      </header>
    );
  }
}
