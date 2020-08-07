import React from "react";
import CodelineNum from "./CodelineNum";
import Tabbed from "./Tabbed";
import "./../styles/aboutCode.css";

// Styles
export default class CodeHTML extends React.Component {
  render() {
    return (
      <div class={this.props.active ? "aboutCodeContainer" : "notactive"}>
        <div class="aboutCodeWrapper">
          {/*  */}
          <div class="codeLineWrapper">
            <div class="codeLine typewriterleft">
              <CodelineNum num="01" />
              <div style={{ color: "yellow" }}>&lt;div&gt;</div>&nbsp;
              <div style={{ color: "pink" }}>&lt;h1&gt;</div>&nbsp;
              <div style={{ color: "lightgreen" }}>Henry Quach</div>
              <div style={{ color: "pink" }}>&lt;/h1&gt;</div>&nbsp;
              <div style={{ color: "yellow" }}>&lt;/div&gt;</div>&nbsp;
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
