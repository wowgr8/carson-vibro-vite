import React from "react";
import { Element } from "react-scroll";
import CarsonTEMP from "../assets/img/carson-goff-temp.jpeg";
import SpaceBG from "../assets/img/purple-space-background.jpg";

function About() {
  return (
    <Element
      name="aboutSection"
      className="relative overflow-hidden mt-16 py-11"
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
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-yellow-400 sm:text-3xl md:text-4xl drop-shadow-[0_6.2px_4.2px_rgba(0,0,0,0.8)] text-center">
                MEET YOUR PRACTITIONER
              </h2>

              <p className="text-white sm:text-2xl text-lg drop-shadow-[0_7.2px_1.2px_rgba(0,0,0,0.8)]">
                Donec porttitor, enim ut dapibus lobortis, lectus sem tincidunt
                dui, eget ornare lectus ex non libero. Nam rhoncus diam ultrices
                porttitor laoreet. Ut mollis fermentum ex, vel viverra lorem
                volutpat sodales. In ornare porttitor odio sit amet laoreet. Sed
                laoreet, nulla a posuere ultrices, purus nulla tristique turpis,
                hendrerit rutrum augue quam ut est. Fusce malesuada posuere
                libero, vitae dapibus eros facilisis euismod. Sed sed lobortis
                justo, ut tincidunt velit. Mauris in maximus eros.
              </p>
            </div>
          </main>
        </div>
        <div className="lg:w-1/2 py-6 px-6 flex justify-center">
          <img
            className="object-cover h-56 md:h-96 lg:h-full rounded-2xl"
            src={CarsonTEMP}
            alt="A headshot image of the practitioner, Carson Goff"
          />
        </div>
      </div>
    </Element>
  );
}

export default About;
