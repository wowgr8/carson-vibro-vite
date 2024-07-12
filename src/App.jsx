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
        <div className="container mt-4 mx-auto py-4">
          <Research />
        </div>
        <About />
        <div className="container mx-auto py-4">
          <Booking />
        </div>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
