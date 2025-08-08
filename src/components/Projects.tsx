'use client';

import React, { useState } from 'react';
import { projectsData, ProjectItem as Project } from '../data/projectsData'; // Assuming ProjectItem is the correct interface name in projectsData.ts
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import ProjectDetailModal from './ProjectDetailModal'; // Import the modal

// The Project interface is now imported from projectsData.ts as ProjectItem as Project.

const Projects: React.FC = () => {
  const [projectForModal, setProjectForModal] = useState<Project | null>(null); // Renamed and typed
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleProjectClick = (project: Project) => {
    setProjectForModal(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setProjectForModal(null);
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
                className="h-64 relative overflow-hidden bg-background-secondary cursor-pointer"
                onClick={() => handleProjectClick(project)} // Pass the whole project object
              >
                {project.imageUrl ? (
                  <>
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    {/* The overlay might not be as effective with object-contain, consider removing or adjusting if needed */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> 
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-background-secondary">
                    <span className="text-4xl font-bold gradient-text">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Featured badge removed as per request */}

                {/* Date badge if available */}
                {project.date && (
                  <div className="absolute bottom-3 left-3 badge bg-background/80 text-foreground border-background/90">
                    {project.date}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 
                  className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors cursor-pointer"
                  onClick={() => handleProjectClick(project)} // Open modal on title click
                >
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
                      onClick={() => handleProjectClick(project)} // Pass the whole project object
                      className="flex items-center text-xs text-foreground hover:text-primary transition-colors"
                    >
                      <FaInfoCircle className="mr-1" />
                      Más detalles
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

      <ProjectDetailModal 
        project={projectForModal}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Projects;