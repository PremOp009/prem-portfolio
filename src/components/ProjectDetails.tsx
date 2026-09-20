"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../data/projects';
import { X, ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2007/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-bg/80 backdrop-blur-md p-4 md:p-8 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-brand-primary border-4 border-brand-accent text-brand-surface shadow-[8px_8px_0_0_#111] my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between border-b-4 border-brand-accent px-4 py-3 bg-brand-primary">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-brand-red border-2 border-brand-red"></div>
                <div className="w-4 h-4 bg-brand-highlight border-2 border-brand-highlight"></div>
                <div className="w-4 h-4 bg-brand-accent border-2 border-brand-accent"></div>
              </div>
              <span className="font-mono text-sm font-bold text-brand-accent uppercase tracking-widest hidden md:inline-block">
                $ project --open {project.id}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-brand-accent hover:text-brand-red transition-colors focus:outline-none"
              aria-label="Close details"
            >
              <X size={28} strokeWidth={3} />
            </button>
          </div>

          {/* Modal Content Scrollable Area */}
          <div className="p-6 md:p-10 max-h-[75vh] overflow-y-auto custom-scrollbar">
            
            {/* Overview Section */}
            <div className="mb-12">
              <div className="font-mono text-brand-accent font-bold mb-2 tracking-widest">
                [ PROJECT OVERVIEW ]
              </div>
              <div className="border-l-4 border-brand-accent pl-6 py-2 mb-8">
                <div className="font-mono text-sm text-brand-muted mb-1">NAME:</div>
                <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tighter mb-4">
                  {project.title}
                </h2>
                <div className="font-mono text-sm text-brand-muted mb-1">TYPE:</div>
                <div className="font-mono text-lg text-brand-highlight font-bold mb-4">
                  {project.category}
                </div>
                <div className="font-mono text-sm text-brand-muted mb-1">STATUS:</div>
                <div className="font-mono text-sm text-brand-surface bg-brand-accent/20 px-2 py-1 inline-block border border-brand-accent">
                  BUILT & VERIFIED
                </div>
              </div>
              <p className="text-lg md:text-xl font-sans text-brand-surface/90 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Problem & Contribution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-brand-surface/5 p-6 border-2 border-brand-accent/30">
                <div className="font-mono text-brand-accent font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-accent"></span> THE PROBLEM
                </div>
                <p className="text-brand-surface/80 leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div className="bg-brand-surface/5 p-6 border-2 border-brand-accent/30">
                <div className="font-mono text-brand-accent font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-accent"></span> MY CONTRIBUTION
                </div>
                <p className="text-brand-surface/80 leading-relaxed">
                  {project.myContribution}
                </p>
              </div>
            </div>

            {/* Highlight Feature Banner */}
            <div className="bg-brand-accent text-brand-primary p-6 md:p-8 brutalist-shadow mb-12 border-4 border-brand-primary">
              <div className="font-mono text-xs font-bold tracking-widest mb-2 border-b-2 border-brand-primary pb-2 w-fit">
                &gt; FEATURE_HIGHLIGHT
              </div>
              <h3 className="font-display text-3xl md:text-4xl uppercase tracking-tighter mb-4 mt-4">
                {project.highlightFeature.title}
              </h3>
              <p className="font-mono text-lg font-bold max-w-2xl">
                {project.highlightFeature.description}
              </p>
            </div>

            {/* Key Features & Tech Stack Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="font-mono text-brand-accent font-bold mb-6 tracking-widest">
                  [ KEY FEATURES ]
                </div>
                <ul className="space-y-4">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-brand-surface/90 font-mono text-sm">
                      <span className="text-brand-accent mt-0.5">&gt;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="font-mono text-brand-accent font-bold mb-6 tracking-widest">
                  [ TECHNOLOGY ]
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="font-mono text-xs font-bold px-3 py-2 border-2 border-brand-accent/50 text-brand-highlight hover:bg-brand-accent hover:text-brand-primary transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions Footer */}
            <div className="border-t-4 border-brand-accent/30 pt-8 mt-auto">
              <div className="font-mono text-brand-accent font-bold mb-6 tracking-widest">
                [ ACTIONS ]
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="font-mono font-bold text-sm bg-brand-accent text-brand-primary border-2 border-brand-accent px-6 py-4 uppercase tracking-wider hover:bg-white transition-colors brutalist-shadow-sm flex items-center gap-2"
                  >
                    <ExternalLink size={18} /> OPEN LIVE DEMO
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="font-mono font-bold text-sm bg-brand-surface/10 text-brand-surface border-2 border-brand-surface px-6 py-4 uppercase tracking-wider hover:bg-brand-surface hover:text-brand-primary transition-colors flex items-center gap-2"
                  >
                    <GithubIcon size={18} /> VIEW SOURCE
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="font-mono font-bold text-sm text-brand-red border-2 border-brand-red px-6 py-4 uppercase tracking-wider hover:bg-brand-red hover:text-brand-primary transition-colors ml-auto"
                >
                  CLOSE DETAILS
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
