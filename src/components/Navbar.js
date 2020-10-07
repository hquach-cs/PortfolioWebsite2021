import React from "react";
import HamburgerMenu from "./HamburgerMenu.js";
import Navlink from "./Navlink";
import "./../styles/navbar.css";
import Resume from "./../scripts/hquachResume.pdf";

// Styles
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0,
      menuShow: false,
      startActive: true,
      aboutActive: false,
      projectActive: false,
      contactActive: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos < window.innerHeight - window.innerHeight * (1 / 3)) {
      this.setState({
        startActive: true,
        aboutActive: false,
        projectActive: false,
        contactActive: false,
      });
      this.props.DetectSection("start");
    }
    if (
      currentScrollPos >= window.innerHeight - window.innerHeight * (1 / 3) &&
      currentScrollPos < window.innerHeight * 2 - window.innerHeight * (1 / 3)
    ) {
      this.setState({
        startActive: false,
        aboutActive: true,
        projectActive: false,
        contactActive: false,
      });
      this.props.DetectSection("about");
    }
    if (
      currentScrollPos >=
        window.innerHeight * 2 - window.innerHeight * (1 / 3) &&
      currentScrollPos < window.innerHeight * 3 - window.innerHeight * (1 / 3)
    ) {
      this.setState({
        startActive: false,
        aboutActive: false,
        projectActive: true,
        contactActive: false,
      });
      this.props.DetectSection("project");
    }
    if (
      currentScrollPos >=
      window.innerHeight * 3 - window.innerHeight * (1 / 3)
    ) {
      this.setState({
        startActive: false,
        aboutActive: false,
        projectActive: false,
        contactActive: true,
      });
      this.props.DetectSection("contact");
    }
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
      menuShow: false,
    });

    //Scrolling Active Navbar Link
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos < window.innerHeight - window.innerHeight * (1 / 3)) {
      this.setState({
        startActive: true,
        aboutActive: false,
        projectActive: false,
        contactActive: false,
      });
      this.props.DetectSection("start");
    }
    if (
      currentScrollPos >= window.innerHeight - window.innerHeight * (1 / 3) &&
      currentScrollPos < window.innerHeight * 2 - window.innerHeight * (1 / 3)
    ) {
      this.setState({
        startActive: false,
        aboutActive: true,
        projectActive: false,
        contactActive: false,
      });
      this.props.DetectSection("about");
    }
    if (
      currentScrollPos >=
        window.innerHeight * 2 - window.innerHeight * (1 / 3) &&
      currentScrollPos < window.innerHeight * 3 - window.innerHeight * (1 / 3)
    ) {
      this.setState({
        startActive: false,
        aboutActive: false,
        projectActive: true,
        contactActive: false,
      });
      this.props.DetectSection("project");
    }
    if (
      currentScrollPos >=
      window.innerHeight * 3 - window.innerHeight * (1 / 3)
    ) {
      this.setState({
        startActive: false,
        aboutActive: false,
        projectActive: false,
        contactActive: true,
      });
      this.props.DetectSection("contact");
    }
  }
  callbackFunction = (childData) => {
    this.setState({ menuShow: !this.state.menuShow });
  };
  render() {
    return (
      <header class={this.state.show ? "navbarHeader" : "navbarHeader animate"}>
        <div class="navbarlogo_button">
          <div style={{ display: "flex" }}>
            <a href="#start" class="navbarLogo typewriter">
              Henry Quach
            </a>
          </div>
          <div class="burgerMenu">
            <HamburgerMenu
              parentCallback={this.callbackFunction}
              show={this.state.menuShow}
            />
          </div>
        </div>
        <nav class={this.state.menuShow ? "navbarNAV open" : "navbarNAV close"}>
          <ul class="navbarUL">
            <Navlink link="Start" active={this.state.startActive} />
            <Navlink link="About" active={this.state.aboutActive} />
            <Navlink link="Projects" active={this.state.projectActive} />
            <Navlink link="Contact" active={this.state.contactActive} />
            <li>
              <a href={Resume} target="_blank" type="pdf">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
