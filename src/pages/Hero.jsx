import React from "react";
import { Element } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import PebblesStill from "../assets/img/pebblesHDstill.jpg";

function Hero() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <Element
      name="heroSection"
      className="relative flex lg:h-[90vh] sm:h-[90vh] shrink-0 flex-col items-center justify-center"
    >
      {/* Container for the video or image background */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {isSmallScreen ? (
          <img
            src={PebblesStill}
            alt="Still Image"
            className="w-full h-full object-cover"
          />
        ) : (
          <iframe
            src="https://player.vimeo.com/video/959153035?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&loop=1&background=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="w-full aspect-video object-cover"
            title="pebblesHD"
          ></iframe>
        )}
      </div>

      {/* Container for the text */}
      <div className="relative py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-18 lg:px-12 z-20">
        <h1 className="pt-12 mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl text-yellow-300 drop-shadow-[0_6.2px_4.2px_rgba(0,0,0,0.8)]">
          Let go of your mind. Let go of your body. Find your Self.
        </h1>
        <h2 className="mb-8 text-xl font-normal  lg:text-4xl sm:px-16 xl:px-48 text-white drop-shadow-[0_7.2px_2.2px_rgba(0,0,0,0.8)]">
          A fully immersive, therapeutic sound experience designed to promote
          accelerated entry into deep meditative states.
        </h2>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-yellow-300 hover:text-yellow-500 drop-shadow-[0_6.2px_4.2px_rgba(0,0,0,0.8)] text-2xl font-bold text-center rounded-lg"
          >
            Learn more
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </Element>
  );
}

export default Hero;
