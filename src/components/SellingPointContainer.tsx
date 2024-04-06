import React from "react";
import { ISellingPointContainer } from "../interfaces";

const SellingPointContainer: React.FC<ISellingPointContainer> = ({
  index,
  sellingPointDescription,
  sellingPointTitle,
}) => {
  return (
    <div className="landing__selling-point-container">
      <p className="landing__selling-point-number">{index + 1}</p>
      <div className="landing__selling-point-text-container">
        <p className="landing__selling-point">{sellingPointTitle}</p>
        <p className="landing__selling-point-description">
          {sellingPointDescription}
        </p>
      </div>
    </div>
  );
};

export default SellingPointContainer;
