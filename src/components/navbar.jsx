import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Styles/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "yellow" : "white",
    };
  };
  

  
  return (
    <header>
      <h3 className="text-3xl font-bold italic">Portfolio</h3>
      <nav ref={navRef} onClick={hideNavbar}>
        <NavLink to="/" id ="nav-link" style={navLinkStyles} >
          Home
        </NavLink>
        <NavLink to="/Award" id="nav-link" style={navLinkStyles}>
          Award
        </NavLink>
        <NavLink to="/Project" id="nav-link" style={navLinkStyles}>
          Project
        </NavLink>
        <NavLink to="/Activity" id="nav-link" style={navLinkStyles}>
          Activity
        </NavLink>
        <NavLink to="/Contact" id="nav-link" style={navLinkStyles}>
          Contact
        </NavLink>
        {/* Close Button */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      {/* Hamberger Menu */}
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
