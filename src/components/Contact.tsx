'use client';

import React, { useState } from 'react';
import { FaPaperPlane, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

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
        <h2 className="section-title pb-2 mb-6">Contacto</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
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
              <div className="mb-6">
                <label htmlFor="name" className="block text-slate text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-slate text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-slate text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-700 rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tu mensaje aquí..."
                ></textarea>
              </div>
              
              <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 font-medium rounded-md transition-colors bg-gradient-to-r from-primary to-primary/70 text-primary-foreground hover:from-primary/90 hover:to-primary/60 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <FaPaperPlane className="h-4 w-4" />
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </div>
              </button>
              </div>
            </form>
          </div>
          
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-primary">Información de contacto</h3>
            <ul className="space-y-6 text-slate">
              <li className="flex items-start">
                <FaEnvelope className="text-primary mt-1 mr-3" />
                <div>
                  <span className="font-medium text-foreground mb-1 block">Email:</span>
                  <a 
                    href="mailto:stanusdaniel@gmail.com" 
                    className="text-foreground-secondary hover:text-primary transition-colors"
                  >
                    stanusdaniel@gmail.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-start">
                <FaPhone className="text-primary mt-1 mr-3" />
                <div>
                  <span className="font-medium text-foreground mb-1 block">Teléfono:</span>
                  <a 
                    href="tel:+34601602163" 
                    className="text-foreground-secondary hover:text-primary transition-colors"
                  >
                    +34 601 602 163
                  </a>
                </div>
              </li>
              
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3" />
                <div>
                  <span className="font-medium text-foreground mb-1 block">Ubicación:</span>
                  <span className="text-foreground-secondary">Madrid, España</span>
                </div>
              </li>
              
              <li className="flex flex-col">
                <span className="font-medium text-foreground mb-3 block">Redes sociales:</span>
                <div className="flex gap-6 mt-1">
                  <a 
                    href="https://linkedin.com/in/your-profile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-foreground-secondary hover:text-primary transition-colors"
                  >
                    <FaLinkedin className="mr-2" size={18} />
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/your-username" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-foreground-secondary hover:text-primary transition-colors"
                  >
                    <FaGithub className="mr-2" size={18} />
                    GitHub
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;