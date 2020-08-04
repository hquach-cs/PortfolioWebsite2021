import React from "react";
import "./../styles/starter.css";

// Styles
export default class Starter extends React.Component {
  render() {
    return (
      <div class="starterContainer">
        <div class="starterTitle">
          <h1>
            Henry <span>Quach</span>
          </h1>
          <div class="bars"></div>
          <p>
            Software engineer residing in Nashville, TN.
            <span>Looking for a job opportunity.</span>
          </p>
        </div>
      </div>
    );
  }
}
