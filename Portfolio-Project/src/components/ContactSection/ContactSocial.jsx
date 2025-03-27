import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoStackoverflow } from "react-icons/io5";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        Link="https://www.linkedin.com/in/hamza-kamran-b873b329a/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        Link="https://github.com/hamzakamran456"
        Icon={FaGithub}
      />
      <SingleContactSocial
        Link="https://stackoverflow.com/users/27565785/hamza-kamran"
        Icon={IoLogoStackoverflow}
      />
    </div>
  );
};

export default ContactSocial;
