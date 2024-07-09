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
          <div>About</div>
        </div>
      </div>
    </Element>
  );
}

export default About;
