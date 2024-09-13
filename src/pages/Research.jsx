import React, { useState, useTransition } from "react";
import { Element } from "react-scroll";
import { BenefitsList } from "../helpers/Benefits";
import { SeenOnList } from "../helpers/SeenOn";
import { PhenomenaList } from "../helpers/ThreeMainPhenomena";
import PhenomenaButton from "../components/PhenomenaButton";
import BedGifSemiTransparent from "../assets/gif/Bed-transparent-v2.gif";

function Research() {
  const [tab, setTab] = useState("Brain Wave Entrainment");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <Element name="researchSection">
      <div className="flex flex-col items-center justify-center mt-5">
        <h1 className="text-center md:text-left text-4xl sm:text-4xl md:text-5xl font-extrabold my-6 md:pb-10 text-yellow-400 drop-shadow-[0_6.2px_4.2px_rgba(0,0,0,0.8)]">
          What Is Vibroacoustic Therapy?
        </h1>
        <p className="mx-6 mb-5 md:px-32 lg:px-72 text-2xl md:text-3xl md:text-left text-white">
          The human body is a complex cellular communication system relying on
          the continuous flow of chemical and electrical signals in order to
          maintain itself. When the flow of this information is compromised or
          imbalanced, it can cause physical, cognitive or emotional issues to
          arise.
          {/* How to conditionally render a line break? remove on sm screens and up */}
          <br />
          <br />
          Vibroacoustic therapy (VAT) is a unique, non-invasive, evidence-based
          form of sound therapy. VAT is a safe, drug-free approach to reducing
          pain and anxiety while improving the quality of everyday life. Whether
          you are suffering from overload in your work life or dealing with a
          serious medical condition, VAT is a powerful modality that will help
          you relax and restore normal communication pathways and optimal
          function throughout the body.
        </p>
      </div>
      <div className="bg-gradient-to-b from-blue-950 via-violet-900 to-blue-950">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-24">
          <img
            src={BedGifSemiTransparent}
            alt="Image of person laying on vibroacoustic therapy bed"
            className=""
          ></img>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-center sm:text-left text-4xl font-extrabold my-6 text-yellow-400 drop-shadow-[0_6.2px_4.2px_rgba(0,0,0,0.8)]">
              How It Works?
            </h2>
            <p className="text-xl lg:text-2xl text-white mb-3">
              Vibroacoustic therapy uses low-frequency vibrations between 30 and
              120 Hz, accompanied by the use of headphones that cover the rest
              of the frequency spectrum, typically up to 20,000 hertz.
              <br />
              <br />
              As humans, we consist of about 70% water, and it has been proven
              that sound and frequencies travel about four times faster and more
              efficiently through water than through air. As water is moved by
              vibration, its molecules, cells, and DNA react and communicate
              with each other. As this communication occurs, healthy resonance
              and harmony are restored to the body. This idea helps to explain
              why vibroacoustic therapy is so impactful.
            </p>

            <h2 className="text-center sm:text-left text-4xl font-extrabold my-6 text-yellow-400 drop-shadow-[0_6.2px_4.2px_rgba(0,0,0,0.8)]">
              Other Benefits:
            </h2>
            <p className="text-xl lg:text-2xl text-white">
              In addition to its emotional and physical therapeutic benefits,
              Vibroacoustic Therapy also offers an immersive experience that is
              unparalleled by other sound therapies. VAT can entrain brainwave
              patterns to states of deep meditation, providing clients with
              unique and profound benefits that they can learn to use in their
              everyday lives.
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

        {/* Three Main Phenomena Section */}
        <div className="m-8">
          <h2 className="text-center text-4xl font-extrabold my-6 text-yellow-400 drop-shadow-[0_6.2px_4.2px_rgba(0,0,0,0.8)]">
            VAT Utilizes These Three Main Phenomena
          </h2>
          <div className="flex justify-evenly">
            {" "}
            <PhenomenaButton
              selectTab={() => handleTabChange("Brain Wave Entrainment")}
              active={tab === "Brain Wave Entrainment"}
            >
              Brain Wave Entrainment
            </PhenomenaButton>
            <PhenomenaButton
              selectTab={() => handleTabChange("Cymatics")}
              active={tab === "Cymatics"}
            >
              Cymatics
            </PhenomenaButton>
            <PhenomenaButton
              selectTab={() => handleTabChange("Intention")}
              active={tab === "Intention"}
            >
              Intention
            </PhenomenaButton>
          </div>
        </div>
        <div className="m-5 md:m-12 text-xl lg:text-2xl text-white px-2 md:px-10 pb-3">
          {PhenomenaList.find((t) => t.id === tab).description}
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
              <p className="text-white mt-4 text-lg md:text-2xl md:px-8">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CONDITIONS SECTION PLACEHOLDER */}
        {/* <div>CONDITIONS SECTION</div> */}

        {/* following div should have it's own background color */}
        {/*       <div className="bg-gradient-to-b from-blue-950 via-indigo-950 to-blue-950"> */}
        <div>
          <h2 className="text-center text-4xl font-extrabold my-6 pt-8 md:pt-32 pb-12 text-yellow-400 drop-shadow-[0_6.2px_4.2px_rgba(0,0,0,0.8)]">
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
