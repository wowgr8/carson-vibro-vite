import React from "react";

function Footer() {
  return (
    <div className="bg-blue-950 border-t border-blue-900">
      <div className="max-w-screen-xl py-1 px-4 sm:px-6 text-white sm:flex justify-between mx-auto">
        {/* Address and Logo section */}
        <div className="p-5 sm:w-7/12 flex flex-col items-center justify-center">
          <h3 className="font-bold text-5xl text-white mb-4">Vibe & Thrive</h3>
          <h3 className="text-xl text-white">
            4204 SE Boise st. Portland Oregon 97206
          </h3>
        </div>
        {/* Map section */}
        <div className="p-5 sm:w-5/12">
          <div className="relative pt-[60%] overflow-hidden border-4 border-yellow-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.8728214636294!2d-122.62123792350295!3d45.49250573154936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a070935d5ce5%3A0xefeed5e3b1ec70ef!2s4204%20SE%20Boise%20St%2C%20Portland%2C%20OR%2097206!5e0!3m2!1sen!2sus!4v1720203368890!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex py-2 m-auto text-white text-sm flex-col items-center border-t border-blue-900 max-w-screen-xl">
        <p>&copy; 2024 github.com/wowgr8</p>
      </div>
    </div>
  );
}

export default Footer;
