import React from "react";
import "./../styles/projects.css";

// Styles
export default class Projects extends React.Component {
  render() {
    return (
      <div class="projectContainer" id="projects">
        <div class="projectTitle">
          <h1>Projects</h1>
        </div>
        <ul class="projectListUL">
          <li class="projectItem">
            <a
              class="projectImg"
              href="https://github.com/hquach-cs/PortfolioWebsite"
            ></a>
            <div class="projectName">
              <ul>
                <li class="projectItemTitle">Portfolio Website</li>
                <li class="projectItemSkill">Web Dev.</li>
                <li class="projectItemSkill">React.js</li>
                <li class="projectItemSkill">HTML5/CSS</li>
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
                job recruiters.
              </p>
            </div>
          </li>
          <li class="projectItem">
            <a
              href="https://github.com/hquach-cs/JournalingApp"
              class="projectImg"
            ></a>
            <div class="projectName">
              <ul>
                <li class="projectItemTitle">Better Calendar App.</li>
                <li class="projectItemSkill">Mobile Dev.</li>
                <li class="projectItemSkill">Java</li>
                <li class="projectItemSkill">Mobile Design</li>
              </ul>
            </div>
            <div class="projectDesc">
              <p>
                This project is my step toward mobile dev. After inspiration
                from designs from{" "}
                <a
                  style={{ textDecoration: "underline" }}
                  href="https://dribbble.com/"
                  i
                >
                  dribbble.com
                </a>
                , I decided to create my calendar app since I can use this app
                for my daily event list.
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
