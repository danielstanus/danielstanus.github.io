'use client';

import React, { useState } from 'react';
import { FaPaperPlane, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { personalData } from '../data/personalData';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // This is a placeholder for your actual form submission logic
      // You could use a service like EmailJS, Formspree, or your own backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API call
      
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="section-title text-center mb-12">Contacto</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Información de contacto */}
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-primary">Información de contacto</h3>
            <ul className="space-y-6 text-slate">
              <li className="flex items-start">
                <FaEnvelope className="text-primary mt-1 mr-3" />
                <div>
                  <span className="font-medium text-foreground mb-1 block">Email:</span>
                  <a 
                    href={`mailto:${personalData.email}`}
                    className="text-foreground-secondary hover:text-primary transition-colors"
                  >
                    {personalData.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-primary mt-1 mr-3" />
                <div>
                  <span className="font-medium text-foreground mb-1 block">Teléfono:</span>
                  <a 
                    href={`tel:${personalData.phone}`}
                    className="text-foreground-secondary hover:text-primary transition-colors"
                  >
                    {personalData.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3" />
                <div>
                  <span className="font-medium text-foreground mb-1 block">Ubicación:</span>
                  <span className="text-foreground-secondary">{personalData.location}</span>
                </div>
              </li>
            </ul>

            {/* Redes Sociales */}
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Redes Sociales</h4>
              <div className="flex space-x-4">
                <a 
                  href={personalData.linkedinUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-background-secondary hover:bg-primary/10 text-foreground-secondary hover:text-primary transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a 
                  href={personalData.githubUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-background-secondary hover:bg-primary/10 text-foreground-secondary hover:text-primary transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-background-secondary p-6 rounded-lg shadow-md border border-border">
            <h3 className="text-xl font-semibold mb-6 text-primary">Envíame un mensaje</h3>
            {submitSuccess ? (
              <div className="bg-green-900/20 border border-green-700 text-green-400 px-4 py-3 rounded mb-6">
                ¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.
              </div>
            ) : null}
            
            {submitError ? (
              <div className="bg-red-900/20 border border-red-700 text-red-400 px-4 py-3 rounded mb-6">
                {submitError}
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-foreground font-medium mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-foreground font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-foreground font-medium mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <FaPaperPlane className="h-4 w-4" />
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;