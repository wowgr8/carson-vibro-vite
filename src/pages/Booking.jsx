import React, { useEffect } from "react";
import { Element } from "react-scroll";

function Booking() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Element name="bookingSection">
      <div className="flex flex-col items-center justify-center mt-5">
        {/* <!-- Calendly inline widget begin --> */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/773ohh/vibe-thrive-session"
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
        {/* <!-- Calendly inline widget end --> */}
      </div>
    </Element>
  );
}

export default Booking;
