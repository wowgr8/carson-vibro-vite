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
      className="relative overflow-hidden py-8 px-8 sm:py-6 sm:px-6"
      style={{
        // backgroundImage: `url(${Mind06})`,
        backgroundImage: `url(${Mind14})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="text-yellow-400 mt-4 mb-5 lg:my-6 flex justify-center  text-3xl sm:text-3xl md:text-4xl font-extrabold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]">
          <h2>SCHEDULE A CONSULTATION</h2>
        </div>
        {/* <!-- Calendly inline widget begin --> */}
        <div
          className="calendly-inline-widget w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-[550px] sm:h-[600px] md:h-[600px] lg:h-[700px]"
          // Top data-url hides left pane:
          data-url="https://calendly.com/773ohh/vibe-thrive-session?hide_gdpr_banner=1&hide_event_type_details=1"
          // data-url="https://calendly.com/773ohh/vibe-thrive-session?hide_gdpr_banner=1"
        ></div>
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
