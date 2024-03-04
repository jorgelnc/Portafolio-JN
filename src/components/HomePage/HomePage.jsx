import React from "react";
import "../HomePage/HomePage.css";
import imgProfile from "../../assets/img/Imagen2.png";

function HomePage() {
  return (
    <div className="container">
      <div className="hero" id="hero">
        <ul className={"hero-list list"}>
          <li className="hero-item-list">
            <h1>Jorge Luis Nava Colina</h1>
          </li>
          <li className="hero-item-list">
            <h2>Ingeniero en computacion</h2>
          </li>
          <li className="hero-item-list">
            <h2>Desarrollador Web</h2>
          </li>
          <li className="hero-item-list">
            <p className="hero-item-description">
              <i>
                Transformo en realidad tus ilusiones y hago que las cosas
                sucedan.
              </i>
            </p>
          </li>
        </ul>
        <div className="img_container">
          <img src={imgProfile} alt="Imagen de perfil" className="imgProfile" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
