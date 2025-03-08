import React from 'react';
import { personalData } from '../data/personalData';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGlobeAmericas } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center md:text-left pb-3">Sobre mí</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-foreground-secondary mb-6 text-lg leading-relaxed">
              Soy un desarrollador Full Stack con más de 8 años de experiencia, especializado en tecnologías .NET, PHP, React y Angular. Mi experiencia abarca desde el desarrollo de aplicaciones web empresariales hasta soluciones multiplataforma.
            </p>
            <p className="text-foreground-secondary mb-6 text-lg leading-relaxed">
              Actualmente, dirijo el departamento de informática en OnVentanas, donde he implementado diversas soluciones tecnológicas para optimizar los procesos internos de la empresa. Mi enfoque combina habilidades técnicas sólidas con una visión estratégica para crear aplicaciones escalables y de alto rendimiento.
            </p>
            <p className="text-foreground-secondary text-lg leading-relaxed">
              Soy apasionado por el aprendizaje continuo y la implementación de nuevas tecnologías. Me enfoco en crear soluciones tecnológicas que realmente aporten valor y mejoren la eficiencia operativa.
            </p>
            
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
            <h3 className="section-subtitle mb-6 pb-2 border-b border-primary/20">Información personal</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3" />
                <div>
                  <span className="font-medium text-foreground block mb-1">Ubicación:</span> 
                  <span className="text-foreground-secondary">{personalData.location}</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-primary mt-1 mr-3" />
                <div>
                  <span className="font-medium text-foreground block mb-1">Email:</span> 
                  <a href={`mailto:${personalData.email}`} className="text-foreground-secondary hover:text-primary transition-colors">
                    {personalData.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-primary mt-1 mr-3" />
                <div>
                  <span className="font-medium text-foreground block mb-1">Teléfono:</span> 
                  <a href={`tel:${personalData.phone}`} className="text-foreground-secondary hover:text-primary transition-colors">
                    {personalData.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaGlobeAmericas className="text-primary mt-1 mr-3" />
                <div>
                  <span className="font-medium text-foreground block mb-1">Idiomas:</span>
                  <div className="space-y-2 text-foreground-secondary">
                    {personalData.languages.map((lang, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{lang.language}:</span> 
                        <div className="w-24">
                          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full"
                              style={{ 
                                width: lang.level === 'Nativo' ? '100%' : 
                                       lang.level === 'Fluido' ? '90%' : 
                                       lang.level === 'Avanzado' ? '75%' : 
                                       lang.level === 'Intermedio' ? '50%' : '25%' 
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