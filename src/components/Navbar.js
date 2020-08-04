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
      menuShow: false,
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
  callbackFunction = (childData) => {
    this.setState({ menuShow: !this.state.menuShow });
  };
  render() {
    return (
      <header class={this.state.show ? "navbarHeader" : "navbarHeader animate"}>
        <div class="navbarlogo_button">
          <a href="#" class="navbarLogo">
            Henry Quach
          </a>
          <HamburgerMenu parentCallback={this.callbackFunction} />
        </div>
        <nav class={this.state.menuShow ? "navbarNAV open" : "navbarNAV close"}>
          <ul class="navbarUL">
            <li>
              <a class="navbarA" href="#">
                Start
              </a>
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
          </ul>
        </nav>
      </header>
    );
  }
}
