'use client';

import React from 'react';
import { personalData } from '../data/personalData';
import { FaGithub, FaEnvelope, FaLinkedin, FaLaptopCode  } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="text-primary font-mono font-medium tracking-wider mb-2 border-b border-primary/20 inline-block pb-1">¡Hola! Mi nombre es</p>
            <h1 className="mb-4 text-foreground">{personalData.name}</h1>
            <h2 className="text-2xl md:text-3xl text-foreground-secondary mb-6">{personalData.title}</h2>
            <p className="text-foreground-secondary max-w-lg mx-auto md:mx-0 mb-8">{personalData.bio}</p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a 
                href={personalData.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline flex items-center gap-2"
              >
                <FaGithub /> GitHub
              </a>
              {personalData.linkedinUrl && (
                <a 
                  href={personalData.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline flex items-center gap-2"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              )}
              <a 
                href={`mailto:${personalData.email}`} 
                className="btn-outline flex items-center gap-2"
              >
                <FaEnvelope /> Contacto
              </a>
            </div>
            
            <Link 
              to="projects" 
              smooth 
              duration={500} 
              className="btn-outline-icon"
            >
              <div className="flex items-center gap-2">
                <FaLaptopCode />
                <span>Ver mi trabajo</span>
              </div>
              <svg 
                className="w-5 h-5 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </Link>
          </div>
          
          <div className="flex flex-col items-center">
            {/* Contenedor de imagen con efecto de brillo */}
            <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-xl bg-gradient-to-br from-primary/10 to-background/50 p-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-70 animate-pulse"></div>
              {personalData.image ? (
                <img
                  src={personalData.image}
                  alt={`${personalData.name} - ${personalData.title}`}
                  className="w-full aspect-auto object-contain relative z-10 rounded"
                />
              ) : (
                <div className="text-center p-12 relative z-10">
                  <span className="text-primary text-lg font-medium">Imagen de perfil</span>
                  <p className="text-foreground-secondary mt-2 text-sm">Agrega tu imagen en personalData.image</p>
                </div>
              )}
            </div>
            
            {/* Firma con efecto de desvanecimiento */}
            <div className="mt-6 w-64 md:w-80 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-50 animate-pulse"></div>
              <img 
                src="/images/firma2.png"
                alt="Firma personal" 
                className="w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;