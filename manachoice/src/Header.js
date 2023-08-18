import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="header">
      <h2>manaChoice</h2>
      <nav className="navbar">
        <Link to="about" smooth={true} duration={500} className="nav-link">
          About Us
        </Link>
        <Link to="contact" smooth={true} duration={500} className="nav-link">
          Contact Us
        </Link>
        <Link to="whatWeDo" smooth={true} duration={500} className="nav-link">
          What We Do
        </Link>
        <Link to="careers" smooth={true} duration={500} className="nav-link">
          Careers
        </Link>
      </nav>
    </header>
  );
};

export default Header;
