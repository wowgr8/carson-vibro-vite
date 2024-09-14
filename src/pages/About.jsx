import React from "react";
import { Element } from "react-scroll";
import CarsonIMG from "../assets/img/carson-pro-small.jpg";
import SpaceBG from "../assets/img/purple-space-background.jpg";

function About() {
  return (
    <Element
      name="aboutSection"
      className="relative overflow-hidden py-11"
      style={{
        backgroundImage: `url(${SpaceBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 lg:flex lg:items-center">
        <div className="lg:w-1/2 lg:h-full pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-60">
          <div className="pt-1"></div>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center md:text-center lg:text-left">
              <h2 className="my-6 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-extrabold text-yellow-400 text-center md:text-left drop-shadow-[0_6.2px_4.2px_rgba(0,0,0,0.8)]">
                MEET YOUR PRACTITIONER
              </h2>

              <p className="text-white sm:text-2xl lg:text-3xl lg:pt-5 text-2xl md:text-left drop-shadow-[0_7.2px_1.2px_rgba(0,0,0,0.8)]">
                Carson shares his natural gifts as a student of spiritual
                sciences, a graduate in media production from Boise State
                University, and a seasoned DJ and producer. In 2022, Carson felt
                inspired to step away from conventional music gigs in Idaho to
                explore a more profound path in Oregon. There, he connected with
                like-minded individuals and immersed himself in the study of
                sound healing and spiritual music, which profoundly influenced
                his path as a sound healer.
              </p>
            </div>
          </main>
        </div>
        {/* <div className="lg:w-1/2 py-6 px-6 flex justify-center">
          <img
            className="object-cover h-56 sm:h-72 md:h-96 lg:h-full rounded-2xl"
            src={CarsonIMG}
            alt="A headshot image of the practitioner, Carson Goff"
          />
        </div> */}
      </div>
    </Element>
  );
}

export default About;
