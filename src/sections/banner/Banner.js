import React from "react";
import BannerItem from "../../component/banner_item/BannerItem";
import "./Banner.css";
import { RiMapPinUserFill } from "react-icons/ri";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { GiCommercialAirplane } from "react-icons/gi";
import { Fade } from "react-reveal";

function Banner() {
  return (
    <div className="banner" id="banner">
      <Fade left>
        <div className="banner__title">About T'n'T</div>
      </Fade>
      <div className="banner__container">
        <div>
          <BannerItem
            icon={<GiCommercialAirplane size={"60px"} />}
            header={`Convenient For Your Travels`}
            description="T'n'T helps you translate your English audios to French within seconds"
          />
        </div>

        <div>
          <BannerItem
            icon={<RiMapPinUserFill size={"60px"} />}
            header="Easy To Use"
            description="T'n'T is very easy to use, click record and boom! All done! "
          />
        </div>

        <div>
          <BannerItem
            icon={<IoChatbubbleEllipsesOutline size={"60px"} />}
            header="Translate In Seconds"
            description="T'n'T helps you translate your English audios to French within seconds"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
