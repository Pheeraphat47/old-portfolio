import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
    return (
        <header>
            <h3>Pheeraphat Dherachaisuphakij</h3>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">Award</a>
                <a href="/#">Project</a>
                <a href="/#">Activity</a>
                <a href="/#">Contact</a>
                {/* Close Button */}
                <button>
                    <FaTimes />
                </button>
            </nav>
            {/* Hamberger Menu */}
            <button>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
