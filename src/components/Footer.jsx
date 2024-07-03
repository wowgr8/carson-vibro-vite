import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="w-full bg-blue-950 flex flex-col justify-center items-center pt-3 ">
      {/* placeholder for location address to the left */}
      {/* placeholder for location map box */}

      <p className="text-white text-md">&copy; 2024 github.com/wowgr8</p>
    </div>
  );
}

export default Footer;

{
  /* <div className="flex">
        <a
          href="https://github.com/wowgr8"
          className="text-yellow-300 hover:text-yellow-400 m-7 text-3xl"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/cesar-aug-lopez/"
          className="text-yellow-300 hover:text-yellow-400 m-7 text-3xl"
        >
          <BsLinkedin />
        </a>
        <a
          href="mailto:lopez.cesar.aug@gmail.com"
          className="text-yellow-300 hover:text-yellow-400 m-7 text-3xl"
        >
          <AiOutlineMail />
        </a>
      </div> */
}
