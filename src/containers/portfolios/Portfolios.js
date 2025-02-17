import React, { Component } from "react";
import "./Portfolios.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../home.js";
import { Fade } from "react-reveal";

class Portfolios extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="portfolios">
        <div className="portfolios-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1
              className="portfolios-header"
              style={{ color: theme.text }}
            ></h1>
          </Fade>
        </div>
        <div className="portfolios-body-div">
          {degrees.degrees.map((degree) => {
            return <DegreeCard degree={degree} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Portfolios;
