import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";
import ProfileImg from "/public/images/profile-img.png";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center"
    >
      <img src={ProfileImg} alt="Hamza Kamran" className="max-h-[450px] w-auto" />

      <div className="absolute -z-10 flex justify-center items-center animate-pulse overflow-hidden">
        <PiHexagonThin className="md:h-[90%] md:min-h-[400px] sm:h-[120%] sm:min-h-[480px] lg:min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
