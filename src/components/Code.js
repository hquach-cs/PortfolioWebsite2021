import React from "react";
import Tabbed from "./Tabbed";
import CodelineNum from "./CodelineNum";
import "./../styles/code.css";

// Styles
export default class Code extends React.Component {
  render() {
    return (
      <div class="codeContainer">
        <div class="codeWrapper">
          <div class="codeLineWrapper">
            <div class="codeLine typewriterleft">
              <CodelineNum num="01" />
              <div style={{ color: "darkgreen" }}>class</div>&nbsp;
              <div class="codeClass">Henry</div>&nbsp;
              <div style={{ color: "cyan" }}>extends</div>&nbsp;
              <div class="codeClass">Person</div>&nbsp;&#123;
            </div>
          </div>
          <div class="codeLineWrapper">
            <div
              class="codeLine typewriterleft"
              style={{ animationDelay: "1s" }}
            >
              <CodelineNum num="02" />
              <Tabbed />
              <div style={{ color: "darkgreen" }}>public&nbsp;</div>
              <div class="codeClass">Henry</div>()&nbsp;&#123;
            </div>
          </div>
          <div class="codeLineWrapper">
            <div
              class="codeLine typewriterleft"
              style={{ animationDelay: "2s" }}
            >
              <CodelineNum num="03" />
              <Tabbed />
              <Tabbed />
              <div style={{ color: "cyan" }}>this</div>.<div>name</div>
              &nbsp;=&nbsp;<div>Henry Quach</div>;
            </div>
          </div>
          <div class="codeLineWrapper">
            <div
              class="codeLine typewriterleft"
              style={{ animationDelay: "3s" }}
            >
              <CodelineNum num="04" />
              <Tabbed />
              <Tabbed />
              <div style={{ color: "cyan" }}>this</div>.<div>location</div>
              &nbsp;=&nbsp;
              <div>Nashville,TN</div>;
            </div>
          </div>
          <div class="codeLineWrapper">
            <div
              class="codeLine typewriterleft"
              style={{ animationDelay: "4s" }}
            >
              <CodelineNum num="05" />
              <Tabbed />
              <Tabbed />
              <div style={{ color: "cyan" }}>this</div>.<div>email</div>
              &nbsp;=&nbsp;
              <div style={{ color: "orange", textDecoration: "underline" }}>
                <a href="mailto:hquach.cs@gmail.com">hquach.cs@gmail.com</a>
              </div>
              ;
            </div>
          </div>
          <div class="codeLineWrapper">
            <div
              class="codeLine typewriterleft"
              style={{ animationDelay: "5s" }}
            >
              <CodelineNum num="06" />
              <Tabbed />
              &#125;
            </div>
          </div>
          <div class="codeLineWrapper">
            <div
              class="codeLine typewriterleft"
              style={{ animationDelay: "6s" }}
            >
              <CodelineNum num="07" />
            </div>
          </div>
          <div class="codeLineWrapper">
            <div
              class="codeLine typewriterleft"
              style={{ animationDelay: "7s" }}
            >
              <CodelineNum num="08" />
              <Tabbed />
              <div style={{ color: "darkgreen" }}>public&nbsp;</div>
              <div>String</div>&nbsp;
              <div class="codeClass">getEducation</div>()&nbsp;&#123;
            </div>
          </div>
        </div>
      </div>
    );
  }
}
