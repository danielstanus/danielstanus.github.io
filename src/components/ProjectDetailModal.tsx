'use client';

import React from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import InnerImageZoom from 'react-inner-image-zoom';
import 'inner-image-zoom/lib/styles.min.css';

interface Project {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
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
  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose} // Close on overlay click
    >
      <div 
        className="bg-background-secondary rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative transform transition-all duration-300 scale-95 opacity-0 animate-modal-appear"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-foreground-secondary hover:text-primary transition-colors z-10"
          aria-label="Close modal"
        >
          <FaTimes size={24} />
        </button>

        {project.imageUrl && (
          <div className="w-full mb-6 rounded-md overflow-hidden aspect-video">
            <InnerImageZoom 
              src={project.imageUrl} 
              zoomSrc={project.imageUrl} // Imagen de alta resolución para el zoom
              zoomType="hover" // Solo zoom al hacer hover
              zoomPreload={false} // Precargar imagen de zoom
              hideHint={true} // Ocultar el ícono (+)
              fadeDuration={150} // Duración de la transición
              fullscreenOnMobile={false} // Desactivar fullscreen en móvil
              className="w-full h-full object-contain" // object-cover para mantener aspecto
            />
          </div>
        )}    
        
        <h2 className="text-3xl font-bold text-primary mb-3">{project.title}</h2>
        
        {project.date && (
          <p className="text-sm text-foreground-secondary mb-1">Fecha: {project.date}</p>
        )}
        {/* Featured badge removed from modal as per request */}

        <p className="text-foreground-secondary mb-6 text-base leading-relaxed">{project.longDescription || project.description}</p>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-foreground mb-2">Tecnologías Utilizadas:</h4>
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
              // className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
            >
              <FaGithub /> Ver en GitHub
            </a>
          )}
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <FaExternalLinkAlt /> Ver Demo
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