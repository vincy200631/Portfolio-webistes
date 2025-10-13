  
import React from "react";

const Navbar = () => {
  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];
  return (
    <nav>
      {navLinks.map((link) => (
        <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>
      ))}
    </nav>
  );
};

export default Navbar;
