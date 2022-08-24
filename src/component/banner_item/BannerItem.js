import React from "react";
import { Fade } from "react-reveal";
import "./BannerItem.css";

function BannerItem({ icon, description, header }) {
  return (
    <div className="bannerItem">
      <div className="bannerItem__container">
        <Fade left>
          <div className="bannerItem__icon">{icon}</div>
        </Fade>
        <div className="bannerItem__header">{header}</div>
        <div className="bannerItem__description">{description}</div>
      </div>
    </div>
  );
}

export default BannerItem;
