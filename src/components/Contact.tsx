"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Mail, FileText } from 'lucide-react';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2007/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2007/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-bg relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            title="LET'S BUILD&#10;SOMETHING USEFUL." 
            subtitle="05 // CONTACT" 
          />
        </motion.div>

        <div className="max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-brand-muted mb-12 leading-relaxed font-sans"
          >
            I'm currently looking for new opportunities to learn and contribute to interesting projects. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 mb-16"
          >
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=prem.patel000009@gmail.com" 
              target="_blank" rel="noreferrer"
              className="group flex items-center justify-center gap-3 bg-brand-primary text-brand-surface px-8 py-4 font-bold hover:bg-brand-darkred transition-colors rounded-sm"
            >
              <Mail size={20} className="group-hover:-translate-y-1 transition-transform" />
              <span>Say Hello</span>
            </a>
            <a 
              href="#" 
              className="group flex items-center justify-center gap-3 bg-transparent text-brand-primary border border-brand-border px-8 py-4 font-bold hover:bg-brand-surface hover:border-brand-accent/50 transition-colors rounded-sm"
            >
              <FileText size={20} className="group-hover:-translate-y-1 transition-transform text-brand-muted group-hover:text-brand-accent" />
              <span>View Resume</span>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-6"
          >
            <a 
              href="https://github.com/PremOp009" 
              target="_blank" rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-brand-border rounded-sm text-brand-muted hover:text-brand-primary hover:bg-brand-surface hover:border-brand-accent/50 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/prem-patel-b60411378/" 
              target="_blank" rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-brand-border rounded-sm text-brand-muted hover:text-brand-primary hover:bg-brand-surface hover:border-brand-accent/50 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={24} />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-brand-border py-6">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-brand-muted">
            &copy; {new Date().getFullYear()} PREM PATEL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 font-mono text-xs text-brand-muted">
            <span>STATUS:</span>
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="text-brand-primary">ONLINE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
