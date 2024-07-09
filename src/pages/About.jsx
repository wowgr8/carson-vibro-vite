import React from "react";
import { Element } from "react-scroll";

function About() {
  return (
    <Element
      name="aboutSection"
      className="relative bg-white overflow-hidden mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>
          <div>About</div>
        </div>
      </div>
    </Element>
  );
}

export default About;
