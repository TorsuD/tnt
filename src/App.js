import React from "react";
import "./App.css";
import Main from "./pages/main/Main";
// import LandingPage from "./sections/landing_page/LandingPage";
import Translator from "./sections/translator/Translator";

function App() {
  return (
    <div className="app">
      <Main />
      {/* <LandingPage /> */}
      <Translator />
    </div>
  );
}

export default App;
