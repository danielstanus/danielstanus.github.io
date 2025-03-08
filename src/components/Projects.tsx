'use client';

import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

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

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | number | null>(null);
  const [filter, setFilter] = useState<string | null>(null);
  
  // Extract unique technologies for filter
  const allTechnologies = Array.from(
    new Set(projectsData.flatMap((project: Project) => project.technologies))
  ).sort();

  const filteredProjects = filter 
    ? projectsData.filter((project: Project) => 
        project.technologies.includes(filter))
    : projectsData;

  const featuredProjects = filteredProjects.filter((project: Project) => project.featured);
  const regularProjects = filteredProjects.filter((project: Project) => !project.featured);

  // Combined projects with featured first
  const sortedProjects = [...featuredProjects, ...regularProjects];

  const handleProjectClick = (id: string | number) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title pb-2 mb-6">Proyectos</h2>
        
        {/* Technology filter */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-foreground font-medium">Filtrar por tecnología:</span>
            <button 
              onClick={() => setFilter(null)}
              className={`badge ${!filter ? 'badge-primary' : 'badge-primary/50'} cursor-pointer`}
            >
              Todos
            </button>
            {allTechnologies.map(tech => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`badge ${filter === tech ? 'badge-primary' : 'badge-primary/50'} cursor-pointer`}
              >
                {tech}
              </button>
            ))}
          </div>
          <p className="text-sm text-foreground">
            Mostrando {sortedProjects.length} de {projectsData.length} proyectos
            {filter && ` con tecnología: ${filter}`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sortedProjects.map((project: Project) => (
            <div 
              key={project.id} 
              className={`group overflow-hidden transition-all duration-300 rounded-lg hover:shadow-xl ${
                project.featured ? 'border-2 border-primary/30' : 'border border-border'
              }`}
            >
              <div 
                className="h-52 relative overflow-hidden bg-background-secondary"
                onClick={() => handleProjectClick(project.id)}
              >
                {project.imageUrl ? (
                  <>
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-background-secondary">
                    <span className="text-4xl font-bold gradient-text">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 badge badge-primary">
                    Destacado
                  </div>
                )}

                {/* Date badge if available */}
                {project.date && (
                  <div className="absolute bottom-3 left-3 badge bg-background/80 text-foreground border-background/90">
                    {project.date}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="badge badge-primary text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFilter(tech);
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expanded description */}
                {project.longDescription && (
                  <div 
                    className={`overflow-hidden transition-all duration-300 mb-4 ${
                      activeProject === project.id ? 'max-h-48' : 'max-h-0'
                    }`}
                  >
                    <p className="text-foreground text-sm">{project.longDescription}</p>
                  </div>
                )}

                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-4">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <FaGithub size={22} />
                      </a>
                    )}
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                  </div>
                  
                  {project.longDescription && (
                    <button 
                      onClick={() => handleProjectClick(project.id)}
                      className="flex items-center text-xs text-foreground hover:text-primary transition-colors"
                    >
                      <FaInfoCircle className="mr-1" />
                      {activeProject === project.id ? 'Menos info' : 'Más info'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-foreground">No se encontraron proyectos con el filtro seleccionado.</p>
            <button 
              onClick={() => setFilter(null)}
              className="btn-outline mt-4"
            >
              Ver todos los proyectos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;