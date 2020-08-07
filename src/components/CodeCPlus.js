import React from "react";
import CodelineNum from "./CodelineNum";
import Tabbed from "./Tabbed";
import "./../styles/aboutCode.css";

// Styles
export default class CodeCPlus extends React.Component {
  render() {
    return (
      <div class={this.props.active ? "aboutCodeContainer" : "notactive"}>
        <div class="aboutCodeWrapper">
          {/*  */}
          <div class="codeLineWrapper">
            <div class="codeLine typewriterleft">
              <CodelineNum num="01" />
              <div style={{ color: "yellow" }}>Henry</div>&nbsp;=&nbsp;
              <div style={{ color: "blue" }}>Person</div>(
              <div style={{ color: "green" }}>Henry Quach"</div>,
              <div style={{ color: "green" }}>"23""</div>,...);
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
