import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const mobileMenuLinks = [
    {
      title: "Home",
      path: "heroSection",
      offset: 0,
    },
    {
      title: "Research",
      path: "researchSection",
      offset: -50,
    },
    {
      title: "Practitioner",
      path: "aboutSection",
      offset: 0,
    },
    {
      title: "Booking",
      path: "bookingSection",
      offset: -55,
    },
  ];

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-50 bg-blue-950">
      <div className="flex container lg-py-4 flex-wrap">
        <ScrollLink to="hero" smooth={true} duration={500}>
          {/* <img src={Logo} alt="Logo" width={160} height={40} /> */}
        </ScrollLink>
        <div className=" mobile-menu block md:hidden">
          {!expandNavbar ? (
            <button
              onClick={() => setExpandNavbar(true)}
              className="flex items-center px-3 py-2 border rounded border-yellow-200 hover:text-yellow-400 hover:border-yellow-400 text-yellow-300"
            >
              <FaBars className=" h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setExpandNavbar(false)}
              className="flex items-center px-3 py-2 border rounded border-yellow-200 hover:text-yellow-400 hover:border-yellow-400 text-yellow-300"
            >
              <IoCloseSharp className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex py-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 ">
            <li className="mr-6 hover:text-yellow-300">
              <ScrollLink
                to="researchSection"
                smooth={true}
                duration={500}
                offset={-50}
              >
                Research
              </ScrollLink>
            </li>
            <li className="mr-6 hover:text-yellow-300">
              <ScrollLink to="aboutSection" smooth={true} duration={500}>
                Practitioner
              </ScrollLink>
            </li>
            <li className="mr-6 hover:text-yellow-300">
              <ScrollLink to="bookingSection" smooth={true} duration={500}>
                Booking
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
      {expandNavbar ? (
        <ul className="flex flex-col py-4 items-center text-yellow-300">
          {" "}
          {mobileMenuLinks.map((link, index) => (
            <li key={index}>
              <ScrollLink
                onClick={() => setExpandNavbar(false)}
                to={link.path}
                spy={true}
                smooth={true}
                duration={500}
                offset={link.offset}
                className="hover:text-yellow-300"
              >
                {link.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
}

export default Navbar;
