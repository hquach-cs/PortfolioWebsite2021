import React from "react";
import "./../styles/projects.css";
import calendarimg from "./BetterCalendarPic.png";
import websitegif from "./websitegif.gif";
// Styles
export default class Projects extends React.Component {
  render() {
    return (
      <div class={this.props.active ? "" : "contact"} id="projects">
        <div class={this.props.active ? "projectContainer" : "dontshow"}>
          <div class="projectTitle">
            <h1>Projects</h1>
          </div>
          <ul class="projectListUL">
            <li class="projectItem">
              <a
                class="projectImg"
                href="https://github.com/hquach-cs/PortfolioWebsite"
              >
                <img src={websitegif} class="calendarImg" />
              </a>
              <div class="projectName">
                <ul>
                  <li
                    class="projectItemTitle"
                    style={{ animationDelay: "1.4s" }}
                  >
                    Portfolio Website
                  </li>
                  <li class="projectItemSkill" style={{ animationDelay: "1s" }}>
                    Web Dev.
                  </li>
                  <li
                    class="projectItemSkill"
                    style={{ animationDelay: ".6s" }}
                  >
                    React.js
                  </li>
                  <li
                    class="projectItemSkill "
                    style={{ animationDelay: "0.2s" }}
                  >
                    HTML5/CSS
                  </li>
                </ul>
              </div>
              <div class="projectDesc">
                <p>
                  This project is my second version of my website. The first
                  version can be found{" "}
                  <a
                    style={{ textDecoration: "underline", color: "cyan" }}
                    href="https://github.com/hquach-cs/HQPortfolio"
                  >
                    here
                  </a>
                  . This website showcase my projects and my interest for future
                  job recruiters.{" "}
                  <a
                    style={{ textDecoration: "underline", color: "cyan" }}
                    href="https://github.com/hquach-cs/PortfolioWebsite"
                  >
                    Source
                  </a>{" "}
                  <a
                    style={{ textDecoration: "underline", color: "cyan" }}
                    href="https://hquach-cs.github.io/HQPortfolio/"
                  >
                    Site
                  </a>
                </p>
              </div>
            </li>
            <li class="projectItem">
              <a
                href="https://github.com/hquach-cs/JournalingApp"
                class="projectImg"
              >
                <img src={calendarimg} class="calendarImg" />
              </a>
              <div class="projectName">
                <ul>
                  <li
                    class="projectItemTitle"
                    style={{ animationDelay: "1.4s" }}
                  >
                    Better Calendar App.
                  </li>
                  <li class="projectItemSkill" style={{ animationDelay: "1s" }}>
                    Mobile Dev.
                  </li>
                  <li
                    class="projectItemSkill"
                    style={{ animationDelay: "0.6s" }}
                  >
                    Java
                  </li>
                  <li
                    class="projectItemSkill"
                    style={{ animationDelay: "0.2s" }}
                  >
                    Mobile Design
                  </li>
                </ul>
              </div>
              <div class="projectDesc">
                <p>
                  After gaining inspiration from lack of features in other
                  calendar apps , I decided to create my own calendar app since
                  I can use this app for my daily event list.{" "}
                  <a
                    style={{ textDecoration: "underline", color: "cyan" }}
                    href="https://github.com/hquach-cs/JournalingApp"
                  >
                    Source
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
