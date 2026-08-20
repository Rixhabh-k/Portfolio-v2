import { useState } from "react";
import { Link } from "react-router-dom";
import { GrMenu, GrClose } from "react-icons/gr";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-content">
        <div className="logo">
          <h1>Rishabh Kharwar</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>

          <a className="hire-him" href="#contact">
            Hire Him
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <GrClose /> : <GrMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/work" onClick={() => setMenuOpen(false)}>
          Work
        </Link>

        <Link to="/stack" onClick={() => setMenuOpen(false)}>
          Stack
        </Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

        <Link
          className="hire-him"
          to="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Hire Him
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
