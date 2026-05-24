'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, Language } from '../context/LanguageContext';
import { AnimatePresence, motion } from 'framer-motion';

// Premium self-contained SVG flag components that render perfectly across all platforms (iOS, Android, Windows, macOS)
// and browsers (Edge, Chrome, Firefox, Safari) without depending on native OS emoji support.
const FlagES = () => (
  <svg className="w-5 h-3.5 rounded-sm shadow-sm object-cover border border-white/10" viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
    <rect width="3" height="2" fill="#C1272D"/>
    <rect y="0.5" width="3" height="1" fill="#FCD116"/>
  </svg>
);

const FlagGB = () => (
  <svg className="w-5 h-3.5 rounded-sm shadow-sm object-cover border border-white/10" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
    <rect fill="#012169" width="60" height="30"/>
    <path stroke="#FFF" strokeWidth="6" d="m0 0 60 30M60 0 0 30"/>
    <path stroke="#C8102E" strokeWidth="4" d="m0 0 60 30M60 0 0 30"/>
    <path stroke="#FFF" strokeWidth="10" d="m30 0v30M0 15h60"/>
    <path stroke="#C8102E" strokeWidth="6" d="m30 0v30M0 15h60"/>
  </svg>
);

const FlagRO = () => (
  <svg className="w-5 h-3.5 rounded-sm shadow-sm object-cover border border-white/10" viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
    <rect width="1" height="2" fill="#002B7F"/>
    <rect x="1" width="1" height="2" fill="#FCD116"/>
    <rect x="2" width="1" height="2" fill="#CE1126"/>
  </svg>
);

const flags: Record<Language, React.ReactNode> = {
  es: <FlagES />,
  en: <FlagGB />,
  ro: <FlagRO />,
};

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; name: string }[] = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
    { code: 'ro', name: 'Română' }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background/50 hover:bg-primary/5 hover:border-primary/50 text-foreground transition-all duration-300 text-sm font-semibold select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label="Select Language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="flex items-center justify-center shrink-0">{flags[language]}</span>
        <span className="uppercase text-xs tracking-wider">{language}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-36 rounded-xl border border-border bg-background/95 backdrop-blur-md shadow-lg overflow-hidden z-50 py-1"
            role="listbox"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2 text-sm text-left transition-colors duration-200 cursor-pointer ${language === lang.code
                    ? 'bg-primary/10 text-primary font-bold'
                    : 'text-foreground hover:bg-primary/5 hover:text-primary font-medium'
                  }`}
                role="option"
                aria-selected={language === lang.code}
              >
                <span>{lang.name}</span>
                <span className="flex items-center shrink-0">{flags[lang.code]}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

