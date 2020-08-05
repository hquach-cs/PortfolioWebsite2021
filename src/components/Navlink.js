import React from "react";

// Styles
export default class Navlink extends React.Component {
  render() {
    return (
      <li class={this.props.active ? "navbarLink active" : "navbarLink"}>
        <a href={"#" + this.props.link.toLowerCase()}>{this.props.link}</a>
      </li>
    );
  }
}
