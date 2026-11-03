import { useState } from "react";
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
        <a href="#work" onClick={() => setMenuOpen(false)}>
          Work
        </a>

        <a href="#stack" onClick={() => setMenuOpen(false)}>
          Stack
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

        <a
          className="hire-him"
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Hire Him
        </a>
      </div>
    </div>
  );
};

export default NavBar;
