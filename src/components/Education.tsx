'use client';

import React, { useState } from 'react';
import { educationData } from '../data/educationData';

interface EducationItem {
  id: string | number;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
  skills?: string[];
  logo?: string;
}

const Education: React.FC = () => {
  const [activeId, setActiveId] = useState<string | number | null>(null);

  const toggleDetails = (id: string | number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="education" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title pb-2 mb-12">Formación Académica</h2>
        
        <div className="space-y-8 md:space-y-12">
          {educationData.map((education: EducationItem) => (
            <div 
              key={education.id} 
              className="border-l-2 border-primary pl-6 relative group transition-all hover:border-l-3 hover:border-primary"
              onClick={() => toggleDetails(education.id)}
            >
              {/* Indicador de timeline con animación */}
              <div className="absolute w-5 h-5 bg-primary group-hover:bg-primary rounded-full -left-[11px] top-1 transition-all duration-300 shadow-md shadow-primary/20 group-hover:shadow-primary/30"></div>
              
              <div className="card border-border/50 hover:border-primary/20 transition-all cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {education.degree}
                  </h3>
                  <span className="badge badge-primary text-sm md:text-xs">{education.period}</span>
                </div>
                
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <p className="text-primary font-medium flex items-center gap-2">
                    {education.logo && (
                      <img 
                        src={education.logo} 
                        alt={`${education.institution} logo`}
                        className="w-6 h-6 object-contain"
                      />
                    )}
                    {education.institution}
                  </p>
                  <p className="text-foreground-secondary text-sm">{education.location}</p>
                </div>
                
                {/* Contenido expandible */}
                {education.description && (
                  <div className={`mt-4 overflow-hidden transition-all duration-300 ${activeId === education.id ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="text-foreground-secondary">{education.description}</p>
                    
                    {education.skills && (
                      <div className="mt-3">
                        <p className="text-foreground text-sm font-medium mb-2">Competencias adquiridas:</p>
                        <div className="flex flex-wrap gap-2">
                          {education.skills.map(skill => (
                            <span key={skill} className="badge badge-primary">{skill}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Botón para expandir/colapsar si hay descripción */}
                {education.description && (
                  <button 
                    className="btn-ghost text-xs mt-2 inline-flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDetails(education.id);
                    }}
                  >
                    {activeId === education.id ? 'Mostrar menos' : 'Mostrar más'}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeId === education.id ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;