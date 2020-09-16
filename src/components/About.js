import React from "react";
import CodePython from "./CodePython";
import CodeJava from "./CodeJava";
import CodeCPlus from "./CodeCPlus";
import CodeHTML from "./CodeHTML";
import CodeReact from "./CodeReact";
import "./../styles/about.css";

// Styles
export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codeLang: "python",
    };
    this.handleCodeClick = this.handleCodeClick.bind(this);
  }

  handleCodeClick = (id) => () => {
    this.setState({ codeLang: id });
  };

  render() {
    return (
      <div class={this.props.active ? "" : "about"} id="about">
        <div class={this.props.active ? "aboutContainer" : "dontshow"}>
          <div class="aboutWrapper">
            <div class="aboutTitle">
              <div class="aboutName">
                <h1 style={{ animationDelay: "0.9s" }}>About</h1>
                <div class="aboutEducName" style={{ animationDelay: "1.2s" }}>
                  <h2>More about me</h2>
                  <p>
                    Hello my name is{" "}
                    <div
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        display: "inline",
                        color: "cyan",
                      }}
                    >
                      {" "}
                      Henry Quach{" "}
                    </div>{" "}
                    and I am an aspiring software developer that loves to
                    program multiple interesting apps to showcase to users. My
                    goal is to become a reliable programmer that create multiple
                    things that users/consumers enjoy.
                  </p>
                </div>
                <div class="aboutSkillsList" style={{ animationDelay: "1.5s" }}>
                  <h2>Skills</h2>
                  <div class="aboutSkills">
                    <a
                      style={{
                        color: "cyan",
                        textDecoration: "underline",
                        paddingBottom: "10px",
                      }}
                      href="#softSkills"
                    >
                      Languages Below
                    </a>

                    <h4>Technical Skills:</h4>
                    <ul style={{ columnCount: "2", listStyleType: "none" }}>
                      <li>Database (MySQL,MongoDB)</li>
                      <li>Version Control (Git,Github)</li>
                      <li>AGILE / SCRUM</li>
                      <li>Machine Learning</li>
                      <li>Data Handling</li>
                      <li>Data Visualization</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="aboutDesc">
                <div style={{ animationDelay: "0s" }}>
                  <h2>Education</h2>
                  <p>
                    I got my associate and bachelor's degree in{" "}
                    <div
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        display: "inline",
                        color: "yellow",
                      }}
                    >
                      Computer Science
                    </div>
                    . I graduated from{" "}
                    <div
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        display: "inline",
                        color: "orange",
                      }}
                    >
                      The University of Tennessee, Knoxville{" "}
                    </div>
                    in December of 2019. Go Vols!
                  </p>
                </div>
                <div style={{ animationDelay: "0.3s" }}>
                  <h2>Design</h2>
                  <p>
                    Users comes first when designing any application. Without a
                    good design, application will fall through and be forgotten.
                    That's why I dedicate a lot of time to designing my projects
                    for the user's experience.
                  </p>
                </div>
                <div style={{ animationDelay: ".6s" }} id="softSkills">
                  <h2>Soft-Skills</h2>
                  <p>
                    I believe my soft skills such as{" "}
                    <div
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        display: "inline",
                        color: "yellow",
                      }}
                    >
                      Organization{" "}
                    </div>{" "}
                    ,{" "}
                    <div
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        display: "inline",
                        color: "orange",
                      }}
                    >
                      Responsibility{" "}
                    </div>{" "}
                    , and{" "}
                    <div
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        display: "inline",
                        color: "cyan",
                      }}
                    >
                      Leadership{" "}
                    </div>{" "}
                    are most important when working in a professional
                    environment. These skills allow me to connect with my peers.
                  </p>
                </div>
              </div>
            </div>
            <div class="aboutLang" id="aboutLang">
              <h2 style={{ paddingRight: "20px" }}>Languages:</h2>
              <div
                class={
                  this.state.codeLang === "python"
                    ? "activeSkill"
                    : "skillsItem"
                }
                onClick={this.handleCodeClick("python")}
                style={{ animationDelay: "0s" }}
              >
                Python
              </div>
              <div
                class={
                  this.state.codeLang === "java" ? "activeSkill" : "skillsItem"
                }
                onClick={this.handleCodeClick("java")}
                style={{ animationDelay: "0.25s" }}
              >
                Java
              </div>
              <div
                class={
                  this.state.codeLang === "cplus" ? "activeSkill" : "skillsItem"
                }
                onClick={this.handleCodeClick("cplus")}
                style={{ animationDelay: "0.5s" }}
              >
                C/C++
              </div>
              <div
                class={
                  this.state.codeLang === "html" ? "activeSkill" : "skillsItem"
                }
                onClick={this.handleCodeClick("html")}
                style={{ animationDelay: "0.75s" }}
              >
                HTML5/CSS
              </div>
              <div
                class={
                  this.state.codeLang === "react" ? "activeSkill" : "skillsItem"
                }
                onClick={this.handleCodeClick("react")}
                style={{ animationDelay: "1s" }}
              >
                React.js
              </div>
            </div>
          </div>
          <CodePython
            active={this.state.codeLang === "python" ? true : false}
          />
          <CodeJava active={this.state.codeLang === "java" ? true : false} />
          <CodeCPlus active={this.state.codeLang === "cplus" ? true : false} />
          <CodeHTML active={this.state.codeLang === "html" ? true : false} />
          <CodeReact active={this.state.codeLang === "react" ? true : false} />
        </div>
      </div>
    );
  }
}
