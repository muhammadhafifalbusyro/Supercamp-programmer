import React from "react";
import Logo from "../../Assets/logo3.png";
import Logo2 from "../../Assets/logowhite.png"
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top header"
      style={{ background: `${props.color}`,    boxShadow:`${props.shadow}` }}
    >
      <img src={props.logo === false ? Logo2 : Logo} alt="" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="mr-auto"></div>
        <div className="navbar-nav">
          <NavLink exact to="/" activeClassName="active">
            <p style={{color:`${props.font}`}} className="nav-item nav-link text-p" href="#">
              Home
            </p>
          </NavLink>
          <NavLink to="/pendaftaran" activeClassName="active">
            <p style={{color:`${props.font}`}} className="nav-item nav-link " href="#">
              About
            </p>
          </NavLink>
          <NavLink to="/pendaftaran" activeClassName="active">
            <p style={{color:`${props.font}`}} className="nav-item nav-link " href="#">
              Program
            </p>
          </NavLink>
          <NavLink to="/pendaftaran" activeClassName="active">
            <p style={{color:`${props.font}`}} className="nav-item nav-link " href="#">
              Instructor
            </p>
          </NavLink>
          <NavLink to="/pendaftaran" activeClassName="active">
            <p style={{color:`${props.font}`}} className="nav-item nav-link " href="#">
              Portofolio
            </p>
          </NavLink>
          <NavLink to="/pendaftaran" activeClassName="active">
            <p style={{color:`${props.font}`}} className="nav-item nav-link " href="#">
              Testimoni</p>
          </NavLink>
          <NavLink to="/pendaftaran" activeClassName="active">
            <p style={{color:`${props.font}`}} className="nav-item nav-link " href="#">
              Contact
            </p>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
