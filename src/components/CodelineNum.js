import React from "react";
import Tabbed from "./Tabbed";
// Styles
export default class CodelineNum extends React.Component {
  render() {
    return (
      <div>
        {this.props.num} <Tabbed />
      </div>
    );
  }
}
