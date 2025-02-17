import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Portfolios from "../../containers/portfolios/Portfolios";

// import EducationImg from "./EducationImg";
import "./PortfolioComponent.css";
import { Fade } from "react-reveal";

class Portfolio extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="portfolio-main">
        <Header theme={this.props.theme} />
        <div className="basic-portfolio">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assets/images/education.svg")}
									alt=""
								/> */}
                {/* <EducationImg theme={theme} /> */}
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Our Work
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Some of the things we've been built or are currently building!
                </h3>
              </div>
            </div>
          </Fade>
          <Portfolios theme={this.props.theme} />
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Portfolio;
