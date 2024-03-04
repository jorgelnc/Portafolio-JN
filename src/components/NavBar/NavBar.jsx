import React from "react";
import logo from "../../assets/img/logoJN.jpg";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="container">
      <div id="links">
        <div className="navbar">
          <a href="/" className="navbar-logo">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <ul className="navbar-menu list">
            <li className="navbar-item">
              <a href="/" className="link navbar-line-link">
                Inicio
              </a>
            </li>
            <li className="navbar-item">
              <a href="/AboutMe" className="link navbar-line-link">
                Acerca de
              </a>
            </li>
            <li className="navbar-item">
              <a href="/contact" className="link navbar-line-link">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
