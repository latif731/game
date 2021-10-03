import React from "react";
import Game from "../component/game";
import Footer from "../component/Footer";
import FullWidthTabs from "../component/navbar";
import ColorTabs from "../component/navbar";

const Homepage = () => {
  return (
    <div>
      <ColorTabs />
      {/* <FullWidthTabs /> */}
      <Game />
      {/* <BasicRating /> */}
      <Footer />
    </div>
  );
};

export default Homepage;
