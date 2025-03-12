'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: "home", title: "Inicio" },
    { id: "about", title: "Sobre mí" },
    { id: "experience", title: "Experiencia" },
    { id: "skills", title: "Habilidades" },
    { id: "education", title: "Formación" },
    { id: "projects", title: "Proyectos" }
    // { id: "contact", title: "Contacto" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Detectar sección activa
      const sections = navLinks.map(link => link.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navLinks]);

  return (
    <header className="fixed w-full z-50 bg-background/80 backdrop-blur-sm shadow-md py-3 border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              to="home" 
              smooth 
              duration={500} 
              className="text-xl font-bold text-primary hover:text-primary/90 transition-colors cursor-pointer"
            >
              Daniel Stanus
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth
                duration={500}
                offset={-70}
                className={`px-2 py-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                  activeSection === link.id 
                    ? 'bg-primary/10 text-primary font-semibold' 
                    : 'text-foreground hover:text-primary hover:bg-primary/5 font-medium'
                }`}
              >
                {link.title}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background/90 backdrop-blur-sm border-t border-border">
          <div className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth
                duration={500}
                offset={-70}
                className={`px-2 py-2 rounded-lg transition-colors duration-200 text-lg cursor-pointer ${
                  activeSection === link.id 
                    ? 'bg-primary/10 text-primary font-semibold' 
                    : 'text-foreground hover:text-primary hover:bg-primary/5 font-medium'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;