import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { send } from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(''); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

   const handleSubmit = (e) => {
    e.preventDefault();

     const serviceID = 'service_5obwroq';
    const templateID = 'template_s8n0ffg';
    const userID = 'oVq1Un47g5cYH85oM';

    send(serviceID, templateID, formData, userID)
      .then(() => {
        setStatus('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        setStatus('Erreur lors de l’envoi. Réessayez.');
        console.error(err);
      });
  };


  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contactez-nous</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Rejoignez ENICART</h3>
            <p>Vous êtes passionné par l'art et souhaitez rejoindre notre communauté créative ?</p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope />
                <span>enicart@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span> Enichartage, Tunisie</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>+216 25 456 362</span>
              </div>
            </div>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Envoyer</button>
             {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
