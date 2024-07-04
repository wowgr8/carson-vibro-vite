import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-blue-950">
      <div className="max-w-screen-xl py-10 px-4 sm:px-6 dark:text-white text-gray-800 sm:flex justify-between mx-auto">
        {/* placeholder for location address to the left */}
        <div className="p-5 sm:w-7/12 bg-red-500">
          <h3 className="font-bold text-3xl dark:text-white text-gray-800 mb-4">
            Vibe & Thrive
          </h3>
          <h3 className="text-xl dark:text-white text-gray-800 mb-4">
            4204 SE Boise st. Portland Oregon 97206
          </h3>
        </div>
        {/* placeholder for location map box */}
        <div className="p-5 sm:w-5/12 bg-green-500">
          <p>MAP</p>
        </div>
      </div>
      <div className="flex py-5 m-auto dark:text-white text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
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
