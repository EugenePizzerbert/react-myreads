import React from "react";
import Masthead from "../components/Landing/Masthead";
import Delimiters from "../components/UI/Delimiters";

//images
import imgBgTravelerReading from "../assets/img/bg_traveler_reading.jpg";

const Landing = () => {
  return (
    <div
      className="landing-container "
      style={{
        backgroundImage: `url(${imgBgTravelerReading})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        paddingLeft: "80px"
      }}
    >
      <div
        className="masthead-container-background opacity-90"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#1540fa"
        }}
      />
      <Delimiters rounded />
      <Masthead />
    </div>
  );
};

export default Landing;
