import React from "react";
import logo from "../../assets/img/logoJN.jpg";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="container">
      <div id="link">
        <div className="navbar">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <ul className="navbar-menu list">
            <li className="navbar-item">
              <Link to="/" className="link navbar-line-link">
                Inicio
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="link navbar-line-link">
                Acerca de
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/projects" className="link navbar-line-link">
                Proyectos
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="link navbar-line-link">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
