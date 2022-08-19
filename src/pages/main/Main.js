import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../sections/footer/Footer";
import LandingPage from "../../sections/landing_page/LandingPage";
import Translator from "../../sections/translator/Translator";

function Main() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Translator />
      <Footer />
    </div>
  );
}

export default Main;
