import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsGit } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

const skills = [
  {
    skills: "HTML",
    icon: FaHtml5,
  },
  {
    skills: "CSS",
    icon: FaCss3Alt,
  },
  {
    skills: "Javascript",
    icon: IoLogoJavascript,
  },
  {
    skills: "ReactJs",
    icon: RiReactjsLine,
  },
  {
    skills: "Redux",
    icon: SiRedux,
  },
  {
    skills: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skills: "Git",
    icon: BsGit,
  },
  {
    skills: "Figma",
    icon: FaFigma,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-2xl text-orange w-[100px] h-[100px]" />
            <p className="text-center text-white mt-4">{item.skills}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
