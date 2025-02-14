import React from "react";
import "../AboutMe/AboutMe.css";
import NavBarSecond from "../NavBarSecond/NavBarSecond";
import profileIMG from "../../assets/img/Profile.jpg";

function AboutMe() {
  return (
    <div className="backgroundAbout">
      <NavBarSecond />
      <div className="container">
        <ul className="descriptionLists list">
          <li className="descriptionItem personalInformation">
            <ul className="personalInformation__list list">
              <li className="personalInformation_img">
                <img
                  src={profileIMG}
                  className="profileIMG"
                  alt="Foto de perfil"
                />
              </li>
              <li className="personalInformation_title">
                <h3>Jorge Luis Nava Colina</h3>
                <h4>Ingeniero en Computación</h4>
                <h4>Desarrollador Web</h4>
              </li>
              <li className="personalInformation_desc">
                En constante evolución y desarrollo, rapidez, eficacia y
                orientado a la solución para el cliente. Conocimiento en
                ofimática, soporte computaciónal hardware y software, redes,
                habilidades con la integración de HTML, CSS, SASS, BEM, GIT,
                VSCODE, JAVASCRIPT, REACT JS Y NODE JS para el desarrollo web.
              </li>
            </ul>
          </li>
          <li className="descriptionItem educationInformation workExperience">
            <ol className="educationInformation_list">
              <h3>Estudios Realizados</h3>
              <li>Curso - Desarrollador FullStack</li>
              <li>Universitario - Ingenieria en Computacion</li>
              <li>Secundaria - Bachiller en Ciencias</li>
            </ol>
            <ul className="educationInformation_list">
              <h3>Experiencia Laboral</h3>
              <li>Desarrollador Front-End Freelance</li>
              <li>Desarrollador Front-End</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
