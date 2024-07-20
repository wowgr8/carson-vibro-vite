import React from "react";
import { Element } from "react-scroll";
import { BenefitsList } from "../helpers/Benefits";
import { SeenOnList } from "../helpers/SeenOn";
// import BedGifSemiTransparent from "../assets/gif/Bed-semi-transparent.gif";
import BedGifSemiTransparent from "../assets/gif/Bed-transparent-v2.gif";

function Research() {
  return (
    <Element name="researchSection">
      <div className="flex flex-col items-center justify-center mt-5">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
          What Is Vibroacoustic Therapy?
        </h1>
        <h2 className="text-xl mx-7 text-black dark:text-white">
          The human body is a complex cellular communication system relying on
          the continuous flow of chemical and electrical signals in order to
          maintain itself. When the flow of this information is compromised or
          imbalanced, it can cause physical, cognitive or emotional issues to
          arise. Vibroacoustic Therapy is a unique, evidence-based form of
          therapy that combines sound and vibration to support the body at a
          deeper level and facilitate it in more efficiently restoring normal
          communication pathways and optimal function. Vibroacoustic Therapy has
          been featured in...
        </h2>
      </div>
      {/* SEEN ON BANNER SECTION: */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SeenOnList.map((outlet) => (
          <div key={outlet.id} className="p-4 text-center">
            <img
              src={outlet.image}
              alt={outlet.description}
              className="mx-auto"
            />
            {/* <p className="text-black dark:text-white mt-4">
              {outlet.description}
            </p> */}
          </div>
        ))}
      </div>

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          // src="//sagespacetechnologies.com/cdn/shop/files/Bed_1024x1024.gif?v=1679135086"
          src={BedGifSemiTransparent}
          alt="Image of person laying on vibroacoustic therapy bed"
        ></img>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            How It Works?
          </h2>
          <p className="text-base md:text-lg text-black dark:text-white mb-3">
            Vibroacoustic Therapy works by delivering a wide range of sound
            waves into the body, where they are converted by the body into
            electrical signals. This process influences the overall energetic
            state of the body and serves to promote the return of compromised
            cells to a state of homeostasis (balance), which ultimately supports
            an ideal state of health.
          </p>
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            Other Benefits:
          </h2>
          <p className="text-base md:text-lg text-black dark:text-white">
            In addition to its therapeutic benefits, Vibroacoustic Therapy also
            offers an immersive, pleasurable experience. The therapy can change
            one's sensations and overall perception of the body in space,
            entrain the brainwave patterns to states of deep meditation, and
            promote non-ordinary states of consciousness. This connected state
            can provide an individual with the ability to achieve unique
            benefits for modern-day living.
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {BenefitsList.map((benefit) => (
          <div key={benefit.id} className="p-4 text-center">
            <img
              src={benefit.image}
              alt={benefit.description}
              className="mx-auto"
            />
            <p className="text-black dark:text-white mt-4">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </Element>
  );
}

export default Research;
