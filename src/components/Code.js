import React from "react";
import "./../styles/code.css";

// Styles
export default class Code extends React.Component {
  render() {
    return (
      <div class="codeContainer">
        <div class="codeWrapper">
          <div class="codeLineWrapper">
            <div class="codeLine typewriterleft">
              <div>class</div>&nbsp;
              <div class="codeClass">Henry</div>&nbsp;
              <div style={{ color: "blue" }}>extends</div>&nbsp;
              <div class="codeClass">Person</div>&nbsp;&#123;
            </div>
          </div>
          <div class="codeLineWrapper">
            <div
              class="codeLine typewriterleft"
              style={{ animationDelay: "2.5s" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;<div>public&nbsp;</div>
              <div class="codeClass">Henry</div>()&nbsp;&#123;
            </div>
          </div>
        </div>
      </div>
    );
  }
}
