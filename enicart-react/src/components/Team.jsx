import React, { useEffect, useRef } from 'react';
import { FaUser, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Team.css';
import presidentImg from '../images/president.jpeg';
import musiqueImg from '../images/azza.jpeg';
import vice_presidentImg from '../images/vice_president.jpeg';
import peintureImg from '../images/peinture.png';
import theatreImg from '../images/theatre.jpeg';
import marketingImg from '../images/marketing.jpeg';
import secretaireImg from '../images/secrétaire_général.jpeg';
import tresorierImg from '../images/tresorier.jpeg';

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
    { 
      name: 'Ghribi Moez', 
      role: 'Président', 
      image: presidentImg,
      social: {
        instagram: 'https://www.instagram.com/_moez_ghribi',
        facebook: '#',
        linkedin: '#'
      }
    },
    { name: 'Louhichi Ghalia',
       role: 'Vice-Président',
        image: vice_presidentImg,
        social: {
          instagram:'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fghalia_louhichi%3Figsh%3Ddm9jOG02c2RqOXB3%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExTFg4WHlNUWMxWjk0R2N0bAEeOmZ0lna8m6kzEOq74UxroV0rt6x2dAoCXfU6qJ0D64-jxzNhYWFHWEEQLWk_aem_0GJwm0ICeD2YO11gSoQDLQ&h=AT1-MV9LV-6J5PRfazDWiTt7Srpv2u09MDB_ZXR0R58XvQi6_mW85c53HBfQ2OMtlShTlMY_sRCfh0BLaltsmba30r84pHoRNQpF1MVCoqXOL78Qk81KtdsfWJTwBhHqXCDkHA',
          facebook: '#',
          linkedin: '#'
        }
    },
    { name: 'Dridi Sarra',
       role: 'secrétaire général',
        image: secretaireImg,
        social: {
          instagram: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fsara.dridii%3Figsh%3DMXc5cjBhczd4ZWRmZA%253D%253D%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExTFg4WHlNUWMxWjk0R2N0bAEeJ84rVogLSuaw_to_K5v2dutyYIBF8dxaaLx1em4DonJOx1okO3j7DvvJ1h4_aem_38yx-xMMvhZqx132A5P0kQ&h=AT1-MV9LV-6J5PRfazDWiTt7Srpv2u09MDB_ZXR0R58XvQi6_mW85c53HBfQ2OMtlShTlMY_sRCfh0BLaltsmba30r84pHoRNQpF1MVCoqXOL78Qk81KtdsfWJTwBhHqXCDkHA',
          facebook: '#',
          linkedin: '#'
        }
      },
    { name: 'Awled oihiba Chahyn',
       role: 'trésorier',
        image: tresorierImg,
        social: {
          instagram: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fch__a_hi_ne%3Figsh%3DaHVrYTc5cmlzZmFk%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExTFg4WHlNUWMxWjk0R2N0bAEeo44gx2Lh72sIv89-ExFHV1TO1XJl38HhXTTI_UmyVShU9VgAE6XOkRqrpK8_aem_FOl3OkCGWV0ZqLuQ8R4BeA&h=AT1-MV9LV-6J5PRfazDWiTt7Srpv2u09MDB_ZXR0R58XvQi6_mW85c53HBfQ2OMtlShTlMY_sRCfh0BLaltsmba30r84pHoRNQpF1MVCoqXOL78Qk81KtdsfWJTwBhHqXCDkHA',
          facebook: '#',
          linkedin: '#'
        }
    },
    { name: 'Omrani Wiem',
       role: 'Responsable pôle Handy\'s (dessin, peinture, Calligraphie, graphisme, collage, jeux )',
        image: peintureImg,
        social: {
          instagram: 'https://www.instagram.com/wiem_omrani/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExTFg4WHlNUWMxWjk0R2N0bAEeJ84rVogLSuaw_to_K5v2dutyYIBF8dxaaLx1em4DonJOx1okO3j7DvvJ1h4_aem_38yx-xMMvhZqx132A5P0kQ',
          facebook: '#',
          linkedin: '#'
        }
      },
    { name: 'Bourguiba Azza',
       role: 'Responsable pôle Arty\'s ( musique , Dance, événements)',
        image: musiqueImg,
        social: {
          instagram: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F_______sirin____________%3Figsh%3DcXJnNHcxczRpeXdp%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExTFg4WHlNUWMxWjk0R2N0bAEe8zKgqJ1oMiT1a4IytWZXp5qXRkLx_k9nC7k7wMD5khcpIiW8j0aKlzMP4a0_aem_NAbzTj-RHRC9EtjhCjx6XA&h=AT1-MV9LV-6J5PRfazDWiTt7Srpv2u09MDB_ZXR0R58XvQi6_mW85c53HBfQ2OMtlShTlMY_sRCfh0BLaltsmba30r84pHoRNQpF1MVCoqXOL78Qk81KtdsfWJTwBhHqXCDkHA',
          facebook: '#',
          linkedin: '#'
        }
       },
    { name: 'Khmiri Meriem',
       role: 'Responsable pôle Théâtro (théâtre, cinéma, podcast, radio)',
        image: theatreImg,
        social: {
          instagram: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fmariem.khmiri.73%3Figsh%3DMWw1M205dmphcjl0bg%253D%253D%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExTFg4WHlNUWMxWjk0R2N0bAEeCKNhzPi5F0tzA6d5fERpRo09DVoSnHF-wsL0ZN3n0UuEVKRmW2gUR87GRh0_aem_cgHLNlhO5-Xbwt5pY9vaSQ&h=AT1-MV9LV-6J5PRfazDWiTt7Srpv2u09MDB_ZXR0R58XvQi6_mW85c53HBfQ2OMtlShTlMY_sRCfh0BLaltsmba30r84pHoRNQpF1MVCoqXOL78Qk81KtdsfWJTwBhHqXCDkHA',
          facebook: '#',
          linkedin: '#'
        }
      },
    { name: 'Dridi Sirine',
       role: 'responsable marketing et média',
        image: marketingImg,
        social: {
          instagram: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F_______sirin____________%3Figsh%3DcXJnNHcxczRpeXdp%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExTFg4WHlNUWMxWjk0R2N0bAEe8zKgqJ1oMiT1a4IytWZXp5qXRkLx_k9nC7k7wMD5khcpIiW8j0aKlzMP4a0_aem_NAbzTj-RHRC9EtjhCjx6XA&h=AT1-MV9LV-6J5PRfazDWiTt7Srpv2u09MDB_ZXR0R58XvQi6_mW85c53HBfQ2OMtlShTlMY_sRCfh0BLaltsmba30r84pHoRNQpF1MVCoqXOL78Qk81KtdsfWJTwBhHqXCDkHA',
          facebook: '#',
          linkedin: '#'
        }
      },
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
                {member.image ? (
                  <img src={member.image} alt={member.name} className="member-photo" />
                ) : (
                  <div className="image-placeholder">
                    <FaUser />
                  </div>
                )}
              </div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <div className="member-social">
                <a 
                  href={member.social?.facebook || '#'} 
                  target={member.social?.facebook && member.social.facebook !== '#' ? '_blank' : '_self'}
                  rel={member.social?.facebook && member.social.facebook !== '#' ? 'noopener noreferrer' : ''}
                >
                  <FaFacebook />
                </a>
                <a 
                  href={member.social?.instagram || '#'} 
                  target={member.social?.instagram && member.social.instagram !== '#' ? '_blank' : '_self'}
                  rel={member.social?.instagram && member.social.instagram !== '#' ? 'noopener noreferrer' : ''}
                >
                  <FaInstagram />
                </a>
                <a 
                  href={member.social?.linkedin || '#'} 
                  target={member.social?.linkedin && member.social.linkedin !== '#' ? '_blank' : '_self'}
                  rel={member.social?.linkedin && member.social.linkedin !== '#' ? 'noopener noreferrer' : ''}
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
