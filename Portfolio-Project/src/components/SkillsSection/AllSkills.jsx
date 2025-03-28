import React from "react";
import { FaHtml5 } from "react-icons/fa";
import SingleSkills from "./SingleSkills";
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

const AllSkills = () => {
  return (
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={index}
          >
            <SingleSkills
              key={index}
              text={item.skills}
              imgSvg={<item.icon />}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkills;
