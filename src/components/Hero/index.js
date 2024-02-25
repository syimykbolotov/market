import React from "react";
import sale from "../../img/sale-stamp-4.png";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero flex justify-center">
          <img className="w-[700px]" src={sale} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
