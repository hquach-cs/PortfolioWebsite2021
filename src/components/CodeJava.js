import React from "react";
import CodelineNum from "./CodelineNum";
import Tabbed from "./Tabbed";
import "./../styles/aboutCode.css";

// Styles
export default class CodeJava extends React.Component {
  render() {
    return (
      <div class={this.props.active ? "aboutCodeContainer" : "notactive"}>
        <div class="aboutCodeWrapper">
          {/*  */}
          <div class="codeLineWrapper">
            <div class="codeLine typewriterleft">
              <CodelineNum num="01" />
              <div style={{ color: "darkgreen" }}>class</div>&nbsp;
              <div class="codeClass">Henry</div>&nbsp;
              <div style={{ color: "cyan" }}>extends</div>&nbsp;
              <div class="codeClass">Person</div>&nbsp;&#123;
            </div>
          </div>
          {/*  */}
          <div class="codeLineWrapper">
            <div
              class="codeLine typewriterskip"
              style={{ animationDelay: "1s" }}
            >
              <CodelineNum num="02" />
              <Tabbed />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
