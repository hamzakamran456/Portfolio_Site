import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";

const Projects = [
  {
    name: "Vacation of Africa",
    year: "Mar2022",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Moola App",
    year: "Sept2022",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
  },
];

const ProjectMain = () => {
  return (
    <div className=" flex flex-col items-center mt-[100px]">
      <ProjectText />
      <div>
        <SingleProject />
      </div>
    </div>
  );
};

export default ProjectMain;
