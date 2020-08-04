import React from "react";
import "./../styles/hamburgermenu.css";

// Styles
export default class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_open: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const state = !this.state.menu_open;
    this.setState({ menu_open: state });
    this.props.parentCallback(true);
  }

  render() {
    const menu_class_close = "menu-btn";
    const menu_class_open = "menu-btn open";

    return (
      <div
        class={this.state.menu_open ? menu_class_open : menu_class_close}
        onClick={this.handleClick}
      >
        <div class="menu-btn_burger"></div>
      </div>
    );
  }
}
