import React from "react";
import { Element } from "react-scroll";
import { BenefitsList } from "../helpers/Benefits";
import { SeenOnList } from "../helpers/SeenOn";
import BedGifSemiTransparent from "../assets/gif/Bed-transparent-v2.gif";

function Research() {
  return (
    <Element name="researchSection">
      <div className="flex flex-col items-center justify-center mt-5">
        <h1 className="text-center md:text-left text-4xl sm:text-4xl md:text-5xl font-extrabold my-6 md:pb-10 text-black dark:text-yellow-400 drop-shadow-[0_6.2px_4.2px_rgba(0,0,0,0.8)]">
          What Is Vibroacoustic Therapy?
        </h1>
        <p className="mx-6 mb-5 md:px-32 lg:px-72 text-2xl md:text-3xl md:text-left text-black dark:text-white">
          The human body is a complex cellular communication system relying on
          the continuous flow of chemical and electrical signals in order to
          maintain itself. When the flow of this information is compromised or
          imbalanced, it can cause physical, cognitive or emotional issues to
          arise.
          {/* How to conditionally render a line break? remove on sm screens and up */}
          <br />
          <br />
          Vibroacoustic Therapy is a unique, evidence-based form of therapy that
          combines sound and vibration to support the body at a deeper level and
          facilitate it in more efficiently restoring normal communication
          pathways and optimal function.
        </p>
      </div>
      <div className="bg-gradient-to-b from-blue-950 via-violet-950 to-blue-950">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-24">
          <img
            src={BedGifSemiTransparent}
            alt="Image of person laying on vibroacoustic therapy bed"
            className=""
          ></img>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-center sm:text-left text-4xl font-extrabold my-6 text-black dark:text-yellow-400 drop-shadow-[0_6.2px_4.2px_rgba(0,0,0,0.8)]">
              How It Works?
            </h2>
            <p className="text-xl lg:text-2xl text-black dark:text-white mb-3">
              Vibroacoustic Therapy works by delivering a wide range of sound
              waves into the body, where they are converted by the body into
              electrical signals. This process influences the overall energetic
              state of the body and serves to promote the return of compromised
              cells to a state of homeostasis (balance), which ultimately
              supports an ideal state of health.
            </p>
            <h2 className="text-center sm:text-left text-4xl font-extrabold my-6 text-black dark:text-yellow-400 drop-shadow-[0_6.2px_4.2px_rgba(0,0,0,0.8)]">
              Other Benefits:
            </h2>
            <p className="text-xl lg:text-2xl text-black dark:text-white">
              In addition to its therapeutic benefits, Vibroacoustic Therapy
              also offers an immersive, pleasurable experience. The therapy can
              change one's sensations and overall perception of the body in
              space, entrain the brainwave patterns to states of deep
              meditation, and promote non-ordinary states of consciousness. This
              connected state can provide an individual with the ability to
              achieve unique benefits for modern-day living.
            </p>
            {/* GRID SECTION - FOR CONSUMERS DETAILS */}
            {/* <div className="grid grid-cols-3 gap-4">
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
              {BenefitsList.map((benefit, index) => {
                return (
                  // <motion.li
                  // key={benefit.id}
                  // variants={cardVariants}
                  // initial="initial"
                  // animate={isInView ? "animate" : "initial"}
                  // transition = {{duration: 0.3, delay:index * 0.4 }}
                  // >
                  
                    key={index}
                    image={benefit.image}
                    description={benefit.description}
                  
                  // </motion.li>
                );
              }))}
            </ul>
          </div> */}
          </div>
        </div>

        {/* BENEFITS LIST SECTION: */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BenefitsList.map((benefit) => (
            <div key={benefit.id} className="p-4 text-center">
              <img
                src={benefit.image}
                alt={benefit.description}
                className="mx-auto"
              />
              <p className="text-black dark:text-white mt-4 text-lg md:text-2xl">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        {/* following div should have it's own background color */}
        {/*       <div className="bg-gradient-to-b from-blue-950 via-indigo-950 to-blue-950"> */}
        <div>
          <h2 className="text-center text-4xl font-extrabold my-6 pt-8 md:pt-32 pb-12 text-black dark:text-yellow-400 drop-shadow-[0_6.2px_4.2px_rgba(0,0,0,0.8)]">
            Vibroacoustic Therapy has been featured in...
          </h2>

          {/* SEEN ON BANNER SECTION: */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-10">
            {SeenOnList.map((outlet) => (
              <div
                key={outlet.id}
                className="p-4 text-center drop-shadow-[0_6.2px_4.2px_rgba(0,0,0,0.8)]"
              >
                <img
                  src={outlet.image}
                  alt={outlet.description}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Research;
