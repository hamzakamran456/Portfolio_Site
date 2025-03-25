import React from "react";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <div className="h-full w-full flex items-center justify-center relative overflow-hidden">
      <img
        src="../../public/images/HexaPic.png"
        alt="Hamza Kamran"
        className="max-w-[450px] w-auto"
      />

      {/* Background Animated Hexagon */}
      <div className="absolute inset-0 -z-20 flex justify-center items-center animate-pulse overflow-hidden">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  );
};

export default HeroPic;
