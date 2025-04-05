import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

const Projects = [
  {
    name: "Automation AI Agents",
    text: "A smart automation platform powered by AI agents for efficient task handling.",
    align: "right",
    image: "/images/web-1.png",
    link: "https://automation-page-main.vercel.app/",
  },
  {
    name: "DashBoard",
    text: "An interactive dashboard for visualizing and managing data insights effectively.",
    align: "left",
    image: "/images/web-2.png",
    link: "https://dash-board-page-three.vercel.app/",
  },
  {
    name: "Cara Ecommerce",
    text: "A sleek and modern ecommerce platform designed for a seamless shopping experience.",
    align: "right",
    image: "/images/web-3.png",
    link: "https://hamza-ecommere-site.vercel.app/",
  },
  {
    name: "Shopper Ecommerce",
    text: "A user-friendly ecommerce site offering smooth navigation and fast checkout.",
    align: "left",
    image: "/images/web-4.png",
    link: "https://react-ecommerce-site-sooty.vercel.app/",
  },
  {
    name: "Travello Go",
    text: "A vibrant travel website for discovering destinations and planning trips with ease.",
    align: "right",
    image: "/images/web-5.png",
    link: "https://travel-react-site.vercel.app/",
  },
  {
    name: "Gemini Clone",
    text: "A sleek clone of Google's Gemini AI interface with responsive design and chat features.",
    align: "left",
    image: "/images/web-6.png",
    link: "https://gemini-clone-nine-psi.vercel.app/",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {Projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              text={item.text}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
