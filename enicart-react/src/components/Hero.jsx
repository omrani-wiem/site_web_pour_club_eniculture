import React, { useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const shapesRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!shapesRef.current) return;
      
      const shapes = shapesRef.current.querySelectorAll('.floating-shape');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        const x = mouseX * speed;
        const y = mouseY * speed;
        
        shape.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="accueil" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Bienvenue à</span>
            <span className="title-main">ENICART</span>
          </h1>
          <p className="hero-subtitle">Club Artistique de l'École Nationale d'Ingénieurs de Carthage</p>
          <div className="hero-description">
            <p>Où la créativité rencontre l'innovation</p>
            <p>Théâtre • Peinture • Bricolage • Musique</p>
          </div>
          <div className="hero-buttons">
            <a href="#poles" className="btn btn-primary">Découvrir nos pôles</a>
            <a href="#contact" className="btn btn-secondary">Nous rejoindre</a>
          </div>
        </div>
        <div className="hero-animation" ref={shapesRef}>
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Défiler</p>
      </div>
    </section>
  );
};

export default Hero;
