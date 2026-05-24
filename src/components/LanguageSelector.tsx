'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, Language } from '../context/LanguageContext';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ro', name: 'Română', flag: '🇷🇴' }
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
        <FaGlobe className="text-primary w-4 h-4 animate-pulse" />
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
                className={`w-full flex items-center justify-between px-4 py-2 text-sm text-left transition-colors duration-200 cursor-pointer ${
                  language === lang.code
                    ? 'bg-primary/10 text-primary font-bold'
                    : 'text-foreground hover:bg-primary/5 hover:text-primary font-medium'
                }`}
                role="option"
                aria-selected={language === lang.code}
              >
                <span>{lang.name}</span>
                <span className="text-base select-none">{lang.flag}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
