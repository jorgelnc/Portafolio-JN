import React from "react";
import "normalize.css";
import "./css/main.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import BackgroundBody from "./components/BackgroundBody/BackgroundBody";

function App() {
  return (
    <div className="container">
      <BackgroundBody />
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
