import React, { useEffect, useRef } from 'react';
import { FaTheaterMasks, FaPaintBrush, FaMusic } from 'react-icons/fa';
import './Poles.css';

const Poles = () => {
  const polesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    polesRef.current.forEach((pole) => {
      if (pole) {
        pole.style.opacity = '0';
        pole.style.transform = 'translateY(50px)';
        pole.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(pole);
      }
    });

    return () => observer.disconnect();
  }, []);

  const poles = [
    {
      icon: <FaTheaterMasks />,
      title: 'Théâtre',
      description: 'Expression scénique, improvisation et mise en scène pour développer votre talent dramatique.',
      activities: ['Ateliers d\'improvisation', 'Représentations théâtrales', 'Écriture de scénarios'],
      gradient: 1
    },
    {
      icon: <FaPaintBrush />,
      title: 'Peinture & Bricolage',
      description: 'Libérez votre créativité à travers l\'art visuel et les créations manuelles.',
      activities: ['Peinture sur toile', 'Projets DIY', 'Décoration événementielle'],
      gradient: 2
    },
    {
      icon: <FaMusic />,
      title: 'Musique',
      description: 'Harmonie et rythme pour créer des moments mémorables et inspirer nos audiences.',
      activities: ['Concerts et performances', 'Jam sessions', 'Composition musicale'],
      gradient: 3
    }
  ];

  return (
    <section id="poles" className="poles">
      <div className="container">
        <h2 className="section-title">Nos Pôles Artistiques</h2>
        <div className="poles-grid">
          {poles.map((pole, index) => (
            <div
              key={index}
              className="pole-card"
              ref={(el) => (polesRef.current[index] = el)}
            >
              <div className={`pole-icon gradient-${pole.gradient}`}>
                {pole.icon}
              </div>
              <h3>{pole.title}</h3>
              <p>{pole.description}</p>
              <ul className="pole-activities">
                {pole.activities.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Poles;
