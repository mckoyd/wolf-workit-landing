import React from "react";
import { ReactComponent as LogoLight } from "../assets/images/logo-light.svg";
import { ReactComponent as LogoDark } from "../assets/images/logo-dark.svg";
import { ReactComponent as IconFacebook } from "../assets/images/icon-facebook.svg";
import { ReactComponent as IconInstagram } from "../assets/images/icon-instagram.svg";
import { ReactComponent as IconTwitter } from "../assets/images/icon-twitter.svg";
import ImageHero from "../assets/images/image-hero.webp";
import ImageFounder from "../assets/images/image-founder.webp";

import "../styles/Landing.css";
import { APPLY_LINK_TEXT, sellingPoints } from "../config/Landing.config";
import { ISellingPoint } from "../interfaces";
import SellingPointContainer from "../components/SellingPointContainer";

const Landing: React.FC = () => {
  return (
    <>
      <div className="landing__heading-hero-container">
        <header className="landing__header">
          <LogoLight className="landing__logo" />
          <a className="landing__access-link" href="#">
            {APPLY_LINK_TEXT}
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
      <div className="landing__selling-points">
        {sellingPoints.map(
          (
            { sellingPointTitle, sellingPointDescription }: ISellingPoint,
            index
          ) => (
            <SellingPointContainer
              key={`${sellingPointTitle}-${index}`}
              index={index}
              sellingPointDescription={sellingPointDescription}
              sellingPointTitle={sellingPointTitle}
            />
          )
        )}
      </div>
      <div className="landing__first-tester-container">
        <img
          src={ImageFounder}
          alt="picture of the founder"
          className="landing__founder-image"
        />
        <div className="landing__tester-text-container">
          <p className="landing__tester-text-title">Be the first to test</p>
          <p className="landing__tester-text-description">
            Hi, I'm Louis Graham, the founder of the company. Book a demo call
            with me to become a beta tester for our app and kickstart your
            company. Apply for access below and I’ll be in touch to schedule a
            call.
          </p>
          <button type="button" className="landing__access-btn">
            Apply for access
          </button>
        </div>
      </div>
      <footer className="landing__footer-container">
        <LogoDark className="landing__logo" />
        <div className="landing__social-links">
          <IconFacebook className="landing__icon" />
          <IconTwitter className="landing__icon" />
          <IconInstagram className="landing__icon" />
        </div>
      </footer>
    </>
  );
};

export default Landing;
