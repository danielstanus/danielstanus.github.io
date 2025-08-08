'use client';

import React, { useState, useEffect } from 'react';
import { FaChevronUp, FaDownload } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Effect to show/hide scroll button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="border-t border-border py-4">
      <div className="section-container py-3">
        {/* Copyright and CV download link */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground-secondary text-xs mb-3 md:mb-0">
            {currentYear} <span className="text-primary font-medium">Daniel Stanus</span>. Todos los derechos reservados.
          </p>
          
          <a 
            href="pdf/CV_Stanus_DanielCalin.pdf" 
            download 
            className="px-5 py-2 text-sm font-medium rounded-md transition-colors bg-gradient-to-r from-primary to-primary/80 text-white dark:text-primary-foreground hover:from-primary/90 hover:to-primary/70 hover:text-white shadow-sm flex items-center gap-2"
          >
            <FaDownload className="h-4 w-4" />
            Descargar CV
          </a>
        </div>

        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 bg-primary text-white dark:text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary z-50"
            aria-label="Volver arriba"
          >
            <FaChevronUp className="h-5 w-5" />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;