import React from "react";
import Tabbed from "./Tabbed";
// Styles
export default class CodelineNum extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "block",
          width: "40px",
          borderRight: "solid black 2px",
          marginRight: "8px",
          fontStyle: "italic",
        }}
      >
        {this.props.num} <Tabbed />
      </div>
    );
  }
}
