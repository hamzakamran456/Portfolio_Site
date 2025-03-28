import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";


const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <img
          src="../../public/images/email-image.png"
          alt="Contact Me"
          className="max-w-[300px]"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ContactInfo />
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ContactSocial />
      </motion.div>
    </div>
  );
};

export default ContactMeRight;
