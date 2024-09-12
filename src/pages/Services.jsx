import React from "react";
import { Element } from "react-scroll";

function Services() {
  return (
    <Element name="servicesSection">
      <div className="bg-gradient-to-b from-blue-950 via-violet-900 to-blue-950">
        <div className="flex flex-col items-center justify-center mt-5">
          <h1 className="text-center md:text-left text-4xl sm:text-4xl md:text-5xl font-extrabold my-6 md:pb-10 text-yellow-400 drop-shadow-[0_6.2px_4.2px_rgba(0,0,0,0.8)]">
            Services
          </h1>
          <p className="mx-6 mb-5 md:px-32 lg:px-72 text-2xl md:text-3xl md:text-left text-white">
            Services placeholder
          </p>
        </div>
      </div>
    </Element>
  );
}

export default Services;
