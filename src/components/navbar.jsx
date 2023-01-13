import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Styles/Navbar.css";
import {Link} from "react-router-dom";



function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    const hideNavbar = () => {
        navRef.current.classList.remove("responsive_nav");
    }
    return (
        <header>
            <h3 className="text-3xl font-bold italic">Portfolio</h3>
            <nav ref={navRef} onClick={hideNavbar}>
                <Link to="/" className="nav-link" >Home</Link>
                <Link to="/Award" className="nav-link" >Award</Link>
                <Link to="/Project" className="nav-link">Project</Link>
                <Link to="/Activity" className="nav-link">Activity</Link>
                <Link to="/Contact" className="nav-link">Contact</Link>
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
