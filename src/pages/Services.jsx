import React from "react";
import { Element } from "react-scroll";

function Services() {
  return (
    <Element name="servicesSection">
      <div className="bg-gradient-to-b from-blue-950 via-violet-900 to-blue-950 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <h1 className="text-center text-4xl sm:text-5xl font-extrabold mb-10 text-yellow-400 drop-shadow-[0_6.2px_4.2px_rgba(0,0,0,0.8)]">
            Services
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vibrational Sound Table Therapy Overview */}
            <div className="bg-blue-900 rounded-lg shadow-lg p-6">
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                Vibrational Sound Table Therapy
              </h2>
              <p className="text-lg text-white mb-6">
                Our Vibrational Sound Table Therapy uses frequencies to resonate
                through the entire body, vibrating the organs, muscles, and
                bones. This therapy combines ancient wisdom with modern
                technology to create a deeply immersive and effective
                experience.
              </p>
              <p className="text-lg text-white">
                The table emits low frequencies that sync with healing music,
                promoting brainwave entrainment and inducing a meditative state
                while releasing energy blockages and restoring balance.
              </p>
            </div>

            {/* Benefits List */}
            <div className="bg-blue-900 rounded-lg shadow-lg p-6">
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                Our Therapies Help With:
              </h2>
              <ul className="list-disc list-inside text-lg text-white space-y-2">
                <li>Sleep deprivation, insomnia, and poor rest</li>
                <li>Anxiety, depression, and stress</li>
                <li>Emotional blockage and release</li>
                <li>Chronic pain, headaches, and internal pain</li>
                <li>Detoxifying organs and muscles</li>
                <li>Releasing limiting belief systems</li>
                <li>Reactivating creativity and healing</li>
                <li>Cell rejuvenation and bone regrowth</li>
                <li>Balancing adrenals and endorphins</li>
                <li>Deepening meditation and subconscious connection</li>
                <li>Activating chakras and energy systems</li>
                <li>Raising consciousness and spiritual alignment</li>
              </ul>
            </div>
          </div>

          {/* Combined Technology Section in One Card */}
          <div className="bg-violet-900 rounded-lg shadow-lg p-6 mt-10">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
              Cutting-edge Technology
            </h2>
            <p className="text-lg text-white mb-8">
              Our advanced sound therapy technology turns your entire body into
              a resonating speaker, sending healing vibrations through every
              organ and cell. Using electromagnetic pulsing, masculine and
              feminine energy balance, Vogel crystals, and Tesla Coils, our
              BioVibe tables amplify healing in a revolutionary way.
            </p>

            {/* Technology Details - 2x2 Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Column 1 */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                  Electromagnetic Pulsing
                </h3>
                <p className="text-lg text-white mb-6">
                  One of the most powerful forces on Earth, electromagnetic
                  pulsing helps direct vibrational acoustics, promoting balance
                  between masculine and feminine energies.
                </p>

                <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                  Masculine & Feminine Energy
                </h3>
                <p className="text-lg text-white">
                  By harmonizing these two energy forces, we achieve a balanced
                  and comprehensive healing experience.
                </p>
              </div>

              {/* Column 2 */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                  Embedded Vogel Crystal
                </h3>
                <p className="text-lg text-white mb-6">
                  Vogel crystals in our BioVibe tables amplify and transmit the
                  Universal Life Force Energy, or "Chi." The crystal’s precise
                  cut enhances the user’s energy, aligning it with the crystal’s
                  structural perfection.
                </p>

                <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                  Tesla Coils
                </h3>
                <p className="text-lg text-white">
                  Designed by Nikola Tesla, this technology generates
                  oscillating waves to produce low-frequency pulsing magnetic
                  fields. It aids in treating pain and detoxifying the body
                  during sessions with our BioVibe tables.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-violet-900 rounded-lg shadow-lg p-6 mt-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Pricing & Membership Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Session Pricing */}
              <div className="text-white">
                <h3 className="text-2xl font-semibold mb-2">Session Rates</h3>
                <ul className="list-disc list-inside text-lg space-y-2">
                  <li>$70-100 per hour (most effective)</li>
                  <li>$40-50 per half-hour</li>
                </ul>
              </div>

              {/* Membership Plans */}
              <div className="text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  Membership Plans
                </h3>
                <ul className="list-disc list-inside text-lg space-y-2">
                  <li>Monthly - $270 (4 sessions)</li>
                  <li>Quarterly - $725 (12 sessions)</li>
                  <li>Yearly - $2,500 (52 sessions)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rewards Section */}
          <div className="bg-violet-800 rounded-lg shadow-lg p-6 mt-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Rewards & Booking
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Rewards */}
              <div className="text-white">
                <h3 className="text-2xl font-semibold mb-2">Rewards</h3>
                <ul className="list-disc list-inside text-lg space-y-2">
                  <li>Get 50% off after your second session</li>
                  <li>Get 50% off after 10 sessions</li>
                  <li>Refer a friend and receive $10 off your next session</li>
                </ul>
              </div>

              {/* Booking Information */}
              <div className="text-white">
                <h3 className="text-2xl font-semibold mb-2">Booking</h3>
                <p className="text-lg">
                  If the available times don’t fit your schedule, feel free to
                  reach out, and we’ll do our best to accommodate you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Services;
