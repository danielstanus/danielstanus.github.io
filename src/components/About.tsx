'use client';

import React from 'react';
import { personalData } from '../data/personalData';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGlobeAmericas } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { language, t } = useLanguage();
  const currentData = personalData[language as keyof typeof personalData] as any;

  return (
    <section id="about" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center md:text-left pb-3">{t("about.title")}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {currentData.aboutParagraphs.map((paragraph: string, index: number) => (
              <p key={index} className="text-foreground-secondary mb-6 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            {/* Nuevas etiquetas de habilidades */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['React', 'Angular', '.NET', 'PHP', 'Node.js', 'SQL', 'MongoDB', 'Azure'].map((skill) => (
                <span key={skill} className="badge badge-secondary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="card bg-gradient-to-br from-primary/30 to-primary/5 backdrop-blur-sm border-primary/10 dark:bg-background-secondary">
            <h3 className="section-subtitle mb-6 pb-2 border-b border-primary/20">{t("about.info")}</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3" />
                <div>
                  <span className="font-medium text-foreground block mb-1">{t("about.location")}:</span> 
                  <span className="text-foreground-secondary">{currentData.location}</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-primary mt-1 mr-3" />
                <div>
                  <span className="font-medium text-foreground block mb-1">{t("about.email")}:</span> 
                  <a href={`mailto:${personalData.email}`} className="text-foreground-secondary hover:text-primary transition-colors">
                    {personalData.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-primary mt-1 mr-3" />
                <div>
                  <span className="font-medium text-foreground block mb-1">{t("about.phone")}:</span> 
                  <a href={`tel:${personalData.phone}`} className="text-foreground-secondary hover:text-primary transition-colors">
                    {personalData.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaGlobeAmericas className="text-primary mt-1 mr-3" />
                <div>
                  <span className="font-medium text-foreground block mb-1">{t("about.languages")}:</span>
                  <div className="space-y-2 text-foreground-secondary">
                    {currentData.languages.map((lang: any, index: number) => (
                      <div key={index} className="flex justify-between">
                        <span>{lang.language}:</span> 
                        <div className="w-24">
                          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full"
                              style={{ 
                                width: lang.level === 'Nativo' || lang.level === 'Native' ? '100%' : 
                                       lang.level === 'Fluido' || lang.level === 'Fluent' ? '90%' : 
                                       lang.level === 'Avanzado' || lang.level === 'Advanced' || lang.level === 'Avansat' ? '75%' : 
                                       lang.level === 'Intermedio' || lang.level === 'Intermediate' || lang.level === 'Intermediar' ? '50%' : '25%' 
                              }}
                            ></div>
                          </div>
                          <span className="text-xs mt-1 block">{lang.level}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;