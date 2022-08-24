import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Banner from "../../sections/banner/Banner";
import Footer from "../../sections/footer/Footer";
import LandingPage from "../../sections/landing_page/LandingPage";
import Translator from "../../sections/translator/Translator";

function Main() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Translator />
      <Banner />
      <Footer />
    </div>
  );
}

export default Main;
