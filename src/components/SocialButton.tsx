import React from "react";
import { ISocialButton } from "../interfaces";

const SocialButton: React.FC<ISocialButton> = ({ buttonText }) => {
  return (
    <button type="button" className="social-btn">
      <p className="social-btn-text">{buttonText}</p>
    </button>
  );
};

export default SocialButton;
