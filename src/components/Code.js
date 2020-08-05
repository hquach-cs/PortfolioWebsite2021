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
              class="codeLine typewriterleft"
              style={{ animationDelay: "1s" }}
            >
              <CodelineNum num="02" />
              <Tabbed />
              <div style={{ color: "darkgreen" }}>public&nbsp;</div>
              <div class="codeClass">Henry</div>()&nbsp;&#123;
            </div>
          </div>
          {/*  */}
          <div class="codeLineWrapper">
            <div
              class="codeLine typewriterleft"
              style={{ animationDelay: "2s" }}
            >
              <CodelineNum num="03" />
              <Tabbed />
              <Tabbed />
              <div style={{ color: "cyan" }}>this</div>.<div>name</div>
              &nbsp;=&nbsp;
              <div style={{ color: "lightgreen" }}>"Henry Quach"</div>;
            </div>
          </div>
          {/*  */}
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
              <div style={{ color: "lightgreen" }}>"Nashville,TN"</div>;
            </div>
          </div>
          {/*  */}
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
          {/*  */}
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
          {/*  */}
          <div class="codeLineWrapper">
            <div
              class="codeLine typewriterskip"
              style={{ animationDelay: "6s" }}
            >
              <CodelineNum num="07" />
            </div>
          </div>
          {/*  */}
          <div class="codeLineWrapper">
            <div
              class="codeLine typewriterleft"
              style={{ animationDelay: "6.25s" }}
            >
              <CodelineNum num="08" />
              <Tabbed />
              <div style={{ color: "darkgreen" }}>public&nbsp;</div>
              <div>Education</div>&nbsp;
              <div class="codeClass">getEducation</div>()&nbsp;&#123;
            </div>
          </div>
          {/*  */}
          <div class="codeLineWrapper">
            <div
              class="codeLine typewriterleft"
              style={{ animationDelay: "7.25s" }}
            >
              <CodelineNum num="09" />
              <Tabbed />
              <Tabbed />
              <div style={{ color: "cyan" }}>this</div>.<div>schoolName</div>
              &nbsp;=&nbsp;
              <div style={{ color: "orange" }}>
                University of Tennesse, Knoxville (UTK)
              </div>
              ;
            </div>
          </div>
          {/*  */}
          <div class="codeLineWrapper">
            <div
              class="codeLine typewriterleft"
              style={{ animationDelay: "8.25s" }}
            >
              <CodelineNum num="10" />
              <Tabbed />
              <Tabbed />
              <div style={{ color: "cyan" }}>this</div>.<div>degree</div>
              &nbsp;=&nbsp;
              <div>
                "BS in <div style={{ color: "red" }}>Computer Science</div>";
              </div>
            </div>
          </div>
          {/*  */}
          <div class="codeLineWrapper">
            <div
              class="codeLine typewriterleft"
              style={{ animationDelay: "9.25s" }}
            >
              <CodelineNum num="11" />
              <Tabbed />
              <Tabbed /> <div style={{ color: "cyan" }}>this</div>.
              <div>gradDate</div>
              &nbsp;=&nbsp; "<div style={{ color: "red" }}>12/2019</div>";
            </div>
          </div>
          {/*  */}
          <div class="codeLineWrapper">
            <div
              class="codeLine typewriterleft"
              style={{ animationDelay: "10.25s" }}
            >
              <CodelineNum num="12" />
              <Tabbed />
              <Tabbed />
              <div style={{ color: "purple" }}>return</div>&nbsp;
              <div style={{ color: "cyan" }}>new</div>&nbsp;
              <div>
                Education(<div style={{ color: "cyan" }}>this</div>.
                <div>schoolName</div>,<div style={{ color: "cyan" }}>this</div>.
                <div>degree</div>,<div style={{ color: "cyan" }}>this</div>.
                <div>gradDate</div>)
              </div>
              ;
            </div>
          </div>
          {/*  */}
          <div class="codeLineWrapper">
            <div
              class="codeLine typewriterleft"
              style={{ animationDelay: "11.25s" }}
            >
              <CodelineNum num="13" />
              <Tabbed />
              &#125;
            </div>
          </div>
          {/*  */}
          <div class="codeLineWrapper">
            <div
              class="codeLine typewriterleft"
              style={{ animationDelay: "11.5s" }}
            >
              <CodelineNum num="14" />
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    );
  }
}
