import React from "react";
import "./../styles/about.css";

// Styles
export default class About extends React.Component {
  render() {
    return (
      <div class="aboutContainer" id="about">
        <div class="aboutWrapper">
          <div class="aboutTitle">
            <h2>More about me!</h2>

            <p>
              My name is Henry Quach and I am a software developer. After
              graduating from University of Tennessee, Knoxville (Go Vols!) in
              December of 2019, I been working hard on creating multiple
              projects during the downtime due to the pandemic. I improve my
              ability to achieve better experience for user in web design and
              mobile application.
            </p>
          </div>
        </div>
        <div class="aboutPassion">
          <div class="passionItem">
            <h2>DESIGN</h2>
            <p>
              Design plays a big role in many application process. Without a
              good design, other part of the application will not fit together.
              This allow easier process of creating better applications.
            </p>
          </div>
          <div class="passionItem">
            <h2>TECHNOLOGY</h2>
            <p>
              I believe technology plays a big role in society. Technology allow
              many new opprotunity for a lot of people. Imagine thinking 20
              years ago, the internet wasn't as it is today.
            </p>
          </div>
          <div class="passionItem">
            <h2>EXPERIENCE</h2>
            <p>
              I believe creating rememerable experience of using an application
              help increase usage and admires for the product. This should be on
              the front mind of many new project builds.
            </p>
          </div>
        </div>
        <div class="aboutSkills"></div>
      </div>
    );
  }
}
