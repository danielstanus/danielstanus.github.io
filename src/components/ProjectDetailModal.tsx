'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { useLanguage } from '../context/LanguageContext';

interface Project {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  imageUrls?: string[]; // Para múltiples imágenes
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  longDescription?: string;
  featured?: boolean;
  date?: string;
}

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();
  
  const modalRef = useRef<HTMLDivElement>(null);
  const previousUnfocusedElement = useRef<HTMLElement | null>(null);

  // Determinar si usar múltiples imágenes o una sola
  const images = project?.imageUrls && project.imageUrls.length > 0 ? project.imageUrls : (project?.imageUrl ? [project.imageUrl] : []);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (isOpen) {
      // Guardar el elemento previamente enfocado
      if (typeof document !== 'undefined') {
        previousUnfocusedElement.current = document.activeElement as HTMLElement;
      }
      
      // Bloquear scroll de la página de fondo
      document.body.style.overflow = 'hidden';

      // Poner foco en el modal
      setTimeout(() => {
        if (modalRef.current) {
          // Intentar enfocar el botón de cerrar o el contenedor principal
          const closeButton = modalRef.current.querySelector('button[aria-label]');
          if (closeButton) {
            (closeButton as HTMLElement).focus();
          } else {
            modalRef.current.focus();
          }
        }
      }, 50);
    }

    return () => {
      // Restaurar scroll de fondo al desmontarse o cerrarse
      document.body.style.overflow = 'unset';
      
      // Devolver foco al elemento original que abrió el modal
      if (previousUnfocusedElement.current) {
        previousUnfocusedElement.current.focus();
      }
    };
  }, [isOpen]);

  // Manejar eventos de teclado (Escape y Trampa de foco Tab)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Tecla Escape para cerrar
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Trampa de foco (Tab)
      if (e.key === 'Tab') {
        if (!modalRef.current) return;

        // Buscar todos los elementos enfocables del modal
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          // Si pulsa Shift + Tab y está en el primer elemento, salta al último
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          // Si pulsa Tab y está en el último elemento, salta al primero
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Función para formatear el texto con saltos de línea y markdown básico
  const formatDescription = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.trim() === '') {
        return <br key={index} />;
      }
      
      // Detectar líneas que empiezan con emojis y **texto** (títulos de tabs)
      if (line.includes('**') && (line.includes('🔐') || line.includes('📋') || line.includes('📦') || line.includes('📊'))) {
        const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return (
          <p key={index} className="font-semibold text-primary mt-4 mb-2" dangerouslySetInnerHTML={{ __html: formattedLine }} />
        );
      }
      
      return <p key={index} className="mb-2">{line}</p>;
    });
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose} // Close on overlay click
    >
      <div 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        className="bg-background-secondary rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative transform transition-all duration-300 scale-95 opacity-0 animate-modal-appear focus:outline-none"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-foreground-secondary hover:text-primary transition-colors z-10"
          aria-label={t("projects.close")}
        >
          <FaTimes size={24} />
        </button>

        {images.length > 0 && (
          <div className="w-full mb-6 rounded-md overflow-hidden aspect-video relative">
            <InnerImageZoom 
              src={images[currentImageIndex]} 
              zoomSrc={images[currentImageIndex]} // Imagen de alta resolución para el zoom
              zoomType="hover" // Solo zoom al hacer hover
              zoomPreload={false} // Precargar imagen de zoom
              hideHint={true} // Ocultar el ícono (+)
              fadeDuration={150} // Duración de la transición
              fullscreenOnMobile={false} // Desactivar fullscreen en móvil
              className="w-full h-full object-contain" // object-cover para mantener aspecto
            />
            
            {/* Navegación del carrusel - solo mostrar si hay múltiples imágenes */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
                  aria-label={t("projects.prevImage")}
                >
                  <FaChevronLeft size={16} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
                  aria-label={t("projects.nextImage")}
                >
                  <FaChevronRight size={16} />
                </button>
                
                {/* Indicadores de imagen */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-primary scale-125' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={`${t("projects.goToImage")} ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Contador de imágenes */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm z-10">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        )}    
        
        <h2 id="modal-title" className="text-3xl font-bold text-primary mb-3">{project.title}</h2>
        
        {project.date && (
          <p className="text-sm text-foreground-secondary mb-1">{t("projects.dateLabel")} {project.date}</p>
        )}

        <div className="text-foreground-secondary mb-6 text-base leading-relaxed">
          {formatDescription(project.longDescription || project.description)}
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-foreground mb-2">{t("projects.techUsed")}</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="badge badge-primary/80 text-sm">{tech}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-border">
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
               className="btn-outline inline-flex items-center gap-2"
            >
              <FaGithub /> {t("projects.code")}
            </a>
          )}
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <FaExternalLinkAlt /> {t("projects.viewDemo")}
            </a>
          )}
        </div>
      </div>
      {/* Basic animation style - can be moved to globals.css */}
      <style jsx global>{`
        @keyframes modal-appear {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-modal-appear {
          animation: modal-appear 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetailModal;