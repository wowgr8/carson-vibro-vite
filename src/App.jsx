import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Research from "./pages/Research";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-blue-950">
      <Router>
        <Navbar />
        <Hero />
        <Research />
        <About />
        <Booking />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
