import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

const SingleProject = ({ name, text, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-14 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div>
        <h2
          className={`md:text-3xl sm:text-2xl text-orange ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {name}
        </h2>
        <h2
          className={`text-xl font-thin text-white font-special mb-4 sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {text}
        </h2>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg flex gap-2 items-center text-cyan border border-cyan px-4 py-2 rounded-full bg-transparent hover:bg-orange hover:text-white transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          View <BiSolidRightTopArrowCircle />
        </a>
      </div>
      <div className="relative w-full h-full max-h-[220px] max-w-[400px] rounded-xl overflow-hidden border border-white">
        <div className="absolute top-0 left-0 w-full h-full bg-cyan opacity-50 hover:opacity-0 transition-all duration-500"></div>
        <img
          src={image}
          alt="Project Image"
          className="w-full h-full object-cover transform transition-all duration-500 hover:scale-105 hover:rotate-2"
        />
      </div>
    </motion.div>
  );
};

export default SingleProject;
