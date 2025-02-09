import React, { useEffect, useState } from "react";
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
import useScreenSizeUpdate from "../hooks/useScreenSizeUpdate";

import { ReactComponent as BgLeftPatternDesktop } from "../assets/images/bg-pattern-1.svg";
import { ReactComponent as BgRightPattern } from "../assets/images/bg-pattern-2.svg";
import { ReactComponent as BgLeftPatternTablet } from "../assets/images/bg-pattern-3.svg";

const Landing: React.FC = () => {
  const screenSize = useScreenSizeUpdate();
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  useEffect(() => {
    setIsDesktop(screenSize >= 1200);
    setIsTablet(screenSize >= 600 && screenSize < 1200);
  }, [screenSize]);

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
          {isDesktop ? (
            <BgLeftPatternDesktop className="landing__bg-left-pattern" />
          ) : null}
          {isTablet && (
            <BgLeftPatternTablet className="landing__bg-left-pattern" />
          )}
          <div className="landing__hero-text">
            <p className="landing__hero-title">
              Data <span className="underlined">tailored</span> to your needs.
            </p>
            <button className="landing__learn-more-btn">Learn more</button>
          </div>
          {isDesktop || isTablet ? (
            <BgRightPattern className="landing__bg-right-pattern" />
          ) : null}
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
