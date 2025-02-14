import React from "react";
import logo from "../../assets/img/logoJN.jpg";
import "../NavBarSecond/NavBarSecond.css";
import { Link } from "react-router-dom";

function NavBarSecond() {
  return (
    <nav className="container">
      <div className="navbar2">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul className="navbar-menu2 list">
          <li className="navbar-item2">
            <Link to="/" className="link navbar-line-link">
              Inicio
            </Link>
          </li>
          <li className="navbar-item2">
            <Link to="/about" className="link navbar-line-link">
              Acerca de
            </Link>
          </li>
          <li className="navbar-item2">
            <Link to="/projects" className="link navbar-line-link">
              Proyectos
            </Link>
          </li>
          <li className="navbar-item2">
            <Link to="/contact" className="link navbar-line-link">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarSecond;
