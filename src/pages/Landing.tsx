import React from "react";
import { ReactComponent as LogoLight } from "../assets/images/logo-light.svg";
import ImageHero from "../assets/images/image-hero.webp";

import "../styles/Landing.css";

const Landing: React.FC = () => {
  return (
    <>
      <div className="landing__heading-hero-container">
        <header className="landing__header">
          <LogoLight className="landing__logo" />
          <a className="landing__access-link" href="#">
            Apply for access
          </a>
        </header>
        <div className="landing__hero-container">
          <p className="landing__hero-title">
            Data <span className="underlined">tailored</span> to your needs.
          </p>
          <button className="landing__learn-more-btn">Learn more</button>
        </div>
        <img
          src={ImageHero}
          alt="picture of a cell phone"
          className="landing__hero-image"
        />
      </div>
    </>
  );
};

export default Landing;
