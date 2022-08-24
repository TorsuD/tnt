import React from "react";
import smiley from "../../assets/images/kente.jpg";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="landingPage__container">
        <div className="landingPage__title">
          <div className="landingPage__header">
            Travel <br />
            <span style={{ color: "blue" }}>'n'</span>
            <br /> Translate
          </div>

          <div className="landingPage__description">
            Travel to all your francophone countries <br /> and translate your
            English to French with the comfort of T'n'T
          </div>
        </div>

        <div className="landingPage__image">
          <img
            src={smiley}
            alt="Man in Grey shirt"
            className="landingPage__image"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
