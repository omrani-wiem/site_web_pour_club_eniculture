import React , { useEffect , useRef } from 'react';
import { FaLightbulb ,FaHandsHelping , FaHeart  } from 'react-icons/fa';
import './valeur.css';

const Valeurs  = ()  => {
    const valeurRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        );

        valeurRef.current.forEach((valeur) => {
            if (valeur) {
                valeur.style.opacity = '0';
                valeur.style.transform = 'translateY(50px)';
                valeur.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(valeur);
            }
        });

        return () => observer.disconnect();
    }, []);
    const valeurs = [
        {
            icon : <FaLightbulb/>,
            title : 'Innovation',
            description: 'Nous encourageons la créativité et l\'innovation pour trouver des solutions nouvelles et efficaces.',
            gradient: 1
        },
        {
            icon : <FaHandsHelping/>,
            title : 'Partage & Collaboration',
            description: 'Nous croyons en la force du travail d\'équipe et de la collaboration pour atteindre nos objectifs communs.',
            gradient: 2
        },
        {
            icon : <FaHeart/>,
            title : 'Solidarité',
            description: 'Nous nous engageons à soutenir nos membres et à promouvoir un esprit de communauté.',
            gradient: 3
        }
    ];

    return (
        <section id="valeur" className="valeur">
            <div className="container">
                <h2 className="section-title">Nos Valeurs</h2>
                <div className="valeur-grid">
                    {valeurs.map((valeur, index) => (
                        <div
                            key={index}
                            className="pole-card"
                            ref={(el) => (valeurRef.current[index] = el)}
                        >
                            <div className={`pole-icon gradient-${valeur.gradient}`}>
                                {valeur.icon}
                            </div>
                            <h3>{valeur.title}</h3>
                            <p>{valeur.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Valeurs;
