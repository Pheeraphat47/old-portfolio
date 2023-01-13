import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Styles/Navbar.css";



function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <h3 className="text-3xl font-bold italic">Portfolio</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Award</a>
                <a href="/#">Project</a>
                <a href="/#">Activity</a>
                <a href="/#">Contact</a>
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
