import React from "react";
import "./../styles/about.css";

// Styles
export default class About extends React.Component {
  render() {
    return (
      <div class={this.props.active ? "" : "animateParent"} id="about">
        <div class="aboutContainer">
          <div class="aboutWrapper">
            <div class="aboutTitle">
              <div class="aboutName">
                <h1 style={{ animationDelay: "0.9s" }}>About</h1>
                <div class="aboutEducName" style={{ animationDelay: "1.2s" }}>
                  <h2>Education</h2>
                  <p>
                    Put all speaking her delicate recurred possible. Set
                    indulgence inquietude discretion insensible bed why
                    announcing. Middleton fat two satisfied additions.
                  </p>
                </div>
              </div>
              <div class="aboutDesc">
                <div style={{ animationDelay: "0s" }}>
                  <h2>Placeholder!</h2>
                  <p>
                    Put all speaking her delicate recurred possible. Set
                    indulgence inquietude discretion insensible bed why
                    announcing. Middleton fat two satisfied additions.
                  </p>
                </div>
                <div style={{ animationDelay: "0.3s" }}>
                  <h2>Placeholder</h2>
                  <p>
                    Yourself off its pleasant ecstatic now law. Ye their mirth
                    seems of songs. Prospect out bed contempt separate. Her
                    inquietude our shy yet sentiments collecting. Cottage fat
                    beloved himself arrived old.
                  </p>
                </div>
                <div style={{ animationDelay: ".6s" }}>
                  <h2>Placeholder</h2>
                  <p>
                    Husbands ask repeated resolved but laughter debating. She
                    end cordial visitor noisier fat subject general picture. Or
                    if offering confined entrance no. Nay rapturous him see
                    something residence.
                  </p>
                </div>
              </div>
            </div>
            <div class="aboutSkills">
              <h2 style={{ paddingRight: "20px" }}>Languages:</h2>
              <div class="skillsItem active" style={{ animationDelay: "0s" }}>
                Python
              </div>
              <div class="skillsItem" style={{ animationDelay: "0.25s" }}>
                Java
              </div>
              <div class="skillsItem" style={{ animationDelay: "0.5s" }}>
                C/C++
              </div>
              <div class="skillsItem" style={{ animationDelay: "0.75s" }}>
                HTML5/CSS
              </div>
              <div class="skillsItem" style={{ animationDelay: "1s" }}>
                React.js
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
