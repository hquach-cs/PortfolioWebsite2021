import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Starter from "./components/Starter";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./styles/index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startSection: true,
      aboutSection: false,
      projectSection: false,
      contactSection: false,
    };
  }

  handleSection = (section) => {
    if (section === "about") this.setState({ aboutSection: true });
    if (section === "project") this.setState({ projectSection: true });
    if (section === "contact") this.setState({ contactSection: true });
  };

  render() {
    return (
      <div>
        <Navbar DetectSection={this.handleSection} />
        <Starter />
        <About active={this.state.aboutSection} />
        <Projects active={this.state.projectSection} />
        <Contact active={this.state.contactSection} />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
