import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">À Propos d'ENICART</h2>
        <div className="about-content">
          <p className="about-text">
            ENICART est le club artistique de l'École Nationale d'Ingénieurs de Carthage, 
            dédié à l'épanouissement créatif des étudiants ingénieurs. Nous croyons que l'art 
            et la technologie se complètent pour former des esprits innovants et équilibrés.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
