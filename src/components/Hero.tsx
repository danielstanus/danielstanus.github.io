'use client';

import React, { useRef, useState, useEffect } from 'react';
import { personalData } from '../data/personalData';
import { FaGithub, FaEnvelope, FaLinkedin, FaLaptopCode, FaPause, FaPlay } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  
  // Fix hydration mismatch by only rendering client-specific elements after mount
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    const audio = new Audio('/audio/epic-hover.mp3');
    audio.volume = 0.5;
    
    if (audioRef.current === null) {
      audioRef.current = audio;
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setShowPlayButton(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setShowPlayButton(false);
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Pre-calculate particle positions to avoid hydration mismatch
  const particlePositions = Array(15).fill(0).map((_, i) => ({
    left: `${(i * 7) % 100}%`,
    top: `${(i * 11) % 100}%`,
    delay: `${(i * 0.2) % 2}s`
  }));

  // Detect if user prefers reduced motion or is on mobile
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    
    setPrefersReducedMotion(mediaQuery.matches);
    setIsMobile(mobileQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    const handleMobileChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    
    mediaQuery.addEventListener('change', handleMotionChange);
    mobileQuery.addEventListener('change', handleMobileChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      mobileQuery.removeEventListener('change', handleMobileChange);
    };
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background dark:bg-background pt-12 md:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left relative overflow-hidden">
            {/* Fondo decorativo con gradiente animado */}
            <div className="absolute -inset-1/4 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-full blur-3xl opacity-50 animate-spin-slow -z-10"></div>
            
            {/* Líneas decorativas animadas */}
            <div className="absolute left-0 top-1/4 w-12 h-1 bg-primary/30 rounded-full animate-pulse"></div>
            <div className="absolute right-1/4 bottom-1/4 w-20 h-1 bg-primary/30 rounded-full animate-pulse delay-700"></div>
            
            <p className="text-primary font-mono font-medium tracking-wider mb-2 border-b border-primary/20 inline-block pb-1 transform hover:scale-105 transition-transform">¡Hola! Mi nombre es</p>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground relative group">
              {personalData.name.split('').map((letter, index) => (
                <span
                  key={index}
                  className="inline-block hover:text-primary transition-colors duration-300"
                  style={{
                    animation: `wave 2s ease-in-out ${index * 0.1}s infinite`,
                    display: 'inline-block',
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
              <span className="absolute -inset-x-2 inset-y-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 -z-10 rounded-md"></span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-foreground-secondary mb-6 transform hover:translate-x-2 transition-transform duration-300">{personalData.title}</h2>
            
            <p className="text-foreground-secondary max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed relative">
              {personalData.bio}
              <span className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-primary/50 to-transparent"></span>
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-primary/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <FaGithub className="group-hover:animate-bounce" />
                <span className="relative">GitHub</span>
              </a>
              {personalData.linkedinUrl && (
                <a 
                  href={personalData.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline flex items-center gap-2 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-primary/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <FaLinkedin className="group-hover:animate-bounce" />
                  <span className="relative">LinkedIn</span>
                </a>
              )}
              <a 
                href={`mailto:${personalData.email}`} 
                className="btn-outline flex items-center gap-2 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-primary/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <FaEnvelope className="group-hover:animate-bounce" />
                <span className="relative">Email</span>
              </a>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="group relative inline-flex items-center gap-3 px-6 py-3 bg-background border-2 border-primary text-primary rounded-lg font-medium overflow-hidden hover:text-primary-foreground transition-colors duration-300"
              >
                <span className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <FaLaptopCode className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="relative z-10">Ver proyectos</span>
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            {/* Audio element is now created programmatically in useEffect */}
            
            {/* Contenedor de imagen con efecto avanzado */}
            <div 
              className="relative w-72 h-72 md:w-96 md:h-96 mx-auto mb-8"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Particles effect (visible on hover) - only render complex animations on desktop */}
              {isClient && !isMobile && !prefersReducedMotion && (
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {particlePositions.map((pos, i) => (
                    <div 
                      key={i}
                      className={`absolute w-2 h-2 rounded-full bg-primary animate-particle-${i % 5 + 1}`}
                      style={{
                        left: pos.left,
                        top: pos.top,
                        animationDelay: pos.delay
                      }}
                    />
                  ))}
                </div>
              )}
              
              {/* Mostrar botón de play/pause cuando el ratón está encima */}
              {isClient && showPlayButton && (
                <button
                  onClick={toggleAudio}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-all duration-300 rounded-[28%_68%_68%_28%/28%_38%_58%_68%]"
                  aria-label={isPlaying ? "Pause epic music" : "Play epic music"}
                >
                  <div className="bg-primary/80 text-background p-4 rounded-full">
                    {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
                  </div>
                </button>
              )}
              
              {/* Main container with glitch effect */}
              <div className="relative group-hover:animate-glitch">
                {/* Pseudo-elements for glitch effect - only render complex effects on desktop */}
                {isClient && !isMobile && !prefersReducedMotion && (
                  <>
                    <div className="absolute inset-0 rounded-[30%_70%_70%_30%/30%_40%_60%_70%] hidden group-hover:block before:content-[''] before:absolute before:inset-0 before:bg-accent/50 before:translate-x-[5px] before:translate-y-[-5px] before:rounded-[30%_70%_70%_30%/30%_40%_60%_70%] before:mix-blend-multiply before:opacity-0 before:group-hover:opacity-100 before:animate-glitch-1"></div>
                    <div className="absolute inset-0 rounded-[30%_70%_70%_30%/30%_40%_60%_70%] hidden group-hover:block before:content-[''] before:absolute before:inset-0 before:bg-primary/50 before:translate-x-[-5px] before:translate-y-[5px] before:rounded-[30%_70%_70%_30%/30%_40%_60%_70%] before:mix-blend-multiply before:opacity-0 before:group-hover:opacity-100 before:animate-glitch-2"></div>
                  </>
                )}
                
                {/* Blob shape background with animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/50 to-background rounded-[30%_70%_70%_30%/30%_40%_60%_70%] animate-blob-morph filter blur-md opacity-70 group-hover:opacity-90 group-hover:from-accent group-hover:via-primary transition-all duration-500"></div>
                
                {/* Rotating gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/30 to-primary rounded-[30%_70%_70%_30%/30%_40%_60%_70%] animate-spin-slow opacity-70 group-hover:opacity-100 group-hover:animate-spin-fast"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-[30%_70%_70%_30%/30%_40%_60%_70%] filter blur-xl group-hover:blur-2xl transition-all duration-1000 opacity-50 group-hover:opacity-80 group-hover:bg-accent/30"></div>
                
                {/* Image container */}
                <div className="relative z-10 rounded-[30%_70%_70%_30%/30%_40%_60%_70%] overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-primary/50 p-1 bg-background/80 group-hover:bg-background/90 transform group-hover:scale-105 group-hover:rotate-y-12 group-hover:translate-y-[-5px]">
                  {personalData.image ? (
                    <div className="relative">
                      <img
                        src={personalData.image}
                        alt={`${personalData.name} - ${personalData.title}`}
                        className="w-full aspect-auto object-cover relative z-10 rounded-[28%_68%_68%_28%/28%_38%_58%_68%] transition-all duration-700 group-hover:saturate-150 group-hover:contrast-110 group-hover:brightness-110 group-hover:hue-rotate-15 group-hover:filter"
                      />
                    </div>
                  ) : (
                    <div className="text-center p-12 relative z-10">
                      <span className="text-primary text-lg font-medium">Imagen de perfil</span>
                      <p className="text-foreground-secondary mt-2 text-sm">Agrega tu imagen en personalData.image</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Firma con efecto de desvanecimiento */}
            <div className="mt-6 w-64 md:w-80 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-50 animate-pulse"></div>
              <img 
                src="/images/firma2-min.png"
                alt="Firma personal de Daniel Calin Stanus" 
                loading="lazy"
                decoding="async"
                className="w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Botón flotante de pausa - solo visible cuando el audio está sonando y NO se está haciendo hover */}
      {isClient && isPlaying && !showPlayButton && (
        <button
          onClick={toggleAudio}
          className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 bg-primary text-white dark:text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-200 animate-fadeIn"
          aria-label="Pause epic music"
        >
          <FaPause size={20} />
        </button>
      )}
    </section>
  );
};

export default Hero;