import React, { useEffect, useRef } from 'react';
import { FaUser, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Team.css';

const Team = () => {
  const membersRef = useRef([]);

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

    membersRef.current.forEach((member) => {
      if (member) {
        member.style.opacity = '0';
        member.style.transform = 'translateY(50px)';
        member.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(member);
      }
    });

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    { name: 'Membre 1', role: 'Président(e)' },
    { name: 'Membre 2', role: 'Vice-Président(e)' },
    { name: 'Membre 3', role: 'Responsable Théâtre' },
    { name: 'Membre 4', role: 'Responsable Peinture' },
    { name: 'Membre 5', role: 'Responsable Musique' }
  ];

  return (
    <section id="equipe" className="team">
      <div className="container">
        <h2 className="section-title">Notre Équipe</h2>
        <p className="team-intro">Les membres dévoués qui font vivre ENICART</p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member"
              ref={(el) => (membersRef.current[index] = el)}
            >
              <div className="member-image">
                <div className="image-placeholder">
                  <FaUser />
                </div>
              </div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <div className="member-social">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedin /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
