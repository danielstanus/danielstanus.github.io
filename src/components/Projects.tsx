'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { projectsData, ProjectItem as Project } from '../data/projectsData';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import ProjectDetailModal from './ProjectDetailModal';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const [projectForModal, setProjectForModal] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<string | null>(null);
  const { language, t } = useLanguage();

  const localizedProjects = projectsData[language] || projectsData['es'];
  
  // Extract unique technologies for filter
  const allTechnologies = Array.from(
    new Set(localizedProjects.flatMap((project: Project) => project.technologies))
  ).sort();

  const filteredProjects = filter 
    ? localizedProjects.filter((project: Project) => 
        project.technologies.includes(filter))
    : localizedProjects;

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
        <h2 className="section-title pb-2 mb-6">{t("projects.title")}</h2>
        
        {/* Technology filter */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-foreground font-medium">{t("projects.filterLabel")}</span>
            <button 
              onClick={() => setFilter(null)}
              className={`badge ${!filter ? 'badge-primary' : 'badge-primary/50'} cursor-pointer`}
            >
              {t("projects.all")}
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
            {t("projects.showing")} {sortedProjects.length} {t("projects.of")} {localizedProjects.length} {t("projects.projectsLabel")}
            {filter && `${t("projects.withTech")}${filter}`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sortedProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              className={`group overflow-hidden transition-all duration-300 rounded-lg hover:shadow-xl ${
                project.featured ? 'border-2 border-primary/30' : 'border border-border'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
            >
              <div 
                className="h-64 relative overflow-hidden bg-background-secondary cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                {project.imageUrl ? (
                  <>
                    <Image
                      src={project.imageUrl}
                      alt={`Captura de pantalla del proyecto ${project.title} - ${project.description}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                  onClick={() => handleProjectClick(project)}
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
                      onClick={() => handleProjectClick(project)}
                      className="flex items-center text-xs text-foreground hover:text-primary transition-colors"
                    >
                      <FaInfoCircle className="mr-1" />
                      {t("projects.moreDetails")}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {sortedProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-foreground">{t("projects.noProjects")}</p>
            <button 
              onClick={() => setFilter(null)}
              className="btn-outline mt-4"
            >
              {t("projects.viewAll")}
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