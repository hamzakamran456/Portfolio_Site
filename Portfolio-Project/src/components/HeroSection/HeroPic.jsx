import React from "react";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <div>
      <img
        src="../../public/images/HexaPic.png"
        alt="Hamza Kamran"
        className="max-w-[450px] w-auto"
      />
      <div className="absolute -z-20 flex justify-center items-center animate-pulse">
        <PiHexagonThin />
      </div>
    </div>
  );
};

export default HeroPic;
