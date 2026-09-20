"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { projects, Project } from '../data/projects';
import { ProjectDetails } from './ProjectDetails';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2007/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const ExternalIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2007/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-brand-surface relative border-y-4 border-brand-primary">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#CBD7C122_1px,transparent_1px),linear-gradient(to_bottom,#CBD7C122_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            title="PROJECTS." 
            subtitle="SYS.MODULE: SHOWCASE" 
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-12 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group border-2 border-brand-primary bg-brand-bg relative hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full cursor-pointer"
            >
              {/* Shadow effect */}
              <div className="absolute inset-0 bg-brand-primary translate-x-3 translate-y-3 -z-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-300"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 flex-grow">
                {/* Number & Category */}
                <div className="md:col-span-3 p-6 border-b-2 md:border-b-0 md:border-r-2 border-brand-primary flex flex-col bg-brand-accent/5 group-hover:bg-brand-accent/20 transition-colors">
                  <div className="font-display text-5xl md:text-6xl text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors">
                    [{String(index + 1).padStart(2, '0')}]
                  </div>
                  <div className="font-mono text-xs font-bold text-brand-darkgreen tracking-widest mt-4">
                    // {project.category}
                  </div>
                  
                  {/* Feature Badge */}
                  <div className="mt-auto pt-8">
                    <div className="bg-brand-primary text-brand-accent px-3 py-2 font-mono text-xs font-bold brutalist-shadow-sm border border-brand-primary flex items-center gap-2">
                      <span className="animate-pulse">*</span> {project.featureBadge}
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="md:col-span-9 p-6 md:p-10 flex flex-col h-full">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <h3 className="text-4xl md:text-6xl font-display uppercase tracking-tighter text-brand-primary group-hover:text-brand-accent transition-colors break-words max-w-full">
                      {project.title}
                    </h3>
                    <div className="flex gap-4 border-2 border-brand-primary p-2 bg-brand-surface shrink-0">
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a href={project.githubUrl} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" className="text-brand-primary hover:text-brand-accent transition-colors" aria-label="GitHub Repository">
                          <GithubIcon size={24} />
                        </a>
                      )}
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a href={project.liveUrl} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" className="text-brand-primary hover:text-brand-accent transition-colors" aria-label="Live Demo">
                          <ExternalIcon size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-lg md:text-xl text-brand-muted mb-8 max-w-3xl leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 font-mono text-sm font-bold border border-brand-primary text-brand-primary bg-brand-surface group-hover:bg-brand-primary group-hover:text-brand-surface transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 font-mono text-sm font-bold text-brand-muted">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <button 
                    className="self-start font-mono font-bold text-sm bg-brand-primary text-white brutalist-border brutalist-shadow-sm px-6 py-3 uppercase tracking-wider hover:bg-brand-accent hover:text-brand-primary transition-colors flex items-center gap-2 pointer-events-none"
                  >
                    <span>./VIEW_DETAILS</span>
                    <span className="text-brand-accent group-hover:text-brand-primary">&rarr;</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectDetails 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
