import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
// import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        {/* New line element */}
        <div className="footer-line" />
        <div className="footer-texts">
          <p
            className="footer-left-text"
            style={{ color: props.theme.secondaryText }}
          >
            Let the games begin.
          </p>
          <p
            className="footer-right-text"
            style={{ color: props.theme.secondaryText }}
          >
            By SQWUID.
          </p>
        </div>
      </Fade>
    </div>
  );
}
