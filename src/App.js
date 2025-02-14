import React from "react";
import { Routes, Route } from "react-router-dom";
import "normalize.css";
import "./css/main.css";
import HomePage from "./components/HomePage/HomePage";
import BackgroundBody from "./components/BackgroundBody/BackgroundBody";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="container">
      <BackgroundBody />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
