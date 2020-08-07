import React from "react";
import CodelineNum from "./CodelineNum";
import Tabbed from "./Tabbed";
import "./../styles/aboutCode.css";

// Styles
export default class CodePython extends React.Component {
  render() {
    return (
      <div class={this.props.active ? "aboutCodeContainer" : "notactive"}>
        <div class="aboutCodeWrapper">
          {/*  */}
          <div class="codeLineWrapper">
            <div class="codeLine typewriterleft">
              <CodelineNum num="01" />
              <div>if</div>&nbsp;num&nbsp;<div>&lt;</div>&nbsp;0:
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
