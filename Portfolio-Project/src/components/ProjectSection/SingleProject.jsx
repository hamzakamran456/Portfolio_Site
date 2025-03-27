import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

const SingleProject = ({ name, year, align, image }) => {
  return (
    <div
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange ">{name}</h2>
        <h2>{year}</h2>
        <a>
          View <BiSolidRightTopArrowCircle />
        </a>
      </div>
      <div>
        <div></div>
        <img src={image} alt="Project Image" />
      </div>
    </div>
  );
};

export default SingleProject;
