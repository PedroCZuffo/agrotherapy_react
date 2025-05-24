import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/images/logo_head.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top" role="navigation" aria-label="Menu principal">
      <div className="container">
        <Link className="navbar-brand" to="/" aria-label="Página inicial AgroTherapy">
          <img src={logo} alt="Logo AgroTherapy" width="150" height="50" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Abrir menu de navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link px-3" to="/">Início</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/about">Sobre Nós</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/contact">Fale Conosco</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 bg-success bg-gradient rounded text-white ms-2" to="/get-in">Faça Parte</Link>
            </li>
            <li className="nav-item">
              <Link style={{background: "#7b7bb9"}} className="nav-link px-3 bg-gradient rounded text-white ms-2" to="/work-with-us">Trabalhe Conosco</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;