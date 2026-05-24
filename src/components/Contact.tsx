'use client';

import React, { useState } from 'react';
import { FaPaperPlane, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { personalData } from '../data/personalData';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const { language, t } = useLanguage();
  
  const currentData = personalData[language as keyof typeof personalData] as any;

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
    setSubmitSuccess(false);

    // Obtener la clave de Formspree desde variables de entorno o desde personalData
    const formspreeKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY || personalData.formspreeId;

    if (!formspreeKey || formspreeKey === "xwpvlpgr" || formspreeKey.trim() === "") {
      // Si no está configurada o es el placeholder de ejemplo, mostramos error instructivo
      console.warn("Formspree ID no configurado. Por favor, actualiza tu ID en src/data/personalData.ts o añade NEXT_PUBLIC_FORMSPREE_KEY");
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeKey || 'xwpvlpgr'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nuevo mensaje de contacto en Portafolio - ${formData.name}`
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Resetear mensaje de éxito tras 6 segundos
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 6000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || t("contact.errorMessage"));
      }
    } catch (error: any) {
      console.error("Formspree submission error:", error);
      setSubmitError(t("contact.errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="section-title text-center mb-12">{t("contact.title")}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulario de contacto */}
          <div className="bg-background-secondary p-6 rounded-lg shadow-md border border-border">
            <h3 className="text-xl font-semibold mb-6 text-primary">{t("contact.sendMsg")}</h3>
            {submitSuccess ? (
              <div className="bg-green-900/20 border border-green-700 text-green-400 px-4 py-3 rounded mb-6">
                {t("contact.successMessage")}
              </div>
            ) : submitError ? (
              <div className="bg-red-900/20 border border-red-700 text-red-400 px-4 py-3 rounded mb-6">
                {submitError}
              </div>
            ) : null}
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-foreground font-medium mb-1">
                  {t("contact.nameLabel")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("contact.namePlaceholder")}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-foreground font-medium mb-1">
                  {t("contact.emailLabel")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("contact.emailPlaceholder")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-foreground font-medium mb-1">
                  {t("contact.messageLabel")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.messagePlaceholder")}
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
                <div className="flex items-center justify-center gap-2">
                  <FaPaperPlane className="h-4 w-4" />
                  {isSubmitting ? t("contact.sending") : t("contact.send")}
                </div>
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-primary">{t("contact.infoLabel")}</h3>
            <ul className="space-y-6 text-slate">
              <li className="flex items-start">
                <FaEnvelope className="text-primary mt-1 mr-3" />
                <div>
                  <span className="font-medium text-foreground mb-1 block">{t("about.email")}:</span>
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
                  <span className="font-medium text-foreground mb-1 block">{t("about.phone")}:</span>
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
                  <span className="font-medium text-foreground mb-1 block">{t("about.location")}:</span>
                  <span className="text-foreground-secondary">{currentData.location}</span>
                </div>
              </li>
            </ul>

            {/* Redes Sociales */}
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="text-lg font-semibold mb-4 text-foreground">{t("contact.socialsLabel")}</h4>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;