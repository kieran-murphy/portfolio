import React from "react";
import { FaEnvelope, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex lg:flex-row md:flex-row h-screen lg:w-1/4 m-auto justify-between items-center text-center text-slate-200 text-7xl"
    >
      <a href="mailto: kieran.murphy498@gmail.com">
        <FaEnvelope />
      </a>
      <a href="https://github.com/kieran-murphy">
        <FaGithubSquare />
      </a>
      <a href="https://www.linkedin.com/in/kieran-murphy10/">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default Contact;
