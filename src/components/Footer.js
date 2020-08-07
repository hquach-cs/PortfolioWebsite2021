import React from "react";
import "./../styles/contact.css";
import "./../styles/footer.css";

// Styles
export default class Footer extends React.Component {
  render() {
    return (
      <div class="footer">
        <div>Thanks for visiting!</div>
        <div>
          Created and Designed by{" "}
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              display: "inline",
              color: "cyan",
            }}
          >
            Henry Quach
          </div>
          .
        </div>
      </div>
    );
  }
}
