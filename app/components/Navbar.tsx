"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a className="logo" href="#home" onClick={closeMenu}>
          Jessica Winola
        </a>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="hamburger-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <ul
        id="mobile-nav"
        className={`mobile-nav ${isOpen ? "active" : ""}`}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} onClick={closeMenu}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
