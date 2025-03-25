import React from "react";
import AboutText from "./AboutText";
import AboutImage from "./AboutImage";

const AboutMain = () => {
  return (
    <div className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center">
      <AboutText />
      <AboutImage />
    </div>
  );
};

export default AboutMain;
