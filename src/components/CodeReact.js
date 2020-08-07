import React from "react";
import CodelineNum from "./CodelineNum";
import Tabbed from "./Tabbed";
import "./../styles/aboutCode.css";

// Styles
export default class CodeReact extends React.Component {
  render() {
    return (
      <div class={this.props.active ? "aboutCodeContainer" : "notactive"}>
        <div class="aboutCodeWrapper">
          {/*  */}
          <div class="codeLineWrapper">
            <div class="codeLine typewriterleft">
              <CodelineNum num="01" />
              &lt;<div style={{ color: "green" }}>Person</div>&nbsp;
              <div style={{ color: "blue" }}>name</div>="
              <div style={{ color: "lightgreen" }}>Henry Quach</div>" /&gt;
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
