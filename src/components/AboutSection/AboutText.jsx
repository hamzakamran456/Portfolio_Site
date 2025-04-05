import React from "react";

const AboutText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-centers">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white mb-6">
        I’m Hamza Kamran, a passionate Front-End Developer with expertise in
        Html,Css React, JavaScript, and modern web technologies. I love creating
        intuitive, high-performance, and visually appealing user interfaces.
        With a strong background in UI/UX design and responsive web development,
        I focus on delivering seamless user experiences. Where I share tutorials
        and insights to help others master front-end development. I believe in
        continuous learning, innovation, and sharing knowledge to inspire others
        in their tech journey.
      </p>
      <button
        onClick={() => window.open("/public/Hamza-Kamran-Resume.pdf", "_blank")}
        className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mb-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start text-white hover:text-cyan"
      >
        Resume
      </button>
    </div>
  );
};

export default AboutText;
