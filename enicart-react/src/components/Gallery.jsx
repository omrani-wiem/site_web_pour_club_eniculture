import React, { useEffect, useRef } from 'react';
import { FaImage } from 'react-icons/fa';
import './Gallery.css';
import gal1 from '../images/gallerie1.png';
import gal2 from '../images/gallerie2.png';
import gal3 from '../images/gallerie3.png';
import gal4 from '../images/gallerie4.png';
const Gallery = () => {
  const galleryRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scale(1)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    galleryRef.current.forEach((item) => {
      if (item) {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, []);

  const galleryItems = [
    { title: 'Événement Théâtre', gradient: 1, image: gal1 },
    { title: 'Atelier Peinture', gradient: 2, image: gal2 },
    { title: 'Concert Musical', gradient: 3, image: gal3 },
    { title: 'Projet Bricolage', gradient: 1, image: gal4 }
  ];

  return (
    <section id="galerie" className="gallery">
      <div className="container">
        <h2 className="section-title">Galerie</h2>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
              ref={(el) => (galleryRef.current[index] = el)}
            >
              {item.image ? (
                <img src={item.image} alt={item.title} className="gallery-photo" />
              ) : (
                <div className={`gallery-placeholder gradient-${item.gradient}`}>
                  <FaImage />
                  <p>{item.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
