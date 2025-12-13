import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <h2>Nandhini <span>E</span></h2>
        </div>
        <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a></li>
          <li><a href="#frontend-projects" className="nav-link" onClick={closeMenu}>Frontend</a></li>
          <li><a href="#marketing-projects" className="nav-link" onClick={closeMenu}>Marketing</a></li>
          <li><a href="#achievements" className="nav-link" onClick={closeMenu}>Achievements</a></li>
          <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
