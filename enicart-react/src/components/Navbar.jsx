import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from '../images/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {//useEffect permet d'executer le code apres que le composant soit monté
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
          <img src={logo} alt="Logo" className="logo-img" />
          <span>ENICART</span>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#accueil" className="nav-link" onClick={closeMenu}>Accueil</a></li>
          <li><a href="#poles" className="nav-link" onClick={closeMenu}>Nos Pôles</a></li>
          <li><a href="#valeur" className="nav-link" onClick={closeMenu}>Nos Valeurs</a></li>
          <li><a href="#equipe" className="nav-link" onClick={closeMenu}>Notre Équipe</a></li>
          <li><a href="#galerie" className="nav-link" onClick={closeMenu}>Galerie</a></li>
          <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
