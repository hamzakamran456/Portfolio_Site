import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text={"hamzakamrn8@gmail.com"} Image={MdOutlineMailOutline} />
      <SingleInfo text={"+92 303 2019428"} Image={FiPhone} />
      <SingleInfo text={"Karachi, Pakistan"} Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
