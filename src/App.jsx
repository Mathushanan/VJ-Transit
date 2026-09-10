import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";
import Fleet from "./pages/Fleet";
import ServiceAreas from "./pages/ServiceAreas";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/fleet" element={<Fleet />} />

        <Route path="/service-areas" element={<ServiceAreas />} />

        <Route path="/quote" element={<Quote />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
