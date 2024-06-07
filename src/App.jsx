import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Research from "./pages/Research";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Research />
      <Booking />
      <About />
      <Footer />
    </main>
  );
}

export default App;
