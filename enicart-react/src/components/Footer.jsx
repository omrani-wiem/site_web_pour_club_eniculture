import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 ENICART - Club Artistique ENIC. Tous droits réservés.</p>
        <p>Fait avec <FaHeart className="heart-icon" /> par l'équipe ENICART</p>
      </div>
    </footer>
  );
};

export default Footer;
