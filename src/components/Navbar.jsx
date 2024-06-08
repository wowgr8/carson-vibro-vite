import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const mobileMenuLinks = [
    {
      title: "Home",
      path: "heroSection",
    },
    {
      title: "Research",
      path: "researchSection",
    },
    {
      title: "Booking",
      path: "bookingSection",
    },
    {
      title: "About",
      path: "aboutSection",
    },
  ];

  return <div>Navbar</div>;
}

export default Navbar;
