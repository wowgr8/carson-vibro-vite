import React, { useEffect } from "react";
import { Element } from "react-scroll";
import Mind14 from "../assets/img/mind-14-landscape.jpg";
import Mind06 from "../assets/img/mind-06.jpg";

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
    <Element
      name="bookingSection"
      className="relative overflow-hidden mt-16 py-11"
      style={{
        backgroundImage: `url(${Mind06})`,
        // backgroundImage: `url(${Mind14})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="items-center justify-center mt-5">
        {/* <!-- Calendly inline widget begin --> */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/773ohh/vibe-thrive-session?hide_gdpr_banner=1"
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
        {/* <!-- Calendly inline widget end --> */}
      </div>
    </Element>
  );
}

export default Booking;

// BELOW IS A POPUP TEXT VERSION OF CALENDLY
//
//
//
//
//

// import React, { useEffect } from "react";

// function BookingLink() {
//   useEffect(() => {
//     // Load Calendly CSS
//     const link = document.createElement("link");
//     link.href = "https://assets.calendly.com/assets/external/widget.css";
//     link.rel = "stylesheet";
//     document.head.appendChild(link);

//     // Load Calendly script
//     const script = document.createElement("script");
//     script.src = "https://assets.calendly.com/assets/external/widget.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.head.removeChild(link);
//       document.body.removeChild(script);
//     };
//   }, []);

//   const handleClick = (e) => {
//     e.preventDefault();
//     window.Calendly.initPopupWidget({
//       url: 'https://calendly.com/773ohh/vibe-thrive-session?hide_gdpr_banner=1'
//     });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center mt-5">
//       <a
//         href="#"
//         onClick={handleClick}
//         className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
//       >
//         Schedule time with me
//       </a>
//     </div>
//   );
// }

// export default BookingLink;
