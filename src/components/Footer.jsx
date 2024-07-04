import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-blue-950">
      <div className="max-w-screen-xl py-10 px-4 sm:px-6 dark:text-white text-gray-800 sm:flex justify-between mx-auto">
        {/* placeholder for location address to the left */}
        <p>ADDRESS</p>
        {/* placeholder for location map box */}
        <p>MAP</p>
      </div>
      <div class="flex py-5 m-auto dark:text-white text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <p>&copy; 2024 github.com/wowgr8</p>
      </div>
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
